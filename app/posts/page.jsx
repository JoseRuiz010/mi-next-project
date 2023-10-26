import PostCard from '@/components/PostCard';
import React from 'react'
async function loadPost() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return data;
}
const Posts = async () => {
  const post = await loadPost()
  console.log(post);
  return (
    <div>Posts
      {
        post.map(p => <PostCard  {...p} />)
      }

    </div>
  )
}

export default Posts