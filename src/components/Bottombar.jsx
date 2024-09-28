import React from 'react';
import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { SiHey } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";
import { MdGroupWork } from "react-icons/md";
import { CircularToggleDark } from './ToggleDark';

export default function Bottombar({ toggled, onToggle }) {
    return (
        <div className={`w-full fixed bottom-0 flex justify-around items-center p-2 ${toggled ? 'bg-lighte3' : 'bg-dark24'}`}>
            <Link to="/" className={`flex flex-col items-center ${toggled ? 'text-dark17' : 'text-white'}`}>
                <IoHome size={25} />
                <span className="text-xs">Home</span>
            </Link>
            <Link to="/aboutme" className={`flex flex-col items-center ${toggled ? 'text-dark17' : 'text-white'}`}>
                <SiHey size={25} />
                <span className="text-xs">About</span>
            </Link>

            <div className={`flex flex-col items-center ${toggled ? 'text-dark17' : 'text-white'}`}>
                <CircularToggleDark checked={toggled} onChange={onToggle} />
            </div>
            <Link to="/works" className={`flex flex-col items-center ${toggled ? 'text-dark17' : 'text-white'}`}>
                <MdGroupWork size={25} />
                <span className="text-xs">Works</span>
            </Link>
            <Link to="/contactme" className={`flex flex-col items-center ${toggled ? 'text-dark17' : 'text-white'}`}>
                <RiContactsFill size={25} />
                <span className="text-xs">Contact</span>
            </Link>
        </div>
    );
}
