"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const testimonialsData = [
  {
    quote: "HOPE Law Firm provided exceptional service and achieved a fantastic outcome for my case. Highly recommend their professional team!",
    name: "John Doe",
    title: "Satisfied Client"
  },
  {
    quote: "From the initial consultation to the final resolution, I felt supported and confident. Their expertise is unmatched.",
    name: "Jane Smith",
    title: "Grateful Client"
  },
  {
    quote: "The attorneys at HOPE are not only knowledgeable but also incredibly compassionate. They made a difficult time much more manageable.",
    name: "Robert Brown",
    title: "Impressed Client"
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const backgroundImage = "/law-bg.webp"; // Ensured .webp

  const changeSlide = useCallback((newIndex: number) => {
    setCurrentIndex(prevIndex => {
      const len = testimonialsData.length; 
      const isWrappingAroundForward = newIndex === 0 && prevIndex === len - 1;
      const isWrappingAroundBackward = prevIndex === 0 && newIndex === len - 1;

      if (newIndex > prevIndex && !isWrappingAroundBackward) {
        setSlideDirection('right');
      } else if (newIndex < prevIndex && !isWrappingAroundForward) {
        setSlideDirection('left');
      } else if (isWrappingAroundForward) {
        setSlideDirection('right');
      } else if (isWrappingAroundBackward) {
        setSlideDirection('left');
      }
      return newIndex;
    });
  }, []); 
  
  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => {
      setSlideDirection('right'); 
      const len = testimonialsData.length; 
      return prevIndex === len - 1 ? 0 : prevIndex + 1;
    });
  }, []); 

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, nextSlide]);

  return (
    <section className="relative py-20 md:py-28 text-white overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Testimonials Background"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-blue-800 opacity-80 z-0"></div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          <div className="lg:w-1/3 text-center lg:text-left" data-aos="fade-right">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
              What our clients say about us?
            </h2>
          </div>
          <div className="w-full lg:w-2/3 relative mx-auto min-h-[300px]" data-aos="fade-left">
            <div
              key={currentIndex}
              className={`
                absolute inset-x-0 top-0 
                p-8 rounded-lg min-h-[250px] flex flex-col justify-between max-w-xl mx-auto 
                border border-white border-opacity-50 shadow-lg bg-blue-900 bg-opacity-30
                transition-all duration-500 ease-in-out transform
                ${slideDirection === 'right' ? 'animate-slideInFromRight' : 'animate-slideInFromLeft'}
              `}
            >
              <p className="text-lg italic mb-6 leading-relaxed text-center lg:text-left">
                &quot;{testimonialsData[currentIndex].quote}&quot;
              </p>
              <div className="text-center">
                <p className="font-semibold font-heading text-md">
                  {testimonialsData[currentIndex].name}
                </p>
                <p className="text-sm opacity-80">
                  {testimonialsData[currentIndex].title}
                </p>
              </div>
            </div>
            {testimonialsData.length > 1 && (
              <div className="flex justify-center space-x-2 mt-8 lg:absolute lg:bottom-[-40px] lg:left-1/2 lg:-translate-x-1/2">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeSlide(index)}
                    className={`
                      w-3 h-3 rounded-full cursor-pointer
                      transition-colors duration-300
                      ${currentIndex === index ? 'bg-gray-400' : 'bg-gray-200 bg-opacity-50 hover:bg-opacity-70'}
                    `}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
