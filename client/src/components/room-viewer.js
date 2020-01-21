import React, { useEffect, useState } from 'react'
import * as api from '../api'

export function Room({name}){
    return (
        <li className="room">{name}</li>
    );
}

export default function(){
    const [rooms, setRooms] = useState([]);

    useEffect(()=>{
        setInterval(()=>{
            api.GetStatsAndRooms().then(response=>{
                setRooms(response.data.rooms);
            })
        },10000)       
    },[]);

    return (
        <ul className="rooms">
            {rooms && rooms.map((room)=>(<Room key={room} name={room} />))}
        </ul>
    );
}