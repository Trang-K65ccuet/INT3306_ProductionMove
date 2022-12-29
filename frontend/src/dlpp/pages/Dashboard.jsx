import Layout from "./Layout";
import React, { useEffect } from "react";
import Widget from "../widget/Widget";
import Chart from "../chart/Chart";
import "./pages.css"
import BarChart from "../barchart/BarChart";


const DashboardDLPP = () => {
  return (
    <Layout>
      <div className="widgets">
            <Widget type="products" />
            <Widget type="import" />
            <Widget type="export" />
            <Widget type="error" />
        </div>
        <div className="charts" >
          <div className ="bar" style={{ width: 1000 }}>
            <BarChart/>
          </div>
        </div>
    </Layout>
  );
};

export default DashboardDLPP;