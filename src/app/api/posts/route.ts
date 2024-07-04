import { supabase } from "@/utils/supabaseClient";
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