import React, { useState } from 'react';


export default function({setName}) {
    const [username, setUsername] = useState("");

    const handleClickEvent = (event) => {
        event.preventDefault();
        setName(username);
    };

    return (
        <div>
            <label>Your Name</label>
            <input type="text" id="name" onChange={ e => setUsername(e.target.value) }/>
            <button type="text" onClick={handleClickEvent}>Set Name</button>
        </div>
    )
}