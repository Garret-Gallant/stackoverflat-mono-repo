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
  const [categoryName, setCategoryName] = useState("");

  console.log(categoryName);
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

  const goToHomePage = () => navigate("/home");
  const goToLangingPage = () => navigate("/");

  //Redirects to the home on login and landing on logout
  useEffect(() => {
    loggedIn ? goToHomePage() : goToLangingPage();
  }, [loggedIn]);

  return (
    <div className="app">
      {loggedIn ? (
        <NavBar
          user={user}
          handleLogout={handleLogout}
          setCategoryName={setCategoryName}
        />
      ) : null}
      <Routes>
        <Route exact path="/" element={<Landing onLogin={onLogin} />} />
        <Route exact path="/home" element={<Home user={user} />} />
        <Route
          path="/view-posts"
          element={<PostList user={user} categoryName={categoryName} />}
        />
        <Route
          path="/create-post"
          element={<PostForm user={user} onSubmit={goToHomePage} />}
        />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/create-account" element={<SignUp onLogin={onLogin} />} />
        <Route path="/user-profile" element={<Profile user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
