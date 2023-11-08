import React, { createContext, useState, useContext } from 'react';

const DiceContext = createContext();

export const useDice = () => useContext(DiceContext);

export const DiceProvider = ({ children }) => {
    const [rollHistory, setRollHistory] = useState([]);
    const [currentRoll, setCurrentRoll] = useState({ dice1: null, dice2: null });
    const [deletedItems, setDeletedItems] = useState([]); // To store deleted items for undo functionality
    const [selectedRoll, setSelectedRoll] = useState(null); // To track selected roll
    const [selectedRollIndex, setSelectedRollIndex] = useState(null);

    const selectRoll = (roll) => {
        setSelectedRoll(roll);
    };

    // Function to deselect a roll
    const deselectRoll = () => {
        setSelectedRollIndex(null);
    };

    const deleteRoll = (index) => {
        const newRollHistory = [...rollHistory];
        const deletedItem = newRollHistory.splice(index, 1);
        setRollHistory(newRollHistory);
        setDeletedItems([...deletedItems, ...deletedItem]);
    };

    const undoLastDelete = () => {
        const lastDeletedItem = deletedItems.pop();
        if (lastDeletedItem) {
            setRollHistory([...rollHistory, lastDeletedItem]);
        }
    };

    const addRollToHistory = (newRoll) => {
        setRollHistory(prevHistory => [newRoll, ...prevHistory]); // Add new roll to the start of the history
    };

    // Automatically add to the roll history when both dice are selected
    React.useEffect(() => {
        if (currentRoll.dice1 && currentRoll.dice2) {
            addRollToHistory(currentRoll);
            setCurrentRoll({ dice1: null, dice2: null }); // Reset current roll
        }
    }, [currentRoll]);

    return (
        <DiceContext.Provider value={{ rollHistory, currentRoll, setCurrentRoll, deleteRoll, selectRoll, deselectRoll }}>
            {children}
        </DiceContext.Provider>
    );
};