"use client"; // Make it a client component

import Link from 'next/link';
import React, { useState } from 'react'; // Import useState
import { FaSearch, FaShoppingBasket } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-800 text-white shadow-md py-2 px-4 md:px-8 relative"> {/* Changed to bg-blue-800 */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Firm Name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="HOPE Law Firm Logo" width={40} height={40} />
            <span className="text-2xl font-bold text-white font-heading">HOPE</span> {/* Added font-heading */}
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-white hover:text-blue-200 font-heading">Home</Link>
          <Link href="/about" className="text-white hover:text-blue-200 font-heading">About</Link>
          {/* <Link href="/pages" className="text-white hover:text-blue-200 font-heading">Pages</Link> */} {/* Removed Pages */}
          <Link href="/cases" className="text-white hover:text-blue-200 font-heading">Cases</Link>
          <Link href="/shop" className="text-white hover:text-blue-200 font-heading">Shop</Link>
          <Link href="/blog" className="text-white hover:text-blue-200 font-heading">Blog</Link>
          <Link href="/contact" className="text-white hover:text-blue-200 font-heading">Contact</Link>
        </nav>

        {/* Right side content: Desktop icons/button & Mobile icons/hamburger */}
        <div className="flex items-center space-x-4">
          {/* Desktop: Search, Basket, Consulting Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-blue-200" aria-label="Search">
              <FaSearch />
            </button>
            <Link href="/cart" className="text-white hover:text-blue-200" aria-label="Shopping Basket">
              <FaShoppingBasket />
            </Link>
            <Link href="/free-consulting" className="bg-[#c09306] text-black hover:bg-[#a98105] font-semibold py-2 px-4 rounded-[2rem] shadow transition-colors duration-150 font-heading">
              Free Consulting
            </Link>
          </div>

          {/* Mobile: Search, Basket, Hamburger */}
          <div className="md:hidden flex items-center space-x-3">
            <button className="text-white hover:text-blue-200" aria-label="Search">
              <FaSearch />
            </button>
            <Link href="/cart" className="text-white hover:text-blue-200" aria-label="Shopping Basket">
              <FaShoppingBasket />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-blue-200"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          md:hidden absolute top-full left-0 right-0 bg-blue-900 shadow-lg z-40 border-t border-blue-700 {/* Adjusted mobile menu bg for contrast if header is darker */}
          transition-all duration-300 ease-in-out transform
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        {isMobileMenuOpen && (
          <nav className="flex flex-col items-center space-y-1 py-3">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              // { href: "/pages", label: "Pages" }, // Removed Pages
              { href: "/cases", label: "Cases" },
              { href: "/shop", label: "Shop" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((item) => ( 
              <Link
                href={item.href}
                key={item.href}
                className="py-2 px-4 w-full text-center group"
                onClick={toggleMobileMenu}
              >
                <span className="relative inline-block text-white group-hover:text-blue-200 font-heading">
                  {item.label}
                  <span className="absolute bottom-0 left-0 h-px bg-[#c09306] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
              </Link>
            ))}
            <div className="mt-3 w-full px-4 pt-2">
              <Link
                href="/free-consulting"
                className="block w-full text-center bg-[#c09306] text-black hover:bg-[#a98105] font-semibold py-2 px-4 rounded-[2rem] shadow transition-colors duration-150 font-heading"
                onClick={toggleMobileMenu}
              >
                Free Consulting
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
