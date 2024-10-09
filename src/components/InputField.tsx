import React, { useState } from "react"
import { AiOutlineExclamationCircle } from "react-icons/ai"

interface InputFieldProps {
    type?: 'text' | 'email' | 'password' | 'number'
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    label?: string
    hint?: string
    containerClassName?: string
    placeholder?: string
    inputClassName?: string
    labelClassName?: string
    hintClassName?: string
    wrapperClassName?: string
    containerStyle?: React.CSSProperties
    inputStyle?: React.CSSProperties
    labelStyle?: React.CSSProperties
    hintStyle?: React.CSSProperties
    wrapperStyle?: React.CSSProperties
    disabled?: boolean
    destructive?: boolean
    name?: string
    id?: string
}

const InputField: React.FC<InputFieldProps> = ({
    containerClassName,
    inputClassName,
    labelClassName,
    hintClassName,
    containerStyle,
    wrapperClassName,
    inputStyle,
    labelStyle,
    hintStyle,
    wrapperStyle,
    label,
    hint,
    placeholder,
    disabled,
    destructive,
    type,
    value,
    onChange,
    name,
    id

}) => {

    const [isFocused, setIsFocused] = useState(false)
    const [showHint, setShowHint] = useState(true)

    const customInputClassName = `px-3.5 py-2.5 bg-transparent w-full outline-none ${inputClassName}`
    const customWrapperClassName = `flex flex-row pr-3.5 items-center justify-between my-1.5 w-full rounded-lg text-base leading-6 placeholder:text-cgray-500 outline-none ${disabled ? 'bg-cgray-50 border-cgray-300' : ''} ${wrapperClassName}`
    const customContainerClassName = `flex flex-col min-w-[320px] ${disabled ? 'pointer-events-none' : ''} ${containerClassName}`
    const customLabelClassName = `w-fit text-cgray-700 text-sm leading-5 font-medium ${labelClassName}`
    const customHintClassName = `w-fit text-error-500 text-sm leading-5 ${hintClassName}`

    const handleFocus = () => {
        setIsFocused(true)
    };

    const handleFocusOut = () => {
        setIsFocused(false)
    };

    const handleShowHint = () => {
        setShowHint(prev => !prev)
    }

    return (
        <div
            className={customContainerClassName}
            style={{ ...containerStyle }}
        >
            <label
                className={customLabelClassName}
                style={{ ...labelStyle }}
            >
                {label}
            </label>
            <div
                onFocus={handleFocus}
                onBlur={handleFocusOut}
                style={isFocused ? destructive ?
                    {
                        WebkitBoxSizing: 'border-box',
                        MozBoxSizing: 'border-box',
                        boxSizing: 'border-box',
                        boxShadow: `#FDA29B 0px 0px 0px 1px inset , #FEE4E2 0px 0px 0px 4px`,
                        ...wrapperStyle
                    }
                    :
                    {
                        WebkitBoxSizing: 'border-box',
                        MozBoxSizing: 'border-box',
                        boxSizing: 'border-box',
                        boxShadow: `#D6BBFB 0px 0px 0px 1px inset , #F4EBFF 0px 0px 0px 4px`,
                        ...wrapperStyle
                    } : destructive ?
                    {
                        WebkitBoxSizing: 'border-box',
                        MozBoxSizing: 'border-box',
                        boxSizing: 'border-box',
                        boxShadow: `#FDA29B 0px 0px 0px 1px inset `,
                        ...wrapperStyle
                    }
                    :
                    {
                        WebkitBoxSizing: 'border-box',
                        MozBoxSizing: 'border-box',
                        boxSizing: 'border-box',
                        boxShadow: `#D0D5DD 0px 0px 0px 1px inset `,
                        ...wrapperStyle
                    }}
                className={customWrapperClassName}>
                <input
                    className={customInputClassName}
                    placeholder={placeholder}
                    style={{ ...inputStyle }}
                    disabled={disabled}
                    type={type}
                    value={value}
                    onChange={onChange}
                    name={name}
                    id={id}
                >
                </input>
                {destructive ? <AiOutlineExclamationCircle style={{ color: '#F04438' }} onClick={handleShowHint} /> : null}

            </div>
            <div className={customHintClassName}
                style={{ ...hintStyle }}>
                {showHint ?
                    <p>{hint}</p> : null
                }
            </div>
        </div>
    )
}

export default InputField