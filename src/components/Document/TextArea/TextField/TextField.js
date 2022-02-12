import { useEffect, useState, useRef } from 'react';
import Letter from './Letter/Letter';
import { handleCodeFormatting } from './TextFieldService';

import './TextField.scss';

export default function TextField({ mode, top, left }) {

    const [value, setValue] = useState([]);
    const [cursorPosition, setCursorPosition] = useState(0);
    const [letterCount, setLetterCount] = useState(0);
    
    const inputRef = useRef(null);

    useEffect(() => {
        handleCodeFormatting.bind(this);
    }, [])

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
            newValue.splice(cursorPosition - 1, 1);
            setValue(newValue);
            setCursorPosition(cursorPosition - 1)
        } else {

        }

        if (cursorPosition < 0) {
            setCursorPosition(0);
        } else if (cursorPosition > value.length) {
            setCursorPosition(value.length);
        }
    }

    const handleInput = (letter) => {
        let newLetter;
        if (letter === " ") {
            newLetter = <>&nbsp;</>
        } else {
            newLetter = letter
        }
        setCursorPosition(cursorPosition + 1);
        setLetterCount(letterCount + 1);
        
        setValue([
            ...value.slice(0, cursorPosition), 
            <Letter 
                    className={""}
                    value={newLetter}
                    letterCount={letterCount} 
                    letterClicked={letterClicked}
            />, 
            ...value.slice(cursorPosition, value.length)])

        let className = "";
        let numLetters = 0;
        if (mode === "code") {
            const formatting = handleCodeFormatting([...value], letter);
            className = formatting.className;
            numLetters = formatting.numLetters;
            // console.log(className)
            // console.log(numLetters)
            if (className !== "") {
                for (let i = value.length - 1 - numLetters; i < value.length - 1; i++) {
                    console.log(className)
                    console.log("value", value[i])
                    if (value[i].props.value) {
                        console.log("props")
                        value[i] = (
                            <Letter 
                                className={value[i].props.value + className}
                                value={value[i].props.value}
                                letterCount={value[i].props.letterCount} 
                                letterClicked={value[i].props.letterClicked}
                            />
                        )
                    } else {
                        console.log("no props")
                    }
                    
                }
            }
        }
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