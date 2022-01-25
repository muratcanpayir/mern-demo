import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getUsers").then((response) => {
      setUsers(response.data);
    });
  }, []);
  return (
    <div className="App">
      {users.map((user) => {
        return (
          <div key={user._id}>
            <div>Name: {user.name}</div>
            <div>Age: {user.age}</div>
            <div>Username: {user.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
