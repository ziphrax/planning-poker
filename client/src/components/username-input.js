import React, { useState } from 'react';

const DisplayName = ({name, setName}) => {
    return (
        <div>
            <label>Name: {name}</label>
            <button type="button" onClick={e=> setName("")}>Clear Name</button>
        </div>
)}

const NameForm = ({handleClickEvent, setUsername}) => {
    return (
        <div>
            <label>Your Name</label>
            <input type="text" id="name" onChange={ e => setUsername(e.target.value) }/>
            <button type="text" onClick={handleClickEvent}>Set Name</button>
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
        <div>
            { name !== '' && <DisplayName name={name} setName={setName} />}
            { name === '' && <NameForm handleClickEvent={handleClickEvent} setUsername={setUsername} />}
        </div>
    )
}