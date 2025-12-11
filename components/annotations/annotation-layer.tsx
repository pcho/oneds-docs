'use client';

import { useEffect, useRef } from 'react';
import { useAnnotations } from './annotation-provider';

export function AnnotationLayer() {
  const { annotations, selectedAnnotation, setSelectedAnnotation, setPendingSelection } = useAnnotations();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) return;

      const text = selection.toString().trim();
      if (!text || text.length < 3) return;

      const range = selection.getRangeAt(0);
      const container = containerRef.current;

      if (!container || !container.contains(range.commonAncestorContainer)) return;

      // Calculate text offset within the content
      const preRange = document.createRange();
      preRange.selectNodeContents(container);
      preRange.setEnd(range.startContainer, range.startOffset);
      const start = preRange.toString().length;
      const end = start + text.length;

      setPendingSelection({ start, end, text });
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, [setPendingSelection]);

  // Highlight annotations in the content
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Remove existing highlights
    container.querySelectorAll('.annotation-highlight').forEach((el) => {
      const parent = el.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ''), el);
        parent.normalize();
      }
    });

    // Add new highlights
    annotations.forEach((annotation) => {
      if (annotation.resolved) return;

      try {
        highlightText(container, annotation.selected_text, annotation.author_color, annotation.id);
      } catch (e) {
        console.warn('Could not highlight annotation:', annotation.id, e);
      }
    });
  }, [annotations]);

  // Scroll to selected annotation
  useEffect(() => {
    if (!selectedAnnotation) return;

    const highlight = document.querySelector(`[data-annotation-id="${selectedAnnotation.id}"]`);
    if (highlight) {
      highlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedAnnotation]);

  return (
    <div ref={containerRef} className="annotation-container">
      <style jsx global>{`
        .annotation-highlight {
          background-color: var(--highlight-color, rgba(59, 130, 246, 0.3));
          cursor: pointer;
          border-radius: 2px;
          transition: background-color 0.2s;
        }
        .annotation-highlight:hover {
          background-color: var(--highlight-color-hover, rgba(59, 130, 246, 0.5));
        }
        .annotation-highlight.selected {
          background-color: var(--highlight-color-hover, rgba(59, 130, 246, 0.5));
          outline: 2px solid var(--highlight-color, rgba(59, 130, 246, 0.8));
          outline-offset: 1px;
        }
      `}</style>
    </div>
  );
}

function highlightText(container: HTMLElement, text: string, color: string, annotationId: string) {
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);

  let node: Node | null;
  while ((node = walker.nextNode())) {
    const textContent = node.textContent || '';
    const index = textContent.indexOf(text);

    if (index !== -1) {
      const range = document.createRange();
      range.setStart(node, index);
      range.setEnd(node, index + text.length);

      const highlight = document.createElement('mark');
      highlight.className = 'annotation-highlight';
      highlight.dataset.annotationId = annotationId;
      highlight.style.setProperty('--highlight-color', `${color}40`);
      highlight.style.setProperty('--highlight-color-hover', `${color}80`);

      try {
        range.surroundContents(highlight);
      } catch {
        // Range crosses element boundaries, skip
      }
      break;
    }
  }
}
