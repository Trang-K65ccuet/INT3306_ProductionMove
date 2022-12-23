import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./chart.scss";

const data = [
  {
    Month: "1",
    Insurance: 51,
    Error: 3
  },
  {
    Month: "2",
    Insurance: 5,
    Error: 2
  },
  {
    Month: "3",
    Insurance: 70,
    Error: 10
  },
  {
    Month: "4",
    Insurance: 18,
    Error: 8
  },
  {
    Month: "5",
    Insurance: 40,
    Error: 15
  },
  {
    Month: "6",
    Insurance: 22,
    Error: 6
  },
  {
    Month: "7",
    Insurance: 40,
    Error: 2
  },
  {
    Month: "8",
    Insurance: 10,
    Error: 0
  },
  {
    Month: "9",
    Insurance: 46,
    Error: 1
  },
  {
    Month: "10",
    Insurance: 30,
    Error: 2
  },
  {
    Month: "11",
    Insurance: 20,
    Error: 3
  },
  {
    Month: "12",
    Insurance: 55,
    Error: 2
  },
];
const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart
          width={700}
          height={100}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          data={data}
        >
          <CartesianGrid
            strokeDasharray="1 2"
            stroke="gray"
            className="chatGrid"
          />
          <XAxis dataKey= "Month" />

          <Tooltip />
          <Legend/>
          <Bar dataKey="Insurance" fill="#5BD150" />
          <Bar dataKey="Error" fill="#993122" />

        </BarChart>

      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
