"use client";

import React, { useState, useEffect, useRef } from 'react';
import TopBar from './TopBar';
import Header from './Header';

const StickyHeaderWrapper = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const topBarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [topBarHeight, setTopBarHeight] = useState(0);

  useEffect(() => {
    if (topBarRef.current) {
      setTopBarHeight(topBarRef.current.offsetHeight);
    }
  }, []); // Get TopBar height on mount

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Hide TopBar if scrolled past a small threshold (e.g., 10px)
      setShowTopBar(scrollY <= 10); 

      // Make Header sticky if scrolled past the TopBar's original position
      if (topBarHeight > 0) {
        setIsHeaderSticky(scrollY >= topBarHeight);
      } else {
        // Fallback if topBarHeight isn't measured yet, stick after small scroll
        setIsHeaderSticky(scrollY > 50); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call handler once on mount to set initial state based on current scroll (e.g. if page reloaded scrolled down)
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [topBarHeight]); // Re-run if topBarHeight changes

  return (
    <>
      <div 
        ref={topBarRef}
        className={`transition-all duration-300 ease-in-out ${
          showTopBar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ zIndex: 20 }} // Ensure TopBar is above Header initially if they overlap during transition
      >
        <TopBar />
      </div>
      <div 
        ref={headerRef}
        className={`transition-all duration-300 ease-in-out ${
          isHeaderSticky 
            ? 'fixed top-0 left-0 right-0 shadow-lg z-50' 
            : 'relative' // Or 'static' if it doesn't need to establish a positioning context
        }`}
      >
        <Header />
      </div>
      {/* Add a placeholder to prevent content jump when header becomes fixed */}
      {isHeaderSticky && headerRef.current && (
        <div style={{ height: headerRef.current.offsetHeight }} />
      )}
    </>
  );
};

export default StickyHeaderWrapper;
