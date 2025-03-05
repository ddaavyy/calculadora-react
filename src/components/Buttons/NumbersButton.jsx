import { Button } from './Button.tsx'
import { DeletesButton } from './DeletesButton.jsx';
import './styles.css'

export const NumbersButton = () => {
    const numberstop = [7, 8, 9];
    const numbersmid = [4, 5, 6];
    const numbersbottom = [1, 2, 3];
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px'}}>
            <DeletesButton />
            <div className='numberbutton-container'>
                <div style={{ display: 'flex', gap: '6px' }}>
                    {numberstop.map((number) => (
                        <Button key={number} type='number' label={number} />
                    ))}
                </div>
                <div style={{ display: 'flex', gap: '6px' }}>
                    {numbersmid.map((number) => (
                        <Button key={number} type='number' label={number} />
                    ))}
                </div>
                <div style={{ display: 'flex', gap: '6px' }}>
                    {numbersbottom.map((number) => (
                        <Button key={number} type='number' label={number} />
                    ))}
                </div>
            </div>
            <Button className='buttom-zero' type="number" label={0} />
        </div>
    )
} 