import React, { useEffect, useState } from 'react'


interface ProgressIndicatorProps {
    maxValue?: number
    width?: number
    value: number
    label: boolean
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
    maxValue = 100,
    width = 320,
    value,
    label
}) => {

    const [progressWidth, setProgressWidth] = useState(0)
    const [percentage, setPercentage] = useState(0)

    const progressStyle = `h-full bg-brand-600  rounded-lg`
    const backgroundStyle = `bg-cgray-100 h-2 w-[320px] rounded-lg`

    useEffect(() => {
        const maxWidth = width / maxValue;
        let progressWidth = (value * maxWidth);
        setProgressWidth(progressWidth)
        setPercentage(parseFloat((progressWidth/maxWidth).toFixed(2)))

        return () => {
        }
    }, [value])


    return (
        <div className='flex flex-row items-center w-fit h-fit'>
            <div
                className={backgroundStyle}
            >
                <div
                    className={progressStyle}
                    style={{ width: progressWidth }}
                />
            </div>
            {label?  <p className='text-base text-cgray-700  ml-3'>{percentage}%</p> : null}
        </div>
    )
}

export default ProgressIndicator