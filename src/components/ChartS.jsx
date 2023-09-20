import { Paper } from '@mui/material';
import { Chart } from 'chart.js/auto';
import  { useEffect, useRef } from 'react'
import React from 'react';



const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    values: [10, 20, 15, 25, 30],
  };


const ChartS = (props) => {

    const chartRef = useRef(null); // Declare chartRef using useRef

    useEffect(() => {
      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
  
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.labels,
            datasets: [
              {
                label: 'Data',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
                borderColor: 'rgba(75, 192, 192, 1)', // Border color
                borderWidth: 1, // Border width
              },
            ],
          },
          options: {
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }, []); // Add an empty dependency array to run this effect only once


  return (
    <Paper sx={{width:'500px', height:'250px' ,backgroundColor:(props.style.props?'#232323':'#ffff')}}>
<canvas ref={chartRef}  ></canvas>
{console.log()}
</Paper>
  )
}

export default ChartS