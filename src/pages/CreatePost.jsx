import React from 'react'
import PostForm from '../components/PostForm'
import { v4 as uuid } from 'uuid';
import { redirect } from 'react-router-dom';

const CreatePost = () => {
  return (
    <>
        <PostForm heading={"Add New Post"} />
    </>
  )
}

export default CreatePost

export const action = async ({request, params}) => {
    const data = await request.formData()
    const newPost = {
        id: uuid(),
        title: data.get("title"),
        image: data.get("image"),
        date: data.get("date"),
        description: data.get("description")
    }

    const response = await fetch(`http://localhost:8080/posts`, {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(newPost),
    })
    if(!response.ok) {
        return;
    } 
    return redirect('/');
}