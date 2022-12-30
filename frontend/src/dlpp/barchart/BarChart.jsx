import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState, useEffect } from "react";
import axios from "axios";
import "./bar.scss"

const BarChart = () => {
  const [datat, setDatat] = useState({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });
  useEffect(()=> {
    const fetchData = async () =>  {
      const resp = await axios.get('http://localhost:5000/productitem/importdistributor/2022', {withCredentials: true});
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
                label: "Số lượng",
                data:data,
                backgroundColor: [
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                ]
            },
          ],
          
        }
        )

      };
  fetchData();
  }, [])
  // console.log(datat);
  
  return (
    <div className = "barchart">
        <p className="text">Nhập hàng 2022</p>
        <Bar data={datat} />
    </div>
  );

};

export default BarChart;