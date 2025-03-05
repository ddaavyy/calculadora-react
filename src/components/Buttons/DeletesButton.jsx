import { Button } from "./Button.tsx"

export const DeletesButton = () => {
    return (
        <div style={{display: 'flex', gap: '6px'}}>
            <Button type="action" label="C"/>
            <Button type="action" label="←" />
        </div>
    )
}