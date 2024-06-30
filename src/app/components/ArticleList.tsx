import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

function ArticleList() {
  return (
    <div>
      <article className="flex flex-col shadow my-4">
        <Link href="#" className="hover:opacity-75 relative w-full h-48">
          <Image
            src="https://picsum.photos/800/300"
            alt='Random article thumbnail'
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{objectFit: "cover"}}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">
            Technology
          </Link>
          <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3">Published on April 25th, 2020</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
            iaculis dui porta volutpat. In sit amet posuere magna..
          </Link>
          <Link href="#" className="uppercase text-gray-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="flex flex-col shadow my-4">
        <Link href="#" className="hover:opacity-75 relative w-full h-48">
          <Image
            src="https://picsum.photos/800/400"
            alt='Random article thumbnail'
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{objectFit: "cover"}}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">
            Technology
          </Link>
          <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3">Published on April 25th, 2020</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
            iaculis dui porta volutpat. In sit amet posuere magna..
          </Link>
          <Link href="#" className="uppercase text-gray-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="flex flex-col shadow my-4">
        <Link href="#" className="hover:opacity-75 relative w-full h-48">
          <Image
            src="https://picsum.photos/800/450"
            alt='Random article thumbnail'
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{objectFit: "cover"}}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">
            Technology
          </Link>
          <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3">Published on April 25th, 2020</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
            iaculis dui porta volutpat. In sit amet posuere magna..
          </Link>
          <Link href="#" className="uppercase text-gray-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList;