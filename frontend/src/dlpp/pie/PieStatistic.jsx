import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./pie.scss"
import { useState, useEffect } from "react";
import axios from "axios";

const PieStatistic = () => {
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
      const resp = await axios.get('http://localhost:5000/productitem/selledmanufacture/2022', {withCredentials: true});
        const label = [];
        const data = [];
        for(var i of resp.data[1]) {
            label.push(i.productline);
            data.push(i.total)
        }
        setDatat(
          {
            labels:label,
            datasets: [{
                data:data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 254, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(152, 54, 114, 0.6)',
                  'rgba(27, 135, 99, 0.6)',
                  'rgba(2, 75, 251, 0.6)',
                  'rgba(52, 125, 85, 0.6)',
                  'rgba(251, 155, 15, 0.6)',
                  'rgba(236, 157, 125, 0.6)',
                  'rgba(52, 68, 175, 0.6)',
                  'rgba(255, 156, 77, 0.6)',
                ]
                
            },
          ],
          
        }
        )

      };
  fetchData();
  }, [])
  console.log(datat);
  
  return (
    <div className = "piechart">
        <Pie data={datat} />
    </div>
  );

};

export default PieStatistic;