import React, { useState } from 'react'
import '../styles/session-input.css'

const DisplaySession = ({roomId, setRoomId, leaveRoom}) => {
    const handleLeave = (e)=>{
        leaveRoom();
        setRoomId("");
    }
    
    return (<div>
        <label>Room Id: {roomId}</label>
        <button className="button-primary" type="button" onClick={handleLeave}>Leave</button>
    </div>)
}

const JoinOrLeaveRoom = ({handleHost, handleJoin, setRoomId}) => {
    return (
        <div>
            <label>Room ID</label>
            <button className="button-primary button-left" type="button" onClick={handleHost}>Host</button>
            <input className="input-center" type="text" onChange={e => setRoomId(e.target.value)} />            
            <button className="button-primary button-right" type="button" onClick={handleJoin}>Join</button>
            
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