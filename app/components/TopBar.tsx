import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-indigo-700 text-white text-sm py-2 px-4 md:px-8"> {/* Changed bg-gray-800 to bg-indigo-700 and py-2 to py-3 */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-around items-center space-y-2 lg:space-y-0"> {/* Changed md:flex-row to lg:flex-row and md:space-y-0 to lg:space-y-0 */}
        {/* Group 1: About Us, FAQ Us, Social Media Icons */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-4">
          <Link href="/about-us" className="hover:text-gray-300 font-heading">
            About Us
          </Link>
          <Link href="/faq" className="hover:text-gray-300 font-heading">
            FAQ Us
          </Link>
          <div className="flex items-center space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Group 2: Firm Address and Email */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="text-center md:text-left">
            123 Law St, Justice City, CA 90210
          </div>
          <div>
            <a href="mailto:contact@lawfirm.com" className="hover:text-gray-300">
              contact@lawfirm.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
