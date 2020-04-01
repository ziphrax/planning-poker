import React, { useState } from "react";
import "../styles/username-input.css";

const DisplayName = ({ name, setName }) => {
  return (
    <button
      type="button"
      className="button-primary"
      onClick={e => setName("")}
      tooltip="Change Name"
    >
      <i className="icon" style={{ fontFamily: "windings" }}>
        &#9998;
      </i>{" "}
      Change Your Name
    </button>
  );
};

const NameForm = ({ handleClickEvent, setUsername }) => {
  return (
    <div className="name-form">
      <div className="name-form-component">
        <label>Your Name</label>
      </div>
      <div className="name-form-component">
        <input
          type="text"
          id="name"
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className="name-form-component">
        <button
          className="button-primary"
          type="text"
          onClick={handleClickEvent}
        >
          Set Name <i className="icon">&#10004;</i>
        </button>
      </div>
    </div>
  );
};

export default function({ name, setName }) {
  const [username, setUsername] = useState("");

  const handleClickEvent = event => {
    event.preventDefault();
    setName(username);
  };

  return (
    <div className="username-input">
      {name !== "" && <DisplayName name={name} setName={setName} />}
      {name === "" && (
        <NameForm
          handleClickEvent={handleClickEvent}
          setUsername={setUsername}
        />
      )}
    </div>
  );
}
