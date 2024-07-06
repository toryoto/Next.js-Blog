"use client"
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 w-full z-10 transition-all duration-300 ${
      isScrolled ? 'bg-slate-800 shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-extrabold text-slate-50 hover:text-orange-400 transition duration-300">
            Next.js14 Blog
          </Link>
          <Link
            href="/articles/new"
            className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-slate-800 bg-orange-400 hover:bg-orange-500 transition duration-300"
          >
            記事を書く
          </Link>
        </div>
      </div>
    </header>
  );
}