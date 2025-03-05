import { Button } from "./Button.tsx"
import './styles.css'

export const Operators = () => {
    const operators = ['÷', 'x', '-', '+', '='];
    return(
        <div className="operatorsbutton-container">
            {operators.map((operator) => (
                <Button key={operator} type='operation' label={operator}/>
            ))}
        </div>
    )
}