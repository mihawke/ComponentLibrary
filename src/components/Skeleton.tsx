import React, { useEffect } from "react"

interface SkeletonProps {
    variant?: 'text' | 'circular' | 'reactangular' | 'rounded'
    width?: number
    height?: number
    fontSize?: number
}

const Skeleton: React.FC<SkeletonProps> = ({
    variant,
    width,
    height,
    fontSize
}) => {

    useEffect(() => {

        return () => {

        };
    }, [])

    const getSize = () => {
        switch (variant) {
            case 'text':
                return `h-fit min-w-20`
                break;
            case 'circular':
                return 'rounded-full'
                break;
            case 'reactangular':
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
        <div className={`bg-cgray-400 animate-pulse ${getSize()}`}
            style={{
                minWidth: width,
                minHeight: height
            }}
        >
            <p
                style={{
                    fontSize: fontSize,
                    color: 'transparent'
                }}> text</p>
            <style>
                {`
                
                `}
            </style>
        </div>
    )
}

export default Skeleton