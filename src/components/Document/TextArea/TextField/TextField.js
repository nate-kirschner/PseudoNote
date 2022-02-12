import { useEffect, useState, useRef } from 'react';
import Letter from './Letter/Letter';

import './TextField.scss';

export default function TextField({ mode, top, left }) {

    const [value, setValue] = useState([]);
    const [cursorPosition, setCursorPosition] = useState(0);
    const [letterCount, setLetterCount] = useState(0);
    
    const inputRef = useRef(null);

    const letterClicked = (letterNum) => {
        setCursorPosition(letterNum);
    }


    const handleKeyPress = (event) => {
        if (event.key === "ArrowLeft" || event.key === "Left") {
            setCursorPosition(cursorPosition - 1)
        } else if (event.key === "ArrowRight" || event.key === "Right") {
            setCursorPosition(cursorPosition + 1)
        } else if (event.key === "Backspace" || event.key === "Delete") {
            let newValue = value;
            newValue.splice(cursorPosition, 1);
            setValue(newValue);
            setCursorPosition(cursorPosition - 1)
        } else {

        }

        if (cursorPosition < 0) {
            setCursorPosition(0);
        } else if (cursorPosition > value.length - 1) {
            setCursorPosition(value.length - 1);
        }
    }

    const handleInput = (letter) => {
        setCursorPosition(cursorPosition + 1);
        setLetterCount(letterCount + 1);
        const newLetter = <Letter value={letter} letterCount={letterCount} letterClicked={letterClicked} /> 
        setValue([...value.slice(0, cursorPosition), newLetter, ...value.slice(cursorPosition, value.length)])
    }

    const textFieldClicked = (e) => {
        inputRef.current.focus();
    }

    return (
        <div 
            className="textField"
            style={{ top: `${top}px`, left: `${left}px` }}
            onClick={(e) => textFieldClicked(e)}
            onKeyPress={(e) => handleKeyPress(e)}
            onKeyDown={(e) => handleKeyPress(e)}
        >
            <span className="value">{value.slice(0, cursorPosition)}</span>
            <input className="frontInput" type="text" ref={inputRef} onChange={(e) => handleInput(e.target.value)} value=""/>
            <span className="value">{value.slice(cursorPosition, value.length)}</span>

        </div>
    )
}