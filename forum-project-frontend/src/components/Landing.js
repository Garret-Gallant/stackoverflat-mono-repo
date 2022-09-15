import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
const Landing = ({ onLogin }) => {
  return (
    <div className="text-white">
      <h2 className="w-fit m-auto mt-4 mb-4">
        Welcome to the greatest website in the history of the universe. Please
        sign in or create an account.
      </h2>
      <Login onLogin={onLogin} />
      <SignUp onLogin={onLogin} />
    </div>
  );
};

export default Landing;
