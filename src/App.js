import React from 'react';
import './App.css';

import Title from './styles/title'
import UsernameInput from './components/username-input'
import StandardCardSelector from './components/standard-card-selector'
import SessionInput from './components/session-input'
import ResultsHistogram from './components/results-histogram'

function App() {
  return (
    <div className="App">
      <Title />
      <UsernameInput />
      <SessionInput />
      <StandardCardSelector />
      <ResultsHistogram />
    </div>
  );
}

export default App;
