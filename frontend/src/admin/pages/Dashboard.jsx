import Layout from "./Layout";
import Welcome from "../components/Welcome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile} from "../../all/features/authSlice";
import Widget from "../widget/Widget";
import Featured from "../featured/Featured";
import Chart from "../chart/Chart";
import "./pages.css"



const Dashboard = () => {
  return (
    <Layout>
      <div className="widgets">
            <Widget type="users" />
            <Widget type="products" />
            <Widget type="sold" />
            <Widget type="error" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Trong năm nay" aspect={2 / 1} />
        </div>
    </Layout>
  );
};

export default Dashboard;