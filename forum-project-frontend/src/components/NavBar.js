import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Having them split up makes sense to me here. Combine them if you prefer.
function NavBar({ user, handleLogout, setCategoryName }) {
  return (
    <div>
      <div>
        <img
          class="object-cover h-96 object-center w-full"
          src="https://user-images.githubusercontent.com/81394542/190235133-396cb4ab-c85b-4190-a847-44153bf6cca4.png"
          alt="Stackoverflat Logo"
        />
      </div>
      <NavBarSide user={user} setCategoryName={setCategoryName} />
      <NavBarTop
        user={user}
        handleLogout={handleLogout}
        setCategoryName={setCategoryName}
      />
    </div>
  );
}

const NavBarTop = ({ user, handleLogout, setCategoryName }) => {
  return (
    <div className="top-nav-bar w-fit h-fit absolute right-0 top-96">
      <h2>User: {!!Object.keys(user).length ? user.username : "Anonymous"}</h2>
      <NavLink className="nav-button" to="/home">
        <span>Home </span>
      </NavLink>

      <NavLink
        className="nav-button"
        to="/view-posts"
        onClick={() => setCategoryName("")}
      >
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

const NavBarSide = ({ user, setCategoryName }) => {
  const [isOpen, setIsOpen] = useState(!false);
  const [categories, setCategories] = useState([]);

  function toggleSideBarMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    fetch("/categories")
      .then((r) => r.json())
      .then((categoryData) => setCategories(categoryData));
  }, []);

  return isOpen ? (
    <button className="cat-button w-fit" onClick={toggleSideBarMenu}>
      View Specific Category
    </button>
  ) : (
    <div className="w-fit">
      <button className="cat-button w-fit" onClick={toggleSideBarMenu}>
        Close Menu
      </button>
      <div className="buttons absolute">
        {categories.map((category) => (
          <button
            onClick={() => setCategoryName(category.name)}
            className="cat-button"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};
export default NavBar;
