"use client"
import React from 'react'

const Error = ({ reset }: {reset: () => void}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">エラーが発生しました</h3>
        <p className="text-gray-600 mb-6">
          申し訳ありませんが、ブログリストの取得中に問題が発生しました。
          しばらくしてからもう一度お試しください。
        </p>
        <button 
          onClick={() => reset()}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          もう一度試す
        </button>
      </div>
    </div>
  )
}

export default Error