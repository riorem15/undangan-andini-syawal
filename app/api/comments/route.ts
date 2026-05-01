import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ufbuaqthfovubyguyruu.supabase.co';
const supabaseKey = 'sb_publishable_kyG_xUitQ-7eisMaQBVbXQ_3WLD7OqF';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .order('date', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json([]); // Return empty array if error or table doesn't exist yet
    }

    return NextResponse.json(data || []);
  } catch (error) {
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.name || !body.message) {
      return NextResponse.json({ error: 'Name and message are required' }, { status: 400 });
    }

    const newComment = {
      name: body.name,
      message: body.message,
      date: new Date().toISOString()
    };

    const { error } = await supabase
      .from('comments')
      .insert([newComment]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: 'Failed to save comment' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
