import './CodeOptions.scss';
import React, {useState} from 'react';


export default function CodeOptions(props) {
    return (
        <div className='codeOptions'>
            {/* Color Theme Drop Down*/}
            <label for='html' className='themeLabel'> Color Theme</label>
            <select className='colorThemeDropdown' onChange={(value) => {props.setCodeStyles({ ...props.codeStyles, colorTheme: value.target.value})}}> 
                <option value="default" >Default</option>
                <option value="SnazzyLight">Snazzy Light</option>
                <option value="BluLoco Light">BluLoco Light</option>
                <option value="Noctis">Noctis Light</option>
            </select>
            {/* Font Size Input */}
            <label for='html' className='fsizeLabel'> Font Size</label>
            <input className='fontSizeCode' type="number" value={props.codeStyles.fontSize} onChange={(value) => {props.setCodeStyles({ ...props.codeStyles, fontSize: value.target.value})}}/>
            {/* Language Dropdown */}
            <label for='html' className='flanguageLabel'> Code Language </label>
            <select className='languageDropdown' onChange={(value) => {props.setCodeStyles({ ...props.codeStyles, language: value.target.value})}}> 
                <option value="JavaScript"> JavaScript </option>
            </select>  
        </div>
    )
    
}