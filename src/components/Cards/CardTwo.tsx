import React from "react"
import placeholder from '../../assets/placeholder.jpg'

interface CardTwoProps {
    title:string
    description:string
    primaryButtonText:string
    secondaryButtonText:string
    onClickSecondary?: React.MouseEventHandler<HTMLButtonElement>;
    onClickPrimary?: React.MouseEventHandler<HTMLButtonElement>;
    theme?: 'light' | 'dark'
}

const CardTwo: React.FC<CardTwoProps> = ({
    theme = 'light',
    title,
    description,
    onClickPrimary,
    onClickSecondary,
    primaryButtonText,
    secondaryButtonText
}) => {
    return (
        <div className={`w-[360px] h-fit rounded-[20px] p-5 border transition-colors duration-300 shadow-sm ${theme === 'light' ? 'bg-white' : 'bg-black text-white'}`}>
            <div className="flex items-center justify-between w-full h-[200px] mb-4">
                <img src={placeholder} alt="img" className="bg-cover rounded-[20px]" />
            </div>
            <main className="flex flex-col gap-2">
                <h3 className="font-medium text-3xl">{title}</h3>
                <p className="text-base">{description}</p>
                <div className="flex gap-2">
                    <button
                    onClick={onClickSecondary}
                    className="w-fit text-center px-5 py-2 bg-brand-600 rounded-full text-white hover:bg-brand-800 transition-colors duration-150">{secondaryButtonText}</button>
                    <button 
                    onClick={onClickPrimary}
                    className="w-fit text-center px-5 py-2 bg-[#6750A4] rounded-full text-white hover:bg-[#381E72] transition-colors duration-150">{primaryButtonText}</button>
                </div>
            </main>
        </div>
    );
};

export default CardTwo