"use client";

import { deleteArticle } from '@/blogAPI';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type DeleteButtonProps = {
  id: string,
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm('本当にこの記事を削除しますか？')) {
      setIsDeleting(true);
      try {
        //await deleteArticle(id);

        // Supabaseを使用したブログ削除処理
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
        await fetch(`${API_URL}/api/posts/${id}`, {
          method: "DELETE",
        });
        
        router.push("/");
        router.refresh();
      } catch (error) {
        console.error('削除中にエラーが発生しました:', error);
        alert('削除に失敗しました。もう一度お試しください。');
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <button 
      className={`bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50
        ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={handleDelete}
      disabled={isDeleting}
    >
      {isDeleting ? '削除中...' : '削除'}
    </button>
  );
};

export default DeleteButton;