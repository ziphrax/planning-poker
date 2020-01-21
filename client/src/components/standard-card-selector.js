import React, { useState} from 'react'
import Card from './card'
import SelectedCard from './selected-card'

import '../styles/standard-card-selector.css'

export default function({cards}){
    const [selected, setSelected] = useState(null);
    const setUnselected = () => {
        setSelected(null);
    }
    return (
        <div>
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