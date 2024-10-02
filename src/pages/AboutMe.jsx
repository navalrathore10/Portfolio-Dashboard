import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToggle } from '../ToggleContext';
import { MdDoubleArrow, MdOutlineKeyboardArrowRight, MdDownload } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { SlLike, SlDislike } from "react-icons/sl";
import TechStackIcon from "tech-stack-icons";
import { motion } from "framer-motion";
import aboutpic1 from '../../public/img/aboutpic1.jpg';
import aboutpic2 from '../../public/img/aboutpic2.jpg';

export default function AboutMe() {
    const { toggled } = useToggle();

    // State to hold the like and dislike counts
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    // Effect to load like and dislike counts from localStorage when the component mounts
    useEffect(() => {
        const storedLikeCount = localStorage.getItem('likeCount');
        const storedDislikeCount = localStorage.getItem('dislikeCount');
        if (storedLikeCount) setLikeCount(parseInt(storedLikeCount));
        if (storedDislikeCount) setDislikeCount(parseInt(storedDislikeCount));
    }, []);

    // Function to handle the like button click
    const handleLikeClick = () => {
        const newLikeCount = likeCount + 1;
        setLikeCount(newLikeCount);
        localStorage.setItem('likeCount', newLikeCount);  // Save to localStorage
    };

    // Function to handle the dislike button click
    const handleDislikeClick = () => {
        const newDislikeCount = dislikeCount + 1;
        setDislikeCount(newDislikeCount);
        localStorage.setItem('dislikeCount', newDislikeCount);  // Save to localStorage
    };


    const projects = [
        {
            id: 1,
            name: "Picload",
            description: "Details about Project One",
            details: "This Project was initially made for an Assignment.",
            techStack: ["React", "Tailwind"],
            imagePath: "/img/picload1-min.png", // Image path or URL
            projectUrl: "https://picloadnavalrathore.netlify.app/" // Redirect to Live Project 
        },
        {
            id: 2,
            name: "ASM Spaces",
            description: "Details about Project Two",
            details: "This Project was initially made for an Assignment.",
            techStack: ["Angular", "Express"],
            imagePath: "img/asm1-min.png", // Image path or URL
            projectUrl: "https://navalrathore10.github.io/ASM.Spaces/" // Redirect to Live Project 
        },
        {
            id: 3,
            name: "Restaurant Website",
            description: "Details about Project Three",
            details: "This Project was initially made for an Assignment.",
            techStack: ["HTML", "CSS", "VanilaJS"],
            imagePath: "/img/resto1-min.png", // Image path or URL
            projectUrl: "https://navalrathore10.github.io/Restaurant_Website/" // Redirect to Live Project 
        },
        // Add more projects as needed
    ];

    const unsplashdata = {
        views: 221755,
        downloads: 2162
    }
    const [selectedProject, setSelectedProject] = useState(projects[0]); // Default to the first project






    return (<>
        <div className="p-6 text-white min-h-screen h-min pb-[80px] relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.0 }}
                animate={{ opacity: 1, scale: 1, origin: 'top' }}
                transition={{
                    duration: 0.3,
                }
                } className="inner mx-auto max-w-[700px] flex flex-col gap-5 ">

                {/*------------------------------------ ----------- About Slab */}

                <div className={`text-xl text-syne font-bold ${!toggled ? 'bg-dark19 border-dark24' : 'bg-lightop20 border-white text-dark24'}
                     rounded-lg flex justify-between border  p-3 px-5 shadow-lg border-[2px]`}>
                    <span className=''>About Me</span>
                </div>

                {/*------------------------------------ ----------- banner row */}

                <div className="personal-tab grid grid-cols-7 gap-5 overflow-hidden">
                    <div className='col-span-7 grid grid-cols-7 sm:col-span-3 flex overflow-hidden rounded-lg h-min max-h-[400px]'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.5,
                            }
                            }
                            className='rounded-lg shadow-lg col-span-5 sm:col-span-7'>
                            <img src={!toggled ? aboutpic1 : aboutpic2} alt="" />
                        </motion.div>
                        <div className={`sm:hidden col-span-2 heads max-h-[400px]
                                    ${!toggled ? 'text-lighte3' : 'text-dark24'}
                                flex items-center justify-between py-5 px-5 [writing-mode:vertical-rl]`}>
                            <div className="texter flex flex-col jutify-center">
                                <div className='Titlename text-syne text-3xl font-bold'>Naval Rathore</div>
                                <div className='role text-syne text-xl font-light opacity-80'>React Js / Frontend Developer</div>
                            </div>
                            <div className='w-full flex justify-center items-center '>
                                <MdDoubleArrow className='rotate-90 text-3xl ' />
                            </div>
                        </div>
                    </div>
                    <div className={`col-span-7 sm:col-span-4 flex flex-col gap-5  ${!toggled ? 'text-lighte3' : 'text-dark24'}`}>
                        <div className="heads flex flex-col pt-5 hidden sm:block relative">
                            <div className='Titlename text-syne text-3xl font-bold'>Naval Rathore</div>
                            <div className='role text-syne text-xl font-light'>React Js / Frontend Developer</div>
                            <div className="likertab sm:hidden lg:flex absolute flex gap-2 right-5 top-[50%] translate-y-[-50%]">
                                <button
                                    className={`like p-2 rounded-md ${!toggled ? 'bg-lightop10' : 'bg-white'} focus:bg-red-500 focus:text-dark17`}
                                    onClick={handleLikeClick}>
                                    <SlLike /> <span>{likeCount}</span>
                                </button>
                                <button
                                    className={`dislike p-2 rounded-md ${!toggled ? 'bg-lightop10' : 'bg-white'} focus:bg-red-500 focus:text-dark17`}
                                    onClick={handleDislikeClick}>
                                    <SlDislike /> <span>{dislikeCount}</span>
                                </button>
                            </div>
                        </div>
                        <div className={` ${!toggled ? '' : ''}md:text-[13px] lg:text-[17px] text-syne text-md md:leading-4  lg:leading-[22px] text-justify`}>
                            <p className='mb-4'>
                                Hey there 👋, <br />
                                I'm a Curious Front-End Developer who loves bringing digital ideas to life!
                                Whether it’s a sleek design or a complex web app, I’m all about creating smooth, user-friendly experiences.
                            </p>
                            <p className='mb-4'>
                                I focus on making websites not just look good, but feel good to use as well.
                                I sweat the small stuff—clean code, responsive layouts, and making sure everything just works.
                            </p>
                            <p>
                                Simplicity is the key for me, being a big fan of the whole "
                                <a href='https://en.wikipedia.org/wiki/Less_is_more'
                                    title='Know about this'
                                    className={`hover:decoration-solid hover:px-1 ${!toggled ? 'text-yellow-500' : 'text-blue-500'}`}>
                                    less is more
                                </a>
                                " thing. So, if you're into intuitive design and smooth user experiences, we’re on the same page!
                            </p>
                        </div>
                    </div>

                </div>

                {/*------------------------------------ ----------- Para Text */}

                <div className={`w-full ${!toggled ? 'text-lighte3' : 'text-dark24'}
                    md:text-[13px] lg:text-[17px] text-syne text-md md:leading-4  lg:leading-[22px] text-justify`}>
                    <p>
                        Currently based in Jaipur, with roots in Chandigarh, I grew up inspired by my father's sketches,
                        which sparked my passion for design. From sketchpads to web design,
                        I’ve always loved the visual side of things. Now, I’m on a mission to design something the world will
                        appreciate—and maybe even get featured on
                        <a href="https://www.awwwards.com/" title="Go to Awwwards.com" className={`${!toggled ? 'text-green-300' : 'text-red-500'} hover:px-1`}> Awwwards.com </a>
                        one day!
                    </p>

                    <div className={`text-3xl text-syne text-left    pt-10 pb-5 font-bold ${!toggled ? 'text-lighte3' : 'text-dark24'}`}>
                        A <code className='font-normal me-2 text-blue-400'> Developer</code>
                        with a
                        <span className={`font-normal text-designer text-5xl me-2 ${!toggled ? 'text-orange-200' : 'text-purple-600'} `}> Designer's</span>
                        Eye
                    </div>
                    <p>
                        My love for design came early, thanks to my father’s artistic skills. Growing up, I was always drawing,
                        eventually becoming known as an artist myself. You can even check out my artwork in my
                        <span className={`ms-1 ${!toggled ? 'text-pink-200' : 'text-green-600'} hover:px-1 cursor-pointer`}>Sketchpad</span>.
                        And hey, since I’ve got a knack for visuals,
                        I’ve also got a Photography Portfolio on
                        <a href="https://unsplash.com/@navalrathore_10"
                            className={` ${!toggled ? 'text-yellow-200' : 'text-red-600'} hover:px-1`}
                            title='go to Unsplash'> Unsplash </a>
                        , where you can find my best shots!
                    </p>
                    <div className={`text-3xl text-syne  pt-10 pb-5 font-bold sm:flex justify-end w-full ${!toggled ? 'text-lighte3' : 'text-dark24'}`}>
                        Why <span className='ms-2 block'> Web Development ?</span>
                    </div>
                    <p><span className='px-36'></span>
                        I’ve pursued many paths, from Civil Services to web development, but I always knew I had a creative side that needed to shine.
                        After completing my MCA in Web Development and earning my MERN Stack Developer certification from
                        <a href="https://www.wscubetech.com/" title="Go to Ws-Cubetech.com" className='underline hover:px-1'> WsCubeTech</a>,
                        Jaipur, I found my true calling in front-end development.
                    </p>

                </div>

                {/*------------------------------------ ----------- Tech Tools */}

                <div className="tech-tools w-full grid grid-cols-2 gap-5">
                    <div className={`techstack col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1 flex flex-col gap-5 rounded-xl border-[2px]
                     shadow-lg ${!toggled ? 'bg-dark19 border-dark24' : 'bg-lightop10 border-white'} p-5`}>
                        <div className={`techstacktitle text-3xl text-syne font-bold  ${!toggled ? 'text-lighte3' : 'text-dark24'}`}>
                            Tech-stack
                        </div>
                        <div className="techstack w-full grid grid-cols-6 gap-3">
                            <TechStackIcon name="js" title='JavaScript'
                                className='overflow-hidden w-[40px] rounded-md drop-shadow-lg cursor-pointer' />
                            <TechStackIcon name="reactjs" title='React.js'
                                className='overflow-hidden w-[40px] rounded-md drop-shadow-lg cursor-pointer' />
                            <TechStackIcon name="html5" title='HTML5'
                                className='overflow-hidden w-[40px] rounded-md drop-shadow-lg cursor-pointer' />
                            <TechStackIcon name="nodejs" title='Node.js'
                                className='overflow-hidden w-[40px] rounded-md drop-shadow-lg cursor-pointer' />
                            <TechStackIcon name="css3" title='CSS3'
                                className='overflow-hidden w-[40px] rounded-md drop-shadow-lg cursor-pointer' />
                            <TechStackIcon name="mongodb" title='Mongo-DB'
                                className='overflow-hidden w-[40px] rounded-md drop-shadow-lg cursor-pointer' />
                            <div className="downgrid col-span-6 flex justify-center gap-3">
                                <TechStackIcon name="tailwindcss" title='Tailwind Css'
                                    className='overflow-hidden w-[40px] rounded-2xl drop-shadow-lg cursor-pointer' />
                                <TechStackIcon name="bootstrap5" title='Bootstrap 5'
                                    className='overflow-hidden w-[40px] rounded-2xl drop-shadow-lg cursor-pointer' />
                                <TechStackIcon name="git" title='Git Version Control'
                                    className='overflow-hidden w-[40px] rounded-2xl drop-shadow-lg cursor-pointer' />
                                <TechStackIcon name="firebase" title='Bootstrap 5'
                                    className='overflow-hidden w-[40px] rounded-2xl drop-shadow-lg cursor-pointer' />

                            </div>

                        </div>
                    </div>
                    <div className={`toolsstack col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1 flex flex-col gap-5 rounded-xl border-[2px]
                     shadow-lg ${!toggled ? 'bg-dark19 border-dark24' : 'bg-lightop10 border-white'} p-5`}>
                        <div className={`techstacktitle text-3xl text-syne font-bold  ${!toggled ? 'text-lighte3' : 'text-dark24'}`}>
                            Tools
                        </div>
                        <div className="techstack w-full grid grid-cols-6 gap-3">
                            <TechStackIcon name="vscode" title='JavaScript'
                                className='overflow-hidden w-[40px] rounded-md drop-shadow-lg cursor-pointer' />
                            <TechStackIcon name="sublime" title='React.js'
                                className='overflow-hidden w-[40px] rounded-md drop-shadow-lg cursor-pointer' />
                            <TechStackIcon name="ps" title='HTML5'
                                className='overflow-hidden w-[40px] rounded-md drop-shadow-lg cursor-pointer' />
                            <TechStackIcon name="ai" title='Node.js'
                                className='overflow-hidden w-[40px] rounded-md drop-shadow-lg cursor-pointer' />
                            <TechStackIcon name="npm2" title='CSS3'
                                className='overflow-hidden w-[40px] rounded-md drop-shadow-lg cursor-pointer' />
                            <TechStackIcon name="github" title='Mongo-DB'
                                className={`overflow-hidden w-[40px] ${!toggled ? 'invert' : ''} rounded-md drop-shadow-lg cursor-pointer`} />
                            <div className="downgrid col-span-6 flex justify-center gap-3">
                                <TechStackIcon name="openai" title='Tailwind Css'
                                    className={`overflow-hidden w-[40px] ${!toggled ? 'invert' : ''} rounded-md drop-shadow-lg cursor-pointer`} />
                                <TechStackIcon name="wordpress" title='Bootstrap 5'
                                    className='overflow-hidden w-[40px] rounded-md drop-shadow-lg cursor-pointer' />
                                <TechStackIcon name="figma" title='Git Version Control'
                                    className='overflow-hidden w-[40px] rounded-md drop-shadow-lg cursor-pointer' />
                                <TechStackIcon name="canva" title='Bootstrap 5'
                                    className='overflow-hidden w-[40px] rounded-md drop-shadow-lg cursor-pointer' />

                            </div>

                        </div>
                    </div>
                </div>

                {/*------------------------------------ ----------- Education */}

                <div className={`education w-full border-2 p-5  rounded-xl  shadow-lg
                    ${!toggled ? 'text-lighte3 bg-dark19 border-dark24' : 'bg-lightop10 border-white text-dark24'}`}>
                    <div className={`techstacktitle text-3xl text-syne font-bold pb-5`}>
                        Education
                    </div>
                    <ul style={{ listStyle: 'circle' }} className='flex flex-col gap-2'>
                        <li className={`text-md md:text-lg flex justify-between border rounded-md shadow-lg p-3 hover:scale-[1.01]
                         ${!toggled ? 'bg-dark24 border-lightop10' : 'bg-lightop40 border-white'}`}>
                            <span className='flex flex-col'>
                                <span>
                                    🎓 Masters in Computer Applications
                                </span>
                                <span className='opacity-[0.4]'>
                                    U.O.T, Jaipur, Raj. (GPA:7.34)
                                </span>
                            </span>
                            <span className='min-w-[60px] opacity-[0.4]'>
                                2021-23
                            </span>
                        </li>
                        <li className={`text-md md:text-lg flex justify-between border rounded-md shadow-lg p-3 hover:scale-[1.01]
                         ${!toggled ? 'bg-dark24 border-lightop10' : 'bg-lightop40 border-white'}`}>
                            <span className='flex flex-col'>
                                <span>
                                    📜 Bachelors in Computer Applications
                                </span>
                                <span className='opacity-[0.4]'>
                                    B.U.E.S.T, Solan, H.P (GPA:7.74)
                                </span>
                            </span>
                            <span className='min-w-[60px] opacity-[0.4]'>
                                2017-20
                            </span>
                        </li>
                    </ul>
                </div>

                {/*------------------------------------ ----------- Projects */}

                <div className={`projects w-full grid grid-cols-2 gap-5 `}>

                    {/* ------------------------------------------- Project List Card */}

                    <div className={`projects col-span-2 lg:col-span-1 border-[2px] p-5 rounded-xl shadow-lg 
                     ${!toggled ? 'text-lighte3 bg-dark19 border-dark24' : 'bg-lightop10 border-white text-dark24'}`}>
                        <div className={`flex justify-between text-3xl text-syne font-bold pb-5`}>
                            <span>
                                Projects
                            </span>
                            <Link to='../works/Development' className='text-sm font-light flex items-center'>
                                see all
                                <MdOutlineKeyboardArrowRight />
                            </Link>
                        </div>
                        <div className='flex flex-col md:flex-row lg:flex-col gap-2'>
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    onClick={() => setSelectedProject(project)} // Set clicked project as selected
                                    className={`lg:flex flex-grow items-center  py-3 px-3 rounded-md shadow-lg hover:scale-[1.01] border cursor-pointer
                                        ${!toggled ? 'bg-dark24 border-lightop10' : 'bg-lightop40 border-white'}`}
                                >
                                    <div className='flex flex-col flex-1'>
                                        <h3 className='text-lg font-medium'>{project.name}</h3>
                                        <div className='flex md:flex-col lg:flex-row gap-2 justify-between text-xs text-gray-400'>
                                            <span>{project.description}</span>
                                            <span className='lg:w-min'>{project.techStack.slice(0, 2).join(', ')}</span>
                                        </div>
                                    </div>
                                    <div className="arrow lg:ms-5 flex justify-center mt-2">
                                        <IoIosArrowDown className='lg:hidden' />
                                        <IoIosArrowForward className='hidden lg:block' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ------------------------------------------- Project Display Card */}

                    <div className={`projects col-span-2 lg:col-span-1 border-[2px] p-5 rounded-xl shadow-lg 
                         ${!toggled ? 'text-lighte3 bg-dark19 border-dark24' : 'bg-lightop10 border-white text-dark24'}`}>
                        <div className="w-full h-full">
                            <div className={`${!toggled ? 'bg-dark24 border-lightop10' : 'bg-lightop40 border-white'}
                                 border rounded-lg overflow-hidden relative h-full shadow-lg`}>
                                <img className="w-full object-cover object-center"
                                    src={selectedProject.imagePath} alt={selectedProject.name} />
                                <div className="p-4">
                                    <a href={selectedProject.projectUrl}
                                        target="_blank"
                                        title='Open Live Project'
                                        className={` ${!toggled ? 'text-lighte3' : 'text-dark24'}
                                                block text-blue-500 hover:text-blue-600 font-semibold mb-2 cursor-pointer
                                                text-lg md:text-base lg:text-lg`}>
                                        {selectedProject.name}
                                    </a>
                                    <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                                        {selectedProject.details}
                                    </div>
                                    <div className="relative mt-2 lg:absolute bottom-0 mb-4 flex gap-2">
                                        {selectedProject.techStack.map((tag, index) => (
                                            <a key={index} className="inline bg-gray-300 py-1 px-2 rounded-md text-xs lowercase text-gray-700" href="#">
                                                #{tag}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/*----------------------------------------------- Unsplash Insights */}

                <div className={`unsplash w-full min-h-[400px] md:min-h-[300px] lg:min-h-min border-2 p-5 rounded-xl shadow-xl
                     relative flex flex-col justify-between gap-5 overflow-hidden
                    ${!toggled ? 'text-lighte3 bg-dark19 border-dark24' : 'bg-lightop10 border-white text-dark24'}`}>

                    {/* -------------------------- title */}

                    <div className="heading text-3xl font-semibold text-syne">
                        Unsplash Portfolio <br />
                        <span className='text-xl'>
                            Insights
                        </span>
                    </div>
                    {/* --------------------------- Logo */}
                    <div className="logodivs absolute right-5 top-[60px] md:top-5 scale-[1] group hover:rotate-[10deg] cursor-pointer">
                        <div className={`box w-[65px] h-[50px] mb-[30px] mx-auto relative z-10  group-hover:translate-y-[51px] group-hover:w-[70px] group-hover:h-[51px] ${!toggled ? 'bg-white group-hover:bg-white' : 'bg-black group-hover:bg-black'}`}></div>
                        <a href='https://unsplash.com/@navalrathore_10' title='Go to the Portfolio' className="bag relative">
                            <div className={`u w-[65px] h-[50px] bg-transparent box-content group-hover:translate-y-[-30px]
                              group-hover:rounded-xl border-[50px] border-t-0 relative z-10
                            ${!toggled ? 'border-white' : 'border-black'}`}>
                                <code className={`absolute text-3xl top-[50%] right-[50%] translate-y-[10%] translate-x-[50%]
                                ${!toggled ? 'text-black' : 'text-lighte3'} hidden group-hover:block`}>
                                    <div className='text-sm text-center'>explore</div>
                                    Unsplash
                                </code>
                                <div className={`absolute top-[-80%] right-[50%] translate-x-[50%] w-[60px] h-[80px]
                                 border-[7px] border-b-0 ${!toggled ? 'border-white' : 'border-black'} group-hover:block hidden bg-transparent rounded-full`}></div>
                            </div>
                            <div className={`absolute top-[30%] right-[50%] translate-x-[50%] group-hover:translate-y-[-40px]
                             ${!toggled ? 'bg-orange-500' : 'bg-yellow-500'} z-2 w-[150px] h-[80px] hidden group-hover:block group-hover:blur-[100px]`}></div>
                        </a>
                    </div>

                    {/* ---------------------------- Stats */}
                    <div className="stats grid grid-cols-6 gap-5">
                        <div className={`views col-span-3 md:col-span-3 lg:col-span-2 :w-min text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl relative p-4 rounded-lg border shadow-lg backdrop-blur-md ${!toggled ? 'bg-lightop10 border-lightop10' : 'bg-lightop40 border-white'}`}>
                            <div className='text-lg sm:text-lg md:text-xl lg:text-2xl'>Views</div>
                            <span className='text-inter font-semibold text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>
                                {unsplashdata.views.toLocaleString()}+
                            </span>
                            <div className="absolute p-2 top-0 right-0 text-lg sm:text-xl lg:text-3xl">
                                <FaEye />
                            </div>
                        </div>

                        <div className={`downloads col-span-3 md:col-span-2 lg:col-span-2 :w-min text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl relative p-4 rounded-lg border shadow-lg backdrop-blur-md ${!toggled ? 'bg-lightop10 border-lightop10' : 'bg-lightop40 border-white'}`}>
                            <div className='text-lg sm:text-lg md:text-xl lg:text-2xl'>Downloads</div>
                            <span className='text-inter font-semibold text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>
                                {unsplashdata.downloads.toLocaleString()}+
                            </span>
                            <div className="absolute p-2 top-0 right-0 text-lg sm:text-xl lg:text-3xl">
                                <MdDownload />
                            </div>
                        </div>
                    </div>







                </div>
            </motion.div >
        </div >
    </>

    )
}
