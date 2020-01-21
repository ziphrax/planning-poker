import React, { useState } from 'react';
import './App.css';

import Title from './components/title'
import UsernameInput from './components/username-input'
import StandardCardSelector from './components/standard-card-selector'
import SessionInput from './components/session-input'
import ResultsHistogram from './components/results-histogram'

const labels = ["0 pts","1 pt","2 pts","3 pts", "5 pts",
                "8 pts", "14 pts", "20 pts", "40 pts"," 100 pts",":coffee","?","&infin;"
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

      <StandardCardSelector cardValue={cardValue} setCardValue={setCardValue} />
      
      <ResultsHistogram title="Results" 
                        labels={labels} 
                        data={data} 
                        color="#70CAD1" />

      <h2>&hearts; &diams; &spades; &clubs;&hearts; &diams; &spades; &clubs;&hearts; &diams; &spades; &clubs;&hearts; &diams; &spades; &clubs;</h2>
    </div>
  );
}

export default App;
