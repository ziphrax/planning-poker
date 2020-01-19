import React from 'react'
import Card from './card'

import '../styles/standard-card-selector.css'

const cards = ["0","1","2","3","5","8","13","20","40","100",":coffee","?"];

export default function(){
    return (
        <div className="standard-card-selector">
            {cards.map((value)=>(
                <Card key={value} value={value} />
            ))}
        </div>
    )
}