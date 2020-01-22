import React, { createRef, useEffect } from 'react'
import Chart from 'chart.js'

import '../styles/results-histogram.css'

export default function({labels, title, data, color}){
    const chartRef = createRef();

    const max = Math.max(...data);

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
                beginAtZero:true,
                precision:0,
                stepSize:1,
                maxTicksLimit:10,
                animation:false,
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Histogram'
                }
            }
        })
    },[data]);

    return (
        <canvas className="results-pictograph" ref={chartRef}></canvas>
    )
}