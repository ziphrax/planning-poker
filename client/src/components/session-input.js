import React, { useState, isValidElement } from 'react'
import '../styles/session-input.css'

const DisplaySession = ({roomId, setRoomId, leaveRoom}) => {
    const handleLeave = (e)=>{
        leaveRoom();
        setRoomId("");
    }
    
    return (
        <div className="padding-left-2">            
            <button className="button-primary" type="button" onClick={handleLeave}>Leave</button>
        </div>
    );
}

const JoinOrLeaveRoom = ({handleHost, handleJoin, setRoomId}) => {
    return (
        <div className="session-form">
            <div className="session-form-component">
                <button className="button-primary" type="button" onClick={handleHost}>Host</button>
            </div>
            <div className="session-form-component">Or</div>
            <div className="session-form-component">
                <input className="" type="text" onChange={e => setRoomId(e.target.value)} />  
            </div>
            <div className="session-form-component">          
                <button className="button-primary" type="button" onClick={handleJoin}>Join</button>
            </div>
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
        <React.Fragment>
            <div className="session-input">
                {session !== "" && <DisplaySession roomId={session} setRoomId={setSession} leaveRoom={leaveRoom} />}
                {session === "" && <JoinOrLeaveRoom handleHost={handleHost} handleJoin={handleJoin} setRoomId={setRoomId}/>}
            </div>
            {session !== "" &&  <div>Room: {session}</div>}
        </React.Fragment>
    )
}