import React, { useEffect, useState } from "react";
import "./Players.css";
import Calculate from "../Calculate/Calculate";

const Players = props => {
  const [users, setUsers] = useState([]);
  const [celibrity, setCelibrity] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const followHandler = data => {
    console.log(data);
    const newcelibrity = [...celibrity, data];
    setCelibrity(newcelibrity);
  };


  return (
    <div className="container">
      <div id="counter-section">
        <Calculate celibrity = {celibrity}></Calculate> 
      </div>
      <div id="players" style={{ display: "flex" }}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {users.map(user => (
            <tbody>
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name} </td>
                <td>{user.email}</td>
                <td>
                  <button
                    id="followBtn"
                    className="btn btn-primary"
                    onClick={() => followHandler(user)}
                  >
                    Follow
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Players;
