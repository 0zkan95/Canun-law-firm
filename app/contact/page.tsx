import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import MapSection from '../components/MapSection';

const ContactPage = () => {
  const bannerImage = "/law-bg.webp"; // Ensured .webp

  return (
    <>
      <div className="relative w-full h-64 md:h-80" data-aos="fade-in">
        <Image
          src={bannerImage}
          alt="Contact Us Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">
            Contact Us
          </h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="0">
              <FaMapMarkerAlt className="text-4xl text-[#a67f06] mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-heading mb-2 text-gray-800">Address</h3>
              <p className="text-gray-600">123 Law St, Justice City, CA 90210</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="100">
              <FaEnvelope className="text-4xl text-[#a67f06] mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-heading mb-2 text-gray-800">Email</h3>
              <a href="mailto:contact@lawfirm.com" className="text-blue-600 hover:underline">contact@lawfirm.com</a>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="200">
              <FaPhoneAlt className="text-4xl text-[#a67f06] mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-heading mb-2 text-gray-800">Phone</h3>
              <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <ContactForm />
        </div>
      </section>

      <div data-aos="fade-up" data-aos-delay="100">
        <MapSection />
      </div>
    </>
  );
};

export default ContactPage;
