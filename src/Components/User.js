import React from "react";

const User = ({ userData }) => {
  return (
    <div id="userWrapper">
      <p>{userData.name}</p>
      <p>{userData.createdAt}</p>
    </div>
  );
};

export default User;
