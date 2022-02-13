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
            
            <div className='charOptions'>
                {/* Bold Button */}
                <div
                    className={`option box bold ${buttonSelect.bold ? "Selected" : ""}`} 
                    onClick={() => {
                        props.setTextStyles({ ...props.textStyles, bold: !props.textStyles.bold});
                        setButtonSelect({ ...buttonSelect, bold: !buttonSelect.bold})
                    }}> 
                    <b>B</b> 
                </div>
                {/* Italicize Button */}
                <div 
                    className={`option box italicize ${buttonSelect.italicize ? "Selected" : ""}`} 
                    onClick={() => {
                        props.setTextStyles({ ...props.textStyles, italicize: !props.textStyles.italicize })
                        setButtonSelect({...buttonSelect, italicize: !buttonSelect.italicize})
                    }}> 
                    <i>I</i> 
                </div>
                {/* Underline Button */}
                <div 
                    className={`option box underline ${buttonSelect.underline ? "Selected" : ""}`} 
                    onClick={() => {
                        props.setTextStyles({ ...props.textStyles, underline: !props.textStyles.underline })
                        setButtonSelect({...buttonSelect, underline: !buttonSelect.underline})
                    }}> 
                    <u>U</u> </div>
                {/* Highlight Button */}
                <div
                    className={`option box highlight ${buttonSelect.highlight ? "Selected" : ""}`} 
                    onClick={() => {
                        props.setTextStyles({ ...props.textStyles, highlight: !props.textStyles.highlight })
                        setButtonSelect({...buttonSelect, highlight: !buttonSelect.highlight})
                        }}>  
                    <img src="https://img.icons8.com/color/24/000000/marker-pen.png"/>
                </div>
            </div>
            
            <div className='fontOption'>
                {/* Font Dropdown Menu*/}         
                <select className='foptions font' onChange={(value) => {props.setTextStyles({ ...props.textStyles, font: value.target.value})}}> 
                    <option  value="Calibri">Calibri</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Arial">Arial</option>
                    <option value="Arial">Comic Sans</option>
                </select>
                {/* Font Size Input Box */}
                <input className='foptions fontSize' type="number" value={props.textStyles.fontSize} onChange={(value) => {props.setTextStyles({ ...props.textStyles, fontSize: value.target.value})}}/>
                {/* Font Color Input Box */}
                <select className='foptions fontColor' onChange={(value) => {props.setTextStyles({ ...props.textStyles, color: value.target.value})}}> 
                    <option value="black" >Black</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="purple">Purple</option>
                </select>
            </div>
               
            <div className='paragraphOptions'>
                {/* Bullet Point Box */}
                <div 
                    className={`option box bulletPoints ${buttonSelect.listType == 'bullet' ? "Selected" : ""}`} 
                    onClick={() => {
                        props.setTextStyles({...props.textStyles, bulletPoints: !props.textStyles.bulletPoints})
                        setButtonSelect({...buttonSelect, listType: 'bullet'})
                    }}>
                    
                    <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/000000/external-bullet-list-template-option-in-word-document-application-text-bold-tal-revivo.png"/>
                </div> 
                {/* Numbered List Button */}
                <div 
                    className={`option box numberList ${buttonSelect.listType == 'numbered' ? "Selected" : ""}`} 
                    onClick={() => {
                        props.setTextStyles({...props.textStyles, bulletPoints: !props.textStyles.numberList})
                        setButtonSelect({...buttonSelect, listType: 'numbered'})
                    }}>
                    <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/000000/external-number-list-format-in-acending-sequence-order-text-bold-tal-revivo.png"/>
                </div>
                {/* Align Left Button */}
                <div
                    className={`option box alignLeft ${props.textStyles.alignText == 'left' ? "Selected" : ""}`} 
                    onClick={() => {props.setTextStyles({...props.textStyles, alignText: "left"})}}> 
                    <img src="https://img.icons8.com/material-outlined/24/000000/align-left.png"/>
                </div>
                {/* Align Center Button */}
                <div 
                    className={`option box alignCenter ${props.textStyles.alignText == 'center' ? "Selected" : ""}`} 
                    onClick={() => {props.setTextStyles({...props.textStyles, alignText: "center"})}}> 
                    <img src="https://img.icons8.com/material-outlined/24/000000/align-center.png"/>    
                </div> 
                {/* Align Right Button */}
                <div 
                    className={`option box alignRight ${props.textStyles.alignText == "right" ? "Selected" : ""}`} 
                    onClick={() => {props.setTextStyles({...props.textStyles, alignText: "right"})}}> 
                    <img src="https://img.icons8.com/material-outlined/24/000000/align-right.png"/>
                </div>
            </div> 
            
        </div>
    )
}