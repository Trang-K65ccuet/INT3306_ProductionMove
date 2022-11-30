import React from "react";
import { NavLink} from "react-router-dom";
import { FcExport, FcHome,FcImport,FcSalesPerformance,FcDocument } from "react-icons/fc";

const Sidebar = () => {
  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">Chung</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/ttbh/dashboard"}><FcHome /> Trang chủ</NavLink>
          </li>
          <li>
              <NavLink to={"/ttbh/statistic"}><FcSalesPerformance /> Thống kê</NavLink>
          </li>
        </ul>
        <p className="menu-label">Bảo hành</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/ttbh/products"}><FcDocument /> Kho</NavLink>
          </li>
          <li>
              <NavLink to={"/ttbh/import"}><FcImport/> Nhập</NavLink>
          </li>
          <li>
              <NavLink to={"/ttbh/export"}><FcExport /> Xuất</NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;