import React, { useEffect, useState } from "react";
import "./Players.css";
import Calculate from "../Calculate/Calculate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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

  const myImage = (id) => {
   return `https://i.picsum.photos/id/${id}/200/300.jpg`
  }


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
              <th>Photo</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {users.map(user => (
            <tbody>
              <tr>
                <th scope="row">{user.id}</th>
                <th> <img className="img-thumbnail randomImage" src={myImage(user.id)}></img> </th>
                <td>{user.name} </td>
                <td>{user.email}</td>
                <td>
                  <div className="action">
                  {<FontAwesomeIcon icon={faCoffee} />}
                  <button
                    id="followBtn"
                    className="btn btn-primary"
                    onClick={() => followHandler(user)}
                  >
                    Follow
                  </button>
                  </div>
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
