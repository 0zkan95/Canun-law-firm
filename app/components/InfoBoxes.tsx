import React from 'react';
import { FaBalanceScale, FaLock, FaHeadset } from 'react-icons/fa';

const InfoBoxes = () => {
  const boxes = [
    {
      icon: <FaBalanceScale className="text-[#a67f06] text-4xl" />,
      title: "Defending Your Rights",
      description: "Our dedicated legal team is committed to vigorously defending your rights. We explore every avenue to ensure justice is served and your interests are paramount."
    },
    {
      icon: <FaLock className="text-[#a67f06] text-4xl" />,
      title: "Secure Management",
      description: "We uphold the strictest confidentiality. Your personal information and sensitive case details are managed with the utmost security and discretion."
    },
    {
      icon: <FaHeadset className="text-[#a67f06] text-4xl" />,
      title: "Full Time Support",
      description: "Legal matters don't always adhere to business hours. We strive to provide accessible support and clear communication, ensuring you're informed 24/7."
    }
  ];

  return (
    <section className="py-12 bg-gray-100"> {/* This section will be full width */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24"> {/* This centers the content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {boxes.map((box, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center" // Removed space-x-4 as it's flex-col
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`} // Stagger delay
            >
              <div className="flex-shrink-0 mb-4">
                 {box.icon}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold font-heading mb-4 text-gray-800">
                  {box.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
