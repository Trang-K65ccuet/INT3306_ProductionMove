
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./line.scss"
import { useState, useEffect } from "react";
import axios from "axios";
import { ResponsiveContainer } from "recharts";

const LineChart = (aspect) => {
  const [datat, setDatat] = useState({
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
      const resp = await axios.get('http://localhost:5000/productitem/importdistributor', {withCredentials: true});
      const label = [];
        const data = [];
        for(var i of resp.data[0]) {
            label.push(i.month);
            data.push(i.total)
        }
        setDatat(
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
    <ResponsiveContainer aspect={aspect}>
        <div className = "linechart">
            <Line data={datat} />
            <br />
            <p className = "text">Đã nhập</p>
        </div>
    </ResponsiveContainer>
  );

};

export default LineChart;