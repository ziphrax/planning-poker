import React from 'react'

import '../styles/card.css'

export default function({value}){
    return (
        <button className="card">
            {value}
        </button>
    );
}