'use client'
import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa';

const Nav = ({ onScroll }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="w-full flex items-center justify-evenly bg-white fixed top-0 left-0 shadow-md z-10 px-4 lg:px-8">
            {/* Logo */}
            <a className="cursor-pointer py-3 pr-7">
                <img src="data:image/jpeg;base64,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" width="67px" height="20px" />
            </a>

            {/* Menu */}
            <ul className="hidden md:flex space-x-6">
                {['Home', 'Why Choose us','Pricing', 'Amenities', 'Location', 'Other Projects', 'Contact Us'].map((item) => (
                    <li key={item} className="text-gray-900 font-mullish py-7 hover:text-gray-600 cursor-pointer transition-all duration-200 relative font-bold group" onClick={() => onScroll(item)}>
                        {item}
                        <div className="absolute bottom-0 w-full h-1 bg-blue-400 hidden group-hover:block transition-all duration-200"></div>
                    </li>
                ))}
            </ul>

            {/* Contact Button */}
            <a href="tel:+919999999999">
  <div className="h-14 bg-gradient-to-r from-gray-200 to-yellow-100 flex items-center justify-center text-black ring px-4 hover:scale-110 transform transition duration-300 ease-in-out hidden sm:flex rounded">
    +918287701077
  </div>
</a>



            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={() => setIsModalOpen(!isModalOpen)} className="text-gray-900 text-4xl">
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isModalOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
  {[
    'Home',
    'Why Choose us',
    'Pricing',
    'Amenities',
    'Location',
    'Other Projects',
    'Contact Us',
  ].map((item) => (
    <a
      key={item}
      onClick={() => onScroll(item)} // ✅ Fixed here
      className="block py-3 px-4 border-b border-gray-200 text-gray-900 hover:bg-gray-100"
    >
      {item}
    </a>
  ))}
</div>
            )}
            <a
  href="tel:+918287701077"
  className="block md:hidden py-3 px-4 border-t border-gray-200 text-gray-900 hover:bg-gray-100 flex items-center gap-2"
>
  <FaPhone size={20} />
  
</a>

        </div>
    );
};

export default Nav;








  