import React, { useEffect, useState, useRef } from 'react';
import TextField from './TextField/TextField';

import './TextArea.scss';

export default function TextArea({ name, textAreas, setTextAreas }) {

    const [textBoxes, setTextBoxes] = useState([]);
    const [textBoxPositions, setTextBoxPositions] = useState([]);

    const [textAreaMoving, setTextAreaMoving] = useState(false);

    const textAreaRef = useRef(null);

    useEffect(() => {
        if (textAreas[name]) {
            setTextBoxes(textAreas[name].textBoxes || [])
            setTextBoxPositions(textAreas[name].textBoxPositions || [])   
        }
    }, [name])

    useEffect(() => {
        setTextAreas({
            ...textAreas,
            [name]: {
                ...textAreas[name],
                textBoxes: textBoxes,
                textBoxPositions: textBoxPositions
            }
        })
    }, [name, textBoxes, textBoxPositions])

    const handleTextAreaClicked = (e) => {
        const offsetLeft = textAreaRef.current.offsetLeft;
        const offsetTop = textAreaRef.current.offsetTop;
        let top = e.clientY - offsetTop;
        let left = e.clientX - offsetLeft;

        if (!textAreaMoving) {
            let outsideTextBox = true;
            textBoxPositions.forEach(box => {
                outsideTextBox = 
                    outsideTextBox && 
                    ((top < box.top || top > (box.top + box.height)) ||
                    (left < box.left || left > (box.left + box.width)))
            })
            if (outsideTextBox) {
                setTextBoxPositions([...textBoxPositions, {top: (top), left: (left), width: 250, height: 300}])
                setTextBoxes({
                    ...textBoxes,
                    [Object.keys(textBoxes).length]: {
                        num: Object.keys(textBoxes).length,
                        value: [],
                        top: top,
                        left: left,
                        mode: "code"
                    }
                })
            }
        }

        
    }

    return (
        <div className="textArea"
            onClick={(e) => handleTextAreaClicked(e)}
            ref={textAreaRef}
            // onClick={(e) => console.log("top", e.screenY, "left", e.screenX)}
        >
            {
                Object.values(textBoxes).map(box => {
                    return <TextField 
                        num={box.num} 
                        top={box.top} 
                        left={box.left} 
                        textBoxes={textBoxes} 
                        setTextBoxes={setTextBoxes} 
                        setTextAreaMoving={setTextAreaMoving} 
                        textAreaRef={textAreaRef}
                        />
                })
            }
        </div>
    )
}