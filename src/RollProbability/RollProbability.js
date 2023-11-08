import React from 'react';
import { useDice } from '../DiceContext';

function RollProbabilityComponent() {
    const { rollHistory } = useDice();

    return (
        <div>
            <h3>Roll Probability</h3>
        </div>
    );
}

export default RollProbabilityComponent;
