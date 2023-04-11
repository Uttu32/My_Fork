import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setUsers(response.data);
    });
  }, []);

  const removeUser = (index) => {
    users.splice(index, 1);
    setUsers([...users]);
  };
  return (
    <div className="App">
      <h1> Data</h1>
      <table>
        <thead>
          <tr>
            <th>S. No</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((ele, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{ele.title}</td>
              <td>{ele.body}</td>
              <td>
                <button onClick={() => removeUser(index)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
