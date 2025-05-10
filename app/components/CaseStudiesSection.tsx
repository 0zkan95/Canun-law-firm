import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for the button

const caseStudiesData = [
  { title: "Criminal Defense Success", image: "/criminal1.jpeg", link: "/case-studies/criminal-defense-1" },
  { title: "Personal Injury Compensation", image: "/personal-inj2.jpg", link: "/case-studies/personal-injury-2" },
  { title: "Favorable Family Law Outcome", image: "/family-law2.jpg", link: "/case-studies/family-law-2" },
  { title: "Business Litigation Victory", image: "/business-law2.webp", link: "/case-studies/business-law-2" },
  { title: "Real Estate Dispute Resolution", image: "/real-estate-2.jpg", link: "/case-studies/real-estate-2" },
  { title: "Corporate Structuring Success", image: "/Business-Law-3.jpg", link: "/case-studies/business-law-3" },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold font-heading text-center mb-10 text-gray-800" data-aos="fade-up">
          Recent Case Studies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study, index) => (
            <div 
              key={index} 
              className="shadow-lg rounded-lg group bg-white"
              data-aos="zoom-in-up"
              data-aos-delay={`${index * 100}`} // Stagger delay
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill // Use fill prop
                  className="object-cover transition-transform duration-300 lg:group-hover:scale-105" // Use object-cover class
                />
                {/* Combined Overlay for Mobile/Tablet (Bottom) and Desktop (Full Hover) */}
                <div className={`
                  absolute bottom-0 left-0 right-0 p-4 
                  bg-gradient-to-t from-black via-black/70 to-transparent 
                  transition-all duration-300 ease-in-out 
                  lg:inset-0 lg:from-transparent lg:via-transparent lg:to-transparent lg:p-4 
                  lg:bg-blue-800 lg:bg-opacity-0 lg:opacity-0 
                  lg:group-hover:bg-opacity-75 lg:group-hover:opacity-100 
                  lg:flex lg:flex-col lg:items-center lg:justify-center
                `}>
                  {/* Content: Title and Button */}
                  <h3 className="text-white text-lg font-semibold font-heading text-left lg:text-center mb-2 lg:mb-4">
                    {study.title}
                  </h3>
                  <Link 
                    href={study.link} 
                    // Mobile/Tablet Button Style (always visible)
                    className={`
                      inline-block bg-white text-blue-800 hover:bg-blue-100 font-semibold font-heading py-1 px-4 rounded-md text-sm transition-colors duration-150 shadow
                      lg:py-2 lg:px-5  /* Desktop button style adjustments */
                    `}
                  >
                    View Case
                  </Link>
                </div>
              </div>
              {/* No separate mobile info block needed */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
