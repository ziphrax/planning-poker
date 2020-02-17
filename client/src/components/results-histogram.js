import React, { createRef, useEffect } from 'react'
import Chart from 'chart.js'

import '../styles/results-histogram.css'

export default function({labels, title, data, color, backgroundColor}){
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
                beginAtZero:true,
                precision:0,
                stepSize:1,
                maxTicksLimit:10,
                animation:false,
                responsive: true,
                legend: {
                    display:false
                }
            }
        })
    },[data]);

    const backGroundStyle = {
        backgroundColor:backgroundColor
    }

    return (
        <div className="results-histogram-container">
            <canvas className="results-histogram neumorphic-inset" ref={chartRef} style={backGroundStyle}></canvas>
        </div>
    )
}