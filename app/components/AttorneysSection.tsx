"use client"; // Needed for state management (social icon toggle)

import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlus, FaTimes, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

// Dummy data for attorneys - replace with real data
const attorneysData = [
  {
    name: "Alex Adams", // Assuming CEO is also an attorney here
    title: "Family Lawyer",
    image: "/lawyer1.jpg", 
    social: { twitter: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Samantha Brooke",
    title: "Criminal Defense Lawyer",
    image: "/lawyer2.jpg", 
    social: { twitter: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Michael Chen",
    title: "Business Lawyer",
    image: "/lawyer3.jpg", 
    social: { twitter: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Jessica Ramirez",
    title: "Real Estate Lawyer",
    image: "/lawyer4.jpeg", 
    social: { twitter: "#", facebook: "#", linkedin: "#" }
  },
];

const AttorneysSection = () => {
  const [openSocials, setOpenSocials] = useState<Record<number, boolean>>({});

  const toggleSocials = (index: number) => {
    setOpenSocials(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const title = "Meet Our Most Talented Attorneys";
  const description = "Get acquainted with the dedicated professionals who bring unparalleled skill and deep qualifications to every case. Learn about their track records and areas of specialization, building your confidence in our firm's ability to achieve results.";

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Title and Description */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-800">
            {title}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            {description}
          </p>
        </div>

        {/* Attorneys Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {attorneysData.map((attorney, index) => (
            <div 
              key={index} 
              className="relative group bg-white overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {/* Image Container */}
              <div className="relative w-full h-96">
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  fill // Use fill prop
                  className="object-cover transition-all duration-300 brightness-90 group-hover:brightness-100" // Use object-cover class
                />
                
                {/* Top-Left Plus/Cross Button */}
                <button 
                  onClick={() => toggleSocials(index)}
                  className="absolute top-0 left-0 w-10 h-10 bg-[#c09306] text-black flex items-center justify-center z-20 focus:outline-none"
                  aria-expanded={!!openSocials[index]}
                  aria-label={openSocials[index] ? "Close social media links" : "Open social media links"}
                >
                  {openSocials[index] ? <FaTimes size={18} /> : <FaPlus size={18} />}
                </button>

                {/* Social Media Links Panel */}
                <div 
                  className={`
                    absolute top-10 left-0 w-10 bg-[#c09306] 
                    flex flex-col items-center space-y-2 py-2 
                    transition-all duration-300 ease-in-out origin-top z-10
                    rounded-br-full rounded-bl-full {/* Rounded bottom */}
                    ${openSocials[index] ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
                  `}
                >
                  <a href={attorney.social.twitter} target="_blank" rel="noopener noreferrer" className="text-black hover:text-white" aria-label="Twitter"><FaTwitter /></a>
                  <a href={attorney.social.facebook} target="_blank" rel="noopener noreferrer" className="text-black hover:text-white" aria-label="Facebook"><FaFacebookF /></a>
                  <a href={attorney.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-black hover:text-white" aria-label="LinkedIn"><FaLinkedinIn /></a>
                </div>
              </div>

              {/* Info Below Image */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold font-heading text-gray-800">{attorney.name}</h3>
                <p className="text-sm text-gray-500 font-heading">{attorney.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttorneysSection;
