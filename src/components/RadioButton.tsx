import React, { useState } from 'react'

interface RadioButtonProps {
    href?: string
    target?: string
    variant?: string
    underline?: 'hover' | 'none' | 'always'
    className?: string
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    style?: React.CSSProperties
}
const RadioButton: React.FC<RadioButtonProps> = ({size}) => {
    const [selected, setSelected] = useState(false)

    const buttonSize = {
        'sm': 'w-9 h-9 p-2',
        'md': 'w-10 h-10 p-2.5',
        'lg': 'w-11 h-11 p-3',
        'xl': 'w-12 h-12 p-3.5',
        '2xl': 'w-14 h-14 p-4'
    }
    const getSize = () => {
        if (size === 'sm') {
            return buttonSize.sm;
        }
        if (size === 'md') {
            return buttonSize.md;
        }
        if (size === 'lg') {
            return buttonSize.lg;
        }
        if (size === 'xl') {
            return buttonSize.xl;
        }
        if (size === '2xl') {
            return buttonSize["2xl"];
        }
    }

    return (
        <button 
        onClick={() => setSelected(prev => !prev)}
        className={`hover:bg-brand-50 rounded-full flex justify-center items-center ${getSize()}`}>
            <div className={`w-full h-full flex justify-center items-center bg-transparent border-2 rounded-full border-brand-700 p-1`}>
                {
                    selected ? <div className='w-full h-full bg-brand-700 rounded-full'> </div> : ''
                }
            </div>
        </button>
    )
}

export default RadioButton