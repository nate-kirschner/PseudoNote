import React, { useEffect, useState, useRef } from 'react';
import TextField from './TextField/TextField';

import './TextArea.scss';

export default function TextArea() {

    const [textBoxes, setTextBoxes] = useState([]);
    const [textBoxPositions, setTextBoxPositions] = useState([]);

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
            setTextBoxes([
                ...textBoxes, 
                <TextField top={top} left={left} />
            ])
        }
    }

    return (
        <div className="textArea"
            onClick={(e) => handleTextAreaClicked(e)}
        >
            {
                textBoxes
            }
        </div>
    )
}