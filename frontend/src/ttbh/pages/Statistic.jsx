import Layout from "./Layout";
import React, { useState, useEffect } from "react";
import "./pages.css"
import LineChart from "../linechart/LineChart";
import PieChartInStatistic from "../../cssx/pie/PieChartInStatistic";
import axios from "axios";

const StatisticTTBH = () => {

  const [year, setYear] = useState("2022");

//Line chart 
const [sell, setSell] = useState({
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
    const resp = await axios.get(`http://localhost:5000/productitem/allproductcantwarranty/${year}`, {withCredentials: true});
    const label = [];
      const data = [];
      for(var i of resp.data[0]) {
          label.push(i.month);
          data.push(i.total)
      }
      setSell(
        {
          labels:label,
          datasets: [{
              label:"Sản phẩm",
              data:data,
              backgroundColor: [
                'rgba(52, 125, 85, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(200, 15, 85, 0.6)',
                'rgba(15, 99, 132, 0.6)',
                'rgba(54, 162, 35, 0.6)',
                'rgba(255, 20, 86, 0.6)',
                'rgba(75, 192, 36, 0.6)',
                'rgba(128, 75, 97, 0.6)',
                'rgba(122, 35, 192, 0.6)',
              ]
          },
        ],
        
      }
      )
    };
fetchData();
}, [year])

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
    const resp = await axios.get(`http://localhost:5000/productitem/importproductwarranty/${year}`, {withCredentials: true});
    const label = [];
      const data = [];
      for(var i of resp.data[0]) {
          label.push(i.month);
          data.push(i.total)
      }
      setmonthimport(
        {
          labels:label,
          datasets: [{
              label:"Sản phẩm",
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
}, [year])

  return (
      <Layout>
            <div className="field">
              <label className="label">Năm</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Năm"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required="required"
                />
            </div>
          </div>
          <div className="chartstatistic">
              <div className = "line-chart" style={{ width: 800 }}>
                <LineChart chartData={monthimport} />
                <p className="text">Đã nhập</p>
              </div>
              <div className="pie" style={{ width: 350 }}>
                  <PieChartInStatistic chartData = {sell}/>
                  <p className="text"> Đã sửa xong </p>
                  <br />
            </div>
          </div>
      </Layout>
    );
};

export default StatisticTTBH;