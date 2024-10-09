import React, { useEffect, useState } from 'react'

interface ToggleProps {
    children?: React.ReactNode
    checked?: boolean
    setState: (a: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({
    setState,
    checked = false
}) => {
    const [isPressed, setIsPressed] = useState(checked)

    const handlePress = () => {
        setIsPressed(prev => !prev)
    }

    const getStyle = () => {
        if (isPressed) {
            return 'p-0.5 w-9 flex h-fit flex-row rounded-xl focus:shadow-btn-brand-focus outline-none bg-brand-600'
        }
        else {
            return 'p-0.5 w-9 flex flex-row h-fit rounded-xl focus:shadow-btn-brand-focus outline-none hover:bg-cgray-200  bg-cgray-100'
        }
    }
    useEffect(() => {
        setState(isPressed)
        return () => {

        }
    }, [isPressed])


    return (
        <button
            className={getStyle()}
            onClick={handlePress}
            style={isPressed ? { justifyContent: 'end' } : { justifyContent: 'start' }}
        >
            <div
                className='w-4 h-4 rounded-full bg-white'
                style={{
                    boxShadow: '0 0 2px 1px rgb(0 0 0 / 0.08)'
                }}
            />

        </button>
    )
}

export default Toggle