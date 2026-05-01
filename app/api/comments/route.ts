import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data', 'comments.json');

function initDb() {
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify([]));
  }
}

export async function GET() {
  try {
    initDb();
    const data = fs.readFileSync(dbPath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    initDb();
    const body = await req.json();
    const newComment = {
      id: Date.now().toString(),
      name: body.name || 'Anonim',
      message: body.message || '',
      date: new Date().toISOString(),
    };
    const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    data.push(newComment);
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save comment' }, { status: 500 });
  }
}
