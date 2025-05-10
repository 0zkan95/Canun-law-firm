import React from 'react';
import Image from 'next/image';
import InfoBoxes from '../components/InfoBoxes';
import PracticeAreasSection from '../components/PracticeAreasSection';
import AttorneysSection from '../components/AttorneysSection';
import TestimonialsSection from '../components/TestimonialsSection';

const AboutPage = () => {
   

  return (
    <>
      <div className="relative w-full h-64 md:h-80" data-aos="fade-in">
        <Image
          src="/law-bg.webp"
          alt="About Us Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-70 flex items-end justify-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-10">
            About US
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-16">
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg" data-aos="fade-right">
              <Image 
                src="/law-firm.jpg" 
                alt="HOPE Law Firm - Our Commitment"
                fill 
                className="object-contain"
              />
            </div>
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <h2 className="text-4xl font-bold font-heading mb-6 text-gray-800">We are here to fight against any violance with experience</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                HOPE Law Firm was established with a clear vision: to build a practice grounded in expertise, driven by a passion for justice, and dedicated to achieving the best possible outcomes for our clients. From our beginnings, we have focused on cultivating a deep understanding of the law and fostering a culture of relentless advocacy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our journey has been one of steady growth, marked by significant victories and the trust of countless individuals and businesses. We pride ourselves on not just being legal advisors, but true partners to our clients, navigating complex legal landscapes with clarity and strategic insight.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Today, HOPE Law Firm stands as a testament to what can be achieved when skill, dedication, and a client-first philosophy converge. We continue to evolve, embracing new challenges and expanding our capabilities, all while remaining true to the foundational principles that have defined our success.
              </p>
              <div className="mt-6">
                <p className="font-semibold font-heading text-gray-800">Alex Adams</p>
                <p className="text-sm text-gray-600 font-heading">CEO, HOPE Law Firm</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <InfoBoxes /> 
      <PracticeAreasSection />
      <AttorneysSection />
      <TestimonialsSection />

      <div className="pb-16"></div> 
    </>
  );
};

export default AboutPage;
