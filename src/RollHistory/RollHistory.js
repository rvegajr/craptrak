// src/RollHistory/RollHistory.js
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';
import { useDice } from '../DiceContext';
import { getDiceIcon } from '../helpers/diceIconHelper';
import './RollHistory.css';

const RollHistory = () => {
    const { rollHistory, selectedRoll, selectRoll, deleteRoll, selectedRollIndex } = useDice();
    const [confirmDeleteIndex, setConfirmDeleteIndex] = useState(null);
    const handleConfirmDelete = (index, confirm) => {
        if (confirm) {
            deleteRoll(index);
        }
        setConfirmDeleteIndex(null); // Remove the confirmation prompt
    };
    const handleSelectRoll = (index) => {
        selectRoll(index);
    };
    return (
        <div className="roll-history">
            {/* ... */}
            <ul>
                {rollHistory.map((roll, index) => (
                    <li
                        key={index}
                        className={`roll-entry ${selectedRollIndex === index ? 'selected-roll' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent the click from bubbling up to the container
                            handleSelectRoll(index);
                        }}>
                        <span className="roll-total">{roll.dice1 + roll.dice2}</span>
                        <FontAwesomeIcon className="fa-dice" icon={getDiceIcon(roll.dice1)} size="lg" />
                        <FontAwesomeIcon className="fa-dice" icon={getDiceIcon(roll.dice2)} size="lg" />
                        <FontAwesomeIcon
                            className="fa-trash"
                            icon={faTrash}
                            onClick={() => deleteRoll(index)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RollHistory;
