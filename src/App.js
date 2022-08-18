import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="card-container">
      <div className="">
        {users.map((user) => (
          <div className="card">
            <p>Id:{user.id}</p>
            <h3>Name:{user.name}</h3>
            <p>Phone:{user.phone}</p>
            <p>Email:{user.email}</p>
            <p>Website:{user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
