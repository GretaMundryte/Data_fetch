import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/addUser">
        <button>Add new user</button>
      </Link>
      <Link to="/aditional">
        <button>Show additional component</button>
      </Link>
    </nav>
  );
};

export default Nav;
