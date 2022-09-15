import React from "react";

const Post = ({ post, user_id }) => {
  const { title, body, user, category } = post;

  const likePost = () => {
    fetch(`/post_likes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: user_id, post_id: post.id }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="h-64 max-w-xl ml-auto mr-auto flex flex-col items-center border border-black my-4">
      <span className="ml-auto pr-2 py-2">{user.username}</span>
      <span className="ml-auto pr-2 py-2">{category.name}</span>
      <span className="my-2 font-bold">{title}</span>
      <p className="w-128 px-2 h-24 overflow-hidden text-ellipsis">{body}</p>
      <span>user said: "i agree" 5m</span>
      <button className="mt-auto">comments</button>
      <button className="mt-auto" onClick={likePost}>
        like
      </button>
    </div>
  );
};

export default Post;
