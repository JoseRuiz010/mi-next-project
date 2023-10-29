import Link from 'next/link'
import React from 'react'

const PostCard = ({ title, id, body }) => {
  return (
    <div className='bg-gray-900 p-10' >
      <h3 className='text-xl font-bold mb-4'>{id}-{title}</h3>
      <p className='text-slate-300 mb-3'>{body}</p>
      <Link href={"/posts/" + id}>Ver</Link>
    </div>
  )
}

export default PostCard