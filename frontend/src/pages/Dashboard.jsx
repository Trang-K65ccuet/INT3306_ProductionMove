import React, { useState,useEffect } from "react";
import Layout from "./Layout";
import Welcome from "../components/Welcome";


const Dashboard = () => {

  return (
    <Layout>
      <Welcome />
    </Layout>
  );
};

export default Dashboard;