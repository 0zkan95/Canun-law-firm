"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: false, // Set to false to animate every time elements scroll into view
      mirror: false, // Set to true if you want reverse animations on scroll out, false to just re-trigger on scroll in
      // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return null; // This component does not render anything itself
};

export default AOSInitializer;
