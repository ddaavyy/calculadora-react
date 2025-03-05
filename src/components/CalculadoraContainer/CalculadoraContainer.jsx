import { useState } from "react"
import { NumbersButton } from "../Buttons/NumbersButton"
import { Operators } from "../Buttons/Operators"
import { ScreenDisplay } from "../ScreenDisplay/ScreenDisplay"
import './Calculadora.css'

export const Calculadora = () => {
    const [numberDisplay, SetNumberDisplay] = useState()
    return (
        <div className="calculadora">
            <div>
                <ScreenDisplay valor={numberDisplay} />
                <div style={{ display: 'flex' }}>
                    <NumbersButton />
                    <Operators />
                </div>
            </div>
        </div>
    )
} 