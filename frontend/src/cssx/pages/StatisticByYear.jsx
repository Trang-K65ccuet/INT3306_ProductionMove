import Layout from "./Layout";
import React, { useState, useEffect } from "react";
import "./pages.css";
import LineChart from "../linechart/LineChart";
import axios from "axios";
import PieChartInStatistic from "../pie/PieChartInStatistic";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const StatisticCSSXByYear = () => {
  const [yearInput, setYearInput] = useState(""); 
  const navigate = useNavigate(); 

    const {year} = useParams(); 
  //Danh cho bieu do tron cac san pham da ban
  const [sell, setsell] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(
        `http://localhost:5000/productitem/selledmanufacture/${year}`,
        { withCredentials: true }
      );
      const label = [];
      const data = [];
      for (var i of resp.data[1]) {
        label.push(i.productline);
        data.push(i.total);
      }
      setsell({
        labels: label,
        datasets: [
          {
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
            ],
          },
        ],
      });
    };
    fetchData();
  }, []);

  //Line chart
  const [monthimport, setmonthimport] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(
        `http://localhost:5000/productitem/statisticmanufacture/${year}`,
        { withCredentials: true }
      );
      const label = [];
      const data = [];
      for (var i of resp.data[0]) {
        label.push(i.month);
        data.push(i.totalquantity);
      }
      setmonthimport({
        labels: label,
        datasets: [
          {
            label: "Số lượng",
            data: data,
            backgroundColor: ["rgba(52, 125, 85, 1)"],
          },
        ],
      });
    };
    fetchData();
  }, []);

  const loadData =  async (e) => {
    e.preventDefault();
    try {
        navigate("cssx/statistic/statisticbyyear/" + yearInput); 
    } catch(error) {
        console.log(error);
    }
  }
  return (
    <Layout>
      <form onSubmit={loadData}>
        <div className="field">
          <label className="label">Năm</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Năm"
              value={yearInput}
              onChange={(e) => setYearInput(e.target.value)}
              required="required"

            />
          </div>
        </div>
        <button type="submit" className="button is-small is-info">
          Chọn
        </button>
      </form>
      <div className="chartstatistic">
        <div className="line-chart" style={{ width: 800 }}>
          <LineChart chartData={monthimport} />
          <p className="text">Đã nhập</p>
        </div>
        <div className="pie" style={{ width: 350 }}>
          <PieChartInStatistic chartData={sell} />
          <p className="text"> Đã bán </p>
          <br />
        </div>
      </div>
    </Layout>
  );
};

export default StatisticCSSXByYear;
