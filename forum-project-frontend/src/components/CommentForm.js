import React, { useEffect, useState } from "react";

const CommentForm = ({ postId }) => {
  const [currentPost, setCurrentPost] = useState("");
  useEffect(() => {
    setCurrentPost(postId);
  }, []);
  return (
    <div>
      <form>
        <input type="text" placeholder="Leave a comment" />
        <button className="cat-button">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
