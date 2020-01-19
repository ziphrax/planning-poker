import React from 'react'

import '../styles/card.css'

export default function({value, setSelected}){
    return (
        <button className="card" onClick={()=> setSelected(value)}>
            {value}
        </button>
    );
}