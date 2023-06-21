import React from "react";

const PostCard = ({ post }) => {
  const { id, title, image, date } = post;

  return (
    <div className="post-card w-[50%] mx-auto py-5 rounded-md my-10">
      <img
        src={image}
        className="w-[95%] h-[200px] object-cover mx-auto "
        alt={title}
      />
      <div className="ml-6 my-2">
        <p className="font-semibold post-card py-2">{title}</p>
        <p className="post-card date">Posted at {date}</p>
      </div>
    </div>
  );
};

export default PostCard;
