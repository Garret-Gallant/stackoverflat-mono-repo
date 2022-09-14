import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user, handleLogout }) {
  return (
    <div className="navBar">
      <div className="topNavBar">
        <h2>
          User: {!!Object.keys(user).length ? user.username : "Anonymous"}
        </h2>
        <NavLink className="nav-button" to="/home">
          Home{" "}
        </NavLink>
        <NavLink className="nav-button" to="/create-account">
          Create Account{" "}
        </NavLink>
        <NavLink className="nav-button" to="/login">
          Log In{" "}
        </NavLink>
        <NavLink className="nav-button" to="/view-posts">
          View Posts{" "}
        </NavLink>
        <NavLink className="nav-button" to="/create-post">
          Make A Post{" "}
        </NavLink>
        <NavLink className="nav-button" to="/user-profile">
          Profile{" "}
        </NavLink>
        <NavLink className="nav-button" to="/">
          <button onClick={handleLogout}>Logout</button>
        </NavLink>
      </div>
      <div className="sideNavBar"></div>
    </div>
  );
}

export default NavBar;
