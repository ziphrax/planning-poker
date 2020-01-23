import React, { useState } from 'react';
import '../styles/username-input.css'

const DisplayName = ({name, setName}) => {
    return (
        <div>
            <label>Name: {name}</label>
            <button className="button-primary" type="button" onClick={e=> setName("")}>Clear Name</button>
        </div>
)}

const NameForm = ({handleClickEvent, setUsername}) => {
    return (
        <div>
            <label>Your Name</label>
            <input  className="input-left"
                    type="text" id="name" onChange={ e => setUsername(e.target.value) }/>
            <button className="button-right button-primary"
                    type="text" onClick={handleClickEvent}>Set Name</button>
        </div>
    )
}

export default function({name, setName}) {
    const [username, setUsername] = useState("");

    const handleClickEvent = (event) => {
        event.preventDefault();
        setName(username);
    };

    return (
        <div className="username-input">
            { name !== '' && <DisplayName name={name} setName={setName} />}
            { name === '' && <NameForm handleClickEvent={handleClickEvent} setUsername={setUsername} />}
        </div>
    )
}