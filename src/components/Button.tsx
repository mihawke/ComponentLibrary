import { motion } from "framer-motion"

interface ButtonProps {
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    hierarchy?: 'primary' | 'secondary' | 'tertiary' | 'outlined'
    className?: string
    disabled?: boolean
    color?: 'brand' | 'gray' | 'error' | 'warning' | 'success'
    style?: React.CSSProperties
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


const COLOR_CLASSES = {
    primary: {
        brand: 'bg-brand-600 text-white hover:bg-brand-700 disabled:bg-brand-200',
        gray: 'bg-cgray-600 text-white hover:bg-gray-700 disabled:bg-cgray-200',
        error: 'bg-error-600 text-white hover:bg-error-700 disabled:bg-error-200',
        warning: 'bg-warning-600 text-white hover:bg-warning-700 disabled:bg-warning-200',
        success: 'bg-success-600 text-white hover:bg-success-700 disabled:bg-success-200',
    },
    secondary: {
        brand: 'bg-brand-50 text-brand-700 hover:bg-brand-100 disabled:bg-brand-25 disabled:text-brand-300',
        gray: 'bg-cgray-50 text-cgray-700 hover:bg-cgray-100 disabled:bg-cgray-25 disabled:text-brand-300',
        error: 'bg-error-50 text-error-700 hover:bg-error-100 disabled:bg-error-25 disabled:text-error-300',
        warning: 'bg-warning-50 text-warning-700 hover:bg-warning-100 disabled:bg-warning-25 disabled:text-warning-300',
        success: 'bg-success-50 text-success-700 hover:bg-success-100 disabled:bg-success-25 disabled:text-success-300',
    },
    tertiary: {
        brand: 'bg-transparent text-brand-700 hover:bg-brand-50 disabled:bg-transparent disabled:text-brand-300',
        gray: 'bg-transparent text-cgray-700 hover:bg-cgray-50 disabled:bg-transparent disabled:text-cgray-300',
        error: 'bg-transparent text-error-700 hover:bg-error-50 disabled:bg-transparent disabled:text-error-300',
        warning: 'bg-transparent text-warning-700 hover:bg-warning-50 disabled:bg-transparent disabled:text-warning-300',
        success: 'bg-transparent text-success-700 hover:bg-success-50 disabled:bg-transparent disabled:text-success-300',
    },
    outlined: {
        brand: 'bg-transparent text-brand-700 hover:bg-brand-50 disabled:bg-transparent disabled:text-brand-300',
        gray: 'bg-transparent text-cgray-700 hover:bg-cgray-50 disabled:bg-transparent disabled:text-cgray-300',
        error: 'bg-transparent text-error-700 hover:bg-error-50 disabled:bg-transparent disabled:text-error-300',
        warning: 'bg-transparent text-warning-700 hover:bg-warning-50 disabled:bg-transparent disabled:text-warning-300',
        success: 'bg-transparent text-success-700 hover:bg-success-50 disabled:bg-transparent disabled:text-success-300',
    },
};

const BORDER_COLORS = {
    brand: { default: '#D6BBFB', disabled: '#E9D7FE' },
    gray: { default: '#D0D5DD', disabled: '#E4E7EC' },
    error: { default: '#FDA29B', disabled: '#FECDCA' },
    warning: { default: '#FEC84B', disabled: '#FEDF89' },
    success: { default: '#6CE9A6', disabled: '#A6F4C5' },
};

const SIZES = {
    'sm': 'flex flex-row w-fit h-fit py-2 px-3.5 rounded-lg text-sm leading-5 gap-2',
    'md': 'flex flex-row w-fit h-fit px-4 py-2.5 rounded-lg text-sm leading-5 gap-2',
    'lg': 'flex flex-row w-fit h-fit px-[18px] py-2.5 rounded-lg text-base leading-6 gap-2',
    'xl': 'flex flex-row w-fit h-fit px-5 py-3 rounded-lg text-base leading-6 font-semibold gap-2',
    '2xl': 'flex flex-row w-fit h-fit px-7 py-4 rounded-lg text-lg leading-7 rounded-lg font-semibold gap-3'
}

const buttonHierarchy = {
    'primary': 'outline-none flex flex-row justify-center items-center',
    'secondary': 'outline-none flex flex-row justify-center items-center',
    'tertiary': 'outline-none flex flex-row justify-center items-center',
    'outlined': 'outline-none flex flex-row justify-center items-center'
}

const Button: React.FC<ButtonProps> = ({
    children,
    size = 'md',
    hierarchy = 'primary',
    disabled,
    color = 'brand',
    startIcon,
    endIcon,
    style,
    onClick,
    className
}) => {

    const borderColor = disabled ? BORDER_COLORS[color]?.disabled : BORDER_COLORS[color]?.default;

    const colorClass = COLOR_CLASSES[hierarchy]?.[color] || COLOR_CLASSES.primary.brand;

    const CustomClassName = `${SIZES[size]} ${buttonHierarchy[hierarchy]} ${colorClass} ${className}`

    return (
        <motion.button
            className={CustomClassName}
            disabled={disabled}
            style={hierarchy === 'outlined' ?
                {
                    WebkitBoxSizing: 'border-box',
                    MozBoxSizing: 'border-box',
                    boxSizing: 'border-box',
                    boxShadow: `${borderColor} 0px 0px 0px 1px inset`,
                    ...style
                } : { ...style }
            }
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onClick}
        >
            {startIcon}
            {children}
            {endIcon}
        </motion.button >
    )
}

export default Button