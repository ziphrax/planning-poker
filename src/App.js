import React, { useState } from 'react';
import './App.css';

import Title from './components/title'
import UsernameInput from './components/username-input'
import StandardCardSelector from './components/standard-card-selector'
import SessionInput from './components/session-input'
// import ResultsHistogram from './components/results-histogram'

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
      
      {/* <ResultsHistogram /> */}
    </div>
  );
}

export default App;
