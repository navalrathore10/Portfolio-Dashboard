import React, { useEffect, useState } from 'react';
import { useToggle } from '../ToggleContext';
import FadeSlider from '../components/FadeSlider';
import Pic from '../assets/img/pic.jpg'
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";
import { motion } from 'framer-motion';
import { useProjects } from '../contexts/projectscontext';
import TechStackIcon from 'tech-stack-icons';
import { FaEye, FaGithub, FaInstagram, FaLinkedin, FaUnsplash, FaWhatsapp } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';



export default function Home() {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [currentImage, setCurrentImage] = useState(""); // State to hold the current image

  const { projects, loading, error } = useProjects();
  const { toggled } = useToggle();

  const unsplashdata = {
    views: 221755,
    downloads: 2162
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // console.log(projects);

  const projectNames = projects.map(project => project.name);
  const projectUrls = projects.map(project => project.projectUrl);
  const bestProjects = projects.filter(project => project.best);

  // console.log('projectNames', projectNames);
  // console.log('projectUrls', projectUrls);
  console.log('Best Projects', bestProjects);

  // Object to store the images corresponding to each div id
  // const hoverImages = {
  //   about: "img/aboutpage.png",
  //   picload: "img/picload1-min.png",
  //   asm: "img/asm1-min.png",
  //   dom: "img/dom1-min.png",
  // };

  // // Function to handle mouse movement
  // const handleMouseMove = (e) => {
  //   setMousePos({ x: e.clientX, y: e.clientY });
  // };

  // // Function to handle mouse enter
  // const handleMouseEnter = (e) => {
  //   const divId = e.target.getAttribute("data-id");
  //   setCurrentImage(hoverImages[divId]);
  //   setHovering(true);
  // };

  // // Function to handle mouse leave
  // const handleMouseLeave = () => {
  //   setHovering(false);
  // };




  return (
    <div className={`${!toggled ? 'text-white' : 'text-dark17'} p-6 min-h-[500px] h-min pb-[80px] ]`}>

      {/*------------------------------------------------------------------- row-1 */}
      <div className="grid grid-cols-8 w-full gap-6 min-h-[550px]">

        {/*------------------------------------------------------------------- facecard */}

        <div data-id="about" className={`col-span-8 sm:col-span-8 xl:col-span-3 min-h-[500px] text-syne  bg-red-500 rounded-3xl flex flex-col justify-end overflow-hidden group
                    bg-[url('assets/img/pic.jpg')]
                    bg-cover bg-center cursor-pointer border-[1.5px] ${!toggled ? 'border-[#242424]' : 'border-white'}`}
          style={{
            boxShadow: !toggled ?
              '7px 7px 14px #0d0d0d, -7px -7px 14px #212121'
              :
              '10px 10px 20px #b3b3b3 ,-10px -10px 20px #ffffff'
          }}
        // onMouseMove={handleMouseMove}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        >

          <div data-id="about" className="abt_text h-[100px] bg-darkop40 overflow-hidden p-4 rounded-b-3xl text-white group-hover:h-[150px] group
                            transition-all duration-500 group-hover:backdrop-blur-md relative">
            <h2 className="hidden sm:block text-2xl font-bold">About me</h2>
            <h2 className="sm:hidden text-2xl font-bold">Naval Rathore</h2>
            <p>Creative | Front-End Dev | Photographer</p>
            <Link to={'/aboutme'} className='hidden group-hover:block text-syne text-lg mt-5 absolute right-[20px]'>
              Explore More
            </Link>
          </div>
        </div>

        {/*------------------------------------------------------------------- sidecard-group  */}

        <div className="col-span-8 sm:col-span-8 xl:col-span-5 flex flex-col justify-center gap-6 text-syne">
          <div className="grid grid-cols-3  gap-6 flex-grow">
            <div
              // data-id={projectNames[0].toLocaleLowerCase()}
              className={`col-span-3 lg:col-span-1 border-[1.5px] ${!toggled ? 'border-[#242424]' : 'border-white'} rounded-3xl min-h-[200px] flex items-end group cursor-pointer
                    bg-[url('https://images.unsplash.com/photo-1633616656958-c68fc1501f23?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ${!toggled ? '' : ''}
                    bg-cover group-hover:mix-blend-darken
                    bg-center relative
                    `}
              // onMouseMove={handleMouseMove}
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              style={{
                boxShadow: !toggled ?
                  '7px 7px 14px #0d0d0d, -7px -7px 14px #212121'
                  :
                  '10px 10px 20px #b3b3b3 ,-10px -10px 20px #ffffff'
              }}>
              <div className="tag-Hole">
                <a
                  href={bestProjects[0].projectUrl}
                >
                  <button
                    className={`absolute top-4 right-4 border text-white p-[2px] text-2xl  rounded-full hover:rotate-[20deg] transition-all`}
                  >
                    <GoArrowUpRight />
                  </button>
                </a>
              </div>
              <div data-id="picload" className="abt_text h-[80px] bg-darkop40 w-full overflow-hidden py-3 px-4 rounded-b-3xl text-white transition-all duration-500 group-hover:backdrop-blur-md">
                <h2 className="text-2xl font-bold">{bestProjects[0].shortName}</h2>
                <p>React.Js Website</p>
              </div>
            </div>
            <div data-id="asm" className={`col-span-3 lg:col-span-1 border-[1.5px] ${!toggled ? 'border-[#242424]' : 'border-white'} rounded-3xl min-h-[200px] flex items-end group cursor-pointer
                    bg-[url('https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ${!toggled ? '' : ''}
                    bg-cover group-hover:mix-blend-darken
                    bg-top relative
                    `}
              // onMouseMove={handleMouseMove}
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              style={{
                boxShadow: !toggled ?
                  '7px 7px 14px #0d0d0d, -7px -7px 14px #212121'
                  :
                  '10px 10px 20px #b3b3b3 ,-10px -10px 20px #ffffff'
              }}>
              <div className="tag-Hole">
                <a
                  href={bestProjects[1].projectUrl}
                >
                  <button
                    className={`absolute top-4 right-4 border text-white p-[2px] text-2xl  rounded-full hover:rotate-[20deg] transition-all`}
                  >
                    <GoArrowUpRight />
                  </button>
                </a>
              </div>
              <div data-id="asm" className="abt_text flex justify-between h-[80px] bg-darkop40 w-full overflow-hidden py-3 px-4 rounded-b-3xl text-white transition-all duration-500 group-hover:backdrop-blur-md">
                <div className="left">
                  <h2 className="text-2xl font-bold">{bestProjects[1].shortName}</h2>
                  <p>UI Project</p>
                </div>
              </div>
            </div>
            <div data-id="dom" className={`col-span-3 lg:col-span-1 border-[1.5px] ${!toggled ? 'border-[#242424]' : 'border-white'} rounded-3xl min-h-[200px] flex items-end group cursor-pointer
                    bg-[url('https://images.unsplash.com/photo-1504548840739-580b10ae7715?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ${!toggled ? '' : ''}
                    bg-cover group-hover:mix-blend-darken
                    bg-center relative
                    `}
              // onMouseMove={handleMouseMove}
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              style={{
                boxShadow: !toggled ?
                  '7px 7px 14px #0d0d0d, -7px -7px 14px #212121'
                  :
                  '10px 10px 20px #b3b3b3 ,-10px -10px 20px #ffffff'
              }}>
              <div className="tag-Hole">
                <a
                  href={bestProjects[2].projectUrl}
                >
                  <button
                    className={`absolute top-4 right-4 border text-white p-[2px] text-2xl  rounded-full hover:rotate-[20deg] transition-all`}
                  >
                    <GoArrowUpRight />
                  </button>
                </a>
              </div>
              <div data-id="dom" className="abt_text h-[80px] bg-darkop40 w-full overflow-hidden py-3 px-4 rounded-b-3xl text-white transition-all duration-500 group-hover:backdrop-blur-md">
                <h2 className="text-2xl font-bold">{bestProjects[2].shortName}</h2>
                <p>JS | HTML | CSS</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3  gap-6 max-h-[250px]">
            {/*  -------------------------------------- Slider Card */}
            <div className={`col-span-2 border-[1.5px] ${!toggled ? 'border-[#242424]' : 'border-white'} rounded-3xl overflow-hidden`}
              style={{
                boxShadow: !toggled ?
                  '7px 7px 14px #0d0d0d, -7px -7px 14px #212121'
                  :
                  '10px 10px 20px #b3b3b3 ,-10px -10px 20px #ffffff'
              }}>
              <FadeSlider />
            </div>

            {/* --------------------------- Small Tabs */}
            <div className="col-span-1 rounded-3xl">
              <div className="grid grid-rows-2 gap-6 min-h-[250px]">
                <div className={`flex flex-col justify-center items-center row-span-1 rounded-3xl
                        ${!toggled ? 'bg-dark17 text-white' : 'bg-lighte3 text-dark24'}`}
                  style={{
                    boxShadow: !toggled ?
                      '7px 7px 14px #0d0d0d, -7px -7px 14px #212121'
                      :
                      '10px 10px 20px #b3b3b3 ,-10px -10px 20px #ffffff'
                  }}
                >
                  <span className=' text-dm-serif text-5xl md:text-6xl lg:text-7xl'>18<span className='line-through'>0</span></span>
                  <p className='text-sm'> Projects</p>
                </div>

                <div className={`flex flex-col justify-center items-center row-span-1 rounded-3xl
                                              
                          ${!toggled ? 'bg-dark17 text-white' : 'bg-lighte3 text-dark24'}`}

                  style={{
                    boxShadow: !toggled ?
                      '7px 7px 14px #0d0d0d, -7px -7px 14px #212121'
                      :
                      '10px 10px 20px #b3b3b3 ,-10px -10px 20px #ffffff'
                  }}
                >
                  <span className='text-[10px] opacity-40 fw-light'>Not</span>
                  <span className='text-3xl sm:text-5xl md:text-4xl lg:text-5xl'>Many</span>
                  <span className='text-md md:text-lg'>Awards</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>



      {/*------------------------------------------------------------------- row-2 */}

      <Link to={'/works/development'}
        class={`w-full h-[100px] inline-flex flex-nowrap my-5  shadow-xl overflow-hidden rounded-3xl
               text-8xl text-syne
              ${toggled ? 'bg-dark17 text-lighte3' : 'bg-white text-dark17'}`}>
        <ul class="flex items-center justify-center font-semibold md:justify-start [&_li]:mx-8 animate-infinite-scroll  ">
          <li className=''>Projects</li>
          <li className=''>Projects</li>
          <li className=''>Projects</li>
          <li className=''>Projects</li>
        </ul>
        <ul class="flex items-center justify-center font-semibold md:justify-start [&_li]:mx-8 animate-infinite-scroll" aria-hidden="true">
          <li className=''>Projects</li>
          <li className=''>Projects</li>
          <li className=''>Projects</li>
          <li className=''>Projects</li>
        </ul>
      </Link>

      {/*------------------------------------------------------------------- row-3 */}

      <div className="grid grid-cols-6 gap-5">
        <div className={`col-span-6 lg:col-span-2 border-white ${toggled ? 'bg-lightop60 text-darkop40' : 'text-lightop40 bg-dark24'}
          shadow-xl rounded-3xl h-min min-h-[300px] p-5 relative`}>
          <div className="inner flex gap-5 flex-wrap items-start">

            <TechStackIcon name="js" title='JavaScript'
              className={`overflow-hidden min-w-[25%] max-w-[28%] lg:min-w-[80px] lg:max-w-[80px] p-3 rounded-xl drop-shadow-lg cursor-pointer ${toggled ? 'bg-yellow-200' : 'bg-yellow-200'}`} />
            <TechStackIcon name="reactjs" title='reactJs'
              className={`overflow-hidden min-w-[25%] max-w-[28%] lg:min-w-[80px] lg:max-w-[80px] p-3 rounded-xl drop-shadow-lg cursor-pointer ${toggled ? 'bg-blue-600' : 'bg-blue-600'}`} />
            <TechStackIcon name="html5" title='JavaScript'
              className={`overflow-hidden min-w-[25%] max-w-[28%] lg:min-w-[80px] lg:max-w-[80px] p-3 rounded-xl drop-shadow-lg cursor-pointer ${toggled ? 'bg-orange-300' : 'bg-orange-300'}`} />
            <TechStackIcon name="css3" title='JavaScript'
              className={`overflow-hidden min-w-[25%] max-w-[28%] lg:min-w-[80px] lg:max-w-[80px] p-3 rounded-xl drop-shadow-lg cursor-pointer ${toggled ? 'bg-white' : 'bg-white'}`} />
            <TechStackIcon name="nodejs" title='JavaScript'
              className={`overflow-hidden min-w-[25%] max-w-[28%] lg:min-w-[80px] lg:max-w-[80px] p-3 rounded-xl drop-shadow-lg cursor-pointer ${toggled ? 'bg-lime-200' : 'bg-lime-200'}`} />
            <TechStackIcon name="mongodb" title='JavaScript'
              className={`overflow-hidden min-w-[25%] max-w-[28%] lg:min-w-[80px] lg:max-w-[80px] p-3 rounded-xl drop-shadow-lg cursor-pointer ${toggled ? 'bg-yellow-100' : 'bg-yellow-100'}`} />
          </div>
          <div className={`absolute bottom-3 right-5 text-lg text-syne`}>Tech Stack</div>
        </div>
        <div className={`col-span-6 lg:col-span-2 ${toggled ? 'border-white' : 'border-dark24'} border-2 rounded-3xl h-[300px] overflow-hidden shadow-xl`}>
          <div className={`unsplash w-full h-full md:min-h-[300px] lg:min-h-min p-5 rounded-xl relative flex flex-col justify-between gap-5 overflow-hidden
                    ${!toggled ? 'text-lighte3 bg-dark19 border-dark24' : 'bg-lightop10 border-white text-dark24'}`}>

            {/* -------------------------- title */}

            <div className="heading text-3xl font-semibold text-syne">
              Unsplash Portfolio <br />
              <span className='text-xl'>
                Insights
              </span>
            </div>
            {/* --------------------------- Logo */}
            <div className="logodivs absolute right-5 top-[60px] md:top-5 scale-[0.6] group hover:rotate-[10deg] cursor-pointer">
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
              <div className={`views col-span-3 min-w-min text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl relative p-4 rounded-lg border shadow-lg backdrop-blur-md ${!toggled ? 'bg-lightop10 border-lightop10' : 'bg-lightop40 border-white'}`}>
                <div className='text-sm sm:text-md md:text-md lg:text-md'>Views</div>
                <span className='text-inter font-semibold text-md sm:text-lg md:text-xl lg:text-2xl'>
                  {unsplashdata.views.toLocaleString()}+
                </span>
                <div className="absolute p-2 top-0 right-0 text-lg sm:text-xl lg:text-3xl">
                  <FaEye />
                </div>
              </div>

              <div className={`downloads col-span-3 w-min min-w-[120px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl relative p-4 rounded-lg border shadow-lg backdrop-blur-md ${!toggled ? 'bg-lightop10 border-lightop10' : 'bg-lightop40 border-white'}`}>
                <div className='text-sm sm:text-md md:text-md lg:text-md'>Downloads</div>
                <span className='text-inter font-semibold text-md sm:text-lg md:text-xl lg:text-2xl'>
                  {unsplashdata.downloads.toLocaleString()}+
                </span>
                <div className="absolute p-2 top-0 right-0 text-lg sm:text-xl lg:text-3xl">
                  <MdDownload />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-span-6 relative lg:col-span-2 border-2 rounded-3xl h-min p-5 mb-5 shadow-xl
          ${toggled ? 'bg-lightop60 border-white' : 'bg-dark24 border-dark17'}`}>
            <div className="inner grid grid-cols-5 gap-2 mb-5">
              <a href='https://www.linkedin.com/in/naval-rathore-972045296/' className={`p-2 text-5xl hover:text-yellow-300`}>
                <FaLinkedin/>
              </a>
              <a href='https://github.com/navalrathore10' className={`p-2 text-5xl hover:text-yellow-300`}>
                <FaGithub/>
              </a>
              <a href='https://unsplash.com/@navalrathore_10' className={`p-2 text-5xl hover:text-yellow-300`}>
                <FaUnsplash/>
              </a>
              <a href='https://www.instagram.com/naval_rathore10/' className={`p-2 text-5xl hover:text-yellow-300`}>
                <FaInstagram/>
              </a>
              <a href='https://wa.me/916230031442' className={`p-2 text-5xl hover:text-yellow-300`}>
                <FaWhatsapp/>
              </a>

            </div>
          <div className={`absolute bottom-3 right-5 text-lg text-syne ${toggled?'text-darkop40':'text-lightop40'}`}>Socials</div>

        </div>
      </div>


      {/* --------------------------------------------------------- Hover Image Tab */}
      {hovering && currentImage && (
        <motion.div
          className="hidden sm:block absolute pointer-events-none w-[300px] h-min p-1 backdrop-blur-md bg-lightop20 z-10
                border border-lightop20 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            top: mousePos.y + 15,
            left: mousePos.x - 285,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="inner flex flex-col w-full gap-1">
            <div className="dots flex gap-1">
              <div className="dot w-3 h-3 rounded-full bg-lightop60"></div>
              <div className="dot w-3 h-3 rounded-full bg-lightop60"></div>
              <div className="dot w-3 h-3 rounded-full bg-lightop60"></div>
            </div>
            <img
              src={currentImage}
              alt="Hover Image"
              className="w-full rounded-md object-cover"
            />
          </div>
        </motion.div>
      )}
    </div >
  );
}
