import Layout from "./Layout";
import React, { useState, useEffect } from "react";
import "./pages.css"
import LineChart from "../linechart/LineChart";
import axios from "axios";
import PieChartInStatistic from "../pie/PieChartInStatistic";

const StatisticCSSX = () => {

  //Danh cho bieu do tron san pham loi
  const [error, seterror] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });
  useEffect(()=> {
    const fetchData = async () =>  {
      const resp = await axios.get('http://localhost:5000/productitem/totalfaultitem', {withCredentials: true});
        const label = [];
        const data = [];
        for(var i of resp.data[1]) {
            label.push(i.productline);
            data.push(i.total)
        }
        seterror(
          {
            labels:label,
            datasets: [{
                data:data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                ]
            },
          ],
          
        }
        )
      };
  fetchData();
  }, [])


  //Danh cho bieu do tron cac san pham da ban
  const [sell, setsell] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });
  useEffect(()=> {
    const fetchData = async () =>  {
      const resp = await axios.get('http://localhost:5000/productitem/selledmanufacture/2022', {withCredentials: true});
        const label = [];
        const data = [];
        for(var i of resp.data[1]) {
            label.push(i.productline);
            data.push(i.total)
        }
        setsell(
          {
            labels:label,
            datasets: [{
                data:data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                ]
            },
          ],
          
        }
        )

      };
  fetchData();
  }, [])

  //Line chart 
  const [monthimport, setmonthimport] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });
  useEffect(()=> {
    const fetchData = async () =>  {
      const resp = await axios.get('http://localhost:5000/productitem/statisticmanufacture/2022', {withCredentials: true});
      const label = [];
        const data = [];
        for(var i of resp.data[0]) {
            label.push(i.month);
            data.push(i.totalquantity)
        }
        setmonthimport(
          {
            labels:label,
            datasets: [{
                label:"Số lượng",
                data:data,
                backgroundColor: [
                  'rgba(52, 125, 85, 1)',
                ]
            },
          ],
          
        }
        )
      };
  fetchData();
  }, [])

  return (
      <Layout>
          <div className="charts">
            <div className="left">
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
              <div className = "line-chart" style={{ width: 800 }}>
                <LineChart chartData={monthimport} />
                <p className="line-text">Đã nhập</p>
              </div>
            </div>
            <div className="right">
              <div className="pie" style={{ width: 350 }}>
                <div className = "border">
                  <PieChartInStatistic chartData = {sell}/>
                  <p className="text-pie"> Đã bán </p>
                  <br />
                  <PieChartInStatistic chartData = {error}/>
                  <p className="text-pie">Lỗi</p>
                </div>
            </div>
          </div>
        </div>
      </Layout>
    );
};

export default StatisticCSSX;