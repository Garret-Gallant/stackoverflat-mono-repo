import React, { useEffect, useState } from "react";

const CommentForm = ({ postId, userId, refresh }) => {
  const [currentPost, setCurrentPost] = useState("");
  const [comment, setComment] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        post_id: postId,
        body: comment,
      }),
    })
      .then((r) => r.json())
      .then(setTimeout(refresh, 1000));
  };

  useEffect(() => {
    setCurrentPost(postId);
  }, []);

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Leave a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit" className="cat-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
