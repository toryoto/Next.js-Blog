import { supabase } from "@/utils/supabaseClient";
import { notFound } from "next/navigation";
import { NextResponse } from 'next/server';

// api/posts/123のときのparamsは123
export async function handler(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const method = req.method;

  switch(method) {
    case "GET":
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

    case "DELETE":
      console.log(`Attempting to delete post with id: ${id}`);
      try {
        const { error: fetchError } = await supabase
          .from("posts")
          .delete()
          .eq("id", id);

        if (fetchError) {
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
}

export { handler as GET, handler as DELETE, handler as PUT };


// const { error: deleteError } = await supabase
//           .from('posts')
//           .delete()
//           .match({ id });