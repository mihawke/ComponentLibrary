import React, { useState } from "react"

interface DatePickerProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    name: string
    id: string
    min?: string
    label?:string
    max?: string
    disabled?:boolean
}

const DatePicker: React.FC<DatePickerProps> = ({
    value,
    onChange,
    name,
    id,
    min,
    max,
    disabled,
    label
}) => {

    const [isFocused, setIsFocused] = useState(false)
    const handleFocus = () => {
        setIsFocused(true)
    };

    const handleFocusOut = () => {
        setIsFocused(false)
    };
    return (
        <div className="w-[320px]"
            onFocus={handleFocus}
            onBlur={handleFocusOut}>
            <label
                className={`w-fit text-cgray-700 text-sm leading-5 font-medium`}
            >
                {label}
            </label>

            <input
                placeholder="Date"
                value={value}
                type="date"
                name={name}
                id={id}
                min={min}
                max={max}
                onChange={onChange}
                disabled={disabled}
                className={`px-3.5 py-2.5 my-1.5 text-cgray-900 bg-white w-full rounded-lg outline-none focus:outline-none disabled:text-cgray-300 disabled:bg-cgray-50 ${value == '' ? 'text-cgray-400' : ''}`}
                style={isFocused ?
                    {
                        WebkitBoxSizing: 'border-box',
                        MozBoxSizing: 'border-box',
                        boxSizing: 'border-box',
                        boxShadow: `#D6BBFB 0px 0px 0px 1px inset , #F4EBFF 0px 0px 0px 4px`,
                    }
                    :
                    {
                        WebkitBoxSizing: 'border-box',
                        MozBoxSizing: 'border-box',
                        boxSizing: 'border-box',
                        boxShadow: `#D0D5DD 0px 0px 0px 1px inset `,
                    }}
            />
        </div>
    )
}

export default DatePicker