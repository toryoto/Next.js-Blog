import { Article } from '@/types';
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type ArticleCardProps = {
  article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const getRandomImageUrl = (id: string) => {
    const numericValue = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const seed = numericValue % 1000;
    return `https://picsum.photos/seed/${seed}/1200/600`;
  };

  return (
    <article className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl lg:flex" key={article.id}>
      <Link href={`articles/${article.id}`} className="block relative w-full lg:w-1/3 h-64 lg:h-auto overflow-hidden">
        <Image
          src={getRandomImageUrl(article.id)}
          alt={`Article thumbnail for ${article.title}`}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          style={{objectFit: "cover"}}
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </Link>
      <div className="p-6 lg:w-2/3 lg:flex lg:flex-col lg:justify-between">
        <div>
          <Link href={`articles/${article.id}`} className="text-blue-600 text-sm font-semibold uppercase tracking-wider hover:text-blue-800 transition-colors duration-300">
            Technology
          </Link>
          <Link href={`articles/${article.id}`} className="block mt-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-300 line-clamp-2">
              {article.title}
            </h2>
          </Link>
          <p className="text-sm text-gray-500 mt-2">{new Date(article.createdAt).toLocaleDateString()}</p>
          <p className="mt-4 text-gray-600 line-clamp-3 lg:line-clamp-4">
            {article.content}
          </p>
        </div>
        <Link href={`articles/${article.id}`} className="inline-block mt-4 text-blue-600 font-semibold group">
          続きを読む
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span>
        </Link>
      </div>
    </article>
  )
}