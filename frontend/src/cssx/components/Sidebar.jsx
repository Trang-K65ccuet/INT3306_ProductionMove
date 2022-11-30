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
            <NavLink to={"/cssx/dashboard"}><FcHome /> Trang chủ</NavLink>
            </li>
            <li>
              <NavLink to={"/cssx/statistic"}><FcSalesPerformance /> Thống kê</NavLink>
            </li>
        </ul>
        <p className="menu-label">Kho</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/cssx/products"}><FcDocument /> Sản phẩm</NavLink>
          </li>
          <li>
            <NavLink to={"/cssx/import"}><FcImport /> Nhập hàng</NavLink>
          </li>
          <li>
            <NavLink to={"/cssx/export"}><FcExport /> Xuất hàng</NavLink>
          </li>
          <li>
            <NavLink to={"/cssx/insurance"}><FcSettings /> Bảo hành</NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;