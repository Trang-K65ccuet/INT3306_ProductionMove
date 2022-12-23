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
    Import:51,
    Export: 40,
    Error: 2
  },
  {
    Month: "2",
    Import:5,
    Export: 30,
    Error: 1
  },
  {
    Month: "3",
    Import:43,
    Export: 20,
    Error: 9
  },
  {
    Month: "4",
    Import:45,
    Export: 27,
    Error: 3
  },
  {
    Month: "5",
    Import:25,
    Export: 25,
    Error: 5
  },
  {
    Month: "6",
    Import:74,
    Export: 23,
    Error: 3
  },
  {
    Month: "7",
    Import:35,
    Export: 64,
    Error: 2
  },
  {
    Month: "8",
    Import:5,
    Export: 34,
    Error: 7
  },
  {
    Month: "9",
    Import:29,
    Export: 25,
    Error: 4
  },
  {
    Month: "10",
    Import:35,
    Export: 55,
    Error: 3
  },
  {
    Month: "11",
    Import:55,
    Export: 34,
    Error: 1
  },
  {
    Month: "12",
    Import:44,
    Export: 43,
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
          <Bar dataKey="Import" fill="#73DCB9" />
          <Bar dataKey="Export" fill="#5BD150" />
          <Bar dataKey="Error" fill="#993122" />

        </BarChart>

      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
