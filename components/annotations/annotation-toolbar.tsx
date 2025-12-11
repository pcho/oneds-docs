'use client';

import { useState } from 'react';
import { useAnnotations } from './annotation-provider';

const TEAM_MEMBERS = [
  { name: 'Karine', color: '#8b5cf6' },   // Purple
  { name: 'Prem', color: '#06b6d4' },     // Cyan
  { name: 'Viki', color: '#f97316' },     // Orange
  { name: 'Leticia', color: '#ec4899' },  // Pink
  { name: 'Bruno', color: '#22c55e' },    // Green
  { name: 'Sofia', color: '#3b82f6' },    // Blue
  { name: 'Goncalo', color: '#eab308' },  // Yellow
];

export function AnnotationToolbar() {
  const { pendingSelection, setPendingSelection, addAnnotation } = useAnnotations();
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState(TEAM_MEMBERS[0].name);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!pendingSelection) return null;

  const selectedMember = TEAM_MEMBERS.find((m) => m.name === author) || TEAM_MEMBERS[0];

  const handleSubmit = async () => {
    if (!comment.trim()) return;

    await addAnnotation({
      page_path: '',
      selection_start: pendingSelection.start,
      selection_end: pendingSelection.end,
      selected_text: pendingSelection.text,
      comment: comment.trim(),
      author,
      author_color: selectedMember.color,
      parent_id: null,
    });

    setComment('');
    setIsExpanded(false);
  };

  const handleCancel = () => {
    setPendingSelection(null);
    setComment('');
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-fd-popover border border-fd-border rounded-lg shadow-lg p-3 min-w-[320px] max-w-[480px]">
      <div className="text-xs text-fd-muted-foreground mb-2 truncate">
        Selected: &quot;{pendingSelection.text.slice(0, 50)}
        {pendingSelection.text.length > 50 ? '...' : ''}&quot;
      </div>

      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full py-2 px-3 bg-fd-primary text-fd-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Add Comment
        </button>
      ) : (
        <div className="space-y-3">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add your comment..."
            className="w-full p-2 text-sm bg-fd-background border border-fd-border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-fd-ring"
            rows={3}
            autoFocus
          />

          <div className="flex items-center gap-2">
            <span className="text-xs text-fd-muted-foreground">As:</span>
            <select
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="flex-1 p-1.5 text-sm bg-fd-background border border-fd-border rounded-md"
            >
              {TEAM_MEMBERS.map((member) => (
                <option key={member.name} value={member.name}>
                  {member.name}
                </option>
              ))}
            </select>
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: selectedMember.color }}
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              className="flex-1 py-2 px-3 border border-fd-border rounded-md text-sm hover:bg-fd-accent transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!comment.trim()}
              className="flex-1 py-2 px-3 bg-fd-primary text-fd-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
