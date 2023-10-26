import Link from 'next/link';
import React from 'react'

async function loadPost(id) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const data = await res.json()
  return data
}
const page = async ({ params: { id } }) => {
  const post = await loadPost(id)
  console.log(post);
  const { body, title, id: idPost } = post
  if (Object.keys(post).length === 0) {
    return (
      <div>
        <h4>No se encontro el posts</h4>
        <Link href={"/posts"}>Volver</Link>
      </div>
    )
  }
  return (
    <div>
      <h1>{idPost}. {title}</h1>
      <p>{body}</p>
      <Link href={"/posts"}>Volver</Link>
    </div>
  )
}

export default page