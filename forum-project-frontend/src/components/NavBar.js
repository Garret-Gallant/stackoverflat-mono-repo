import React, {useState} from "react";
import { NavLink } from "react-router-dom";

// Having them split up makes sense to me here. Combine them if you prefer.
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
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

const NavBarSide = ({ user, categories }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  function toggleSideBarMenu(){
    setIsOpen(!isOpen)
  }

  return (
    isOpen ? <button className="cat-button" onClick={toggleSideBarMenu}>View Specific Category</button> :
    <div>
      <button className="cat-button" onClick={toggleSideBarMenu}>Close Menu</button>
      <div>
        <NavLink className="nav-button" to="/home">
          <span>category 1</span>
          <br />
        </NavLink>
        <NavLink className="nav-button" to="/view-posts">
          <span>Category 2</span>
          <br />
        </NavLink>
        <NavLink className="nav-button" to="/create-post">
          <span>Category 3</span>
          <br />
        </NavLink>
        <NavLink className="nav-button" to="/user-profile">
          <span>Category 4</span>
          <br />
        </NavLink>
      </div>
    </div>
  );
};
export default NavBar;
