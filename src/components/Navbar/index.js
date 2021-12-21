import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.sass";

const NavBar = () => {
  return (
    <nav className="nav">
      <NavLink className="nav__link" to="/profile">
        Profile
      </NavLink>
      <NavLink className="nav__link" to="/chat">
        Chat
      </NavLink>
    </nav>
  );
};

export default NavBar;
