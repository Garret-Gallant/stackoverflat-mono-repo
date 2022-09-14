import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user, handleLogout }) {
  return (
    <div className="flex">
      <NavBarSide user={user} />
      <NavBarTop user={user} handleLogout={handleLogout} />
    </div>
  );
}

const NavBarTop = ({ user, handleLogout }) => {
  return (
    <div className="topNavBar w-fit ml-auto">
      <h2>User: {!!Object.keys(user).length ? user.username : "Anonymous"}</h2>
      <NavLink className="nav-button" to="/home">
        <span>Home </span>
      </NavLink>

      <NavLink className="nav-button" to="/view-posts">
        <span>View Posts </span>
      </NavLink>
      <NavLink className="nav-button" to="/create-post">
        <span>Make A Post </span>
      </NavLink>
      <NavLink className="nav-button" to="/user-profile">
        <span>Profile </span>
      </NavLink>
      {user.username !== "Anonymous" && user.username !== undefined ? (
        <NavLink className="nav-button" to="/">
          <button onClick={handleLogout}>Logout</button>
        </NavLink>
      ) : (
        <>
          <NavLink className="nav-button" to="/login">
            <button> Log in </button>
          </NavLink>
          <NavLink className="nav-button" to="/signup">
            <button> Sign up </button>
          </NavLink>
        </>
      )}
    </div>
  );
};

const NavBarSide = ({ user }) => {
  return (
    <div className="sideNavBar w-24 mr-auto">
      <h2 className="font-bold">Side Nav Bar</h2>
      <div className="">
        <NavLink className="nav-button" to="/home">
          <span>Home </span>
          <br />
        </NavLink>
        <NavLink className="nav-button" to="/view-posts">
          <span>View Posts </span>
          <br />
        </NavLink>
        <NavLink className="nav-button" to="/create-post">
          <span>Make A Post </span>
          <br />
        </NavLink>
        <NavLink className="nav-button" to="/user-profile">
          <span>Profile </span>
          <br />
        </NavLink>
      </div>
    </div>
  );
};
export default NavBar;
