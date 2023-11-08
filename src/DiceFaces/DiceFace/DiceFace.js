import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import { useDice } from '../../DiceContext'; // Ensure this import is correct
import './DiceFace.css';

const diceIcons = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];

function DiceFace({ diceNumber }) {
    const { currentRoll, setCurrentRoll } = useDice();

    const handleDiceClick = (value) => {
        // Toggle the selected state for the die or set a new value
        const newValue = currentRoll[diceNumber] === value ? null : value;
        setCurrentRoll({ ...currentRoll, [diceNumber]: newValue });
    };

    return (
        <div className="dice-container">
            {diceIcons.map((icon, index) => {
                const value = index + 1; // Determine the value for each dice face (1-6)
                const isSelected = currentRoll[diceNumber] === value; // Determine if the dice face is selected
                return (
                    <button
                        key={value}
                        className={`dice ${isSelected ? 'selected' : ''}`} // Apply the 'selected' class if the dice face is selected
                        onClick={() => handleDiceClick(value)}
                    >
                        <FontAwesomeIcon icon={icon} size="4x" />
                    </button>
                );
            })}
        </div>
    );
}

export default DiceFace;
