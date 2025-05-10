import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';

const BlogPage = () => {
  const bannerImage = "/law-books.webp"; // Ensured .webp

  const blogPosts = [
    {
      slug: "understanding-family-law-basics",
      title: "Understanding Family Law Basics",
      image: "/family.webp",
      author: "Alex Adams",
      date: "May 8, 2025",
      excerpt: "Navigating family law can be complex. Here are the fundamental concepts everyone should know..."
    },
    {
      slug: "steps-after-personal-injury",
      title: "Crucial Steps to Take After a Personal Injury",
      image: "/consultant.avif",
      author: "Samantha Brooke",
      date: "May 1, 2025",
      excerpt: "If you've been injured due to someone else's negligence, knowing what to do next is vital..."
    },
    {
      slug: "navigating-criminal-charges",
      title: "Navigating Criminal Charges: Your First Steps",
      image: "/crime.webp",
      author: "Michael Chen",
      date: "April 25, 2025",
      excerpt: "Facing criminal charges is daunting. Understand your rights and the initial procedures involved..."
    },
  ];

  return (
    <>
      <div className="relative w-full h-64 md:h-80" data-aos="fade-in"> 
        <Image
          src={bannerImage}
          alt="Blog Banner"
          fill
          className="object-cover"
          priority 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">
            Blog
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <main className="w-full lg:w-3/4 space-y-10" data-aos="fade-right">
            {blogPosts.map((post, index) => (
              <article 
                key={post.slug} 
                className="bg-white shadow-md rounded-lg overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={`${index * 50}`}
              >
                <Link href={`/blog/${post.slug}`} className="block relative w-full h-64 bg-gray-200">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    className="object-cover hover:opacity-90 transition-opacity"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <FaUser className="mr-1.5" /> {post.author}
                    </span>
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-1.5" /> {post.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold font-heading mb-3 text-gray-800 hover:text-blue-800 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p> 
                  <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline font-semibold">
                    Read More &rarr;
                  </Link>
                </div>
              </article>
            ))}
            {blogPosts.length === 0 && (
              <p className="text-center text-gray-500">No blog posts found.</p>
            )}
          </main>
          <aside className="w-full lg:w-1/4" data-aos="fade-left" data-aos-delay="200">
            <div className="sticky top-24 space-y-8">
              <div className="p-6 bg-white shadow-md rounded-lg" data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-xl font-semibold font-heading mb-4">Search</h3>
                <form action="/blog/search" method="GET" className="flex">
                  <input 
                    type="search" 
                    name="q" 
                    placeholder="Search posts..." 
                    className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm" 
                  />
                  <button 
                    type="submit" 
                    className="px-3 py-2 bg-blue-800 text-white rounded-r-md hover:bg-blue-700 transition-colors"
                    aria-label="Search"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </button>
                </form>
              </div>
              <div className="p-6 bg-white shadow-md rounded-lg" data-aos="fade-up" data-aos-delay="400">
                <h3 className="text-xl font-semibold font-heading mb-4">Categories</h3>
                <ul className="space-y-2">
                  {[ "Family Law", "Criminal Law", "Personal Injury", "Business Law", "Real Estate"].map(category => (
                    <li key={category}>
                      <Link href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:underline">
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-white shadow-md rounded-lg" data-aos="fade-up" data-aos-delay="500">
                <h3 className="text-xl font-semibold font-heading mb-4">Recent Posts</h3>
                <ul className="space-y-3">
                  {blogPosts.slice(0, 3).map(post => ( 
                    <li key={post.slug}>
                      <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline font-semibold text-sm">
                        {post.title}
                      </Link>
                      <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
