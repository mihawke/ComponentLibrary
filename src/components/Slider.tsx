import React, { useEffect, useState } from 'react'

interface SliderPros {
    min: number | string
    max: number | string
    style?: React.CSSProperties
    className?: string
    id?: string
    name?: string
    value: number | string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Slider: React.FC<SliderPros> = ({
    min = 1,
    max = 100,
    style,
    className,
    value = min,
    onChange
}) => {

    const [progress,setProgress]  = useState('')

    const progressClassName = `appearance-none rounded bg-cgray-200 h-2 w-[320px] slider ${className}`

    useEffect(() => {
        const progress = (parseInt(value?.toString()) / parseInt(max.toString())) * 100 + '%'
        setProgress(progress)
        return () => {
        }
      }, [value])

    return (
        <div>
            <input
                type='range'
                max={max}
                min={min}
                value={value}
                onChange={onChange}
                className={progressClassName}
                style={{
                    background: `linear-gradient(to right, #7F56D9 0% ${progress},#E4E7EC ${progress} 100%)`
                    , ...style
                }}
            />
            <style>
                {`
            .slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 23px;
                height: 23px;
                background: white;
                border-radius: 50%;
                cursor: pointer;
                border: 2px solid #7F56D9;
            }
            .slider::-moz-range-thumb {
                width: 23px;
                height: 23px;
                background: white;
                border-radius: 50%;
                cursor: pointer;
                border: 2px solid #7F56D9;
            }
        `}
            </style>
        </div>
    )
}

export default Slider