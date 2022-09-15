import React from "react";
import PostList from "./PostList";
const Home = ({ user }) => {
  return (
    <div>
      <PostList fetchAdminPosts={true} user={user} />
    </div>
  );
};

export default Home;
