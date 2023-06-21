import React from 'react'

const PostCard = () => {
  return (
    <div className='post-card w-[50%] mx-auto py-5 rounded-md'>
        <img src="https://hawar.no/wp-content/uploads/2023/04/chatgpt.jpg" className='w-[90%]  mx-auto ' alt="" />
        <div className='ml-6 my-2'>
            <p className='font-semibold post-card py-2'>Our First Task</p>
            <p className='opacity-60 post-card'>Post at 2023-16-08</p>
        </div>
    </div>
  )
}

export default PostCard