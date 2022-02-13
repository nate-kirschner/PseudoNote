import { useState, useRef, useEffect } from 'react';
import Letter from './Letter/Letter';
import { handleWordInput, handleOpenBracket, handleArrowDown, handleArrowUp, handleEnter } from './TextFieldService';
import Draggable from 'react-draggable';

import './TextField.scss';

export default function TextField({ num, top, left, textBoxes, setTextBoxes, setTextAreaMoving, textAreaRef }) {

    const [value, setValue] = useState([]);
    const [cursorPosition, setCursorPosition] = useState(0);
    const [letterCount, setLetterCount] = useState(0);
    
    const inputRef = useRef(null);

    useEffect(() => {
        setValue(textBoxes[num].value)
    }, [num])

    useEffect(() => {
        setTextBoxes({
            ...textBoxes,
            [num]: {
                ...textBoxes[num],
                value: value
            }
        })
    }, [value])

    const letterClicked = (letterNum) => {
        setCursorPosition(letterNum);
    }

    const handleKeyDown = (event) => {
        event.preventDefault();
        if (event.key === "ArrowLeft" || event.key === "Left") {
            setCursorPosition(cursorPosition - 1)
        } else if (event.key === "ArrowRight" || event.key === "Right") {
            setCursorPosition(cursorPosition + 1)
        } else if (event.key === "ArrowUp") {
            // does not work yet
            handleArrowUp(value, cursorPosition, setCursorPosition)
        } else if (event.key === "ArrowDown") {
            // does not work yet
            handleArrowDown(value, cursorPosition, setCursorPosition)
        } else if (event.key === "Tab") {
            handleInput("Tab")
        } else if (event.key === "Backspace" || event.key === "Delete") {
            let newValue = value;
            newValue.splice(cursorPosition - 1, 1);
            setValue(newValue);
            setCursorPosition(cursorPosition - 1)
        } else if ("({[".includes(event.key)) {
            handleOpenBracket(event.key, value, setValue, cursorPosition, setCursorPosition, handleInput);
        } else if (
                "abcdefghijklmnopqrstuvwxyz ".includes(event.key) || 
                "ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(event.key) || 
                "?<>,.;:!@#$%^&*-=_+|~`'\"\\/)}]".includes(event.key) || 
                "1234567890".includes(event.key)
                ) {
            handleInput(event.key)
        } else if (event.key === "Enter") {
            handleInput("Enter");
        }

        if (cursorPosition < 0) {
            setCursorPosition(0);
        } else if (cursorPosition > value.length) {
            setCursorPosition(value.length);
        }
    }

    const createLetter = (letter) => {
        let newLetter;
        let className = ""
        if (letter === " ") {
            newLetter = <>&nbsp;</>;
            className = "space"
        } else {
            newLetter = letter
        }
        setCursorPosition(cursorPosition + 1);
        setLetterCount(letterCount + 1);

        return {
            className: className,
            value: newLetter,
            letterCount: letterCount,
            letterClicked: letterClicked,
        }
    }

    const handleInput = (letter) => {
        let letterComp;
        if (letter === "Tab") {
            handleWordInput([
                ...value.slice(0, cursorPosition), 
                createLetter(" "), createLetter(" "), createLetter(" "), createLetter(" "),
                ...value.slice(cursorPosition, value.length)
            ], setValue, cursorPosition)
            setCursorPosition(cursorPosition + 4)
        } else if (letter === "Enter") {
            handleEnter(cursorPosition, setCursorPosition, letterCount, setLetterCount, handleWordInput, value, setValue, createLetter);
        } else if (letter === "[]" || letter === "()" || letter === "{}") {
            letterComp = [createLetter(letter[0]), createLetter(letter[1])];
            handleWordInput([
                ...value.slice(0, cursorPosition), 
                ...letterComp, 
                ...value.slice(cursorPosition, value.length)
            ], setValue, cursorPosition)
        } else {
            letterComp = createLetter(letter)
            handleWordInput([
                ...value.slice(0, cursorPosition), 
                letterComp, 
                ...value.slice(cursorPosition, value.length)
            ], setValue, cursorPosition)
        }
        
    }

    const textFieldClicked = () => {
        inputRef.current.focus();
    }

    const handleDrag = (e) => {
        setTextAreaMoving(true)
        const offsetLeft = textAreaRef.current.offsetLeft;
        const offsetTop = textAreaRef.current.offsetTop;
        const newTop = e.clientY - offsetTop;
        const newLeft = e.clientX - offsetLeft;
        setTextBoxes({
            ...textBoxes,
            [num]: {
                ...textBoxes[num],
                top: newTop,
                left: newLeft,
            }
        })
    }

    return (
        <Draggable
            handle=".handle"
            bounds="parent"
            onDrag={(e) => handleDrag(e)}
            onStop={() => setTimeout(() => setTextAreaMoving(false), 10)}
        >
            <div 
                className="textField"
                style={{ top: `${top}px`, left: `${left}px` }}
                onClick={(e) => textFieldClicked(e)}
                onKeyDown={(e) => handleKeyDown(e)}
            >
                <div className="handle" />
                <span className="value">
                    {
                        value.slice(0, cursorPosition).map(letter => {
                            return <Letter 
                                className={letter.className}
                                value={letter.value}
                                letterCount={letter.letterCount}
                                letterClicked={letter.letterClicked}
                            />
                        })
                    }
                </span>
                <input className="frontInput" type="text" ref={inputRef} onChange={(e) => handleInput(e.target.value)} value=""/>
                <span className="value">
                    {
                        value.slice(cursorPosition, value.length).map(letter => {
                            return <Letter 
                                className={letter.className}
                                value={letter.value}
                                letterCount={letter.letterCount}
                                letterClicked={letter.letterClicked || null}
                            />
                        })
                    }
                </span>

            </div>
        </Draggable>
    )
}