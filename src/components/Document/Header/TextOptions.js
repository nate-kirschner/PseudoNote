import './TextOptions.scss';
import React, {useState, useRef} from 'react';


/* <a href="https://icons8.com/icon/98153/align-left">Align Left icon by Icons8</a>
"https://img.icons8.com/external-tal-revivo-bold-tal-revivo/12/000000/external-bullet-list-template-option-in-word-document-application-text-bold-tal-revivo.png"
<a href="https://icons8.com/icon/98152/align-center">Align Center icon by Icons8</a>
<a href="https://icons8.com/icon/98155/align-right">Align Right icon by Icons8</a>
<a href="https://icons8.com/icon/16382/marker-pen">Marker Pen icon by Icons8</a>
*/

export default function TextOptions(props) {

    const [buttonSelect, setButtonSelect] = useState({
        bold: false,
        italicize: false,
        underline: false,
        highlight: false,
        listType: "",
    })
    return (
        <div className='textOptions'>
            {/* Bold Button */}
            <button 
                className={`bold ${buttonSelect.bold ? "Selected" : ""}`} 
                onClick={() => {
                    props.setTextStyles({ ...props.textStyles, bold: !props.textStyles.bold});
                    setButtonSelect({ ...buttonSelect, bold: !buttonSelect.bold})
                }}> 
                <b>B</b> 
            </button>
            {/* Italicize Button */}
            <button 
                className={`italicize ${buttonSelect.italicize ? "Selected" : ""}`} 
                onClick={() => {
                    props.setTextStyles({ ...props.textStyles, italicize: !props.textStyles.italicize })
                    setButtonSelect({...buttonSelect, italicize: !buttonSelect.italicize})
                }}> 
                <i>I</i> 
            </button>
            {/* Underline Button */}
            <button 
                className={`underline ${buttonSelect.underline ? "Selected" : ""}`} 
                onClick={() => {
                    props.setTextStyles({ ...props.textStyles, underline: !props.textStyles.underline })
                    setButtonSelect({...buttonSelect, underline: !buttonSelect.underline})
                }}> 
                <u>U</u> </button>
            {/* Highlight Button */}
            <button 
                className={`highlight ${buttonSelect.highlight ? "Selected" : ""}`} 
                onClick={() => {
                    props.setTextStyles({ ...props.textStyles, highlight: !props.textStyles.highlight })
                    setButtonSelect({...buttonSelect, highlight: !buttonSelect.highlight})
                    }}>  
                <img src="https://img.icons8.com/color/24/000000/marker-pen.png"/>
            </button>   
            {/* Font Dropdown Menu*/}         
            <select className='font' onChange={(value) => {props.setTextStyles({ ...props.textStyles, font: value.target.value})}}> 
                <option value="Calibri" >Calibri</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Arial">Arial</option>
                <option value="Arial">Comic Sans</option>
            </select>
            {/* Font Size Input Box */}
            <input className='fontSize' type="number" onChange={(value) => {props.setTextStyles({ ...props.textStyles, fontSize: value.target.value})}}/>
            {/* Font Color Input Box */}
            <select className='fontColor' onChange={(value) => {props.setTextStyles({ ...props.textStyles, color: value.target.value})}}> 
                <option value="black" >Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                <option value="purple">Purple</option>
            </select>
            {/* Bullet Point Box */}
            <button 
                className={`bulletPoints ${buttonSelect.listType == 'bullet' ? "Selected" : ""}`} 
                onClick={() => {
                    props.setTextStyles({...props.textStyles, bulletPoints: !props.textStyles.bulletPoints})
                    setButtonSelect({...buttonSelect, listType: 'bullet'})
                }}>
                
                <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/000000/external-bullet-list-template-option-in-word-document-application-text-bold-tal-revivo.png"/>
            </button> 
            {/* Numbered List Button */}
            <button 
                className={`numberList ${buttonSelect.listType == 'numbered' ? "Selected" : ""}`} 
                onClick={() => {
                    props.setTextStyles({...props.textStyles, bulletPoints: !props.textStyles.numberList})
                    setButtonSelect({...buttonSelect, listType: 'numbered'})
                }}>
                <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/000000/external-number-list-format-in-acending-sequence-order-text-bold-tal-revivo.png"/>
            </button>
            {/* Align Left Button */}
            <button 
                className={`alignLeft ${props.textStyles.alignText == 'left' ? "Selected" : ""}`} 
                onClick={() => {props.setTextStyles({...props.textStyles, alignText: "left"})}}> 
                <img src="https://img.icons8.com/material-outlined/24/000000/align-left.png"/>
            </button>
            {/* Align Center Button */}
            <button 
                className={`alignCenter ${props.textStyles.alignText == 'center' ? "Selected" : ""}`} 
                onClick={() => {props.setTextStyles({...props.textStyles, alignText: "center"})}}> 
                <img src="https://img.icons8.com/material-outlined/24/000000/align-center.png"/>    
            </button> 
            {/* Align Right Button */}
            <button 
                className={`align ${props.textStyles.alignText == "right" ? "Selected" : ""}`} 
                onClick={() => {props.setTextStyles({...props.textStyles, alignText: "right"})}}> 
                <img src="https://img.icons8.com/material-outlined/24/000000/align-right.png"/>
            </button>
        </div>
    )
}