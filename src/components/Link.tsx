import React from 'react'

interface LinkProps {
    href?: string
    target?: string
    children: React.ReactNode
    variant?: string
    underline?: 'hover' | 'none' | 'always'
    className?: string
    style?: React.CSSProperties
}
const Link: React.FC<LinkProps> = ({
    href,
    target,
    children,
    className,
    style,
    underline
}) => {

    const getUnderline = () => {
        switch (underline) {
            case 'none':
                return ''
                break;
            case 'always':
                return 'underline'
                break;

            case 'hover':
                return 'hover:underline'
                break;

            default:
                break;
        }
    }

    return (
        <a
            href={href}
            target={target}
            className={`${getUnderline()} ${className}`}
            style={style}
        >
            {children}
        </a>
    )
}

export default Link