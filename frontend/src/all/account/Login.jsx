import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile, LoginUser, reset } from "../features/authSlice";
import { IoPerson,IoKeySharp } from "react-icons/io5";
import "./account.css";
import { useCookies } from "react-cookie";

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
      console.log(cookies.access_token);
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
    dispatch(getProfile());
    console.log(user.position);
    console.log(cookies.access_token);
  };

  return (
    <section className="hero is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4" id="signin">
              <form onSubmit={Auth} className="box">
                <h1 className="title is-2" id = "sign-in-text">Sign In</h1>
                <div className="field">
                  <label className="label"><IoPerson /> Username</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label"><IoKeySharp /> Password</label>
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
                    {isLoading ? "Loading..." : "Login"}
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