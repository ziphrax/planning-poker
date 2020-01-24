import React, { useState, useEffect } from 'react';
import './App.css';

import Title from './components/title';
import UsernameInput from './components/username-input';
import StandardCardSelector from './components/standard-card-selector';
import SessionInput from './components/session-input';
import ResultsHistogram from './components/results-histogram';
import SuiteLine from './components/suite-line';

import * as api from './api';

const labels = [
  "0", String.fromCharCode(189), 
  "1", "2", "3", "5",
  "8", "14", "20", "40"," 100", 
  String.fromCharCode(9749),"?", String.fromCharCode(8734)
];

const roomToData = (labels, room) => {
  let data = labels.map(value => {
    let count = 0;

    if(room.votes){
      Object.keys(room.votes).map(key => { 
        if(room.votes[key].vote === value){
          count++;
        }
        return true;
      });
    }

    return count;
  });

  return data;
}


function App() {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [currentRoom, setCurrentRoom] = useState(null);
  const [cardValue, setCardValue] = useState(null);

  useEffect(()=>{
    window.interval = setInterval(()=>{
      if(currentRoom != null) {
        api.GetRoom(currentRoom.roomId)
          .then(response => {
            setCurrentRoom(response.data);
          }).catch(err=> {
            console.log(err);
            setCurrentRoom({});
          });
      }
    }, 5000);
  },[roomId])

  const joinRoom = (roomId) => {
    api.GetRoom(roomId).then((response)=> {      
      setCurrentRoom(response.data);
    }).catch(err=> {
      console.log(err);
      setCurrentRoom({});
    });
  }

  const hostRoom = () => {
    const data = {
      host: name
    };

    api.PostHostRoom(data).then((response)=>{
        setCurrentRoom(response.data);
        setRoomId(response.data.roomId);
      }).catch(err=> {
        console.log(err);
        setCurrentRoom({});
        setRoomId("No room at the in");
      });
  }

  const leaveRoom = () => {
    setCurrentRoom(null);
    setRoomId("");
    clearInterval(window.interval);
  }

  const vote = (value) => {
    const data = {
      name: name,
      vote: value,
      time: new Date()
    }
    api.PostVote(currentRoom.roomId, data).then(response => {
      setCurrentRoom(response.data);
    }).catch(err=> {
      console.log(err);
      setCurrentRoom({});
    });
  }

  return (
    <div className="App">      
      <Title />

      <div className="Main">
      
        <UsernameInput name={name} setName={setName} />

        {/* { name && <RoomViewer />} */}

        { name && 
          <SessionInput session={roomId} 
                        setSession={setRoomId} 
                        joinRoom={joinRoom} 
                        hostRoom={hostRoom} 
                        leaveRoom={leaveRoom} />}

        { currentRoom != null &&  
          <StandardCardSelector cards={labels} 
                                cardValue={cardValue} 
                                setCardValue={setCardValue} 
                                vote={vote} /> }
        
        { currentRoom != null && 
          <ResultsHistogram title="Results" 
                            labels={labels} 
                            data={roomToData(labels, currentRoom)} 
                            color="#33658A" 
                            backgroundColor="#fafafa"/>}
      </div>
      <div className="Footer">
        <SuiteLine />
      </div>
    </div>
  );
}

export default App;
