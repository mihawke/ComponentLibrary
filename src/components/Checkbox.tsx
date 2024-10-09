import React, { useState } from 'react'
import { FaCheck, FaMinus } from 'react-icons/fa'

interface CheckboxProps {
    disabled?: boolean
    indeterminate?: boolean
    checked?: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({
    disabled,
    checked = false,
    indeterminate = false
}) => {

    const [isChecked, setIsChecked] = useState(checked)

    const handleChecked = () => {
        setIsChecked(prev => !prev)
    }

    const getStyle = () => {
        if (isChecked) {
            return 'bg-brand-50 shadow-checkbox-hover hover:shadow-checkbox-hover focus:shadow-checkbox-hover disabled:shadow-checkbox-disabled disabled:bg-white'
        }
        else {
            return 'bg-white shadow-checkbox hover:shadow-checkbox-hover focus:shadow-checkbox-focus disabled:shadow-checkbox-disabled '
        }
    }

    const checkboxStyle = `flex items-center justify-center w-4 h-4 rounded-[4px] outline-none ${getStyle()}`

    return (
        <button
            disabled={disabled}
            onClick={handleChecked}
            className={checkboxStyle}
            style={{
            }}
        >
            {indeterminate ? isChecked ? <FaMinus size={12} style={disabled? {color:'#E4E7EC'}:{color:'#7F56D9'}} /> : '' : isChecked ? <FaCheck size={12} style={disabled? {color:'#E4E7EC'}:{color:'#7F56D9'}} /> : ''}
        </button>
    )
}

export default Checkbox