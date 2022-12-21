import Layout from "./Layout";
import React, { useEffect } from "react";
import Widget from "../widget/Widget";
import Chart from "../chart/Chart";
import "./pages.css"


const DashboardCSSX = () => {
  return (
    <Layout>
      <div className="widgets">
            <Widget type="products" />
            <Widget type="import" />
            <Widget type="export" />
            <Widget type="error" />
        </div>
        <div className="charts">
          <Chart title="Trong năm nay" aspect={3 / 1} />
        </div>
    </Layout>
  );
};

export default DashboardCSSX;