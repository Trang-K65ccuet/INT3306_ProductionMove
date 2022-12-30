import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import logo from "../../image/product.png";
import { LogOut, reset } from "../../all/features/authSlice";
import './components.css';
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
    <div className="nav-bar">
      <nav id = "nav" className="navbar is-fixed-top-custom has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <NavLink to="/cssx/dashboard" className="navbar-item navbar-item-custom">
            <img src={logo} width="10%" alt="logo" />
            <h1 className="logo-text">Production Move</h1>
          </NavLink>
          <a
            href="!#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item navbar-item-custom">
              <div className="buttons">
              <button onClick={logout} className="button is-light" id="logout">
                  <IoIosLogOut/> Đăng xuất
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