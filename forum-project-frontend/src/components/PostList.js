import React, { useEffect, useState } from "react";
import Post from "./Post";

const PostList = ({ fetchAdminPosts = false, user, categoryName }) => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  //Fetches latest posts from prod and sets state on mount
  useEffect(() => {
    if (fetchAdminPosts) {
      fetch("/admin_posts")
        .then((r) => r.json())
        .then((posts) => {
          setPosts(posts);
          setFilteredPosts(posts);
        });
    } else {
      fetch("/posts").then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setPosts(data);
            setFilteredPosts(posts);
          });
        } else {
          throw new Error("Unable to retrieve latest posts.");
        }
      });
    }
  }, []);
  

  useEffect(() => {
    filterPosts();
  }, [categoryName]);

  const filterPosts = () => {
      setFilteredPosts(posts.filter((post) => post.category.name === categoryName));
  };

  return (
    <div>
      <h2 className="w-fit m-auto">Posts</h2>
      {categoryName ? 
      filteredPosts.map((post) => (
        <Post key={post.id} post={post} user_id={user.id} /> ))
        : 
      posts.map((post) => (
        <Post key={post.id} post={post} user_id={user.id} />
      ))}
    </div>
  );
};

export default PostList;
