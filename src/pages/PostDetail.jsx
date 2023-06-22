import React from "react";
import PostDetailCard from "../components/PostDetailCard";
import { redirect, useLoaderData, useNavigate, useRouteLoaderData } from "react-router-dom";

const PostDetail = () => {
  const post = useRouteLoaderData("post-detail");

  return (
    <>
      <PostDetailCard post={post} />
    </>
  );
};

export default PostDetail;

export const loader = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);

  if (!response.ok) {
    return redirect('/');
  } else {
    const data = await response.json();
    return data.post;
  }
};

export const action = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`, {
    method: request.method,
})

if(response.status === 422) {
    return response;
}

if(!response.ok) {
    throw new Error("")
} 
return redirect('/');
};
