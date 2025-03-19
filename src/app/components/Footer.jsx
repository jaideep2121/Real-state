import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">
            About Us
          </h3>
          <h3 className="text-xs sm:text-sm leading-relaxed text-white ">
            We are committed to delivering the best experience for our customers.
          </h3>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">
            Quick Links
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Terms & Conditions */}
        <div>
          <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">
            Legal
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
          <li>
      <Link href="/LegalPolicy" className="hover:text-white transition">
        Terms and Conditions
      </Link>
    </li>
    <li>
      <Link href="/LegalPolicy" className="hover:text-white transition">
       Privacy Policy
      </Link>
    </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs sm:text-sm border-t border-gray-700 pt-4 mt-6">
        This is not the official website of developer property, it belongs to authorised channel partners for information purposes only. All rights for logo & images are reserved to the developer. Thank you for visiting our website. This disclaimer ("Disclaimer") is applicable to this website and all microsites and websites owned by us. By using or accessing this website you agree with the Disclaimer without any qualification or limitation. || All Rights Reserved CopyRight © 2025
      </div>
    </footer>
  );
};

export default Footer;
