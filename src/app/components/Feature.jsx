import { Building2, Home, TrendingUp } from "lucide-react";
import React from 'react';

const Feature = () => {
  return (
    <section className="py-16 sm:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Home className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
              Wide Range of Properties
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              From cozy apartments to luxury villas, find the perfect property that matches your lifestyle.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
              Market Analysis
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Get detailed market insights and property valuations from our expert team.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
              Professional Guidance
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Our experienced agents will guide you through every step of your real estate journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
