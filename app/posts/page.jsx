import PostCard from '@/components/PostCard';
import './Posts.css'
async function loadPost() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  return data;
}
const Posts = async () => {
  const post = await loadPost()

  return (
    <div className='grid'>
      {
        post.map(p => <PostCard  {...p} />)
      }
    </div>
  )
}

export default Posts