import './TextOptions.scss';
import React, {useState} from 'react';

/* <a href="https://icons8.com/icon/98153/align-left">Align Left icon by Icons8</a>
"https://img.icons8.com/external-tal-revivo-bold-tal-revivo/12/000000/external-bullet-list-template-option-in-word-document-application-text-bold-tal-revivo.png"
<a href="https://icons8.com/icon/98152/align-center">Align Center icon by Icons8</a>
<a href="https://icons8.com/icon/98155/align-right">Align Right icon by Icons8</a>
*/

export default function TextOptions(props) {

    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    const myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }
  
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }



    return (
        <div className='textOptions'>
            <button onClick={() => props.setTextStyles({ ...props.textStyles, bold: !props.textStyles.bold })}> <b>B</b> </button>
            <button onClick={() => props.setTextStyles({ ...props.textStyles, italicize: !props.textStyles.italicize })}> <i>I</i> </button>
            <button onClick={() => props.setTextStyles({ ...props.textStyles, underline: !props.textStyles.underline })}> <u>U</u> </button>
            <div class="dropdown">
                <button onClick={() => myFunction()} class='dropbtn'>
                    {props.textStyles.font}
                </button>
                <div id="myDropdown" class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <input type="text"/>
            <div class="dropdown">
                <button onClick={() => myFunction()} class='dropbtn'>
                    {props.textStyles.fontColor}
                </button>
                <div id="myDropdown" class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
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

/*
setTextStyles({
    ...textStyles,
    bold: true
}) */