import Layout from "./Layout";
import React, { useEffect } from "react";
import Widget from "../widget/Widget";
import Chart from "../chart/Chart";
import "./pages.css"
import Featured from "../featured/Featured";
import PieChart from "../pie/PieChart";

const DashboardCSSX = () => {
  return (
    <Layout>
      <div className="widgets">
            <Widget type="import" />
            <Widget type="export" />
            <Widget type="error" />
        </div>
        <div className="charts">
          <Featured class ="featured" />
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

export default DashboardCSSX;