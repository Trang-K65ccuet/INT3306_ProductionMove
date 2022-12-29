import React from "react";
import { NavLink} from "react-router-dom";
import { FcImport, FcExport,FcSalesPerformance,FcSettings,FcHome,FcDocument } from "react-icons/fc";

const Sidebar = () => {
  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">Chung</p>
        <ul className="menu-list">
            <li>
              <NavLink to={"/dlpp/dashboard"}><FcHome /> Trang chủ</NavLink>
            </li>
            <li>
              <NavLink to={"/dlpp/statistic"}><FcSalesPerformance /> Thống kê</NavLink>
            </li>
        </ul>
        <p className="menu-label">Kho</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dlpp/products"}><FcDocument /> Sản phẩm</NavLink>
          </li>
          {/* <li>
            <NavLink to={"/dlpp/import"}><FcImport /> Nhập hàng</NavLink>
          </li> */}
          <li>
            <NavLink to={"/dlpp/export"}><FcExport /> Bán hàng</NavLink>
          </li>
          <li>
            <NavLink to={"/dlpp/insurance"}><FcSettings /> Bảo hành</NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;