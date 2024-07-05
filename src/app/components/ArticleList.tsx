import { Article } from '@/types';
import React from 'react'
import { ArticleCard } from './ArticleCard';

type ArticleListProps = {
  articles: Article[];
}

function ArticleList({ articles }: ArticleListProps) {
  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-10 text-gray-600">
        記事がありません。
      </div>
    );
  }

  return (
    <div className="space-y-8 md:space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {articles.map((article) => (
        <div key={article.id} className="transition duration-300 ease-in-out transform hover:-translate-y-1">
          <ArticleCard article={article} />
        </div>
      ))}
    </div>
  )
}

export default ArticleList;