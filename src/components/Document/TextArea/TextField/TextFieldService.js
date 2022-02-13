import Letter from "./Letter/Letter";

export {
    handleWordInput,
    handleOpenBracket,
    handleEnter,
    handleArrowUp,
    handleArrowDown
}

function handleEnter(cursorPosition, setCursorPosition, letterCount, setLetterCount, handleWordInput, value, setValue, createLetter) {
    const letterComp = {
        className: "lineBreak",
        value: "",
        letterCount: letterCount
    }

    let i = cursorPosition - 1;
    let lastChar = value[i].value;
    while (i > 0 && value[i].className === "space") {
        i--;
        lastChar = value[i].value;
    }
    setLetterCount(letterCount + 1);

    if ("([{".includes(lastChar)) {
        handleWordInput([
            ...value.slice(0, cursorPosition), 
            letterComp, 
            [createLetter(" "), createLetter(" "), createLetter(" "), createLetter(" ")],
            letterComp,
            ...value.slice(cursorPosition, value.length)
        ], setValue, cursorPosition)
        setCursorPosition(cursorPosition + 2);
    } else {
        handleWordInput([
            ...value.slice(0, cursorPosition), 
            letterComp, 
            ...value.slice(cursorPosition, value.length)
        ], setValue, cursorPosition)
        setCursorPosition(cursorPosition + 2);
    }
}

function handleArrowUp(value, cursorPosition, setCursorPosition) {
    // let cursorDistToLineBegin = 0;
    // let cursorDistToLineEnd = 0;
    // let i = cursorPosition;
    // while (i < value.length - 1 && (value[i] && value[i].props.className !== "lineBreak")) {
    //     cursorDistToLineEnd++;
    //     i++;
    // }    
    // i = cursorPosition;
    // while (i > 0 && (value[i] && value[i].props.className !== "lineBreak")) {
    //     cursorDistToLineBegin++;
    //     i--;
    // }
}

function handleArrowDown(value, cursorPosition, setCursorPosition) {

}

function handleOpenBracket(openBracket, value, setValue, cursorPosition, setCursorPosition, handleInput) {
    let closeBracket;
    if (openBracket === "(") {
        closeBracket = ")";
    } else if (openBracket === "{") {
        closeBracket = "}";
    } else if (openBracket === "[") {
        closeBracket = "]";
    } else {
        return;
    }
    handleInput(openBracket + closeBracket)
}

function handleWordInput(value, setValue, cursorPosition) {
    const lastLetter = value[cursorPosition];
    if (lastLetter) {
        console.log(lastLetter)
        // last letter was a space, new line, tab
        if  (lastLetter && 
            ((lastLetter.className === "space") || 
            (lastLetter.className === "lineBreak") ||
            (lastLetter.length === 4)))
        { 
            let i = cursorPosition - 1;
            let lastWord = "";
            while   (i >= 0 && value[i] && 
                    (value[i].className !== "space" && value[i].className !== "lineBreak") &&
                    (value[i].length !== 4)) {
                lastWord += value[i].value;
                i--;
            }
            lastWord = lastWord.split("").reverse().join("");
            identifyKeywords(value, setValue, lastWord, cursorPosition);
        } else {
            setValue(value)
        }
    }
    
}

function identifyKeywords(value, setValue, lastWord, cursorPosition) {
    let className;
    if (keywords[lastWord]) {
        className = keywords[lastWord];
    } else {
        className = "text";
    }

    const wordLength = lastWord.length;
    const newValue = value.map((val, index) => {
        if (index > (cursorPosition - wordLength - 1) && index < cursorPosition) {
            // return (
            //     <Letter 
            //         className={val.props.className + " " + className}
            //         value={val.props.value}
            //         letterCount={val.props.letterCount} 
            //         letterClicked={val.props.letterClicked}
            //     />
            // )
            return {
                className: val.className + " " + className,
                value: val.value,
                letterCount: val.letterCount,
                letterClicked: val.letterClicked
            }
        } else {
            return val;
        }
    })
    setValue(newValue)
}

const keywords = {
    for: "for",
    if: "if",
    else: "else",
    function: "function",
    return: "return",
    let: "let",
    const: "const",
    true: "true",
    false: "false",
}