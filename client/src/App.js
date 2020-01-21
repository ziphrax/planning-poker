import React, { useState } from 'react';
import './App.css';

import Title from './components/title'
import UsernameInput from './components/username-input'
import StandardCardSelector from './components/standard-card-selector'
import SessionInput from './components/session-input'
import ResultsHistogram from './components/results-histogram'

const labels = ["0", String.fromCharCode(189), "1", "2", "3", "5",
                "8", "14", "20", "40"," 100",String.fromCharCode(9749),"?", String.fromCharCode(8734)
];

const data = [1,2,3];

function App() {
  const [name, setName] = useState("");
  const [session, setSession] = useState("");
  const [cardValue, setCardValue] = useState(null);

  return (
    <div className="App">
      <Title />
      
      <UsernameInput name={name} setName={setName} />
      <SessionInput session={session} setSession={setSession} />

      <StandardCardSelector cards={labels} cardValue={cardValue} setCardValue={setCardValue} />
      
      <ResultsHistogram title="Results" 
                        labels={labels} 
                        data={data} 
                        color="#70CAD1" />

      <h2>&hearts; &diams; &spades; &clubs;&hearts; &diams; &spades; &clubs;&hearts; &diams; &spades; &clubs;&hearts; &diams; &spades; &clubs;</h2>
    </div>
  );
}

export default App;
