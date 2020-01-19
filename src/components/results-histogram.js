import React from 'react'
import '../styles/results-histogram.css'

import Plot from 'react-plotly.js'

const xaxis = ["0 pts","1 pt","2 pts","3 pts", "5 pts",
                "8 pts", "14 pts", "20 pts", "40 pts"," 100 pts",":coffee","?"
];

const data=
    [{
        x: xaxis,
        y: [0,0,4,2,3,0,0,0,0,0,0,0],
        type: 'bar'
    }]


const layout={
    width:"100%",
    height:"250px",
    title:"Results"
}

export default function(){
    return (
        <div className="results-pictograph">
            <Plot 
                data={data}
                layout={layout} />
        </div>
    )
}