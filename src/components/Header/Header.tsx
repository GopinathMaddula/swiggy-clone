import React, { useContext } from "react";
import "./Header.css";
import UserContext from "../../context.ts";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <header className="header-container">
      <div className="nav-container">
        <h1>FOODY</h1>
        <ul className="header-menu-container">
          <li>Search</li>
          <li>Cart</li>
          <li>Sign in</li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
