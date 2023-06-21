import React from "react";
import { Form } from "react-router-dom";
import uuid from "uuid";

const PostForm = ({heading}) => {
  return (
    <Form method="POST">
      <div className="post-card p-10 w-[40%] mx-auto rounded-md">
        <h2 className="text-lg font-bold mb-4">{heading}</h2>
        <div className="my-1">
          <label htmlFor="">Title</label>
        </div>
        <div className="mb-4">
          <input type="text" name="title" className=" bg-gray-200 w-full py-1 px-1" required />
        </div>
        <div className="my-1">
          <label htmlFor="">Image URL</label>
        </div>
        <div className="mb-4">
          <input type="url" name="image" className=" bg-gray-200 w-full py-1 px-1" required />
        </div>
        <div className="my-1">
          <label htmlFor="">Date</label>
        </div>
        <div className="mb-4">
          <input type="date" name="date" className=" bg-gray-200 w-full py-1 px-1" required />
        </div>
        <div className="my-1">
          <label htmlFor="">Description</label>
        </div>
        <div className="mb-4">
          <textarea
            type="date"
            className=" bg-gray-200 w-full py-1 px-1"
            rows={5}
            name="description"
            required
          />
        </div>
        <div className="flex justify-end">
          <button className=" bg-cyan-950 text-white py-1 px-5">Add</button>
        </div>
      </div>
    </Form>
  );
};

export default PostForm;

