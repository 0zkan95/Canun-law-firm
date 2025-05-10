import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const visionStatement = "Providing expert legal solutions with dedication and integrity, ensuring justice and peace of mind for our clients."; // Placeholder vision

  return (
    <footer className="bg-blue-900 text-white pt-8 pb-4 px-4 md:px-8"> {/* Changed to bg-blue-900 */}
      <div className="container mx-auto">
        {/* Three-column section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-sm">
          {/* Column 1: Logo, Name, Vision */}
          <div className="space-y-3 text-center md:text-left">
            <Link href="/" className="flex items-center space-x-2 justify-center md:justify-start">
              <Image src="/logo.svg" alt="HOPE Law Firm Logo" width={30} height={30} />
              <span className="text-xl font-bold font-heading">HOPE</span> {/* Added font-heading */}
            </Link>
            <p className="text-gray-300">{visionStatement}</p> {/* Vision statement uses body font (Open Sans) */}
          </div>

          {/* Column 2: Our Services */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-semibold font-heading">Our Services</h3> {/* Added font-heading */}
            <ul className="space-y-1 text-gray-300"> {/* Service items use body font */}
              <li><Link href="/services/family-law" className="hover:text-white">Family Law</Link></li>
              <li><Link href="/services/criminal-law" className="hover:text-white">Criminal Law</Link></li>
              <li><Link href="/services/education-law" className="hover:text-white">Education Law</Link></li>
              <li><Link href="/services/real-estate-law" className="hover:text-white">Real Estate Law</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-semibold font-heading">Connect With Us</h3> {/* Added font-heading */}
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 flex items-center space-x-2">
                <FaFacebookF size={18} /> <span className="font-heading">Facebook</span> {/* Added font-heading to label */}
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 flex items-center space-x-2">
                <FaTwitter size={18} /> <span className="font-heading">Twitter</span> {/* Added font-heading to label */}
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 flex items-center space-x-2">
                <FaInstagram size={18} /> <span className="font-heading">Instagram</span> {/* Added font-heading to label */}
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 flex items-center space-x-2">
                <FaLinkedinIn size={18} /> <span className="font-heading">LinkedIn</span> {/* Added font-heading to label */}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-blue-800 pt-4 text-center text-xs text-gray-300"> {/* Adjusted border color */}
          <p>Copyright &copy; {new Date().getFullYear()} HOPE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
