import React from 'react';
import { MdLocationOn } from 'react-icons/md';

const LocationAdvantage = () => {
  const locationAdvantages = [
    {
      icon: <MdLocationOn className="w-6 h-6 text-blue-500" />,
      title: 'Nearby Schools',
      description: 'Top-rated schools are just a few minutes away, ensuring quality education for your children.',
    },
    {
      icon: <MdLocationOn className="w-6 h-6 text-blue-500" />,
      title: 'Public Transport Access',
      description: 'Easy access to bus and metro stations for quick travel to the city center.',
    },
    {
      icon: <MdLocationOn className="w-6 h-6 text-blue-500" />,
      title: 'Shopping Malls',
      description: 'Major shopping malls and grocery stores are nearby for your everyday needs.',
    },
    {
      icon: <MdLocationOn className="w-6 h-6 text-blue-500" />,
      title: 'Hospitals & Clinics',
      description: 'Several hospitals and healthcare centers are within a short driving distance.',
    },
  ];

  return (
    <div className="bg-secondary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Prime Location Advantages
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Strategically located in the most sought-after neighborhood, offering unparalleled connectivity and convenience.
          </p>
        </div>

        {/* Map and Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-10">
          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[300px] sm:h-[400px]">
            <iframe
              title="Property Location"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14043.69337865887!2d77.0266!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d77df9a851d%3A0x929ba7cfcf72c04!2sGurugram%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sin!4v1645564756836!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Location Advantages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {locationAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg shadow-sm">
                <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Get Directions */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 cursor-pointer">
            <MdLocationOn className="w-5 h-5" />
            <span className="font-medium text-sm sm:text-base">Get Directions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAdvantage;
