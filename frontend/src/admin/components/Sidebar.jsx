import React from "react";
import { NavLink} from "react-router-dom";
import { IoPerson, IoPricetag, IoHome } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/admin/dashboard"}><IoHome /> Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/products"}><IoPricetag /> Products</NavLink>
          </li>
        </ul>
        <p className="menu-label">Admin</p>
        <ul className="menu-list">
          <li>
          <NavLink to={"/admin/users"}><IoPerson /> Users</NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;