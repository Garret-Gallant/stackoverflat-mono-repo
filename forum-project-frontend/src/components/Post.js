import React from "react";

const Post = ({ post }) => {
  const { title, body, user, category } = post;
  return (
    <div className="h-64 max-w-xl ml-auto mr-auto flex flex-col items-center border border-black my-4">
      <span className="ml-auto pr-2 py-2">{user.username}</span>
      <span className="ml-auto pr-2 py-2">{category.name}</span>
      <span className="my-2 font-bold">{title}</span>
      <p className="w-128 px-2 h-24 overflow-hidden text-ellipsis">{body}</p>
      <span>user said: "i agree" 5m</span>
      <button className="mt-auto">comments</button>
    </div>
  );
};

export default Post;
