import { notFound } from "next/navigation";
import { Article, EditedArticle } from "./types";
import { resolve } from "path";

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

export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, { next: { revalidate: 60 } }); // ISR

  if (res.status === 404) {
    notFound()
  }

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  const article: Article = await res.json();
  return article;
}

export const createArticle = async (
  id: string,
  title: string,
  content: string
  ): Promise<Article> => {

  const  currentDatetime = new Date().toISOString()

  const res = await fetch("http://localhost:3001/posts", {
     method: "POST",
     headers: {
      "Content-Type": "application/json",
     },
     body: JSON.stringify({ id, title, content, createdAt: currentDatetime }),
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  const newArticle: Article = await res.json();
  return newArticle;
}

export const deleteArticle = async (id: string): Promise<Article> => {

  const res = await fetch(`http://localhost:3001/posts/${id}`, {
     method: "DELETE"
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  const deleteArticle: Article = await res.json();
  return deleteArticle;
}

export const editArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  try {
    const res = await fetch(`http://localhost:3001/posts/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        updatedAt: new Date().toISOString()
      })
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(`ブログ更新時にエラーが発生しました: ${errorData.message || res.statusText}`);
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    const editedArticle: Article = await res.json();
    return editedArticle;
  } catch (error) {
    console.error("記事更新エラー:", error);
    throw error;
  }
}