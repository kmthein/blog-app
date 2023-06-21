import React from 'react'
import PostCard from '../components/PostCard'
import { useLoaderData } from 'react-router-dom'

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div className=' grid grid-cols-3 gap-10 my-10'>
      {
        posts.length > 0 && 
        posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))
      }      
    </div>
  )
}

export default Posts

export const loader = async () => {
  const response = await fetch(`http://localhost:8080/posts`);
  if(!response.ok) {

  } else {
    const data = await response.json();
    return data.posts;
  }
}