import { useRef } from 'react'
import './Letter.scss'

export default function Letter({ value, letterCount, letterClicked }) {

    return (
        <div 
            className="letter"
            onClick={() => letterClicked(letterCount)}
        >
            {value}
        </div>
    )
}