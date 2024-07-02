import Image from 'next/image'
import React from 'react'

 const Article = ({params}: {params: {id: string}}) => {
  console.log(params.id)
  return (
    <div className='max-w-3xl mx-auto p-5'>
      <Image
        src="https://picsum.photos/800/300"
        alt='Random article thumbnail'
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{objectFit: "cover"}}
      />
    </div>
  )
}

export default Article
