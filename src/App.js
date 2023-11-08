import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import Main from './Main/Main';
import { DiceProvider, useDice } from './DiceContext'; // Adjust the path as needed
import './App.css';

function App() {
    return (
        <DiceProvider>
            <div className="App">
                <Header /> {/* Header is now a separate component */}
                <main className="App-content">
                    <Main />
                </main>
                <footer className="App-footer">
                    {/* Footer content */}
                </footer>
            </div>
        </DiceProvider>
    );
}

// Header component is now inside the DiceProvider, so it can use the useDice hook
const Header = () => {
    const { undoLastDelete } = useDice(); // Correctly calling useDice within the DiceProvider context

    return (
        <header className="App-header">
            <FontAwesomeIcon icon={faUndo} onClick={undoLastDelete} className="undo-icon" />
            <h1>CrapTrak</h1>
        </header>
    );
}

export default App;
