import { motion } from "framer-motion"
import React from "react"

interface FABProps {
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    hierarchy?: 'primary' | 'secondary' | 'tertiary' | 'outlined'
    disabled?: boolean
    color?: 'brand' | 'gray' | 'error' | 'warning' | 'success'
    style?: React.CSSProperties
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FAB: React.FC<FABProps> = ({
    children,
    size = 'md',
    hierarchy = 'primary',
    disabled,
    color = 'brand',
    style,
    onClick,
    className
}) => {

    const buttonSize = {
        'sm': 'p-2 w-fit h-fit rounded-lg',
        'md': 'p-2.5 w-fit h-fit rounded-lg',
        'lg': 'p-3 w-fit h-fit rounded-lg',
        'xl': 'p-3.5 w-fit h-fit rounded-lg',
        '2xl': 'p-4 w-fit h-fit rounded-lg'
    }
    const getColor = () => {
        if (hierarchy === 'primary') {
            switch (color) {
                case 'brand':
                    return 'bg-brand-600 text-white hover:bg-brand-700 disabled:bg-brand-200'
                    break;
                case 'gray':
                    return 'bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-200'
                    break;
                case 'error':
                    return 'bg-error-600 text-white hover:bg-error-700 disabled:bg-error-200'
                    break;
                case 'warning':
                    return 'bg-warning-600 text-white hover:bg-warning-700 disabled:bg-warning-200'
                    break;
                case 'success':
                    return 'bg-success-600 text-white hover:bg-success-700 disabled:bg-success-200'
                    break;
                default:
                    return 'bg-brand-600 text-white hover:bg-brand-700 disabled:bg-brand-200'
                    break;
            }
        }
        else if (hierarchy === 'secondary') {
            switch (color) {
                case 'brand':
                    return 'bg-brand-50 text-brand-700 hover:bg-brand-100 disabled:bg-brand-25 disabled:text-brand-300'
                    break;
                case 'gray':
                    return 'bg-gray-50 text-gray-700 hover:bg-gray-100 disabled:bg-gray-25 disabled:text-brand-300'
                    break;
                case 'error':
                    return 'bg-error-50 text-error-700 hover:bg-error-100 disabled:bg-error-25 disabled:text-error-300'
                    break;
                case 'warning':
                    return 'bg-warning-50 text-warning-700 hover:bg-warning-100 disabled:bg-warning-25 disabled:text-warning-300'
                    break;
                case 'success':
                    return 'bg-success-50 text-success-700 hover:bg-success-100 disabled:bg-success-25 disabled:text-success-300'
                    break;
                default:
                    return 'bg-brand-50 text-brand-700 hover:bg-brand-100 disabled:bg-brand-25 disabled:text-brand-300'
                    break;
            }
        }
        else if (hierarchy === 'tertiary') {
            switch (color) {
                case 'brand':
                    return 'bg-transparent text-brand-700 hover:bg-brand-50 disabled:bg-transparent disabled:text-brand-300'
                    break;
                case 'gray':
                    return 'bg-transparent text-gray-700 hover:bg-gray-50 disabled:bg-transparent disabled:text-gray-300'
                    break;
                case 'error':
                    return 'bg-transparent text-error-700 hover:bg-error-50 disabled:bg-transparent disabled:text-error-300'
                    break;
                case 'warning':
                    return 'bg-transparent text-warning-700 hover:bg-warning-50 disabled:bg-transparent disabled:text-warning-300'
                    break;
                case 'success':
                    return 'bg-transparent text-success-700 hover:bg-success-50 disabled:bg-transparent disabled:text-success-300'
                    break;
                default:
                    return 'bg-transparent text-brand-700 hover:bg-brand-50 disabled:bg-transparent disabled:text-brand-300'
                    break;
            }
        }
        else if (hierarchy === 'outlined') {
            switch (color) {
                case 'brand':
                    return 'bg-transparent text-brand-700 hover:bg-brand-50 disabled:bg-transparent disabled:text-brand-300'
                    break;
                case 'gray':
                    return 'bg-transparent text-gray-700 hover:bg-gray-50 disabled:bg-transparent disabled:text-gray-300'
                    break;
                case 'error':
                    return 'bg-transparent text-error-700 hover:bg-error-50 disabled:bg-transparent disabled:text-error-300'
                    break;
                case 'warning':
                    return 'bg-transparent text-warning-700 hover:bg-warning-50 disabled:bg-transparent disabled:text-warning-300'
                    break;
                case 'success':
                    return 'bg-transparent text-success-700 hover:bg-success-50 disabled:bg-transparent disabled:text-success-300'
                    break;
                default:
                    return 'bg-transparent text-brand-700 hover:bg-brand-50 disabled:bg-transparent disabled:text-brand-300'
                    break;
            }
        }
    }

    const getBorderColor = () => {
        if (disabled) {
            switch (color) {
                case 'brand':
                    return '#E9D7FE'
                    break;
                case 'gray':
                    return '#E4E7EC'
                    break;

                case 'error':
                    return '#FECDCA'
                    break;
                case 'warning':
                    return '#FEDF89'
                    break;

                case 'success':
                    return '#A6F4C5'
                    break;

                default:
                    return '#E9D7FE'
                    break;
            }
        }
        else {

            switch (color) {
                case 'brand':
                    return '#D6BBFB'
                    break;
                case 'gray':
                    return '#D0D5DD'
                    break;

                case 'error':
                    return '#FDA29B'
                    break;
                case 'warning':
                    return '#FEC84B'
                    break;

                case 'success':
                    return '#6CE9A6'
                    break;

                default:
                    return '#D6BBFB'
                    break;
            }
        }
    }

    const buttonHierarchy = {
        'primary': 'outline-none flex flex-row justify-center items-center',
        'secondary': 'outline-none flex flex-row justify-center items-center',
        'tertiary': 'outline-none flex flex-row justify-center items-center',
        'outlined': 'outline-none flex flex-row justify-center items-center'
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

    const getHierarchy = () => {
        if (hierarchy === 'primary') {
            return buttonHierarchy.primary;
        }
        else if (hierarchy === 'secondary') {
            return buttonHierarchy.secondary;
        }
        else if (hierarchy === 'tertiary') {
            return buttonHierarchy.tertiary;
        }
    }

    const CustomClassName = `${getSize()} ${getHierarchy()} ${getColor()}  ${className}`

    return (
        <motion.button
            className={CustomClassName}
            disabled={disabled}
            onClick={onClick}
            style={hierarchy === 'outlined' ?
                {
                    WebkitBoxSizing: 'border-box',
                    MozBoxSizing: 'border-box',
                    boxSizing: 'border-box',
                    boxShadow: `${getBorderColor()} 0px 0px 0px 1px inset`,
                    ...style
                }
                :
                {
                    ...style
                }
            }
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {children}
        </motion.button >
    )
}

export default FAB