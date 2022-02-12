import './CodeOptions.scss';
import React, {useState} from 'react';


export default function CodeOptions(props) {
    return (
        <div className='codeOptions'>
            {/* Color Theme Drop Down*/}
            <label for='html'> Color Theme</label>
            <select className='colorThemeDropdown' onChange={(value) => {props.setCodeStyles({ ...props.codeStyles, colorTheme: value.target.value})}}> 
                <option value="default" >Default</option>
                <option value="SnazzyLight">Snazzy Light</option>
                <option value="BluLoco Light">BluLoco Light</option>
                <option value="Noctis">Noctis Light</option>
            </select>
            {/* Font Size Input */}
            <label for='html'> Font Size</label>
            <input className='fontSize' type="number" onChange={(value) => {props.setCodeStyles({ ...props.codeStyles, fontSize: value.target.value})}}/>
            {/* Language Dropdown */}
            <label for='html'> Code Language </label>
            <select className='languageDropdown' onChange={(value) => {props.setCodeStyles({ ...props.codeStyles, language: value.target.value})}}> 
                <option value="JavaScript"> JavaScript </option>
            </select>  
        </div>
    )
    
}