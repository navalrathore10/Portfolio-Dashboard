import React from 'react';
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

// Named export for ToggleDark
export const ToggleDark = function ToggleDark({ checked, onChange }) {
    return (
        <div className="flex justify-center items-center">
            <label className="relative inline-block w-16 h-8">
                <span className={`absolute top-[6px] left-9 z-10 `}>
                    <IoSunny className="text-orange-500 text-[20px]" />
                </span>
                <span className={`absolute top-[6px] left-1 z-10 `}>
                    <FaMoon className="text-[#e3e3e3] text-[20px]" />
                </span>
                <input
                    type="checkbox"
                    className="opacity-0 w-0 h-0 peer"
                    defaultChecked={checked}
                    onChange={onChange}
                />
                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#e3e3e3] transition-all duration-400 rounded-full peer-checked:bg-[#242424] peer-focus:ring-2 peer-focus:ring-blue-900"></span>
                <span className="absolute content-[''] h-7 w-7 bg-[#242424] rounded-full bottom-[2px] left-1 z-20 transition-all duration-400 peer-checked:transform peer-checked:bg-[#e3e3e3] peer-checked:translate-x-7"></span>
            </label>
        </div>
    );
}

// Named export for CircularToggleDark
export const CircularToggleDark = function CircularToggleDark({ checked, onChange }) {
    return (
        <div className="flex justify-center items-center">
            <label className="relative flex justify-center items-center w-16 h-16">
                <input
                    type="checkbox"
                    className="opacity-0 w-0 h-0 peer"
                    defaultChecked={checked}
                    onChange={onChange}
                />
                <span className="z-10 bg-[#e3e3e3] transition-all duration-400
                    rounded-full peer-checked:bg-[#242424]
                    flex justify-center items-center h-[50px] w-[50px]">
                    {checked ? (
                        <FaMoon className="text-[#e3e3e3] text-[30px]" />
                    ) : (
                        <IoSunny className="text-orange-500 text-[30px]" />
                    )}
                </span>
                {/* <span className="absolute content-[''] h-14 w-14 bg-[#242424] rounded-full transition-all duration-400 peer-checked:bg-[#e3e3e3]"></span> */}
            </label>
        </div>
    );
}
