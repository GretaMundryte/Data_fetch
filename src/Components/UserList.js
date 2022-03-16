import React, { useState, useEffect } from "react";
import User from "./User";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const url = `https://605f7183e96e5c0017408a76.mockapi.io/users`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setUsers(response.data);
    });
  }, [url]);

  if (users.length !== 0) {
    return (
      <div>
        {users.map((user) => {
          return <User userData={user} key={user.id} />;
        })}
      </div>
    );
  }
  return <p>Vartorojų nėra</p>;
};

export default UserList;
