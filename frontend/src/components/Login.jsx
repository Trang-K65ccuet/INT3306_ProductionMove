import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { LoginUser, reset } from "../feature/AuthSlices.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-admin";
  const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const dispatch = useDispatch();
  const navigate = useNavigate();
 const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  
 //const user = true;
 //const isSuccess = true;

  useEffect(() => {
    if (!user || !isSuccess) {
      navigate("/dashboard");
    }
   // dispatch(reset());
  }, [user, isSuccess/*, dispatch*/, navigate]);

 /* const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ username, password }));
  };
  */
  return (
    <section className="hero is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form className="box"> 
                <h1 className="title is-2">Sign In</h1>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input
                    id="username"
                      type="text"
                      className="input"
                      placeholder="Username"
                      name="username"
                      value={username}
                      required
                      onChange={(e)=>setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                    id="password"
                      type="password"
                      value={password}
                      className="input"
                      placeholder="******"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                <button
                    type="submit"
                    className="button is-success is-fullwidth"
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;