import React from "react";
import PostList from "./PostList";
const Home = () => {
  return (
    <div>
      <img
        class="object-cover h-96 object-center"
        src="https://user-images.githubusercontent.com/81394542/190235133-396cb4ab-c85b-4190-a847-44153bf6cca4.png"
        alt="Stackoverflat Logo"
      />
      <PostList fetchAdminPosts={true} />
    </div>
  );
};

export default Home;
