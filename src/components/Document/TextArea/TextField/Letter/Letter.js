import { useEffect, useRef } from 'react'
import './Letter.scss'

export default function Letter({ className, value, letterCount, letterClicked }) {

    return (
        <div 
            className={"letter " + className}
            onClick={() => letterClicked(letterCount)}
        >
            {value}
        </div>
    )
}