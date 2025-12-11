'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import type { Annotation } from '@/lib/db';

type AnnotationContextType = {
  annotations: Annotation[];
  loading: boolean;
  addAnnotation: (data: Omit<Annotation, 'id' | 'created_at' | 'resolved'>) => Promise<void>;
  updateAnnotation: (id: string, data: { comment?: string; resolved?: boolean }) => Promise<void>;
  deleteAnnotation: (id: string) => Promise<void>;
  selectedAnnotation: Annotation | null;
  setSelectedAnnotation: (annotation: Annotation | null) => void;
  pendingSelection: { start: number; end: number; text: string } | null;
  setPendingSelection: (selection: { start: number; end: number; text: string } | null) => void;
};

const AnnotationContext = createContext<AnnotationContextType | null>(null);

export function useAnnotations() {
  const context = useContext(AnnotationContext);
  if (!context) {
    throw new Error('useAnnotations must be used within AnnotationProvider');
  }
  return context;
}

export function AnnotationProvider({
  children,
  pagePath,
}: {
  children: ReactNode;
  pagePath: string;
}) {
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnnotation, setSelectedAnnotation] = useState<Annotation | null>(null);
  const [pendingSelection, setPendingSelection] = useState<{ start: number; end: number; text: string } | null>(null);

  const fetchAnnotations = useCallback(async () => {
    try {
      const res = await fetch(`/api/annotations?path=${encodeURIComponent(pagePath)}`);
      const data = await res.json();
      setAnnotations(data);
    } catch (error) {
      console.error('Failed to fetch annotations:', error);
    } finally {
      setLoading(false);
    }
  }, [pagePath]);

  useEffect(() => {
    fetchAnnotations();
  }, [fetchAnnotations]);

  const addAnnotation = async (data: Omit<Annotation, 'id' | 'created_at' | 'resolved'>) => {
    const res = await fetch('/api/annotations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, page_path: pagePath }),
    });
    const newAnnotation = await res.json();
    setAnnotations((prev) => [newAnnotation, ...prev]);
    setPendingSelection(null);
  };

  const updateAnnotation = async (id: string, data: { comment?: string; resolved?: boolean }) => {
    await fetch(`/api/annotations/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    setAnnotations((prev) =>
      prev.map((a) => (a.id === id ? { ...a, ...data, resolved: data.resolved ? 1 : 0 } : a))
    );
  };

  const deleteAnnotation = async (id: string) => {
    await fetch(`/api/annotations/${id}`, { method: 'DELETE' });
    setAnnotations((prev) => prev.filter((a) => a.id !== id));
    if (selectedAnnotation?.id === id) {
      setSelectedAnnotation(null);
    }
  };

  return (
    <AnnotationContext.Provider
      value={{
        annotations,
        loading,
        addAnnotation,
        updateAnnotation,
        deleteAnnotation,
        selectedAnnotation,
        setSelectedAnnotation,
        pendingSelection,
        setPendingSelection,
      }}
    >
      {children}
    </AnnotationContext.Provider>
  );
}
