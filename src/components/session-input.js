import React, { useState } from 'react'
import '../styles/session-input.css'

export default function({setSession}){
    const [roomId, setRoomId] = useState("");

    const handleJoin = () => {
        setSession(roomId);
    }

    const handleHost = () => {

    }

    return (
        <div className="session-input">
            <label>Room ID</label>
            <input type="text" onChange={e => setRoomId(e.target.value)} />
            <button type="button" onClick={handleHost}>Host</button>
            <button type="button" onClick={handleJoin}>Join</button>
        </div>
    )
}