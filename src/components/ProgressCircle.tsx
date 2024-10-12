import React, { useEffect } from 'react'


interface ProgressCircleProps {
    maxValue?: number
    width?: number
    value: number
    label?: string
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
    maxValue = 100,
    value,
    label,
    size = 'sm'
}) => {

    const getSize = () => {
        switch (size) {
            case 'xxs':
                return 64
                break;
            case 'xs':
                return 160
                break;
            case 'sm':
                return 200
                break;
            case 'md':
                return 240
                break;
            case 'lg':
                return 280
                break;
            default:
                return 200
                break;
        }
    }

    const getStrokeWidth = () => {
        switch (size) {
            case 'xxs':
                return 6
                break;
            case 'xs':
                return 16
                break;
            case 'sm':
                return 20
                break;
            case 'md':
                return 24
                break;
            case 'lg':
                return 28
                break;
            default:
                return 200
                break;
        }
    }

    const getRadius = () => {
        switch (size) {
            case 'xxs':
                return 29
                break;
            case 'xs':
                return 72
                break;
            case 'sm':
                return 90
                break;
            case 'md':
                return 108
                break;
            case 'lg':
                return 126
                break;
            default:
                return 200
                break;
        }
    }

    const getFontSize = () => {
        switch (size) {
            case 'xxs':
                return 14
                break;
            case 'xs':
                return 24
                break;
            case 'sm':
                return 30
                break;
            case 'md':
                return 36
                break;
            case 'lg':
                return 48
                break;
            default:
                return 30
                break;
        }
    }

    const cx = getSize() * 0.5
    const cy = getSize() * 0.5
    const circumference = 2 * (22 / 7) * getRadius()
    const percentage = (value / maxValue) * 100
    const offset = circumference * ((100 - percentage) / 100);

    useEffect(() => {
        return () => {
        }
    }, [])
    return (
        <div className='relative'
            style={{ width: getSize(), height: getSize() }}
        >
            <svg style={{ width: getSize(), height: getSize() }}>
                <circle
                    r={getRadius()}
                    cx={cx}
                    cy={cy}
                    stroke="#F2F4F7"
                    fill='transparent'
                    strokeWidth={getStrokeWidth()}
                ></circle>
                <circle
                    r={getRadius()}
                    cx={cx}
                    cy={cy}
                    fill='transparent'
                    stroke="#7F56D9"
                    strokeWidth={getStrokeWidth()}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap='round'
                    transform={`rotate(-90, ${cx}, ${cy})`}
                ></circle>
            </svg>
            <p
                className='font-medium text-cgray-900 absolute'
                style={size === 'md' || size === 'lg' ?
                    {
                        textAlign: 'center',
                        color: '#475467',
                        fontWeight: 'bold',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: 14
                    }
                    : {
                        textAlign: 'center',
                        color: '#475467',
                        fontWeight: 'bold',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: 12
                    }}
            >
               {size === 'xxs' ? '' : label}
                <span style={{fontSize: getFontSize(),display:'block'}}>{percentage.toFixed(0)}%</span>
            </p>
            {size === 'xxs' ?
                <p style={{
                    fontSize: 12,
                    textAlign: 'center',
                    color: '#475467',
                    fontWeight: 'bold'
                }}>{label}</p>
                : ''}
        </div>
    )
}

export default ProgressCircle