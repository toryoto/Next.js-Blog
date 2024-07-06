import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest } from "next";
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { data, error } = await supabase.from("posts").select("*");

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching posts' },
      { status: 500 }
    );
  }
}

export async function POST(
  req: Request
) {
  try {
    const { id, title, content } = await req.json();

    // 入力値のバリデーション
    if (!id || !title || !content) {
      return NextResponse.json(
        { error: 'ID, title, and content are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("posts")
      .insert([{ id, title, content, createdAt: new Date().toISOString() }])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'An error occurred while creating the post' },
      { status: 500 }
    );
  }
}