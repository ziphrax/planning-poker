import React, { useState} from 'react'
import Card from './card'
import SelectedCard from './selected-card'

import '../styles/standard-card-selector.css'

const cards = ["0","1","2","3","5","8","13","20","40","100",":coffee","?"];

export default function(){
    const [selected, setSelected] = useState(null);
    const setUnselected = () => {
        setSelected(null);
    }
    return (
        <div>
            <div>{selected}</div>
            {selected !== null && (
                <SelectedCard value={selected} setUnselected={setUnselected} />
            )}
            {selected === null && (
                <div className="standard-card-selector">
                    {cards.map((value)=>(
                        <Card key={value} value={value} setSelected={(v) => setSelected(v)} />
                    ))}
                </div>
            )}
        </div>
    )
}