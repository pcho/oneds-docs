'use client';

import { useState } from 'react';
import { useAnnotations } from './annotation-provider';

export function AnnotationSidebar() {
  const { annotations, loading, selectedAnnotation, setSelectedAnnotation, updateAnnotation, deleteAnnotation } =
    useAnnotations();
  const [filter, setFilter] = useState<'all' | 'active' | 'resolved'>('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editComment, setEditComment] = useState('');

  const filteredAnnotations = annotations.filter((a) => {
    if (filter === 'active') return !a.resolved;
    if (filter === 'resolved') return a.resolved;
    return true;
  });

  const handleEdit = (id: string, currentComment: string) => {
    setEditingId(id);
    setEditComment(currentComment);
  };

  const handleSaveEdit = async (id: string) => {
    await updateAnnotation(id, { comment: editComment });
    setEditingId(null);
    setEditComment('');
  };

  const handleResolve = async (id: string, currentResolved: number) => {
    await updateAnnotation(id, { resolved: !currentResolved });
  };

  if (loading) {
    return (
      <div className="p-4 text-sm text-fd-muted-foreground">
        Loading annotations...
      </div>
    );
  }

  return (
    <div className="border-l border-fd-border bg-fd-card h-full overflow-hidden flex flex-col">
      <div className="p-3 border-b border-fd-border">
        <h3 className="font-semibold text-sm mb-2">Comments ({annotations.length})</h3>
        <div className="flex gap-1">
          {(['all', 'active', 'resolved'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-2 py-1 text-xs rounded-md transition-colors ${
                filter === f
                  ? 'bg-fd-primary text-fd-primary-foreground'
                  : 'bg-fd-secondary hover:bg-fd-accent'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredAnnotations.length === 0 ? (
          <div className="p-4 text-sm text-fd-muted-foreground text-center">
            No {filter !== 'all' ? filter : ''} comments yet.
            <br />
            <span className="text-xs">Select text to add a comment.</span>
          </div>
        ) : (
          <div className="divide-y divide-fd-border">
            {filteredAnnotations.map((annotation) => (
              <div
                key={annotation.id}
                onClick={() => setSelectedAnnotation(annotation)}
                className={`p-3 cursor-pointer transition-colors hover:bg-fd-accent/50 ${
                  selectedAnnotation?.id === annotation.id ? 'bg-fd-accent/80' : ''
                } ${annotation.resolved ? 'opacity-60' : ''}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: annotation.author_color }}
                  />
                  <span className="text-xs font-medium">{annotation.author}</span>
                  <span className="text-xs text-fd-muted-foreground ml-auto">
                    {new Date(annotation.created_at).toLocaleDateString()}
                  </span>
                </div>

                <div className="text-xs text-fd-muted-foreground mb-1 italic truncate">
                  &quot;{annotation.selected_text}&quot;
                </div>

                {editingId === annotation.id ? (
                  <div className="mt-2 space-y-2">
                    <textarea
                      value={editComment}
                      onChange={(e) => setEditComment(e.target.value)}
                      className="w-full p-2 text-xs bg-fd-background border border-fd-border rounded resize-none"
                      rows={2}
                    />
                    <div className="flex gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingId(null);
                        }}
                        className="px-2 py-1 text-xs border border-fd-border rounded hover:bg-fd-accent"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSaveEdit(annotation.id);
                        }}
                        className="px-2 py-1 text-xs bg-fd-primary text-fd-primary-foreground rounded"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-sm">{annotation.comment}</p>

                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEdit(annotation.id, annotation.comment);
                        }}
                        className="text-xs text-fd-muted-foreground hover:text-fd-foreground"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleResolve(annotation.id, annotation.resolved);
                        }}
                        className="text-xs text-fd-muted-foreground hover:text-fd-foreground"
                      >
                        {annotation.resolved ? 'Reopen' : 'Resolve'}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm('Delete this comment?')) {
                            deleteAnnotation(annotation.id);
                          }
                        }}
                        className="text-xs text-red-500 hover:text-red-600 ml-auto"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
