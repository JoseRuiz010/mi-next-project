import Link from 'next/link'
import React from 'react'

const PostCard = ({ title, id, body }) => {
  return (
    <div>
      <h3>{id}-{title}</h3>
      <p>{body}</p>
      <Link href={"/posts/" + id}>Ver</Link>
    </div>
  )
}

export default PostCard