import React from 'react';
import { Counter } from './features/counter/Counter';
import Invest  from './features/investCalc/Invest';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Invest />
      </header>
    </div>
  );
}

export default App;
