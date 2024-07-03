import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// API requestを引数に取り、データを再検証するメソッド
export async function POST(request: NextRequest) {
  const { id } = await request.json();

  // idがstring出なければエラー
  if (typeof id !== 'string') return NextResponse.json({ message: 'Invalid id' }, { status: 400 });

  try {
    // 記事詳細ページのパスを再検証
    revalidatePath(`/articles/${id}`);
    return NextResponse.json({ revalidated: true, message: 'Revalidation triggered' });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}