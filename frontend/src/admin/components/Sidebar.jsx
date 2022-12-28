import React from "react";
import { NavLink} from "react-router-dom";
import { FcHome, FcDocument, FcBusinessman } from "react-icons/fc";
import './components.css'

const Sidebar = () => {
  return (
    <div className ="side-bar">
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">Chung</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/admin/dashboard"}><FcHome /> Trang chủ</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/products"}><FcDocument /> Sản phẩm</NavLink>
          </li>
        </ul>
        <p className="menu-label">Admin</p>
        <ul className="menu-list">
          <li>
          <NavLink to={"/admin/users"}><FcBusinessman /> Người dùng</NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;