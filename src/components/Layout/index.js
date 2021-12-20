import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Navbar";
import { AiOutlineHome } from "react-icons/ai";

import "./layout.sass";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="wrapper">
      <div className="navigation">
        <Link className="logo" to="/">
          <AiOutlineHome />
          <p>React Chat</p>
        </Link>
        <h1 className="title">{pageTitle}</h1>
        <NavBar />
      </div>

      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
