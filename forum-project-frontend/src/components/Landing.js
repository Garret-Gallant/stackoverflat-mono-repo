import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
const Landing = ({ onLogin }) => {
  return (
    <div>
      <Login onLogin={onLogin} />
      <SignUp onLogin={onLogin} />
    </div>
  );
};

export default Landing;
