import React, { useState} from 'react'
import Card from './card'
import SelectedCard from './selected-card'

import '../styles/standard-card-selector.css'

export default function({cards, vote}){
    const [selected, setSelected] = useState(null);
    const setUnselected = () => {
        setSelected(null);
    }

    const handleVote = (value) => {
        setSelected(value);
        vote(value);
    }
    
    return (
        <div>
            {selected !== null && (
                <SelectedCard value={selected} setUnselected={setUnselected} />
            )}
            {selected === null && (
                <div className="standard-card-selector">
                    {cards.map((value)=>(
                        <Card key={value} value={value} setSelected={(v) => handleVote(v)} />
                    ))}
                </div>
            )}
        </div>
    )
}