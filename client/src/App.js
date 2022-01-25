import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/getUsers").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const createUser = () => {
    axios
      .post("http://localhost:3001/createUser", {
        name:  name ,
        age:  age ,
        username:  username ,
      })
      .then((response) => {
        alert("usercreated");
      });
    setName("");
    setAge(0);
    setUsername("");
  };
  return (
    <div className="App">
      <div>
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
      <div>
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
