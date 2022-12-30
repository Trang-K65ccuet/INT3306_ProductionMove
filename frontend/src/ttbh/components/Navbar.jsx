import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../image/product.png";
import { LogOut, reset } from "../../all/features/authSlice";
import "./components.css";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <nav
        id="nav"
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink
            to="/ttbh/dashboard"
            className="navbar-item navbar-item-custom"
          >
            <img src={logo} width="10%" alt="logo" />
            <h1 className="logo-text logo-text-custom">Production Move</h1>
          </NavLink>
          <div className="buttons">
            <button onClick={logout} className="button is-light buttonShowResponsive" id="logout">
              <IoIosLogOut /> Đăng xuất
            </button>
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item navbar-item-custom">
              <div className="buttons">
                <button
                  onClick={logout}
                  className="button is-light"
                  id="logout"
                >
                  <IoIosLogOut /> Đăng xuất
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
