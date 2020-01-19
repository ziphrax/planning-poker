import React, { useState } from 'react'
import '../styles/session-input.css'

const DisplaySession = ({roomId, setRoomId}) => {
    return (<div>
        Room Id: {roomId}
        <button type="button" onClick={e=> setRoomId("")}>Leave</button>
    </div>)
}

const JoinOrLeaveRoom = ({handleHost, handleJoin, setRoomId}) => {
    return (
        <div>
            <label>Room ID</label>
            <input type="text" onChange={e => setRoomId(e.target.value)} />
            <button type="button" onClick={handleHost}>Host</button>
            <button type="button" onClick={handleJoin}>Join</button>
        </div>
    )
}

export default function({session, setSession}){
    const [roomId, setRoomId] = useState("");

    const handleJoin = () => {
        setSession(roomId);
    }

    const handleHost = () => {

    }

    return (
        <div className="session-input">
            {session !== "" && <DisplaySession roomId={session} setRoomId={setSession} />}
            {session === "" && <JoinOrLeaveRoom handleHost={handleHost} handleJoin={handleJoin} setRoomId={setRoomId}/>}
        </div>
    )
}