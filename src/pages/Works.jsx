import React, { useEffect, useState } from 'react';
import Development from '../components/Development.jsx';
import Photography from '../components/Photography';
import Designing from '../components/Designing';
import { useToggle } from '../ToggleContext';
import { Link, Outlet } from 'react-router-dom';


export default function Works() {
  const { toggled } = useToggle();
  const [niche, setNiche] = useState('Development');

  useEffect(() => {
    setNiche('Development');
  }, []);

  const niches = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Photography' },
    { id: 3, name: 'Designing' },
  ];


  return (
    <div className="p-6 text-white min-h-screen relative">
      <div className={`inner h-min w-full pb-5 mx-auto relative
            ${niche === 'Development' ? 'lg:w-[700px]' : 'lg:w-[90%]'}
            `}>
        {/* --------------------------------------------------------- fixed navbar */}
        <div className="sticky top-5 flex justify-center w-full 0 z-20">
          <nav className={`navbar border shadow-lg rounded-full flex backdrop-blur-md  w-min
            ${!toggled ? 'bg-darkop20 border-lightop40 text-lighte3' : 'bg-lightop40 border-white text-dark24'}`}>
            {niches.map((nicheItem) => (
              <Link
                to={nicheItem.name}
                onClick={() => { setNiche(nicheItem.name); }}
                key={nicheItem.id}
                className={`text-sm text-syne w-[120px] md:w-[150px] h-[50px] cursor-pointer flex justify-center items-center relative
                  ${!toggled ? 'hover:bg-gradient-to-r from-transparent to transparent via-lightop10' : ''}`}>
                {nicheItem.name}
                {niche === nicheItem.name && (
                  <div className="absolute -bottom-5 h-3 w-3 p-1 blur-[3px] bg-green-500 rounded-full animate-pulse shadow-lg">
                    <div className="h-[1px] w-[1px] bg-green-400 rounded-full animate-pulse shadow-lg">
                    </div>
                  </div>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <Outlet />

      </div>
    </div>
  );
}
