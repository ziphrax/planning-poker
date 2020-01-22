import React, { useState } from 'react'
import '../styles/session-input.css'

const DisplaySession = ({roomId, setRoomId, leaveRoom}) => {
    const handleLeave = (e)=>{
        leaveRoom();
        setRoomId("");
    }
    
    return (<div>
        <label>Room Id: {roomId}</label>
        <button type="button" onClick={handleLeave}>Leave</button>
    </div>)
}

const JoinOrLeaveRoom = ({handleHost, handleJoin, setRoomId}) => {
    return (
        <div>
            <label>Room ID</label>
            <input type="text" onChange={e => setRoomId(e.target.value)} />            
            <button type="button" onClick={handleJoin}>Join</button>
            <button type="button" onClick={handleHost}>Host</button>
        </div>
    )
}

export default function({session, setSession, joinRoom, hostRoom, leaveRoom}){
    const [roomId, setRoomId] = useState("");

    const handleJoin = () => {
        setSession(roomId);
        joinRoom(roomId);
    }

    const handleHost = () => {
        hostRoom();
    }

    return (
        <div className="session-input">
            {session !== "" && <DisplaySession roomId={session} setRoomId={setSession} leaveRoom={leaveRoom} />}
            {session === "" && <JoinOrLeaveRoom handleHost={handleHost} handleJoin={handleJoin} setRoomId={setRoomId}/>}
        </div>
    )
}