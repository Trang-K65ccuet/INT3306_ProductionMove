import Layout from "./Layout";
import React, { useEffect } from "react";
import "./pages.css"
import PieStatistic from "../pie/PieStatistic";
import LineChart from "../linechart/LineChart";


const StatisticCSSX = () => {

  return (
      <Layout>
          <div className="charts">
            <div className="right">
              <div className="form">
                  <form action="">
                    <h1 class = "choose-text">Chọn năm</h1>
                    <div className="main">
                      <input 
                        type="number"
                        className="input"
                        
                       />
                    </div>
                  <div className="main">
                    <div className="control">
                      <button className="button is-success">
                        Submit
                      </button>
                    </div>
                  </div>
                  </form>
                </div>
              <div className="pie" style={{ width: 450 }}>
                <div className = "border">
                  <PieStatistic/>
                  <br />
                  <p className = "text">Tỷ lệ sản phẩm đã bán</p>
                </div>
            </div>
          </div>
          <div className="left">
              <div className = "line-chart" style={{ width: 700 }}>
                <LineChart />
              </div>
            </div>
        </div>
      </Layout>
    );
};

export default StatisticCSSX;