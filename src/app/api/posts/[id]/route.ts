import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from 'next/server';
import { notFound } from "next/navigation";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    if (!data) return notFound();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching post' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const { title, content } = await request.json();

    const { data, error } = await supabase
      .from("posts")
      .update({ title, content, createdAt: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();
    
    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { error: 'An error occurred while updating post' },
      { status: 500 }
    );    
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  console.log(`Attempting to delete post with id: ${id}`);
  try {
    const { error: deleteError } = await supabase
      .from("posts")
      .delete()
      .eq("id", id);

    if (deleteError) {
      console.log(`Post with id ${id} not found`);
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'An error occurred while deleting post' },
      { status: 500 }
    );    
  }
}