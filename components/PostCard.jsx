 import React from 'react'

const PostCard = ({ title, id, body }) => {
  return (
    <div>
      <h3>{id}-{title}</h3>
      <p>{body}</p>
      <button href={"/posts/" + id}>Ver</button>
    </div>
  )
}

export default PostCard