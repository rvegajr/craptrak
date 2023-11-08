// src/App.js
import React from 'react';
import Main from './Main/Main';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>CrapTrak</h1>
        </header>
        <main className="App-content">
          <Main />
        </main>
        <footer className="App-footer">
          {/* Add footer content if needed */}
        </footer>
      </div>
  );
}

export default App;
