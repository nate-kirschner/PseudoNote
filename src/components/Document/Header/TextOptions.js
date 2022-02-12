import './TextOptions.scss';
import React, {useState, useRef} from 'react';


/* <a href="https://icons8.com/icon/98153/align-left">Align Left icon by Icons8</a>
"https://img.icons8.com/external-tal-revivo-bold-tal-revivo/12/000000/external-bullet-list-template-option-in-word-document-application-text-bold-tal-revivo.png"
<a href="https://icons8.com/icon/98152/align-center">Align Center icon by Icons8</a>
<a href="https://icons8.com/icon/98155/align-right">Align Right icon by Icons8</a>
*/

export default function TextOptions(props) {

    const changeFont = () => {
        
    }

    return (
        <div className='textOptions'>
            <button onClick={() => props.setTextStyles({ ...props.textStyles, bold: !props.textStyles.bold })}> <b>B</b> </button>
            <button onClick={() => props.setTextStyles({ ...props.textStyles, italicize: !props.textStyles.italicize })}> <i>I</i> </button>
            <button onClick={() => props.setTextStyles({ ...props.textStyles, underline: !props.textStyles.underline })}> <u>U</u> </button>
            <select className='dropDown' onchange='changeFont()'>
                <option value="Calibri">Calibri</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Arial">Arial</option>
            </select>
            


            <input type="text"/>
            
            <button> <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/000000/external-bullet-list-template-option-in-word-document-application-text-bold-tal-revivo.png"/>
            </button> 
            <button> <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/000000/external-number-list-format-in-acending-sequence-order-text-bold-tal-revivo.png"/>
            </button>
            <button> <img src="https://img.icons8.com/material-outlined/24/000000/align-left.png"/>
            </button>
            <button> <img src="https://img.icons8.com/material-outlined/24/000000/align-center.png"/>    
            </button> 
            <button> <img src="https://img.icons8.com/material-outlined/24/000000/align-right.png"/>
            </button>
        </div>
    )
}