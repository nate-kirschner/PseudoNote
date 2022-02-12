import Header from './Header/Header';
import FileMenu from './FileMenu/FileMenu';
import TextArea from './TextArea/TextArea';
import React, {useEffect, useState} from 'react';

import './Document.scss';

export default function Document() {

    //State Variables for the options in Text mode 
    const [textStyles, setTextStyles] = useState({
        bold: false,
        italicize: false,
        underline: false,
        highlight: false,
        font: "Calibri",
        fontSize: 11,
        fontColor: 'Black',
        bulletPoints: false,
        numberList: false,
        alignText: "left"
    })

    const [codeStyles, setCodeStyles] = useState({
        colorTheme: "Default",
        fontSize: 12,
        language: "JavaScript"
    })

    const [textAreas, setTextAreas] = useState({});
    const [selectedTextArea, setSelectedTextArea] = useState(null);

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

    useEffect(() => {
        console.log(textAreas)
    }, [textAreas])

    return (
        <div className="document">
            <Header setTextStyles={setTextStyles} textStyles={textStyles} setCodeStyles={setCodeStyles} codeStyles={codeStyles}/>
            <FileMenu 
                textAreas={textAreas} 
                setTextAreas={setTextAreas}
                createNewTextArea={createNewTextArea}
                selectedTextArea={selectedTextArea} 
                setSelectedTextArea={setSelectedTextArea} 
            />
            {
                selectedTextArea && <TextArea name={selectedTextArea} textAreas={textAreas} setTextAreas={setTextAreas} />
            }
        </div>
    )
}