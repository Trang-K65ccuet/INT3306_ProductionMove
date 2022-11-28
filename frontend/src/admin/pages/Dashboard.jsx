import Layout from "./Layout";
import Welcome from "../components/Welcome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../all/features/authSlice";


const Dashboard = () => {
  /*
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]); */

  return (
    <Layout>
      <Welcome />
      <button>Set Cookie</button>
    </Layout>
  );
};

export default Dashboard;