import React from 'react'

import '../styles/selected-card.css'

export default function({value, setUnselected}){
    return (
        <button className="selected-card" onClick={()=> setUnselected(null)}>
            {value}
        </button>
    );
}