import DeleteButton from '@/app/components/DeleteButton';
import { getDetailArticle } from '@/blogAPI';
import Image from 'next/image'
import React from 'react'

const Article = async ({params}: {params: {id: string}}) => {
  const detailArticle = await getDetailArticle(params.id);

  const getRandomImageUrl = (id: string) => {
    const numericValue = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const seed = numericValue % 1000;
    return `https://picsum.photos/seed/${seed}/1920/1080`;
  };

  return (
    <article className='min-h-screen relative'>
      <div className='absolute inset-0'>
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
      <div className='relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-xl p-6 md:p-12'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            {detailArticle.title}
          </h1>
          <div className='prose prose-lg max-w-none'>
            <p className='text-gray-700 leading-relaxed'>
              {detailArticle.content}
            </p>
          </div>
          <div className='mt-8 flex justify-end'>
            <DeleteButton id={detailArticle.id}/>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;