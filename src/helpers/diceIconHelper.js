// src/helpers/diceIconHelper.js or src/diceIconHelper.js
import {
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix
} from '@fortawesome/free-solid-svg-icons';

export const getDiceIcon = (diceValue) => {
    switch (diceValue) {
        case 1:
            return faDiceOne;
        case 2:
            return faDiceTwo;
        case 3:
            return faDiceThree;
        case 4:
            return faDiceFour;
        case 5:
            return faDiceFive;
        case 6:
            return faDiceSix;
        default:
            // It's usually good practice to handle unexpected values.
            console.error('Invalid dice value:', diceValue);
            return null;
    }
};
