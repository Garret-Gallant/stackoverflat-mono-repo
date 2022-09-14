import { useState, useEffect } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Home from "./Home";
import Landing from "./Landing";
import { Route, Routes } from "react-router-dom";
import "../index.css";

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  const onLogin = () => {
    fetch("/me")
      .then((r) => r.json())
      .then((data) => setUser(data))
      .then(setLoggedIn(true))
      .then(fetchPosts());
  };

  const fetchPosts = (param = "") => {
    let pageinated = param ? `?page=${param}` : "";
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => setPosts(data));
  };

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then(() => setUser({}));
  };

  return (
    <div>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route exact path="/" element={<Landing onLogin={onLogin} />} />
        <Route
          exact
          path="/home"
          element={<Home posts={posts} fetchPosts={fetchPosts} />}
        />
        <Route path="/view-posts" />
        <Route path="/create-post" />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/create-account" element={<SignUp onLogin={onLogin} />} />
        <Route path="/user-profile" element={<Profile user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
