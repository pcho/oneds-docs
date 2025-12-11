import { createClient } from '@libsql/client';

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL || 'file:local.db',
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export async function initDb() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS annotations (
      id TEXT PRIMARY KEY,
      page_path TEXT NOT NULL,
      selection_start INTEGER NOT NULL,
      selection_end INTEGER NOT NULL,
      selected_text TEXT NOT NULL,
      comment TEXT NOT NULL,
      author TEXT NOT NULL,
      author_color TEXT DEFAULT '#3b82f6',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      resolved INTEGER DEFAULT 0
    )
  `);

  await db.execute(`
    CREATE INDEX IF NOT EXISTS idx_page ON annotations(page_path)
  `);
}

export type Annotation = {
  id: string;
  page_path: string;
  selection_start: number;
  selection_end: number;
  selected_text: string;
  comment: string;
  author: string;
  author_color: string;
  created_at: string;
  resolved: number;
};
