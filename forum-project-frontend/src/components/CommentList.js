import React from "react";
import CommentForm from "./CommentForm";
import { useState, useEffect } from "react";

const CommentList = ({ userId, postId }) => {
  const [comments, setComments] = useState([]);

  const fetchNewComments = () => {
    fetch(`post/comments/${postId}`)
      .then((r) => r.json())
      .then((data) => setComments(data));
  };
  useEffect(() => {
    fetchNewComments();
  }, []);

  if (comments.length === 0) {
    return (
      <div className="comment-list">
        <div>No comments yet.</div>
        <CommentForm
          postId={postId}
          userId={userId}
          refresh={fetchNewComments}
        />
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
        <CommentForm
          postId={postId}
          userId={userId}
          refresh={fetchNewComments}
        />
      </div>
    </div>
  );
};

export default CommentList;
