import './CodeOptions.scss';
import React, {useState} from 'react';


export default function CodeOptions(props) {
    return (
        <div className='codeOptions'>
            {/* Color Theme Drop Down*/}
            <label for='html' className='label themeLabel'> Color Theme</label>
            <select className='boxCode colorThemeDropdown' onChange={(value) => {props.setCodeStyles({ ...props.codeStyles, colorTheme: value.target.value})}}> 
                <option value="default" >Default</option>
            </select>
            {/* Font Size Input */}
            <label for='html' className='label fsizeLabel'> Font Size</label>
            <input className='boxCode fontSizeCode' type="number" value={props.codeStyles.fontSize} onChange={(value) => {props.setCodeStyles({ ...props.codeStyles, fontSize: value.target.value})}}/>
            {/* Language Dropdown */}
            <label for='html' className='label flanguageLabel'> Code Language </label>
            <select className='boxCode languageDropdown' onChange={(value) => {props.setCodeStyles({ ...props.codeStyles, language: value.target.value})}}> 
                <option value="JavaScript"> JavaScript </option>
            </select>  
        </div>
    )
    
}