import { NextRequest, NextResponse } from 'next/server';
import { db, initDb, type Annotation } from '@/lib/db';

// Initialize DB on first request
let initialized = false;

async function ensureDb() {
  if (!initialized) {
    await initDb();
    initialized = true;
  }
}

// GET /api/annotations?path=/docs/components/button
export async function GET(request: NextRequest) {
  await ensureDb();

  const path = request.nextUrl.searchParams.get('path');

  if (!path) {
    return NextResponse.json({ error: 'path parameter required' }, { status: 400 });
  }

  const result = await db.execute({
    sql: 'SELECT * FROM annotations WHERE page_path = ? ORDER BY created_at DESC',
    args: [path],
  });

  return NextResponse.json(result.rows as unknown as Annotation[]);
}

// POST /api/annotations
export async function POST(request: NextRequest) {
  await ensureDb();

  const body = await request.json();
  const { page_path, selection_start, selection_end, selected_text, comment, author, author_color } = body;

  if (!page_path || selection_start === undefined || selection_end === undefined || !selected_text || !comment || !author) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const id = crypto.randomUUID();
  const color = author_color || `hsl(${Math.random() * 360}, 70%, 50%)`;

  await db.execute({
    sql: `INSERT INTO annotations (id, page_path, selection_start, selection_end, selected_text, comment, author, author_color)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [id, page_path, selection_start, selection_end, selected_text, comment, author, color],
  });

  return NextResponse.json({ id, page_path, selection_start, selection_end, selected_text, comment, author, author_color: color });
}
