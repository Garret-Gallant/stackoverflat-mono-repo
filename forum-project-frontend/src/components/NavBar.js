import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Having them split up makes sense to me here. Combine them if you prefer.
function NavBar({ user, handleLogout }) {
  return (
    <div>
      <img
        class="object-cover h-96 object-center"
        src="https://user-images.githubusercontent.com/81394542/190235133-396cb4ab-c85b-4190-a847-44153bf6cca4.png"
        alt="Stackoverflat Logo"
      />
      <div className="flex">
        <NavBarSide user={user} />
        <NavBarTop user={user} handleLogout={handleLogout} />
      </div>
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
      <button className="nav-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const NavBarSide = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  function toggleSideBarMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    fetch("/categories")
      .then((r) => r.json())
      .then((categoryData) => setCategories(categoryData));
  }, []);

  return isOpen ? (
    <button className="cat-button" onClick={toggleSideBarMenu}>
      View Specific Category
    </button>
  ) : (
    <div>
      <button className="cat-button" onClick={toggleSideBarMenu}>
        Close Menu
      </button>
      <div>
        {categories.map((category) => (
          <NavLink
            className="cat-button"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default NavBar;
