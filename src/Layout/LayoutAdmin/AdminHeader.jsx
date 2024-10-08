import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const AdminHeader = () => {
  const isActive = ({ isActive }) => {
    return isActive ? "active" : "";
  };
  return (
    <div className="container container-admin--header ">
      <section className="section-admin-header">
        <h2 className="title-heading"> Admin Panel</h2>
        <ul className="flex parent-header-list--admin">
          <li className="header-list--admin flex">
            <NavLink
              to="/admin/user"
              className={isActive}
            >
              <FaUser />
              users
            </NavLink>
          </li>
          <li className="header-list--admin flex">
            <NavLink to="/admin/contacts" className={isActive}>
              <FaMessage />
              contacts
            </NavLink>
          </li>
          <li className="header-list--admin flex">
            <NavLink to="/services" className={isActive}>
              <FaRegListAlt />
              services
            </NavLink>
          </li>
          <li className="header-list--admin flex">
            <NavLink to="/" className={isActive}>
              <FaHome />
              home
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AdminHeader;
