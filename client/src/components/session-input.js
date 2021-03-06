import React, { useState, isValidElement } from "react";
import "../styles/session-input.css";

const DisplaySession = ({ roomId, setRoomId, leaveRoom, clearScores }) => {
  const handleLeave = e => {
    leaveRoom();
    setRoomId("");
  };

  const handleClear = e => {
    clearScores();
  };

  return (
    <div className="padding-left-2 inline">
      <button className="button-primary" type="button" onClick={handleLeave}>
        {" "}
        Leave{" "}
        <i
          className="icon"
          style={{ fontFamily: "windings", fontWeight: "bold" }}
        >
          &#11189;
        </i>{" "}
      </button>
      <button className="button-primary" type="button" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

const JoinOrLeaveRoom = ({ handleHost, handleJoin, setRoomId }) => {
  return (
    <div className="session-form">
      <div className="session-form-component">
        <button className="button-primary" type="button" onClick={handleHost}>
          Host <i className="icon">&diams;</i>
        </button>
      </div>
      <div className="session-form-component">Or</div>
      <div className="session-form-component">
        <input
          className=""
          type="text"
          onChange={e => setRoomId(e.target.value)}
        />
      </div>
      <div className="session-form-component">
        <button className="button-primary" type="button" onClick={handleJoin}>
          Join <i className="icon">&spades;</i>
        </button>
      </div>
    </div>
  );
};

export default function({
  session,
  setSession,
  joinRoom,
  hostRoom,
  leaveRoom,
  clearScores
}) {
  const [roomId, setRoomId] = useState("");

  const handleJoin = () => {
    setSession(roomId);
    joinRoom(roomId);
  };

  const handleHost = () => {
    hostRoom();
  };

  return (
    <React.Fragment>
      <div className="session-input">
        {session !== "" && (
          <DisplaySession
            roomId={session}
            setRoomId={setSession}
            leaveRoom={leaveRoom}
            clearScore={clearScores}
          />
        )}
        {session === "" && (
          <JoinOrLeaveRoom
            handleHost={handleHost}
            handleJoin={handleJoin}
            setRoomId={setRoomId}
          />
        )}
        {session !== "" && (
          <button type="button" className="button-primary inline">
            Room: {session}
          </button>
        )}
      </div>
    </React.Fragment>
  );
}
