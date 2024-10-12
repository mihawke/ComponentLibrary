import React from 'react'

interface RadioButtonProps {
    href?: string
    target?: string
    variant?: string
    underline?: 'hover' | 'none' | 'always'
    className?: string
    style?: React.CSSProperties
}
const RadioButton: React.FC<RadioButtonProps> = () => {
    return (
        <div>RadioButton</div>
    )
}

export default RadioButton