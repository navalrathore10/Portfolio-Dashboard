// Layout.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import { useToggle } from '../ToggleContext';
import Bottombar from '../components/Bottombar';
import ScrollToTop from '../components/ScrollToTop'; // Import ScrollToTop

export default function Layout() {
  const { toggled, darkModeHandler } = useToggle();

  return (
    <>
      <div className={`flex w-[100vw] ${!toggled ? 'bg-dark17' : 'bg-lighte3'}`}>
        <div className="sidebar-show hidden md:block">
          <Sidebar toggled={toggled} onToggle={darkModeHandler} />
        </div>
        <div className="bottombar block md:hidden z-30">
          <Bottombar toggled={toggled} onToggle={darkModeHandler} />
        </div>
        <ScrollToTop />
        {/* Outlet is placed inside this so that every Page gets loaded from the top / Scroll will be zero on render because 
        React does not refresh the page scrollheight by itself it retains it to next page.*/}
      </div>
    </>
  );
}
