import { Building2, Home, TrendingUp } from "lucide-react";
import React from 'react';

const Feature = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
    {/* Heading */}
    <h1 className="text-3xl font-bold text-center mb-6">
      The WESTIN Residence by Marriott
    </h1>

    <div className="flex flex-col md:flex-row gap-6 items-center">
      {/* Image on the left */}
      <div className="w-full md:w-1/2">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/19/ef/20/7c/the-westin-gurgaon-new.jpg"
          alt="The WESTIN Residence"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Content on the right */}
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">
          Why Choose The WESTIN Residence?
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            <strong>Prime Location</strong> – Situated in the heart of the city with easy access to shopping, dining, and entertainment.
          </li>
          <li>
            <strong>Luxury Interiors</strong> – Designed with premium materials and modern aesthetics to provide maximum comfort.
          </li>
          <li>
            <strong>State-of-the-Art Amenities</strong> – Including a rooftop pool, fitness center, and concierge service.
          </li>
          <li>
            <strong>Security and Privacy</strong> – 24/7 security and private access to ensure peace of mind.
          </li>
          <li>
            <strong>Green Spaces</strong> – Beautifully landscaped gardens and open areas to relax and unwind.
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Feature;
