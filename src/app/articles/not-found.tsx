import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-16'>
      <div className='text-center'>
        <h1 className='text-9xl font-bold text-gray-800 mb-4'>404</h1>
        <p className='text-2xl text-gray-600 mb-8'>ページが見つかりません</p>
        <div className='space-y-4'>
          <p className='text-gray-500'>お探しのページは削除されたか、URLが変更された可能性があります。</p>
          <Link 
            href="/" 
            className='inline-block px-6 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out'
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;