import React from "react";
import { NavLink} from "react-router-dom";
import { IoHome } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/ttbh/dashboard"}><IoHome /> Dashboard</NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;