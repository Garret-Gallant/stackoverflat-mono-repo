import React from "react";

const PostForm = () => {
  return (
    <div className="w-fit m-auto">
      <h2 className="text-center">New post</h2>
      <form className="space-y-2">
        <input type="text" placeholder="Title" />
        <textarea className="border-2 border-black" placeholder="Body" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
