import { Article } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

type ArticleListProps = {
  articles: Article[];
}

function ArticleList({ articles }: ArticleListProps) {
  if (!articles || articles.length === 0) {
    return <div>記事がありません。</div>;
  }
  return (
    <div>
      {articles.map((article) => (
        <article className="flex flex-col shadow my-4" key={article.id}>
          <Link href={`articles/${article.id}`} className="hover:opacity-75 relative w-full h-48">
            <Image
              src="https://picsum.photos/800/300"
              alt='Random article thumbnail'
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{objectFit: "cover"}}
            />
          </Link>
          <div className="bg-white flex flex-col justify-start p-6">
            <Link href={`articles/${article.id}`} className="text-blue-700 text-sm font-bold uppercase pb-4">
              Technology
            </Link>
            <Link href={`articles/${article.id}`} className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">
              {article.title}
            </Link>
            <p className="text-sm pb-3">{article.createdAt}</p>
            <Link href={`articles/${article.id}`} className="text-slate-900 pb-6">
              {article.content}
            </Link>
            <Link href={`articles/${article.id}`} className="uppercase text-gray-800 hover:text-black">
              続きを読む
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ArticleList;