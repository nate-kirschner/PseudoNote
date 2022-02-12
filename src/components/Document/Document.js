import Header from './Header/Header';
import FileMenu from './FileMenu/FileMenu';
import TextArea from './TextArea/TextArea';
import React, {useState} from 'react';

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
    
    return (
        <div className="document">
            <Header setTextStyles={setTextStyles} textStyles={textStyles}/>
            <FileMenu />
            <TextArea />
        </div>
    )
}