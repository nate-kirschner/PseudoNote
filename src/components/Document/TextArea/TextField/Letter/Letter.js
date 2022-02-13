import { useEffect, useState } from 'react'
import './Letter.scss'

export default function Letter({ className, value, letterCount, textStyles }) {

    const [style, setStyle] = useState({});

    useEffect(() => {
        let style = {}
        if (textStyles.bold) {
            style = {
                ...style,
                fontWeight: 'bold',
            }
        }
        if (textStyles.italicize) {
            style = {
                ...style,
                fontStyle: 'oblique',
            }
        } 
        if (textStyles.underline) {
            style = {
                ...style,
                textDecoration: 'underline',
            }
        }  
        if (textStyles.highlight) {
            style = {
                ...style,
                backgroundColor: 'yellow',
            }
        } 
        if (textStyles.fontSize) {
            style = {
                ...style,
                fontSize: `${textStyles.fontSize}px`,
            }
        }
        if (textStyles.font && textStyles.fontColor) {
            style = {
                ...style,
                fontFamily: `${textStyles.font}`,
                color: `${textStyles.fontColor}`
            }
        }
        if (textStyles.language === "JavaScript") {
            style = {
                ...style,
                fontFamily: "Courier",
                backgroundColor: "rgb(230, 230, 230)",
            }
        }
        setStyle(style)
    }, [])

    return (
        <div 
            className={"letter " + className}
            style={style}
            // onClick={() => letterClicked(letterCount)}
        >
            {value}
        </div>
    )
}