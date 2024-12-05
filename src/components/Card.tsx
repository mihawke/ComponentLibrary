import React, { ReactNode } from "react"

interface CardProps {
    children: ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="flex flex-col max-w-[350px] bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
            <img
                src="https://placehold.jp/30/300x150.png?text=placeholder+image"
                alt="img"
                className="w-full h-auto"
            />
            <h3 className="text-lg font-semibold text-gray-800 p-4">
                Title
            </h3>
            <p className="max-h-20 text-sm text-gray-600 px-4 pb-4 line-clamp-4 break-words">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="px-4 pb-4">
                {children}
            </div>
        </div>
    );
};

export default Card