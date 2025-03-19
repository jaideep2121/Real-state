import React from 'react';

const Pricing = () => {
  const plans = [
    {
      type: "2 BHK",
      price: "₹85 Lakhs",
      size: "1200 sq. ft.",
      features: ["2 Bedrooms", "2 Bathrooms", "Modular Kitchen", "Spacious Living Room"],
    },
    {
      type: "3 BHK",
      price: "₹1.25 Crore",
      size: "1800 sq. ft.",
      features: ["3 Bedrooms", "3 Bathrooms", "Balcony with City View", "Modern Interiors"],
      highlight: true,
    },
    {
      type: "4 BHK",
      price: "₹2.10 Crore",
      size: "2400 sq. ft.",
      features: ["4 Bedrooms", "4 Bathrooms", "Private Terrace", "Luxury Finishing"],
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10 md:mb-12">
          Whiteland Building Pricing
        </h2>
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-5 sm:p-6 md:p-8 border rounded-xl shadow-md bg-white transition transform hover:-translate-y-2 hover:shadow-lg ${
                plan.highlight ? 'border-primary bg-primary/10' : 'border-gray-200'
              }`}
            >
              <h3 className={`text-xl sm:text-2xl font-semibold mb-3 ${plan.highlight ? 'text-primary' : 'text-gray-800'}`}>
                {plan.type}
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{plan.price}</p>
              <p className="text-gray-500 text-sm sm:text-base mb-4">{plan.size}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 sm:py-4 rounded-lg font-semibold transition ${
                  plan.highlight
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'bg-gray-800 text-white hover:bg-gray-900'
                }`}
              >
                Schedule a Visit
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
