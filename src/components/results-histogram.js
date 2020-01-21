import React, { createRef, useEffect } from 'react'
import Chart from 'chart.js'

import '../styles/results-histogram.css'


// const data=
//     [{
//         x: xaxis,
//         y: [0,0,4,2,3,0,0,0,0,0,0,0],
//         type: 'bar'
//     }]


// const layout={
//     width:"100%",
//     height:"250px",
//     title:"Results"
// }

export default function({labels, title, data, color}){
    const chartRef = createRef();

    useEffect(() => {
        new Chart(chartRef.current,{
            type: 'bar',
            data: { 
                labels: labels,
                datasets:[{
                    label: title,
                    data : data,
                    backgroundColor: color
                }]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart'
                }
            }
        })
    });

    return (
        <canvas className="results-pictograph" ref={chartRef}></canvas>
    )
}