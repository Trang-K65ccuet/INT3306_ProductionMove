import Layout from "./Layout";
import React from "react";
import Widget from "../widget/Widget";
import Featured from "../featured/Featured";
import Chart from "../chart/Chart";
import "./pages.css"
import PieChart from "../pie/PieChart";


const Dashboard = () => {
 
  return (
    <Layout>
      <div className="widgets">
            <Widget type="users" />
            <Widget type="products" />
            <Widget type="product" />
            <Widget type="error" />
        </div>
        <div className="charts">
          <Featured />
          <div class="pie" style={{ width: 500 }}>
            <div class = "border">
              <PieChart/>
              <br />
              <p class = "text">Tỷ lệ các sản phẩm</p>
            </div>

          </div>
          
        </div>
    </Layout>
  );
};

export default Dashboard;