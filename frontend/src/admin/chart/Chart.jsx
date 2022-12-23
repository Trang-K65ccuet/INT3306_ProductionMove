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
    Sold: 40,
    Error: 2
  },
  {
    Month: "2",
    Sold: 30,
    Error: 1
  },
  {
    Month: "3",
    Sold: 20,
    Error: 9
  },
  {
    Month: "4",
    Sold: 27,
    Error: 3
  },
  {
    Month: "5",
    Sold: 25,
    Error: 5
  },
  {
    Month: "6",
    Sold: 23,
    Error: 3
  },
  {
    Month: "7",
    Sold: 34,
    Error: 2
  },
  {
    Month: "8",
    Sold: 34,
    Error: 7
  },
  {
    Month: "9",
    Sold: 25,
    Error: 4
  },
  {
    Month: "10",
    Sold: 55,
    Error: 3
  },
  {
    Month: "11",
    Sold: 34,
    Error: 1
  },
  {
    Month: "12",
    Sold: 43,
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
          <Bar dataKey="Sold" fill="#5BD150" />
          <Bar dataKey="Error" fill="#993122" />

        </BarChart>

      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
