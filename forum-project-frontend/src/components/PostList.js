import React, { useEffect, useState } from "react";
import Post from "./Post";

const PostList = ({ fetchAdminPosts = false, user }) => {
  const [posts, setPosts] = useState([]);

  //Fetches latest posts from prod and sets state on mount
  useEffect(() => {
    if (fetchAdminPosts) {
      fetch("/admin_posts")
        .then((r) => r.json())
        .then((posts) => setPosts(posts));
    } else {
      fetch("/posts").then((r) => {
        if (r.ok) {
          r.json().then((data) => setPosts(data));
        } else {
          throw new Error("Unable to retrieve latest posts.");
        }
      });
    }
  }, []);

  return (
    <div>
      <h2 className="w-fit m-auto">Posts</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post} user_id={user.id} />
      ))}
    </div>
  );
};

export default PostList;
