'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';
import { AnnotationProvider, useAnnotations } from './annotation-provider';
import type { Annotation } from '@/lib/db';

function AnnotationContent({ children }: { children: ReactNode }) {
  const { annotations, selectedAnnotation, setSelectedAnnotation, setPendingSelection, pendingSelection, addAnnotation, updateAnnotation, deleteAnnotation } = useAnnotations();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('Designer');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editComment, setEditComment] = useState('');

  const TEAM_MEMBERS = [
    { name: 'Designer', color: '#3b82f6' },
    { name: 'Developer', color: '#10b981' },
    { name: 'PM', color: '#f59e0b' },
    { name: 'QA', color: '#ef4444' },
  ];

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) return;

      const text = selection.toString().trim();
      if (!text || text.length < 3) return;

      const range = selection.getRangeAt(0);
      const container = containerRef.current;

      if (!container || !container.contains(range.commonAncestorContainer)) return;

      const preRange = document.createRange();
      preRange.selectNodeContents(container);
      preRange.setEnd(range.startContainer, range.startOffset);
      const start = preRange.toString().length;
      const end = start + text.length;

      setPendingSelection({ start, end, text });
      setIsExpanded(true);
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, [setPendingSelection]);

  // Highlight annotations
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.querySelectorAll('.annotation-highlight').forEach((el) => {
      const parent = el.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ''), el);
        parent.normalize();
      }
    });

    annotations.forEach((annotation) => {
      if (annotation.resolved) return;
      highlightText(container, annotation.selected_text, annotation.author_color, annotation.id, selectedAnnotation?.id === annotation.id);
    });
  }, [annotations, selectedAnnotation]);

  const handleSubmit = async () => {
    if (!comment.trim() || !pendingSelection) return;
    const member = TEAM_MEMBERS.find((m) => m.name === author) || TEAM_MEMBERS[0];

    await addAnnotation({
      page_path: '',
      selection_start: pendingSelection.start,
      selection_end: pendingSelection.end,
      selected_text: pendingSelection.text,
      comment: comment.trim(),
      author,
      author_color: member.color,
    });

    setComment('');
    setPendingSelection(null);
  };

  const handleSaveEdit = async (id: string) => {
    await updateAnnotation(id, { comment: editComment });
    setEditingId(null);
    setEditComment('');
  };

  const activeAnnotations = annotations.filter((a) => !a.resolved);
  const hasContent = activeAnnotations.length > 0 || pendingSelection;

  return (
    <div className="relative">
      <div ref={containerRef}>
        {children}
      </div>

      {/* Floating Bottom Bar */}
      {hasContent && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-fd-popover/95 backdrop-blur-sm border-t border-fd-border shadow-lg">
          {/* Collapsed bar */}
          {!isExpanded ? (
            <button
              onClick={() => setIsExpanded(true)}
              className="w-full px-4 py-2 flex items-center justify-between hover:bg-fd-accent/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1">
                  {activeAnnotations.slice(0, 5).map((a) => (
                    <div
                      key={a.id}
                      className="w-6 h-6 rounded-full border-2 border-fd-popover flex items-center justify-center text-[10px] font-medium text-white"
                      style={{ backgroundColor: a.author_color }}
                    >
                      {a.author[0]}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-fd-muted-foreground">
                  {activeAnnotations.length} comment{activeAnnotations.length !== 1 ? 's' : ''}
                </span>
              </div>
              <svg className="w-4 h-4 text-fd-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          ) : (
            <div className="max-h-[280px] flex flex-col">
              {/* Header */}
              <div className="px-4 py-2 border-b border-fd-border flex items-center justify-between shrink-0">
                <span className="text-sm font-medium">
                  Comments ({activeAnnotations.length})
                </span>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1 hover:bg-fd-accent rounded"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Horizontal scroll area */}
              <div className="flex-1 overflow-x-auto overflow-y-hidden">
                <div className="flex gap-3 p-3 min-w-max">
                  {/* New comment card */}
                  {pendingSelection && (
                    <div className="w-72 shrink-0 bg-fd-card border border-fd-primary/50 rounded-lg p-3 shadow-sm">
                      <div className="text-xs text-fd-muted-foreground mb-2 truncate italic">
                        &quot;{pendingSelection.text.slice(0, 40)}{pendingSelection.text.length > 40 ? '...' : ''}&quot;
                      </div>
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add your comment..."
                        className="w-full p-2 text-sm bg-fd-background border border-fd-border rounded resize-none focus:outline-none focus:ring-1 focus:ring-fd-ring"
                        rows={2}
                        autoFocus
                      />
                      <div className="flex items-center gap-2 mt-2">
                        <select
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                          className="flex-1 p-1.5 text-xs bg-fd-background border border-fd-border rounded"
                        >
                          {TEAM_MEMBERS.map((m) => (
                            <option key={m.name} value={m.name}>{m.name}</option>
                          ))}
                        </select>
                        <button
                          onClick={() => { setPendingSelection(null); setComment(''); }}
                          className="px-2 py-1 text-xs border border-fd-border rounded hover:bg-fd-accent"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSubmit}
                          disabled={!comment.trim()}
                          className="px-2 py-1 text-xs bg-fd-primary text-fd-primary-foreground rounded disabled:opacity-50"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Existing comments */}
                  {activeAnnotations.map((annotation) => (
                    <div
                      key={annotation.id}
                      onClick={() => setSelectedAnnotation(annotation)}
                      className={`w-64 shrink-0 bg-fd-card border rounded-lg p-3 cursor-pointer transition-all hover:shadow-md ${
                        selectedAnnotation?.id === annotation.id ? 'border-fd-primary shadow-md' : 'border-fd-border'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium text-white"
                          style={{ backgroundColor: annotation.author_color }}
                        >
                          {annotation.author[0]}
                        </div>
                        <span className="text-xs font-medium">{annotation.author}</span>
                        <span className="text-[10px] text-fd-muted-foreground ml-auto">
                          {new Date(annotation.created_at).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="text-[11px] text-fd-muted-foreground mb-1 truncate italic">
                        &quot;{annotation.selected_text.slice(0, 30)}{annotation.selected_text.length > 30 ? '...' : ''}&quot;
                      </div>

                      {editingId === annotation.id ? (
                        <div className="space-y-2">
                          <textarea
                            value={editComment}
                            onChange={(e) => setEditComment(e.target.value)}
                            className="w-full p-1.5 text-xs bg-fd-background border border-fd-border rounded resize-none"
                            rows={2}
                            onClick={(e) => e.stopPropagation()}
                          />
                          <div className="flex gap-1">
                            <button
                              onClick={(e) => { e.stopPropagation(); setEditingId(null); }}
                              className="px-2 py-0.5 text-[10px] border border-fd-border rounded"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={(e) => { e.stopPropagation(); handleSaveEdit(annotation.id); }}
                              className="px-2 py-0.5 text-[10px] bg-fd-primary text-fd-primary-foreground rounded"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <p className="text-sm line-clamp-2">{annotation.comment}</p>
                          <div className="flex gap-2 mt-2 pt-2 border-t border-fd-border">
                            <button
                              onClick={(e) => { e.stopPropagation(); setEditingId(annotation.id); setEditComment(annotation.comment); }}
                              className="text-[10px] text-fd-muted-foreground hover:text-fd-foreground"
                            >
                              Edit
                            </button>
                            <button
                              onClick={(e) => { e.stopPropagation(); updateAnnotation(annotation.id, { resolved: true }); }}
                              className="text-[10px] text-fd-muted-foreground hover:text-fd-foreground"
                            >
                              Resolve
                            </button>
                            <button
                              onClick={(e) => { e.stopPropagation(); deleteAnnotation(annotation.id); }}
                              className="text-[10px] text-red-500 hover:text-red-600 ml-auto"
                            >
                              Delete
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}

                  {activeAnnotations.length === 0 && !pendingSelection && (
                    <div className="text-sm text-fd-muted-foreground py-4 px-2">
                      Select text to add a comment
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Bottom padding to account for floating bar */}
      {hasContent && <div className="h-16" />}
    </div>
  );
}

function highlightText(container: HTMLElement, text: string, color: string, annotationId: string, isSelected: boolean) {
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
      highlight.style.backgroundColor = `${color}40`;
      highlight.style.cursor = 'pointer';
      highlight.style.borderRadius = '2px';
      highlight.style.transition = 'background-color 0.2s';

      if (isSelected) {
        highlight.style.backgroundColor = `${color}60`;
        highlight.style.outline = `2px solid ${color}`;
        highlight.style.outlineOffset = '1px';
      }

      try {
        range.surroundContents(highlight);
      } catch {
        // Range crosses element boundaries
      }
      break;
    }
  }
}

export function AnnotationWrapper({ children, pagePath }: { children: ReactNode; pagePath: string }) {
  return (
    <AnnotationProvider pagePath={pagePath}>
      <AnnotationContent>{children}</AnnotationContent>
    </AnnotationProvider>
  );
}
