'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon

// Dummy Product Data - Replace with actual book data and image paths
const products = [
  { id: 'book1', name: "Constitutional Law Debates", price: 49.99, image: "/book1.jpg" },
  { id: 'book2', name: "Criminal Law Today", price: 54.99, image: "/book2.webp" },
  { id: 'book3', name: "Real Estate Transactions", price: 62.00, image: "/book3.jpeg" },
  { id: 'book4', name: "Family Law Essentials", price: 59.95, image: "/book4.jpg" },
  { id: 'book5', name: "Education Law", price: 45.50, image: "/book5.jpg" }, 
  { id: 'book6', name: "Business Law & Ethics", price: 68.00, image: "/book6.jpg" }, 
  { id: 'book7', name: "Corporate Finance Law", price: 51.75, image: "/book7.jpg" }, 
  { id: 'book8', name: "Income Tax Law", price: 39.99, image: "/book8.jpg" }, 
];

// Reusable Product Card Component
const ProductCard = ({ product }: { product: typeof products[0] }) => {
  
  const handleAddToCart = () => {
    // TODO: Implement actual add to cart logic (e.g., update state/context)
    alert(`${product.name} added to cart (placeholder)!`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden group border border-gray-200">
      <Link href={`/shop/${product.id}`} className="block relative w-full h-72 bg-gray-100">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill // Use fill prop
          className="object-cover group-hover:opacity-90 transition-opacity" // Use object-cover class
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold font-heading mb-1 text-gray-800 truncate" title={product.name}>
          <Link href={`/shop/${product.id}`} className="hover:text-blue-800">
            {product.name}
          </Link>
        </h3>
        <p className="text-xl font-bold text-blue-800 mb-3">${product.price.toFixed(2)}</p>
        <button 
          onClick={handleAddToCart}
          className="w-full bg-[#c09306] text-black hover:bg-[#a98105] font-semibold py-2 px-4 rounded-md shadow transition-colors duration-150 font-heading text-sm flex items-center justify-center space-x-2 cursor-pointer" // Updated styles and added flex/cursor
        >
          <FaShoppingCart /> 
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};


const ShopPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Optional Banner */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-700 py-12 text-center text-white" data-aos="fade-in">
        <h1 className="text-4xl font-bold font-heading">Legal Books & Resources</h1>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => ( // Added index for stagger
            <div key={product.id} data-aos="zoom-in-up" data-aos-delay={`${index * 50}`}> {/* Wrap ProductCard for AOS */}
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
