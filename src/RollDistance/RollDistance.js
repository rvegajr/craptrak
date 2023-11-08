import React from 'react';
import { useDice } from '../DiceContext';

function RollDistanceComponent() {
    const { rollHistory } = useDice();

    return (
        <div>
            <h3>Roll History</h3>
        </div>
    );
}

export default RollDistanceComponent;
