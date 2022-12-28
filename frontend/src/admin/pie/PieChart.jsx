import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./pie.scss"
import { useState, useEffect } from "react";
import axios from "axios";

const PieChart = () => {
  const [product, setProduct] = useState([[{totalquantity: 0, month: 0, year: 0}], [{total: 0, productline: ''}]]);
  const getProduct= async () => {
    const response = await axios.get("http://localhost:5000/productitem/statistic",{withCredentials: true});
    setProduct(response.data);
    console.log(response.data);
  };
  console.log(product[1]);
  useEffect(() => {
    getProduct();
  }, []);

  const ChartData = product.at(1);
    //const ChartData = [{"total":58,"productline":"DELL"},{"total":53,"productline":"HP"}];

    const [chartData, setChart] = useState({
      labels: ChartData.map((data) => data.productline),
      datasets: [
        {
          label: "Số lượng: ",
          data: ChartData.map((data) => data.total),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#f3ba2f",
            "#ecf0f1",
            "#50AF95",
            "#2a71d0",
            "#fcf3f1",
          ],
          borderWidth: 2,
        },
      ],
    });

  return (
    <div class = "piechart">
        <Pie data={chartData} />
    </div>
  );

};

export default PieChart;