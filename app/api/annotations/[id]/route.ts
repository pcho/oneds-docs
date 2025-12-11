import { NextRequest, NextResponse } from 'next/server';
import { db, initDb } from '@/lib/db';

let initialized = false;

async function ensureDb() {
  if (!initialized) {
    await initDb();
    initialized = true;
  }
}

// PATCH /api/annotations/[id]
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await ensureDb();

  const { id } = await params;
  const body = await request.json();
  const { comment, resolved } = body;

  const updates: string[] = [];
  const args: (string | number)[] = [];

  if (comment !== undefined) {
    updates.push('comment = ?');
    args.push(comment);
  }

  if (resolved !== undefined) {
    updates.push('resolved = ?');
    args.push(resolved ? 1 : 0);
  }

  if (updates.length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
  }

  args.push(id);

  await db.execute({
    sql: `UPDATE annotations SET ${updates.join(', ')} WHERE id = ?`,
    args,
  });

  return NextResponse.json({ success: true });
}

// DELETE /api/annotations/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await ensureDb();

  const { id } = await params;

  await db.execute({
    sql: 'DELETE FROM annotations WHERE id = ?',
    args: [id],
  });

  return NextResponse.json({ success: true });
}
