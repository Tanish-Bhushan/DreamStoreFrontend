import React from "react";
import logo from "../../../images/logo.png";
import {
  AiOutlineLogin,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import "./Header.css";
import { Link } from "react-router-dom";
import UserOptions from "./UserOptions";

const Header = ({ user }) => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <h3>
                <Link to="/">Home</Link>
              </h3>
            </li>
            <li>
              <h3>
                <Link to="/products">Products</Link>
              </h3>
            </li>
            <li>
              <h3>
                <Link to="/about">About</Link>
              </h3>
            </li>
            <li>
              <h3>Contact Us</h3>
            </li>
          </ul>
        </div>
        <div className="extras">
          <span>
            <Link to="/search">
              <AiOutlineSearch size={"2vmax"} />
            </Link>
          </span>
          <Link to="/search">
            <AiOutlineShoppingCart size={"2vmax"} />
          </Link>
        </div>

        <div className="loginOut">
          {user ? (
            <UserOptions user={user} />
          ) : (
            <Link to="/login" className="login">
              <AiOutlineLogin size={"2vmax"} />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
