import React, { useEffect, useState, useRef } from 'react';
import TextField from './TextField/TextField';

import './TextArea.scss';

export default function TextArea({ name, textAreas, setTextAreas }) {

    const [textBoxes, setTextBoxes] = useState([]);
    const [textBoxPositions, setTextBoxPositions] = useState([]);

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
        const top = e.clientY;
        const left = e.clientX;

        let outsideTextBox = true;
        textBoxPositions.forEach(box => {
            outsideTextBox = 
                outsideTextBox && 
                ((top < box.top || top > (box.top + box.height)) ||
                (left < box.left || left > (box.left + box.width)))
        })
        if (outsideTextBox) {
            setTextBoxPositions([...textBoxPositions, {top: top, left: left, width: 250, height: 300}])
            setTextBoxes({
                ...textBoxes,
                [(top + left)]: {
                    value: [],
                    top: top,
                    left: left,
                    mode: "code"
                }
            })
        }
    }

    return (
        <div className="textArea"
            onClick={(e) => handleTextAreaClicked(e)}
        >
            {
                Object.values(textBoxes).map(box => {
                    return <TextField top={box.top} left={box.left} textBoxes={textBoxes} setTextBoxes={setTextBoxes} />
                })
            }
        </div>
    )
}