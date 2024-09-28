import React, { useState } from 'react';
import { useToggle } from '../ToggleContext';
import { LiaGreaterThanSolid, LiaLessThanSolid } from "react-icons/lia";
import { BsArrowDownRight } from "react-icons/bs";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import chatinger from '../assets/img/chatinger.png';
import Picload from '../assets/img/Picload.png';
import { useProjects } from '../contexts/projectscontext';
import { FaGithub } from 'react-icons/fa';

export default function Development() {


    const { toggled } = useToggle();
    const { projects } = useProjects();
    const [slideleft, setSlideLeft] = useState(false);
    const [sliderright, setSliderRight] = useState(false);
    const [slideleft2, setSlideLeft2] = useState(false);

    const toggleSlideLeft = () => setSlideLeft(!slideleft);
    const toggleSlideRight = () => setSliderRight(!sliderright);
    const toggleSlideLeft2 = () => setSlideLeft2(!slideleft2);

    const projectUrls = projects.map(project => project?.projectUrl);

    return (
        <>
            <div className={`h-min pb-[20px] mt-5 rounded-3xl w-full p-5 ${toggled ? 'bg-dark17 text-lighte3' : 'bg-lighte3 text-dark24'} overflow-hidden`}>
                <code className={`heading flex w-full justify-center items-center py-11 text-5xl text-5xl lg:text-7xl ${toggled ? 'text-lighte3' : 'text-dark24'}`}>
                    <LiaLessThanSolid className='text-3xl sm:text-4xl lg:text-6xl' />
                    <span className={`text-mazbit ${toggled ? 'text-yellow-300' : 'text-red-500'}`}>Dev</span>elopment
                    <LiaGreaterThanSolid className='text-3xl sm:text-4xl lg:text-6xl' />
                </code>
                <p className='p-5 text-sm md:text-lg text-code text-justify'>
                    <span className='text-xl md:text-3xl text-mazit text-green-600'>I've </span>
                    had the opportunity to bring various digital ideas to life using my skills in front-end development.
                    Each project showcases my dedication to clean code, responsive design, and smooth user experiences.
                    From simple layouts to more complex web apps, I’ve developed projects using HTML, CSS, JavaScript, ReactJS, and Tailwind CSS.
                    Below are a few of my recent projects—each one a step closer to my goal of designing something truly remarkable!
                </p>

                <div className="projects flex flex-col gap-5">
                    <div className={`title text-mazit flex text-xl ${toggled ? 'text-lightop20' : 'text-darkop40'} group cursor-pointer`}>
                        projects
                        <BsArrowDownRight className='ms-2 transform translate-y-5 group-hover:translate-y-7 group-hover:translate-x-2 ' />
                    </div>
                    <div id='project1' className="relative w-full h-[250px] flex justify-center items-center border-black">

                        <div className={`btnclick text-mazit p-1 text-3xl sm:text-4xl lg:text-5xl rounded-full border border-black w-min shadow-lg cursor-pointer mx-auto
                            ${toggled ? 'hover:text-dark24 hover:bg-lighte3 border-lightop20' : 'hover:text-lighte3 hover:bg-dark24 border-darkop40'}`}
                            onClick={toggleSlideLeft}>
                            <div className={`px-11 py-5 rounded-full border  shadow-lg
                                    ${toggled ? 'border-lightop60 hover:border-dark24 text-lightop60 hover:text-dark17' : 'text-darkop60 hover:text-lighte3 border-darkop60 hover:border-lighte3'}`}>
                                PicLoad
                            </div>
                        </div>

                        <div className={`slidin w-[100%] h-full absolute z-10 top-0 rounded-[30px_0px_0px_30px] transform transition-all duration-2000
                            ${toggled ? 'bg-lighte3' : 'bg-dark17'} 
                            ${slideleft ? ' right-[-10%]' : 'opacity-0 right-[-100%]'}`}>

                            <div className="relative w-full h-full p-3">

                                {/* ------------------ Slide Content Starts */}
                                {/* -----------------------------------------------------------Image */}
                                <a href={projectUrls[0]}>

                                    <div className={`projectImage h-full w-[300px] rounded-2xl
                                bg-cover bg-left`}
                                        style={{
                                            backgroundImage: `url("/img/picload${toggled ? '1.1' : '1'}-min.png")`,
                                        }}>

                                    </div>
                                </a>


                                {/* ------------------ Slide Content ends */}


                                <div className={`absolute left-[-40px] top-[50%] translate-y-[-50%] text-3xl z-10 cursor-pointer
                                     ${toggled ? 'text-lightop20' : 'text-darkop40'}`} onClick={(slideLeft) => setSlideLeft(false)}>
                                    <MdOutlineKeyboardDoubleArrowRight />
                                </div>
                                <div className={`hidden xl:block absolute top-[-60px] right-[46px] w-[60px] h-[60px] 
                                 z-20 rounded-[0px_0px_30px_0px] shadow-[30px_30px_0px]
                                 ${toggled ? 'bg-dark17 shadow-lighte3' : 'bg-lighte3 shadow-dark17'}`}>
                                </div>
                                <div className={`hidden xl:block absolute bottom-[-60px] right-[46px] w-[60px] h-[60px] 
                                 z-20 rounded-[0px_30px_0px_0px] shadow-[30px_-30px_0px]
                                 ${toggled ? 'bg-dark17 shadow-lighte3' : 'bg-lighte3 shadow-dark17'}`}>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div id='project2' className="relative w-full h-[250px] flex justify-center items-center border-black">
                        <div className={`btnclick text-mazit p-1 text-3xl sm:text-4xl lg:text-5xl rounded-full border border-black w-min shadow-lg cursor-pointer mx-auto
                            ${toggled ? 'hover:text-dark24 hover:bg-lighte3 border-lightop20' : 'hover:text-lighte3 hover:bg-dark24 border-darkop40'}`}
                            onClick={toggleSlideRight}>
                            <div className={`px-11 py-5 rounded-full border shadow-lg
                                    ${toggled ? 'border-lightop60 hover:border-dark24 text-lightop60 hover:text-dark17' : 'text-darkop60 hover:text-lighte3 border-darkop60 hover:border-lighte3'}`}>
                                ChaTinger
                            </div>
                        </div>
                        <div className={`slidin w-[100%] h-full absolute top-0 rounded-[0px_30px_30px_0px] transform transition-all duration-2000
                            ${toggled ? 'bg-lighte3' : 'bg-dark17'} 
                            ${sliderright ? ' left-[-10%]' : 'opacity-0 left-[-100%]'}`}>
                            {/* Slider Content */}
                            <div className="relative w-full h-full p-3 ">
                                <div className="flex w-full h-full justify-end">
                                    {/* -----------------------------------------------------------Image */}
                                    <a href={projectUrls[1]}>

                                        <div className={`projectImage h-full w-[300px] rounded-2xl
                                bg-cover bg-left`}
                                            style={{
                                                backgroundImage: `url("/img/chatinger.png")`
                                            }}>

                                        </div>
                                    </a>
                                    <div className={`absolute right-[-40px] top-[50%] translate-y-[-50%] text-3xl z-10 cursor-pointer
                                     ${toggled ? 'text-lightop20' : 'text-darkop40'} rotate-180 `} onClick={() => setSliderRight(false)}>
                                        <MdOutlineKeyboardDoubleArrowRight />
                                    </div>
                                    <div className={`hidden xl:block  absolute top-[-60px] left-[46px] w-[60px] h-[60px] 
                                 z-20 rounded-[0px_0px_0px_30px] shadow-[-30px_30px_0px]
                                 ${toggled ? 'bg-dark17 shadow-lighte3' : 'bg-lighte3 shadow-dark17'}`}>
                                    </div>
                                    <div className={`hidden xl:block  absolute bottom-[-60px] left-[46px] w-[60px] h-[60px] 
                                 z-20 rounded-[30px_0px_0px_0px] shadow-[-30px_-30px_0px]
                                 ${toggled ? 'bg-dark17 shadow-lighte3' : 'bg-lighte3 shadow-dark17'}`}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='project3' className="relative w-full h-[250px] flex justify-center items-center border-black">
                        <div className={`btnclick text-mazit p-1 text-3xl sm:text-4xl lg:text-5xl rounded-full border border-black w-min shadow-lg cursor-pointer mx-auto
                            ${toggled ? 'hover:text-dark24 hover:bg-lighte3 border-lightop20' : 'hover:text-lighte3 hover:bg-dark24 border-darkop40'}`}
                            onClick={toggleSlideLeft2}>
                            <div className={`px-11 py-5 rounded-full border w-min shadow-lg
                                    ${toggled ? 'border-lightop60 hover:border-dark24 text-lightop60 hover:text-dark17' : 'text-darkop60 hover:text-lighte3 border-darkop60 hover:border-lighte3'}`}>
                                ASM.Spaces
                            </div>
                        </div>
                        <div className={`slidin w-[100%] h-full absolute top-0 rounded-[30px_0px_0px_30px] transform transition-all duration-2000
                            ${toggled ? 'bg-lighte3' : 'bg-dark17'} 
                            ${slideleft2 ? ' right-[-10%]' : 'opacity-0 right-[-100%]'}`}>
                            {/* Slider Content */}
                            <div className="relative w-full h-full p-3">
                                {/* -----------------------------------------------------------Image */}
                                <a href={projectUrls[2]}>

                                    <div className={`projectImage h-full w-[300px] rounded-2xl
                                bg-[url(/public/img/asm1-min.png)]
                                bg-cover bg-left`}>
                                    </div>
                                </a>
                                <div className={`absolute left-[-40px] top-[50%] translate-y-[-50%] text-3xl z-10 cursor-pointer
                                     ${toggled ? 'text-lightop20' : 'text-darkop40'}`} onClick={() => setSlideLeft2(false)}>
                                    <MdOutlineKeyboardDoubleArrowRight />
                                </div>
                                <div className={`hidden xl:block absolute top-[-60px] right-[46px] w-[60px] h-[60px] 
                                 z-20 rounded-[0px_0px_30px_0px] shadow-[30px_30px_0px]
                                 ${toggled ? 'bg-dark17 shadow-lighte3' : 'bg-lighte3 shadow-dark17'}`}>
                                </div>
                                <div className={`hidden xl:block absolute bottom-[-60px] right-[46px] w-[60px] h-[60px] 
                                 z-20 rounded-[0px_30px_0px_0px] shadow-[30px_-30px_0px]
                                 ${toggled ? 'bg-dark17 shadow-lighte3' : 'bg-lighte3 shadow-dark17'}`}>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="p-2 mt-5 text-center text-syne">
                    <a href="https://github.com/navalrathore10">
                        <FaGithub className='mx-auto text-3xl mb-2' />
                    </a>
                    Explore more Projects
                </div>
            </div>
        </>
    );
}
