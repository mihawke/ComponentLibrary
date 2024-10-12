import React, { useEffect } from "react"

interface LoadingProps {
    size?: 'sm' | 'md' | 'lg'
}

const Loading: React.FC<LoadingProps> = ({
    size = 'sm'
}) => {

    useEffect(() => {

        return () => {

        };
    }, [])

    const getSize = () => {
        switch (size) {
            case 'sm':
                return 'w-8 h-8'
                break;
            case 'md': 
                return 'w-9 h-9'
                break;
            case 'lg':
                return 'w-10 h-10'
                break;
            default:
                break;
        }
    }

    return (
        <div className={`rounded-full border-t-4 border-t-brand-600 border-4 border-cgray-100 spinner ${getSize()}`}>
            <style>
                {`
                .spinner{
                  animation: spin-fast 1s linear infinite;
                }
                @keyframes spin-fast {
                0% { transform: rotate(0deg); }
                50% { transform: rotate(90deg); }
                100% { transform: rotate(360deg); }
                }
                `}
            </style>
        </div>
    )
}

export default Loading