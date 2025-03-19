import { Building2, Home, TrendingUp } from "lucide-react";
import React from 'react';

const Feature = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="group text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition">
              <Home className="w-10 h-10 text-primary group-hover:text-primary-dark transition" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Wide Range of Properties
            </h3>
            <p className="text-gray-600 leading-relaxed">
              From cozy apartments to luxury villas, find the perfect property that matches your lifestyle.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition">
              <TrendingUp className="w-10 h-10 text-primary group-hover:text-primary-dark transition" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Market Analysis
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get detailed market insights and property valuations from our expert team.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition">
              <Building2 className="w-10 h-10 text-primary group-hover:text-primary-dark transition" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Professional Guidance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our experienced agents will guide you through every step of your real estate journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
