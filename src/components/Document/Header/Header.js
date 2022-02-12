import './Header.scss';
import CodeOptions from './CodeOptions.js';
import TextOptions from './TextOptions.js';
import { useState } from 'react/cjs/react.development';



export default function Header(props) {

    const [mode, setMode] = useState('start')

    const optionView = () => {
        if(mode == 'start') {
            return <div/>
        } else if (mode == 'text') {
            return <TextOptions setTextStyles={props.setTextStyles} textStyles={props.textStyles}/>    
        } else if (mode == 'code') {
            return <CodeOptions setCodeStyles={props.setCodeStyles} codeStyles={props.codeStyles}/>
        }
    }

    return (
        <div className="header">
            <h3 className='title'> PsuedoNote </h3>
            <button className='textButton' onClick={() => setMode("text")}> Text </button>
            <button className="codeButton" onClick={() => setMode("code")}> Code </button> 
            {
                optionView()
            }
        </div>
    )
}

