import React from "react"

interface CardThreeProps {
    theme?: 'light' | 'dark'
    title:string
    description:string
    buttonText:string
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CardThree: React.FC<CardThreeProps> = ({
    theme = 'light',
    title,
    description,
    buttonText,
    onClick
}) => {
    const lightThemeGlass  = {
        background: 'rgba(255, 255, 255, 0.25)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)',
    };
    const darkThemeGlass  = {
        background: 'rgba(0, 0, 0, 0.5)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
    };
    return (
        <div
            className={`flex flex-col gap-2 w-[360px] h-fit rounded-[20px] p-4 border transition-colors duration-300 shadow-sm 
                ${theme === 'light' ? '' : 'bg-black text-white'}`}
            style={theme === 'light' ? lightThemeGlass  : darkThemeGlass }
        >
            <p className="font-medium text-[37px]">{title}</p>
            <p className="text-base opacity-75">{description}</p>
            <button 
            onClick={onClick}
            className={`w-full text-center font-medium bg-transparent border border-opacity-40 py-2 rounded-full transition-colors duration-150 ${theme ==='light'?'border-black':'border-white'}`}>
                {buttonText}
            </button>
        </div>
    );
};

export default CardThree