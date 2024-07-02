import { Article } from "./types";

// 全データの取得は更新頻度が高いので、SSRを使用
export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, {
    cache: "no-store"
  });

  const articles = await res.json();
  return articles;
}