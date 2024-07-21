"use client";

import { useForm, SubmitHandler } from 'react-hook-form';
import { createArticle } from '@/blogAPI';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

type Inputs = {
  url: string,
  title: string,
  content: string,
}

function CreateBlogPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const [loading, setLoading] = useState<boolean>(false);


  async function createPost(inputs: { url: string; title: string; content: string }) {
    try {
      const API_URL = (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000');
      const res = await fetch(`${API_URL}/api/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: inputs.url,
          title: inputs.title,
          content: inputs.content
        }),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to create post');
      }
  
      return await res.json();
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);
      // await createArticle(data.url, data.title, data.content);

      // 投稿ボタンを押した後の処理で新しいブログ作成APIをたたく
      await createPost(data);

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
      // エラー時の処理を追加（例：エラーメッセージの表示）
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 py-8 px-4 md:px-12'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>ブログ新規作成</h2>

        <form 
          className='bg-slate-200 p-6 rounded-lg shadow-lg'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="url">URL</label>
            <input
              id="url"
              type="text" 
              className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-300'
              placeholder='例: my-awesome-blog-post'
              {...register("url", { required: "URLは必須です",
                pattern: {
                  value: /^[a-z0-9]+(?:-[a-z0-9]+)*-?$/,
                  message: "URLは小文字、数字、ハイフンのみ使用でき、末尾にはハイフンを含めることができます"
                },
                validate: {
                  noConsecutiveHyphens: (value) => 
                    !value.includes('--') || "連続したハイフンは使用できません",
                  noLeadingTrailingHyphens: (value) => 
                    (!value.startsWith('-') && !value.endsWith('-')) || "URLの先頭と末尾にハイフンは使用できません"
                }
              })}
              
            />
            {errors.url && <p className="text-red-500 text-xs italic">{errors.url.message}</p>}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="title">タイトル</label>
            <input
              id="title"
              type="text" 
              className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-300'
              placeholder='記事のタイトルを入力してください'
              {...register("title", { required: "Titleは必須です" })}
            />
            {errors.title && <p className="text-red-500 text-xs italic">{errors.title.message}</p>}
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="content">本文</label>
            <textarea 
              id="content"
              className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-300'
              rows={6}
              placeholder='記事の本文を入力してください...'
              {...register("content", { required: "本文は必須です" })}
            />
            {errors.content && <p className="text-red-500 text-xs italic">{errors.content.message}</p>}
          </div>

          <button 
            type='submit' 
            className={`py-2 px-4 font-bold rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-150 ease-in-out
            ${loading 
              ? "bg-orange-300 text-gray-500 cursor-not-allowed" 
              : "bg-orange-400 text-gray-800 hover:bg-orange-500"
            } flex items-center justify-center`}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                処理中...
              </>
            ) : (
              '投稿'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlogPage