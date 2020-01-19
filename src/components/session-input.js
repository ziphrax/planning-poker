import React from 'react'
import '../styles/session-input.css'

export default function(){
    return (
        <div className="session-input">
            <label>Room ID</label>
            <input type="text" />
            <button type="button">Host</button>
            <button type="button">Join</button>
        </div>
    )
}