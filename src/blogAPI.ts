import { notFound } from "next/navigation";
import { Article } from "./types";

// 全データの取得は更新頻度が高いので、SSRを使用
export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, {
    cache: "no-store" // SSR
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  const articles = await res.json();
  return articles;
}

export const getDetailArticle = async (id: string): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, { next: { revalidate: 60 } }); // ISR

  if (res.status === 400) {
    notFound()
  }

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  const article = await res.json();
  return article;
}