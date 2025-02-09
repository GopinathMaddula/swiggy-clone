import React, { useContext } from "react";
import "./Header.css";
import UserContext from "../../context.ts";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Header = () => {
  const cartLength = useSelector((state: any) => state.cart.items.length);
  const { loggedInUser } = useContext(UserContext);
  return (
    <header className="header-container">
      <div className="nav-container">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>FOO</h1>
        </Link>

        <ul className="header-menu-container">
          <li>Search</li>

          <li style={{ fontWeight: "bold" }}>
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Cart {cartLength} items
            </Link>
          </li>

          <li>Sign in</li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
