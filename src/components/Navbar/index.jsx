import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" style={{ textDecoration: "none" }}>
        HOME
      </Link>
      <ul>
        <li>
          <Link to="/blog" style={{ textDecoration: "none" }}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/games" style={{ textDecoration: "none" }}>
            Games
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
