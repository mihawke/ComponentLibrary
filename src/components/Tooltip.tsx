import React, { useState } from 'react'
import { BsTriangleFill } from 'react-icons/bs'

interface TooltipProps {
    position?: 'bottom-left' | 'bottom-right' | 'bottom-center' | 'top-left' | 'top-right' | 'top-center' | 'left' | 'right'
    theme?: 'light' | 'dark'
    children: React.ReactNode
    label: string
}
const Tooltip: React.FC<TooltipProps> = ({
    position,
    theme = 'dark',
    children,
    label
}) => {

    const [isVisible, setIsVisible] = useState(false)

    const showTooltip = () => {
        setTimeout(() => {
                setIsVisible(true);
        }, 100);
    };

    const hideTooltip = () => {
        setTimeout(() => {
                setIsVisible(false);
        }, 200);
    };

    const getPosition = () => {
        switch (position) {
            case 'top-left':
                return 'bottom-full left-0 mb-2'
                break;
            case 'top-right':
                return 'bottom-full right-0 mb-2'
                break;
            case 'top-center':
                return 'bottom-full left-1/2 translate-x-[-50%] mb-2'
                break;
            case 'bottom-left':
                return 'top-full left-0 mt-2'
                break;
            case 'bottom-right':
                return 'top-full right-0 mt-2'
                break;
            case 'bottom-center':
                return 'top-full left-1/2 translate-x-[-50%] mt-2'
                break;
            case 'right':
                return 'left-full top-[50%] translate-y-[-50%] ml-2'
                break;
            case 'left':
                return 'right-full top-[50%] translate-y-[-50%] mr-2'
                break;
            default:
                break;
        }
    }

    const arrowPosition = () => {
        switch (position) {
            case 'top-left':
                return 'top-[100%] rotate-[180deg] left-4 translate-y-[-1.5px]'
                break;
            case 'top-right':
                return 'top-[100%] rotate-[180deg] right-4 translate-y-[-1.5px]'
                break;
            case 'top-center':
                return 'top-[100%] rotate-[180deg] left-1/2 translate-x-[-50%] translate-y-[-1.5px]'
                break;
            case 'bottom-right':
                return 'bottom-[100%] right-4 translate-y-[1.5px]'
                break;
            case 'bottom-center':
                return 'bottom-[100%] left-1/2 translate-x-[-50%] translate-y-[1.5px]'
                break;
            case 'bottom-left':
                return 'bottom-[100%] left-4 translate-y-[1.5px]'
                break;
            case 'right':
                return 'right-full top-[50%] rotate-[-90deg] translate-y-[-50%]  translate-x-[1.5px]'
                break;
            case 'left':
                return 'left-full top-[50%] rotate-[90deg] translate-y-[-50%]  translate-x-[-1.5px]'
                break;
            default:
                break;
        }
    }

    const getTheme = () => {
        switch (theme) {
            case 'light':
                return 'text-cgray-700 bg-white'
                break;
            case 'dark':
                return 'text-white bg-cgray-900'
                break;
            default:
                break;
        }
    }

    return (
        <div
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            className="relative inline-block">
            <div
                className={`bg-trasnparent py-2 px-3 h-fit w-fit rounded-lg absolute z-20 ${getPosition()} ${getTheme()}`}
                style={isVisible ?
                    {
                        boxShadow: '0 0 15px 4px rgba(0,0,0,0.2)',
                        transition: 'opacity 5s'
                    }
                    :
                    { display: 'none' }
                }
            >
                <BsTriangleFill
                    className={`bg-transparent ${theme === 'light'? 'text-white': 'text-cgray-900'} absolute ${arrowPosition()}`}
                    size={8}
                />
                <p className='text-xs'>
                    {label}
                </p>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Tooltip