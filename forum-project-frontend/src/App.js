import logo from "./logo.svg";
import { useState, useEffect } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import "./index.css";

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
    <div className="App">
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
      {Object.keys(user) ? <h2>User: {user.username}</h2> : "Not logged in."}
      <button onClick={handleLogout}>Logout</button>
      <h1>Login</h1>
      <Login onLogin={onLogin} />
      <h1>Signup</h1>
      <SignUp onLogin={onLogin} />
    </div>
  );
}

export default App;
