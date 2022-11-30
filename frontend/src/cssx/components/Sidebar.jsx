import React from "react";
import { NavLink} from "react-router-dom";
import { IoHome } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">Chung</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/cssx/dashboard"}><IoHome /> Trang chủ</NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;