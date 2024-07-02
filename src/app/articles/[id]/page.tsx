import Image from 'next/image'
import React from 'react'

const Article = ({params}: {params: {id: string}}) => {
  console.log(params.id)
  return (
    <article className='relative h-screen flex flex-col'>
      <div className='absolute inset-0 z-0'>
        <Image
          src="https://picsum.photos/1920/1080"
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
            ここがタイトルです
          </h1>
          <div className='prose prose-lg prose-invert max-w-none'>
            <p className='text-xl text-white leading-relaxed'>
              ここが本文です。長めの文章を想定して、十分な行間と適切なフォントサイズを設定しています。
              読みやすさを重視し、背景画像の上でも見やすいように調整しました。記事の内容がここに続きます...
            </p>
            <p className='text-xl text-white leading-relaxed'>
              二つ目の段落です。本文が長くなる場合でも、このようにして段落を分けることで
              読みやすさを保つことができます。画面の高さに応じて、適切に表示されます。
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;