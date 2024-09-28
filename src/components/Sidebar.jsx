import React from 'react';
import { Link } from 'react-router-dom';
import { ToggleDark } from './ToggleDark';
import { IoHome } from 'react-icons/io5';
import { SiHey } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";
import { MdGroupWork, MdExplore } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";

export default function Sidebar({ toggled, onToggle, children }) {
    return (
        <>
            <div className="w-[300px] flex">
                <div className={`flex flex-col justify-between py-5 items-center social-strip w-[80px] border-e-2 ${!toggled ? 'border-dark24' : 'border-white'}`}>
                    <div className={`img w-[50px] h-[50px] overflow-hidden rounded-full border-2 ${!toggled ? 'border-dark24' : 'border-white'}`}>
                        <img src="
                        https://images.unsplash.com/profile-1661966219494-f87fcbcf7937image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3
                        "
                            style={{ backgroundColor: 'yellow', width: '100%', height: '100%' }}
                            alt="PP" />
                        {/*  */}
                    </div>
                    <div className="logo w-[25px] h-min">
                        <img src="https://github.com/navalrathore10/Picload-Naval-Rathore/blob/master/src/assets/Untitled-11.png?raw=true"
                            alt="" width={'100%'} height={'100%'} className={`${toggled ? '' : 'invert'} `} />
                    </div>
                </div>
                <div className={`flex-1 h-screen text-white flex flex-col text-syne border-e-2 relative ${!toggled ? 'border-dark24' : 'border-white'}`}>
                    <div className={`darkmodetoggletab p-6 w-[50%] mx-auto rounded-[0px_0px_35px_35px] ${!toggled ? 'bg-dark24' : 'bg-white'}`}>
                        <ToggleDark checked={toggled} onChange={onToggle} />
                    </div>
                    <div className="titlebox p-6">
                        <h2 className={`text-xl font-bold ${!toggled ? 'text-white' : 'text-dark17'}`}>Naval Rathore</h2>
                        {/* <h2 className={`text-xl font-bold ${!toggled ? 'text-white' : 'text-dark17'}`}>Bla Bla Bla</h2> */}
                        <p className="text-gray-400">Front-End Developer</p>
                        {/* <p className="text-gray-400">Hehehe</p> */}
                    </div>
                    <nav className={`border-t-2 ${!toggled ? 'border-dark24' : 'border-white'} p-6 `}>
                        <ul className={`py-3 flex flex-col gap-2 ${!toggled ? 'text-white' : 'text-dark17'}`}>
                            <li className=""><Link to="/" className={`block p-3 ${!toggled ? 'hover:bg-dark24' : 'hover:bg-white'}
                             rounded-md transition duration-500 flex items-center gap-4 `}>
                                <IoHome />
                                Home</Link>
                            </li>
                            <li className=""><Link to="/works/development" className={`block p-3 ${!toggled ? 'hover:bg-dark24' : 'hover:bg-white'}
                             rounded-md transition duration-500 flex items-center gap-4 `}>
                                <MdGroupWork />
                                Works</Link>
                            </li>
                            <li className=""><Link to="/aboutme" className={`block p-3 ${!toggled ? 'hover:bg-dark24' : 'hover:bg-white'}
                             rounded-md transition duration-500 flex items-center gap-4 `}>
                                <SiHey />
                                About me</Link>
                            </li>
                            {/* <li className=""><Link to="/explorations" className={`block p-3 ${!toggled ? 'hover:bg-dark24' : 'hover:bg-white'}
                             rounded-md transition duration-500 flex items-center gap-4 `}>
                                <MdExplore />
                                Explorations</Link>
                            </li> */}
                            <li className=""><Link to="/contactme" className={`block p-3 ${!toggled ? 'hover:bg-dark24' : 'hover:bg-white'}
                             rounded-md transition duration-500 flex items-center gap-4 `}>
                                <RiContactsFill />
                                Contact me</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="additional-links absolute bottom-0 w-full flex justify-center items-center">

                        <Link to="/works/designing" className={`darkmodetoggletab p-5 w-2/3 mx-auto rounded-[35px_35px_0px_0px]
                                        flex justify-center items-center ${!toggled ? 'bg-dark24 text-white' : 'bg-white text-dark17'}`}>
                            <img src="https://github.com/navalrathore10/Picload-Naval-Rathore/blob/master/src/assets/NRZ-2000.png?raw=true"
                                alt="" width={'100%'}
                                className={`{hover:hue-rotate-0 hue-rotate-[155deg]} grayscale hover:grayscale-0 ${toggled ? '' : ''} `} />
                        </Link>

                    </div>
                </div>
            </div>
            {children}
        </>
    );
}

