import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
const Post = ({ post, user_id }) => {
  const { title, body, user, category } = post;
  const [likeValue, setLikeValue] = useState(0);
  const [openComments, setOpenComments] = useState(false);

  console.log(post);

  const likePost = () => {
    fetch(`/post_likes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: user_id, post_id: post.id }),
    })
      .then((r) => r.json())
      .then(setLikeValue(likeValue = likeValue + 1));
  };

  const handleToggleComments = () => {
    setOpenComments(!openComments);
  };

  return (
    <>
      <div className="post-card">
        <span className="ml-auto pr-2 py-2">{user.username}</span>
        <span className="ml-auto pr-2 py-2">{category.name}</span>
        <span className="ml-auto pr-2 py-2">likes: {likeValue}</span>
        <span className="my-2 font-bold">{title}</span>
        <p className="w-128 px-2 h-24 overflow-hidden text-ellipsis">{body}</p>
        <span>-comment placeholder-</span>
        <button className="mt-auto" onClick={handleToggleComments}>
          {openComments ? "Hide comments" : "Show comments"}
        </button>
        <button className="mt-auto" onClick={likePost}>
          like
        </button>
      </div>
      {openComments ? <CommentList userId={user_id} postId={post.id} /> : null}
    </>
  );
};

export default Post;
