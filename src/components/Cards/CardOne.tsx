import React, { useState } from "react"
import { MdLightMode } from "react-icons/md";

interface CardOneProps {
    title:string
    description:string
}

const CardOne: React.FC<CardOneProps> = ({ 
    title,
    description
 }) => {
    const [lightTheme, setLightTheme] = useState(false)
    return (
        <div className={`w-[360px] h-fit rounded-[20px] border transition-colors duration-300 shadow-sm ${lightTheme ? 'bg-white' : 'bg-black text-white'}`}>
            <header className="flex items-center justify-between w-full p-7">
                <p className="font-medium text-[37px]">{title}</p>
                <div className={`w-[50px] h-[50px] rounded-full flex items-center justify-center ${lightTheme ? 'bg-[#F2F2F2]' : 'bg-transparent'}`}>
                    <MdLightMode size={20} className={`${lightTheme ? '' : 'text-[#F8D000]'}`} />
                </div>
            </header>
            <main>
                <p className="text-base p-7">{description}</p>
            </main>
            <footer className="flex items-center justify-between w-full p-7">
            <p className="text-[15px] font-medium">{lightTheme? 'Light' : 'Dark'}</p>
                <div className="p-2">
                    <div
                        className={`h-3 w-8 relative rounded-full transition-colors duration-300 ${lightTheme ? 'bg-[#DEDEDE]' : 'bg-[#255570]'
                            }`}
                            onClick={() => setLightTheme((prev) => !prev)}
                    >
                        <div
                            className={`h-4 w-4 rounded-full absolute top-0 z-10 translate-y-[-2px] transition-transform duration-300 ${lightTheme
                                    ? 'bg-[#FAFAFA] shadow-sm translate-x-0'
                                    : 'bg-[#1B93D7] shadow-sm translate-x-[20px]'
                                }`}
                        ></div>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default CardOne