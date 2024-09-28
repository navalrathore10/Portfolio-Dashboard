// ScrollToTop.jsx
import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useToggle } from '../ToggleContext';
import { ProjectsProvider } from '../contexts/projectscontext';

export default function ScrollToTop() {


    const { pathname } = useLocation();
    const scrollableRef = useRef(null);
    const { toggled } = useToggle();


    useEffect(() => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTo(0, 0);
        }
    }, [pathname]);

    return (
        <div ref={scrollableRef} className={`${!toggled ? 'bg-dark17' : 'bg-lighte3'} 
          flex-1 overflow-y-auto scrollbar-hide h-[calc(100vh-80px)] sm:h-screen relative`}>
            <ProjectsProvider>
                <Outlet />
            </ProjectsProvider>
        </div>
    );
}
