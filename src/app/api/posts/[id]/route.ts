import { supabase } from "@/utils/supabaseClient";
import { notFound } from "next/navigation";
import { NextResponse } from 'next/server';

// リクエスト/api/posts/123ではparams=123が渡される
export async function GET(
  req: Request,
  // 分割代入でオブジェクトからparamsのみを取得
  { params }: { params: { id:string } }
) {
  try {
    const { id } = params;

    const { data, error } = await supabase.from("posts").select("*").eq("id", id).single();

    if (error) throw error;

    if (!data) notFound();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching post' },
      { status: 500 }
    );
  }
}