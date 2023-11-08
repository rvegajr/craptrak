import React, { useState } from 'react';
import DiceFace from '../DiceFaces/DiceFace/DiceFace';
import './Main.css';
import {DiceFacesProvider, DiceProvider} from "../DiceContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { useDice } from '../DiceContext';
import RollHistoryComponent from '../RollHistory/RollHistory';
import RollDistanceComponent from '../RollDistance/RollDistance';
import RollProbabilityComponent from '../RollProbability/RollProbability';

function Main() {
    const [diceSelection, setDiceSelection] = useState({ dice1: null, dice2: null });
    const { deselectRoll } = useDice();

    const handleDiceSelect = (diceNumber, value) => {
        // Update the selection state for the corresponding dice
        setDiceSelection((prevSelection) => ({
            ...prevSelection,
            [diceNumber]: prevSelection[diceNumber] === value ? null : value
        }));
        // Add any additional logic you need, like updating an application-wide state or buffer
    };
    return (
        <DiceProvider>
            <div className="Main">
                <div className="top-half">
                    <div className="dice-section">
                        <h2>Dice 1</h2>
                        <DiceFace diceNumber="dice1" onDiceSelect={handleDiceSelect} />
                    </div>
                    <div className="dice-section">
                        <h2>Dice 2</h2>
                        <DiceFace diceNumber="dice2" onDiceSelect={handleDiceSelect} />
                    </div>
                </div>
                <div className="bottom-half" onClick={deselectRoll}>
                    <div className="column">
                        <RollHistoryComponent />
                    </div>
                    <div className="column">
                        <RollDistanceComponent />
                    </div>
                    <div className="column">
                        <RollProbabilityComponent />
                    </div>
                </div>
            </div>
        </DiceProvider>
    );
}

export default Main;
