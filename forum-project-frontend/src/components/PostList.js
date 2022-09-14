import React, { useEffect, useState } from "react";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  //Fetches latest posts from prod and sets state on mount
  useEffect(() => {
    fetch("/posts").then((r) => {
      if (r.ok) {
        r.json().then((data) => setPosts(data));
      } else {
        throw new Error("Unable to retrieve latest posts.");
      }
    });
  }, []);

  return (
    <div>
      <h2 className="w-fit m-auto">Posts</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
