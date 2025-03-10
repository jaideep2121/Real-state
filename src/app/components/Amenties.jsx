import React from 'react';
import { School as Pool, Dumbbell, Car, Trees as Tree, Shield, Wifi } from 'lucide-react';

const amenities = [
  {
    icon: <Pool className="w-8 h-8" />,
    title: "Swimming Pool",
    description: "Olympic-sized swimming pool with heated water and dedicated lap lanes",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1600"
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Fitness Center",
    description: "State-of-the-art gym equipment and dedicated yoga studio",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600"
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Covered Parking",
    description: "Secure underground parking with EV charging stations",
    image: "https://t4.ftcdn.net/jpg/03/30/78/77/360_F_330787755_RSUhTI7LvN3UUvGWus7t90Sh8yACJ8Lb.jpg"
  },
  {
    icon: <Tree className="w-8 h-8" />,
    title: "Garden Area",
    description: "Beautifully landscaped gardens with walking paths",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1600"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "24/7 Security",
    description: "Round-the-clock security with CCTV surveillance",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=1600"
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "High-Speed Internet",
    description: "Fiber-optic internet throughout the premises",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1600"
  }
];

const Amenities = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Luxury Living Amenities
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of comfort and convenience with our premium amenities designed for modern living.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative h-40 sm:h-48">
                <img 
                  src={amenity.image} 
                  alt={amenity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                  {amenity.icon}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
