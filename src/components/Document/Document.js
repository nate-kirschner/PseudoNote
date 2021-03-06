import Header from './Header/Header';
import FileMenu from './FileMenu/FileMenu';
import TextArea from './TextArea/TextArea';
import React, { useState} from 'react';

import './Document.scss';

export default function Document() {

    //State Variables for the options in Text mode 
    const [textStyles, setTextStyles] = useState({
        bold: false,
        italicize: false,
        underline: false,
        highlight: false,
        font: "Calibri",
        fontSize: 18,
        fontColor: 'black',
        bulletPoints: false,
        numberList: false,
        alignText: "left"
    })

    const [codeStyles, setCodeStyles] = useState({
        colorTheme: "Default",
        fontSize: 14,
        language: "JavaScript"
    })

    const [textAreas, setTextAreas] = useState({});
    const [selectedTextArea, setSelectedTextArea] = useState(null);

    const [mode, setMode] = useState('text')

    const createNewTextArea = (name) => {
        const newTextArea = {
            order: Object.keys(textAreas).length,
            textBoxes: [],
            textBoxPositions: []
        }
        setTextAreas({
            ...textAreas,
            [name]: newTextArea
        })
        setSelectedTextArea(name)
    }

    return (
        <div className="document">
            <Header 
                setTextStyles={setTextStyles} 
                textStyles={textStyles} 
                setCodeStyles={setCodeStyles} 
                codeStyles={codeStyles}
                mode={mode}
                setMode={setMode}/>
            <FileMenu 
                textAreas={textAreas} 
                setTextAreas={setTextAreas}
                createNewTextArea={createNewTextArea}
                selectedTextArea={selectedTextArea} 
                setSelectedTextArea={setSelectedTextArea}
                mode={mode}
                setMode={setMode} 
            />
            {
                selectedTextArea && 
                    <TextArea 
                        name={selectedTextArea} 
                        textAreas={textAreas} 
                        setTextAreas={setTextAreas} 
                        mode={mode} 
                        textStyles={(mode === 'text') ? textStyles : codeStyles}
                    />
            }
        </div>
    )
}