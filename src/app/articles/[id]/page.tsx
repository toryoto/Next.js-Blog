import DeleteButton from '@/app/components/DeleteButton';
import { getDetailArticle } from '@/blogAPI';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Article = async ({params}: {params: {id: string}}) => {
  //const detailArticle = await getDetailArticle(params.id);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${API_URL}/api/posts/${params.id}`, {
    next: {
      revalidate: 10, // ISR
    }
  });
  const detailArticle = await res.json();
  console.log(detailArticle);

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
          <div className='mt-12 space-y-4 sm:space-y-0 sm:flex sm:justify-between sm:items-center'>
            <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2'>
              <Link
                href={`/articles/${detailArticle.id}/edit`}
                className='inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out w-full sm:w-auto'
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                編集
              </Link>
              <DeleteButton id={detailArticle.id} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;