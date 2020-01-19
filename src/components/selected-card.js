import React from 'react'

import '../styles/card.css'

export default function({value, setUnselected}){
    return (
        <button className="card" onClick={()=> setUnselected(null)}>
            {value}
        </button>
    );
}