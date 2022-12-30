import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import { IoPerson,IoKeySharp } from "react-icons/io5";
import "./account.css";
import { useCookies } from "react-cookie";
import img_log from './image/img_log.png'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies('user');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      setCookie('access_token',user.token, {path: "/"});
      if(user.position=="admin") {
        navigate("/admin/dashboard");
      }
      if(user.position=="cssx") {
        navigate("/cssx/dashboard");
      }
      if(user.position=="dlpp") {
        navigate("/dlpp/dashboard");
      }
      if(user.position=="ttbh") {
        navigate("/ttbh/dashboard");
      }
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ username, password }));
    //dispatch(getProfile());
  };

  return (
    <section className="hero is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4" id="signin">
              <form onSubmit={Auth} className="box" id = "box">
                <img src="https://res.cloudinary.com/dmkdfrjpz/image/upload/v1672338271/ybzbkmdxukdtvybl5eyk.png" alt="Login" id = "login-img" />
                <h1 className="title is-2" id = 'production-move'>Production Move</h1>
                <div className="field">
                  <label className="label"><IoPerson /> Tài khoản</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Tài khoản"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label"><IoKeySharp /> Mật khẩu</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="******"
                    />
                  </div>
                </div>
                {isError && <p className="has-text-centered">{message}</p>}
                <div className="field mt-5">
                  <button
                    type="submit" id="button"
                    className="button is-success is-fullwidth"
                  >
                    {isLoading ? "Loading..." : "Đăng nhập"}
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;