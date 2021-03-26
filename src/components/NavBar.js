import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/" exact>
        Home
      </Link>
      {" - "}
      <Link to="/food1">Food1</Link>
      {" - "}
      <Link to="/search">Search</Link>
    </div>
  );
}
