import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar({user, handleLogout}) {
  return(
    <div>
      {Object.keys(user) ? (
            <h2>User: {user.username}</h2>
          ) : (
            "Not logged in."
          )}
      <NavLink className='nav-button' to="/">Home</NavLink>
      <NavLink className='nav-button' to="/create-account">Create Account</NavLink>
      <NavLink className='nav-button' to="/login">Log In</NavLink>
      <NavLink className='nav-button' to="/view-posts">View Posts</NavLink>
      <NavLink className='nav-button' to="/create-post">Make A Post</NavLink>
      <NavLink className='nav-button' to="/user-profile">Profile</NavLink>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default NavBar;