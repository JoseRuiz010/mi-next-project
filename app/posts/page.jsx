import PostCard from '@/components/PostCard';

async function loadPost() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  return data;
}
const Posts = async () => {
  const post = await loadPost()
  // console.log(post);
  return (
    <div>
      {
        post.map(p => <PostCard  {...p} />)
      }

    </div>
  )
}

export default Posts