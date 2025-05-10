"use client";

import React, { useState, useEffect, useCallback } from 'react'; // Added useCallback
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isHovering, setIsHovering] = useState(false); // Removed unused state

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = useCallback(() => { // Wrapped in useCallback
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]); // Dependency for useCallback


   useEffect(() => {
     const timer = setTimeout(() => {
       nextSlide();
     }, 5000); 
     return () => clearTimeout(timer);
   }, [currentIndex, nextSlide]);

  if (!images || images.length === 0) {
    return <div>No images to display.</div>;
  }

  return (
    <div 
      className="relative w-full h-[90vh] overflow-hidden group"
      
      data-aos="fade-in"
    >
      {/* Image */}
      <div className="w-full h-full relative">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill 
          quality={85}
          priority={currentIndex === 0} 
          className="object-cover transition-opacity duration-700 ease-in-out"
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className={`
          absolute top-1/2 left-4 transform -translate-y-1/2 
          p-3 rounded-full 
          bg-black bg-opacity-20 hover:bg-[#c09306]  /* Lowered default opacity */
          text-white text-2xl 
          transition-all duration-300 ease-in-out
          opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100
          focus:outline-none cursor-pointer
        `}
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className={`
          absolute top-1/2 right-4 transform -translate-y-1/2 
          p-3 rounded-full 
          bg-black bg-opacity-20 hover:bg-[#c09306]  /* Lowered default opacity */
          text-white text-2xl 
          transition-all duration-300 ease-in-out
          opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100
          focus:outline-none cursor-pointer
        `}
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      {/* Optional: Dots for navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              w-3 h-3 rounded-full cursor-pointer
              ${currentIndex === index ? 'bg-white' : 'bg-gray-400 bg-opacity-50'}
              hover:bg-gray-300 transition-colors
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
