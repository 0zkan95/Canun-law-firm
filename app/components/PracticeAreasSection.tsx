"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const practiceAreasData = [
  {
    name: "Personal Injury",
    image: "/consultant.avif", // Using placeholder
    description: "When harm befalls you due to negligence, HOPE Law Firm experiencedly fights to secure the justice and compensation you deserve."
  },
  {
    name: "Family Law",
    image: "/family.webp",
    description: "During challenging family transitions, HOPE Law Firm offers experienced guidance and fights to protect your rights and secure your family's well-being."
  },
  {
    name: "Criminal Law",
    image: "/crime.webp",
    description: "Facing criminal accusations, HOPE Law Firm provides an experienced and tenacious defense, fighting to protect your freedom and rights at every turn."
  },
  {
    name: "Real Estate Law",
    image: "/contract.webp", // Using placeholder
    description: "Whether protecting your property rights or navigating complex transactions, HOPE Law Firm brings experienced advocacy to safeguard your real estate interests."
  },
  {
    name: "Business Law",
    image: "/business.webp",
    description: "From formation to disputes, HOPE Law Firm offers experienced legal strategies, fighting to protect your business and champion its success."
  },
];


const PracticeAreasSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Start with the first item active

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-10 text-gray-800" data-aos="fade-up">
          The Areas Where We Practice Our Law
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-start">
          
          {/* Left Column: Practice Area List */}
          <div className="md:col-span-1 flex flex-col h-80 md:h-[450px]" data-aos="fade-right">
            {practiceAreasData.map((area, index) => (
              <button
                key={area.name}
                onClick={() => setActiveIndex(index)}
                className={`
                  w-full p-4 text-left font-heading text-lg rounded-xs transition-all duration-300 ease-in-out group border border-transparent flex-grow flex items-center {/* Added flex-grow, flex, items-center */}
                  ${activeIndex === index 
                    ? 'bg-[#c09306] text-black shadow-md' 
                    : 'bg-white text-gray-700 hover:border-gray-300 hover:shadow-sm'
                  }
                `}
              >
                {area.name}
              </button>
            ))}
          </div>

          {/* Right Column: Image Display */}
          <div className="md:col-span-2 relative h-80 md:h-[450px] rounded-xs overflow-hidden shadow-lg" data-aos="fade-left">
            {/* Render image based on activeIndex */}
            <Image
              key={activeIndex} // Change key to trigger potential transition/remount
              src={practiceAreasData[activeIndex].image}
              alt={practiceAreasData[activeIndex].name}
              fill // Use fill prop
              className="object-cover transition-opacity duration-500 ease-in-out" // Use object-cover class
            />
            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent text-white">
              <p className="mb-3 text-sm leading-relaxed">
                {practiceAreasData[activeIndex].description}
              </p>
              <a 
                href={`/practice-areas/${practiceAreasData[activeIndex].name.toLowerCase().replace(/\s+/g, '-')}`} // Example link structure
                className="inline-block bg-white text-[#d5a307] hover:bg-blue-100 font-semibold font-heading py-2 px-5 rounded-md text-sm transition-colors duration-150 shadow"
              >
                More About {practiceAreasData[activeIndex].name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
