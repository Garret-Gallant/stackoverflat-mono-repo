import logo from "./logo.svg";
import { useState, useEffect } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  const onLogin = () => {
    fetch("/me")
      .then((r) => r.json)
      .then((data) => setUser(data.user));
  };

  return (
    <div className="App">
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
      <h1>Page Count: {count}</h1>
      {user ? <h2>User: {user.username}</h2> : "Not logged in."}
      <h1>Login</h1>
      <Login onLogin={onLogin} />
      <h1>Signup</h1>
      <SignUp onLogin={onLogin} />
    </div>
  );
}

export default App;
