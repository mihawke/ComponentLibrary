import React, { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"

interface DropdownProps {

}

const Dropdown: React.FC<DropdownProps> = () => {

    const [isVisible, setTsVisible] = useState(false)

    return (
        <div className="flex flex-col relative">
            <button
                onClick={() => setTsVisible(prev => !prev)}
                className="flex flex-row justify-center items-center w-fit h-fit px-4 py-2.5 rounded-lg gap-2 border-cgray-300 border-[1px] outline-none"
            >
                <p className="text-sm text-cgray-700 font-medium">Select</p>
                {isVisible ?
                    <FaAngleDown color="#344054" /> : <FaAngleUp color="#344054" />}
            </button>
            <div
                className="flex flex-col mt-1 border-[1px] bg-white border-gray-300 rounded-lg shadow-md z-10 absolute top-[100%] left-0"
                style={isVisible ? {} : { display: 'none' }}
            >
                <button
                    className="w-[240px] px-4 py-2.5 text-cgray-700 hover:bg-gray-50 disabled:text-gray-200 text-sm font-medium"
                >Item_1</button>
                <button
                    className="w-[240px] px-4 py-2.5 text-cgray-700 hover:bg-gray-50 disabled:text-gray-200 text-sm font-medium"
                >Item_2</button>
                <button
                    className="w-[240px] px-4 py-2.5 text-cgray-700 hover:bg-gray-50 disabled:text-gray-200 text-sm font-medium"
                >Item_3</button>
                <button
                    className="w-[240px] px-4 py-2.5 text-cgray-700 hover:bg-gray-50 disabled:text-gray-200 text-sm font-medium"
                >Item_4</button>
            </div>
        </div>
    )
}

export default Dropdown