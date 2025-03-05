import './ScreenDisplay.css'

export const ScreenDisplay = ({valor}) => {
    return (
        <label className='visor'>
            <span>{valor}</span>
        </label>
    )
}