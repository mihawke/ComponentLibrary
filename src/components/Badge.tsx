import React from "react"

interface BadgeProps {
    children: React.ReactNode
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right' | 'only'
    size?: 'sm' | 'md' | 'lg'
    color?: 'brand' | 'gray' | 'error' | 'warning' | 'success'
    className?: string
}

const Badge: React.FC<BadgeProps> = ({
    children,
    size='md',
    iconPosition = 'left',
    icon,
    color,
    className

}) => {

    const getSize = () => {
        if (icon === undefined) {
            switch (size) {
                case 'sm':
                    return 'px-2.5 py-[2px] text-xs'
                    break;
                case 'md':
                    return 'px-2.5 py-[2px] text-sm'
                    break;
                case 'lg':
                    return 'px-2.5 py-1 text-sm'
                    break;
                default:
                    return 'px-2.5 py-[2px] text-xs'
                    break;
            }
        }
        else if (iconPosition === 'left') {
            switch (size) {
                case 'sm':
                    return 'pl-1 pr-2.5 py-[2px] text-xs'
                    break;
                case 'md':
                    return 'pl-1 pr-2.5 py-[2px] text-sm'
                    break;
                case 'lg':
                    return 'pl-1 pr-2.5 py-1 text-sm'
                    break;
                default:
                    return 'pl-1 pr-2.5 py-[2px] text-xs'
                    break;
            }
        }
        else if (iconPosition === 'right') {
            switch (size) {
                case 'sm':
                    return 'pr-1 pl-2.5 py-[2px] text-xs'
                    break;
                case 'md':
                    return 'pr-1 pl-2.5 py-[2px] text-sm'
                    break;
                case 'lg':
                    return 'pr-1 pl-2.5 py-1 text-sm'
                    break;
                default:
                    return 'pr-1 pl-2.5 py-[2px] text-xs'
                    break;
            }
        }
        if (iconPosition === 'only') {
            switch (size) {
                case 'sm':
                    return 'p-1 text-xs'
                    break;
                case 'md':
                    return 'p-1.5 text-sm'
                    break;
                case 'lg':
                    return 'p-2 text-sm'
                    break;
                default:
                    return 'p-1 text-xs'
                    break;
            }
        }
        else {
            switch (size) {
                case 'sm':
                    return 'px-2.5 py-[2px] text-xs'
                    break;
                case 'md':
                    return 'px-2.5 py-[2px] text-sm'
                    break;
                case 'lg':
                    return 'px-2.5 py-1 text-sm'
                    break;
                default:
                    return 'px-2.5 py-[2px] text-xs'
                    break;
            }
        }
    }

    const getColor = () => {
        switch (color) {
            case 'brand':
                return 'text-brand-700 bg-brand-100'
                break;
            case 'gray':
                return 'text-cgray-700 bg-cgray-100'
                break;
            case 'error':
                return 'text-error-700 bg-error-100'
                break;
            case 'warning':
                return 'text-warning-700 bg-warning-100'
                break;
            case 'success':
                return 'text-success-700 bg-success-100'
                break;
            default:
                return 'text-cgray-700 bg-cgray-100'
                break;
        }
    }

    const customClassName = `flex h-fit w-fit font-medium items-center rounded-full gap-1.5 relative ${getColor()} ${getSize()} ${className}`


    return (
        <div className={customClassName}>
            {iconPosition === 'left' ? icon : null}
            {iconPosition === 'only' ? icon : children}
            {iconPosition === 'right' ? icon : null}
        </div>
    )
}

export default Badge