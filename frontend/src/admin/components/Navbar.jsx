import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../image/product.png";
import { useDispatch} from "react-redux";
import { LogOut, reset } from "../../all/features/authSlice";
import './components.css'
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
      <nav id = "nav" className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <NavLink to="/admin/dashboard" className="navbar-item">
            <img src={logo} width="70" alt="logo" />
            <p className="logo-text">Production Move</p>
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
            <div className="navbar-item">
              <div className="buttons">
              <button onClick={logout} className="button is-light" id = "logout">
                  <IoIosLogOut/>Đăng xuất
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