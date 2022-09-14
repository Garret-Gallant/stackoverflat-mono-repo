import { useState, useEffect } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Home from "./Home";
import Landing from "./Landing";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { Route, Routes, useNavigate } from "react-router-dom";
import "../index.css";

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  //Sets state and makes cookie session r.ok is true if backend doesnt throw http error
  const onLogin = () => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("Not logged in");
        }
      })
      .then((data) => setUser(data))
      .then(() => setLoggedIn(true));
  };

  //Deletes session cookie
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      setUser({});
      setLoggedIn(false);
    });
  };

  //Fetches posts from production database
  const fetchPosts = (param = "") => {
    let pageinated = param ? `?page=${param}` : "";
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => setPosts(data));
  };

  //Redirects to the home on login and landing on logout
  useEffect(() => {
    const goToHomePage = () => navigate("/home");
    const goToLangingPage = () => navigate("/");
    loggedIn ? goToHomePage() : goToLangingPage();
  }, [loggedIn]);

  return (
    <div>
      {loggedIn ? <NavBar user={user} handleLogout={handleLogout} /> : null}
      <Routes>
        <Route exact path="/" element={<Landing onLogin={onLogin} />} />
        <Route
          exact
          path="/home"
          element={<Home posts={posts} fetchPosts={fetchPosts} />}
        />
        <Route path="/view-posts" element={<PostList />} />
        <Route path="/create-post" element={<PostForm user={user} />} />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/create-account" element={<SignUp onLogin={onLogin} />} />
        <Route path="/user-profile" element={<Profile user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
