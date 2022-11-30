import Layout from "./Layout";
import Welcome from "../components/Welcome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../all/features/authSlice";


const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(getProfile());
    console.log("a");
  
  }, [dispatch, user]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(getProfile());
  };

  return (
    <Layout>
      <Welcome />
      <button onClick={Auth}>Set Cookie</button>
    </Layout>
  );
};

export default Dashboard;