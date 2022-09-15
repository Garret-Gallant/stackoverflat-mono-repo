import React from "react";
import PostList from "./PostList";
const Home = ({ user }) => {
  return (
    <div>
      <h2 className="text-center">Home page</h2>
      <PostList fetchAdminPosts={true} user={user} />
    </div>
  );
};

export default Home;
