import React from "react"

interface SkeletonProps {
    variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
    width?: number | string
    height?: number | string
    fontSize?: number
    style?: React.CSSProperties
    className?: string
}

const Skeleton: React.FC<SkeletonProps> = ({
    variant = 'rectangular',
    width = 120,
    height = 30,
    fontSize,
    style,
    className
}) => {

    const getSize = () => {
        switch (variant) {
            case 'text':
                return `h-fit min-w-20`
                break;
            case 'circular':
                return 'rounded-full'
                break;
            case 'rectangular':
                return ''
                break;
            case 'rounded':
                return 'rounded'
                break;
            default:
                break;
        }
    }

    return (
        <div className={`bg-cgray-400 animate-pulse ${getSize()} ${className}`}
            style={{
                width: width,
                height: height,
                ...style
            }}
        >
            <p
                style={{
                    fontSize: fontSize,
                    color: 'transparent'
                }}> text</p>
        </div>
    )
}

export default Skeleton