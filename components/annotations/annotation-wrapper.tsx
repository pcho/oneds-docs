'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';
import { AnnotationProvider, useAnnotations } from './annotation-provider';
import type { Annotation } from '@/lib/db';

const TEAM_MEMBERS = [
  { name: 'Karine', color: '#8b5cf6' },   // Purple
  { name: 'Prem', color: '#06b6d4' },     // Cyan
  { name: 'Viki', color: '#f97316' },     // Orange
  { name: 'Leticia', color: '#ec4899' },  // Pink
  { name: 'Bruno', color: '#22c55e' },    // Green
  { name: 'Sofia', color: '#3b82f6' },    // Blue
  { name: 'Goncalo', color: '#eab308' },  // Yellow
];

// Recursive component for rendering threaded replies
function ThreadedReplies({
  parentId,
  depth,
  getReplies,
  selectedAnnotation,
  setSelectedAnnotation,
  editingId,
  setEditingId,
  editComment,
  setEditComment,
  handleSaveEdit,
  updateAnnotation,
  deleteAnnotation,
  replyingTo,
  setReplyingTo,
}: {
  parentId: string;
  depth: number;
  getReplies: (id: string) => Annotation[];
  selectedAnnotation: Annotation | null;
  setSelectedAnnotation: (a: Annotation | null) => void;
  editingId: string | null;
  setEditingId: (id: string | null) => void;
  editComment: string;
  setEditComment: (c: string) => void;
  handleSaveEdit: (id: string) => void;
  updateAnnotation: (id: string, data: { comment?: string; resolved?: boolean }) => Promise<void>;
  deleteAnnotation: (id: string) => Promise<void>;
  replyingTo: Annotation | null;
  setReplyingTo: (a: Annotation | null) => void;
}) {
  const replies = getReplies(parentId).filter(r => !r.resolved);

  if (replies.length === 0) return null;

  return (
    <div className={`mt-2 space-y-2 ${depth > 0 ? 'ml-4 pl-3 border-l-2 border-fd-border' : ''}`}>
      {replies.map((reply) => (
        <div key={reply.id}>
          <div
            onClick={() => setSelectedAnnotation(reply)}
            className={`bg-fd-card/50 border rounded-lg p-2 cursor-pointer transition-all hover:shadow-sm ${
              selectedAnnotation?.id === reply.id ? 'border-fd-primary shadow-sm' : 'border-fd-border/50'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-medium text-white"
                style={{ backgroundColor: reply.author_color }}
              >
                {reply.author[0]}
              </div>
              <span className="text-[10px] font-medium">{reply.author}</span>
              <span className="text-[9px] text-fd-muted-foreground ml-auto">
                {new Date(reply.created_at).toLocaleDateString()}
              </span>
            </div>

            {editingId === reply.id ? (
              <div className="space-y-1">
                <textarea
                  value={editComment}
                  onChange={(e) => setEditComment(e.target.value)}
                  className="w-full p-1 text-[11px] bg-fd-background border border-fd-border rounded resize-none"
                  rows={2}
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="flex gap-1">
                  <button
                    onClick={(e) => { e.stopPropagation(); setEditingId(null); }}
                    className="px-1.5 py-0.5 text-[9px] border border-fd-border rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleSaveEdit(reply.id); }}
                    className="px-1.5 py-0.5 text-[9px] bg-fd-primary text-fd-primary-foreground rounded"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-xs line-clamp-2">{reply.comment}</p>
                <div className="flex gap-2 mt-1 pt-1 border-t border-fd-border/50">
                  <button
                    onClick={(e) => { e.stopPropagation(); setEditingId(reply.id); setEditComment(reply.comment); }}
                    className="text-[9px] text-fd-muted-foreground hover:text-fd-foreground"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setReplyingTo(reply); }}
                    className="text-[9px] text-fd-muted-foreground hover:text-fd-foreground"
                  >
                    Reply
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); deleteAnnotation(reply.id); }}
                    className="text-[9px] text-red-500 hover:text-red-600 ml-auto"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Recursive nested replies */}
          <ThreadedReplies
            parentId={reply.id}
            depth={depth + 1}
            getReplies={getReplies}
            selectedAnnotation={selectedAnnotation}
            setSelectedAnnotation={setSelectedAnnotation}
            editingId={editingId}
            setEditingId={setEditingId}
            editComment={editComment}
            setEditComment={setEditComment}
            handleSaveEdit={handleSaveEdit}
            updateAnnotation={updateAnnotation}
            deleteAnnotation={deleteAnnotation}
            replyingTo={replyingTo}
            setReplyingTo={setReplyingTo}
          />
        </div>
      ))}
    </div>
  );
}

function AnnotationContent({ children }: { children: ReactNode }) {
  const {
    annotations,
    selectedAnnotation,
    setSelectedAnnotation,
    setPendingSelection,
    pendingSelection,
    addAnnotation,
    updateAnnotation,
    deleteAnnotation,
    replyingTo,
    setReplyingTo,
    getReplies,
    getRootAnnotations,
  } = useAnnotations();

  const containerRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('Karine');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editComment, setEditComment] = useState('');
  const [replyComment, setReplyComment] = useState('');
  const [replyAuthor, setReplyAuthor] = useState('Karine');

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
      setReplyingTo(null); // Clear reply mode when selecting new text
      setIsExpanded(true);
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, [setPendingSelection, setReplyingTo]);

  // Highlight annotations (only root annotations, not replies)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear old highlights properly
    const existingHighlights = container.querySelectorAll('.annotation-highlight');
    existingHighlights.forEach((el) => {
      const parent = el.parentNode;
      if (parent) {
        while (el.firstChild) {
          parent.insertBefore(el.firstChild, el);
        }
        parent.removeChild(el);
      }
    });
    container.normalize();

    // Only highlight root annotations (not replies)
    const rootAnnotations = getRootAnnotations();
    const sortedAnnotations = [...rootAnnotations]
      .filter(a => !a.resolved)
      .sort((a, b) => b.selection_start - a.selection_start);

    sortedAnnotations.forEach((annotation) => {
      highlightText(
        container,
        annotation.selected_text,
        annotation.author_color,
        annotation.id,
        selectedAnnotation?.id === annotation.id,
        annotation.selection_start,
        annotation.selection_end
      );
    });
  }, [annotations, selectedAnnotation, getRootAnnotations]);

  // Handle clicks on highlighted text to open that comment
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleHighlightClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('annotation-highlight')) {
        const annotationId = target.dataset.annotationId;
        if (annotationId) {
          const annotation = annotations.find(a => a.id === annotationId);
          if (annotation) {
            e.preventDefault();
            e.stopPropagation();
            setSelectedAnnotation(annotation);
            setIsExpanded(true);
            // Clear any text selection that might have been made
            window.getSelection()?.removeAllRanges();
          }
        }
      }
    };

    container.addEventListener('click', handleHighlightClick);
    return () => container.removeEventListener('click', handleHighlightClick);
  }, [annotations, setSelectedAnnotation]);

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
      parent_id: null,
    });

    setComment('');
    setPendingSelection(null);
  };

  const handleReplySubmit = async () => {
    if (!replyComment.trim() || !replyingTo) return;
    const member = TEAM_MEMBERS.find((m) => m.name === replyAuthor) || TEAM_MEMBERS[0];

    await addAnnotation({
      page_path: '',
      selection_start: replyingTo.selection_start,
      selection_end: replyingTo.selection_end,
      selected_text: replyingTo.selected_text,
      comment: replyComment.trim(),
      author: replyAuthor,
      author_color: member.color,
      parent_id: replyingTo.id,
    });

    setReplyComment('');
    setReplyingTo(null);
  };

  const handleSaveEdit = async (id: string) => {
    await updateAnnotation(id, { comment: editComment });
    setEditingId(null);
    setEditComment('');
  };

  // Count all active annotations (including replies)
  const activeAnnotations = annotations.filter((a) => !a.resolved);
  const rootAnnotations = getRootAnnotations().filter(a => !a.resolved);
  const hasContent = activeAnnotations.length > 0 || pendingSelection || replyingTo;

  // Count total replies for a root annotation
  const countAllReplies = (parentId: string): number => {
    const directReplies = getReplies(parentId);
    return directReplies.reduce((count, reply) => count + 1 + countAllReplies(reply.id), 0);
  };

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
            <div className="max-h-[350px] flex flex-col">
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
                  {/* Reply input card */}
                  {replyingTo && (
                    <div className="w-72 shrink-0 bg-fd-card border border-fd-primary/50 rounded-lg p-3 shadow-sm">
                      <div className="text-xs text-fd-muted-foreground mb-1">
                        Replying to <span className="font-medium">{replyingTo.author}</span>
                      </div>
                      <div className="text-[11px] text-fd-muted-foreground mb-2 truncate italic">
                        &quot;{replyingTo.comment.slice(0, 40)}{replyingTo.comment.length > 40 ? '...' : ''}&quot;
                      </div>
                      <textarea
                        value={replyComment}
                        onChange={(e) => setReplyComment(e.target.value)}
                        placeholder="Write your reply..."
                        className="w-full p-2 text-sm bg-fd-background border border-fd-border rounded resize-none focus:outline-none focus:ring-1 focus:ring-fd-ring"
                        rows={2}
                        autoFocus
                      />
                      <div className="flex items-center gap-2 mt-2">
                        <select
                          value={replyAuthor}
                          onChange={(e) => setReplyAuthor(e.target.value)}
                          className="flex-1 p-1.5 text-xs bg-fd-background border border-fd-border rounded"
                        >
                          {TEAM_MEMBERS.map((m) => (
                            <option key={m.name} value={m.name}>{m.name}</option>
                          ))}
                        </select>
                        <button
                          onClick={() => { setReplyingTo(null); setReplyComment(''); }}
                          className="px-2 py-1 text-xs border border-fd-border rounded hover:bg-fd-accent"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleReplySubmit}
                          disabled={!replyComment.trim()}
                          className="px-2 py-1 text-xs bg-fd-primary text-fd-primary-foreground rounded disabled:opacity-50"
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  )}

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

                  {/* Existing root comments with threaded replies */}
                  {rootAnnotations.map((annotation) => {
                    const replyCount = countAllReplies(annotation.id);

                    return (
                      <div
                        key={annotation.id}
                        className="w-72 shrink-0 bg-fd-card border rounded-lg p-3 max-h-[280px] overflow-y-auto"
                        style={{ borderColor: selectedAnnotation?.id === annotation.id ? 'var(--fd-primary)' : undefined }}
                      >
                        {/* Root comment */}
                        <div
                          onClick={() => setSelectedAnnotation(annotation)}
                          className={`cursor-pointer transition-all ${
                            selectedAnnotation?.id === annotation.id ? 'shadow-sm' : ''
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
                              <p className="text-sm">{annotation.comment}</p>
                              <div className="flex gap-2 mt-2 pt-2 border-t border-fd-border">
                                <button
                                  onClick={(e) => { e.stopPropagation(); setEditingId(annotation.id); setEditComment(annotation.comment); }}
                                  className="text-[10px] text-fd-muted-foreground hover:text-fd-foreground"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={(e) => { e.stopPropagation(); setReplyingTo(annotation); setPendingSelection(null); }}
                                  className="text-[10px] text-fd-muted-foreground hover:text-fd-foreground"
                                >
                                  Reply {replyCount > 0 && `(${replyCount})`}
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

                        {/* Threaded replies */}
                        <ThreadedReplies
                          parentId={annotation.id}
                          depth={0}
                          getReplies={getReplies}
                          selectedAnnotation={selectedAnnotation}
                          setSelectedAnnotation={setSelectedAnnotation}
                          editingId={editingId}
                          setEditingId={setEditingId}
                          editComment={editComment}
                          setEditComment={setEditComment}
                          handleSaveEdit={handleSaveEdit}
                          updateAnnotation={updateAnnotation}
                          deleteAnnotation={deleteAnnotation}
                          replyingTo={replyingTo}
                          setReplyingTo={setReplyingTo}
                        />
                      </div>
                    );
                  })}

                  {rootAnnotations.length === 0 && !pendingSelection && !replyingTo && (
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

function createHighlightElement(annotationId: string, isSelected: boolean, color: string) {
  const highlight = document.createElement('mark');
  highlight.className = `annotation-highlight ${isSelected ? 'annotation-highlight-selected' : ''}`;
  highlight.dataset.annotationId = annotationId;
  highlight.style.setProperty('--highlight-color', color);
  highlight.style.display = 'inline';
  highlight.style.cursor = 'pointer';
  highlight.style.borderRadius = '2px';
  highlight.style.padding = '0 2px';
  if (isSelected) {
    highlight.style.outline = `2px solid ${color}`;
    highlight.style.outlineOffset = '1px';
  }
  return highlight;
}

function highlightText(
  container: HTMLElement,
  text: string,
  color: string,
  annotationId: string,
  isSelected: boolean,
  selectionStart: number,
  selectionEnd: number
) {
  const textNodes: { node: Text; start: number; end: number }[] = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
  let offset = 0;
  let currentNode: Text | null;

  while ((currentNode = walker.nextNode() as Text | null)) {
    const length = currentNode.textContent?.length || 0;
    if (length > 0) {
      textNodes.push({ node: currentNode, start: offset, end: offset + length });
      offset += length;
    }
  }

  const overlappingNodes = textNodes.filter(
    n => n.end > selectionStart && n.start < selectionEnd
  );

  if (overlappingNodes.length === 0) {
    for (const { node } of textNodes) {
      const content = node.textContent || '';
      const idx = content.indexOf(text);
      if (idx !== -1 && node.parentNode) {
        if (node.parentNode instanceof HTMLElement &&
            node.parentNode.classList.contains('annotation-highlight')) {
          continue;
        }
        const range = document.createRange();
        range.setStart(node, idx);
        range.setEnd(node, idx + text.length);
        const highlight = createHighlightElement(annotationId, isSelected, color);
        try {
          range.surroundContents(highlight);
          return;
        } catch { continue; }
      }
    }
    return;
  }

  for (const { node, start } of overlappingNodes) {
    if (!node.parentNode) continue;
    if (node.parentNode instanceof HTMLElement &&
        node.parentNode.classList.contains('annotation-highlight')) {
      continue;
    }

    const nodeStart = Math.max(0, selectionStart - start);
    const nodeEnd = Math.min(node.textContent?.length || 0, selectionEnd - start);

    if (nodeEnd <= nodeStart) continue;

    // Skip nodes that are only whitespace/newlines
    const textToHighlight = node.textContent?.slice(nodeStart, nodeEnd) || '';
    if (!textToHighlight.trim()) continue;

    const range = document.createRange();
    range.setStart(node, nodeStart);
    range.setEnd(node, nodeEnd);

    const highlight = createHighlightElement(annotationId, isSelected, color);
    try {
      range.surroundContents(highlight);
    } catch {
      // Skip if surroundContents fails
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
