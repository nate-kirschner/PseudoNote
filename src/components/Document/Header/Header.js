import './Header.scss';
import CodeOptions from './CodeOptions.js';
import TextOptions from './TextOptions.js';
import { useState } from 'react/cjs/react.development';
<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap');
</style>


export default function Header(props) {

    const [mode, setMode] = useState('start')
    // console.log(mode)
    const optionView = () => {
        if(mode == 'start') {
            return <div className='start'/>
        } else if (mode == 'text') {
            return <TextOptions setTextStyles={props.setTextStyles} textStyles={props.textStyles}/>    
        } else if (mode == 'code') {
            return <CodeOptions setCodeStyles={props.setCodeStyles} codeStyles={props.codeStyles}/>
        }
    }

    return (
        <div className="header">
            <div className='textButton' onClick={() => setMode("text")}> Text </div>
            <div className="codeButton" onClick={() => setMode("code")}> Code </div> 
            {
                optionView()
            }
        </div>
    )
}

