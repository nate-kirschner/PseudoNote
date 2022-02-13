import './Header.scss';
import CodeOptions from './CodeOptions.js';
import TextOptions from './TextOptions.js';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap');
</style>


export default function Header(props) {

    useEffect(() => {
        console.log(props.mode)
    }, [props.mode])

    const optionView = () => {
        if(props.mode === 'start') {
            return null;
        } else if (props.mode === 'text') {
            return <TextOptions setTextStyles={props.setTextStyles} textStyles={props.textStyles}/>    
        } else if (props.mode === 'code') {
            return <CodeOptions setCodeStyles={props.setCodeStyles} codeStyles={props.codeStyles}/>
        } else {
            return null;
        }
    }

    return (
        <div className={`header ${props.mode == "code" || props.mode === "text" ? "Norm" : ""}`}>
            <div className={`textButton ${props.mode == "code" ? "Code" : ""}`} onClick={() => props.setMode("text")}> Text </div>
            <div className={`codeButton ${props.mode == "text" ? "Text" : ""}`} onClick={() => props.setMode("code")}> Code </div> 
            {
                optionView()
            }
        </div>
    )
}

