// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearToken } from "../ReduxToolkit/TokenSlice";
import { toast } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const isActive = ({ isActive }) => {
  return isActive ? "active" : "nav-item";
};
const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.tokenReducer);
  const handlelogout = () => {
    dispatch(clearToken());
    toast.error("logout success");
  };
  const handleToggleClick = () => {
    setIsToggle((prev) => !prev);
  };

  console.log(isToggle);

  return (
    <div className="container navbar-container">
      <header>
        <div className="brand-logo">
          <span>Anmolic </span>
        </div>
        <ul
          className={` ${
            isToggle ? "toggle-parent-list flex" : "nav-list flex"
          }`}
        >
          <li>
            <NavLink to="/" className={isActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={isActive}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={isActive}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={isActive}>
              Services
            </NavLink>
          </li>
          {!token.length && (
            <>
              <li>
                <NavLink to="/login" className={isActive}>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className={isActive}>
                  SignUp
                </NavLink>
              </li>
            </>
          )}

          {token && (
            <li>
              <NavLink
                to="/"
                onClick={() => handlelogout()}
                className={isActive + " logout"}
              >
                Logout
              </NavLink>
            </li>
          )}
        </ul>
        <button
          className={`${
            isToggle ? "toggle-active-icon hamBurger-icon" : "hamBurger-icon"
          } `}
          onClick={handleToggleClick}
        >
          <GiHamburgerMenu />
        </button>
      </header>
    </div>
  );
};

export default Header;
