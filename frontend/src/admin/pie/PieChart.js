import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {useState } from "react";

function PieChart() {
    const ChartData = [{"total":58,"productline":"DELL"},{"total":53,"productline":"HP"}];

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
          ],
          borderWidth: 2,
        },
      ],
    });

  return <Pie data={chartData} />;
}

export default PieChart;