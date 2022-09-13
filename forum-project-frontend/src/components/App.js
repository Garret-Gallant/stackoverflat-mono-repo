import { useState, useEffect } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import "../index.css";

function App() {
  const [user, setUser] = useState({});

  const onLogin = () => {
    fetch("/me")
      .then((r) => r.json())
      .then((data) => setUser(data));
  };

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then(() => setUser({}));
  };

  return (
    <div>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route exact path="/" />
        <Route path="/view-posts" />
        <Route path="/create-post" />
        <Route path="/login" element= {<Login onLogin={onLogin}/>} />
        <Route path="/create-account" element= {<SignUp onLogin={onLogin}/>} />
        <Route path="/user-profile" />
      </Routes>
    </div>
  );
}

export default App;

{
  /*   <NavLink className='nav-button' to="/">Home</NavLink>
      <NavLink className='nav-button' to="/create-account">Create Account</NavLink>
      <NavLink className='nav-button' to="/view-posts">View Posts</NavLink>
      <NavLink className='nav-button' to="/create-post">Make A Post</NavLink>
      <NavLink className='nav-button' to="/user-profile">Profile</NavLink> */
}
