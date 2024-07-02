import { getDetailArticle } from '@/blogAPI';
import Image from 'next/image'
import React from 'react'

const Article = async ({params}: {params: {id: string}}) => {
  const detailArticle = await getDetailArticle(params.id);

  const getRandomImageUrl = (id: string) => {
    const numericValue = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const seed = numericValue % 1000; // 1000未満の値に制限
    return `https://picsum.photos/seed/${seed}/800/300`;
  };

  return (
    <article className='relative h-screen flex flex-col'>
      <div className='absolute inset-0 z-0'>
        <Image
          src={getRandomImageUrl(detailArticle.id)}
          alt='Article background'
          fill
          sizes="100vw"
          style={{objectFit: "cover"}}
          priority
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>
      <div className='relative z-10 flex-grow flex flex-col justify-center px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight'>
            {detailArticle.title}
          </h1>
          <div className='prose prose-lg prose-invert max-w-none'>
            <p className='text-xl text-white leading-relaxed'>
              {detailArticle.content}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;