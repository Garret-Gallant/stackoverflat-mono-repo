import React from "react";
import CommentForm from "./CommentForm";
import { useState, useEffect } from "react";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`post/comments/${postId}`)
      .then((r) => r.json())
      .then((data) => setComments(data))
      .then(console.log(comments));
  }, []);

  if (comments.length === 0) {
    return (
      <div className="comment-list">
        <div>No comments yet.</div>
        <CommentForm postId={postId} />
      </div>
    );
  }
  return (
    <div>
      <div>
        {comments.map((comment) => {
          return (
            <div className="comment-list">
              <span>{comment.user.username}</span>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </div>
      <div className="comment-list">
        <CommentForm postId={postId} />
      </div>
    </div>
  );
};

export default CommentList;
