import React from 'react'

function CreateBlogPage() {
  return (
    <div className='min-h-screen bg-gray-100 py-8 px-4 md:px-12'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>ブログ新規作成</h2>

        <form className='bg-slate-200 p-6 rounded-lg shadow-lg'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="url">URL</label>
            <input
              id="url"
              type="text" 
              className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-300'
              placeholder='例: my-awesome-blog-post'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="title">タイトル</label>
            <input
              id="title"
              type="text" 
              className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-300'
              placeholder='記事のタイトルを入力してください'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="content">本文</label>
            <textarea 
              id="content"
              className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-300'
              rows={6}
              placeholder='記事の本文を入力してください...'
            />
          </div>

          <button 
            type='submit' 
            className='py-2 px-4 bg-orange-300 text-gray-800 font-bold rounded hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-150 ease-in-out'
          >
            投稿
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlogPage