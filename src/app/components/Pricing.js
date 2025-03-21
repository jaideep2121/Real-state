import React from 'react';

const Pricing = () => {
  const plans = [
    {
      type: "3 BHK",
      price: "Starting At ₹23,057 per Sqft",
      size: "2673 & 2930 SQFT",
      image: "https://www.decorpot.com/images/616698669top-15-insider-tip-%20to-a-high-end-luxury-interior-design-for-your-dream-home.jpg",
      highlight: true,
    },
    {
      type: "4 BHK",
      price: "Starting At ₹22,167 per Sqft",
      size: "3964 & 4382 SQFT",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/415601493/BY/JY/JC/220900187/a-modern-tv-wall-unit-is-seamles-500x500.jpg",
      highlight: true,
    },
  ];

  const paymentPlan = [
    { stage: "On Booking", percentage: "9%" },
    { stage: "Within 45 Days from Booking", percentage: "11%" },
    { stage: "Within 75 Days from Booking", percentage: "10%" },
    { stage: "Within 120 Days of booking or on start of Excavation whichever is later.", percentage: "5%" },
    { stage: "On Completion of 20th floor slab", percentage: "15%" },
    { stage: "On completion of super structure", percentage: "15%" },
    { stage: "On application of OC (Occupation Certificate)", percentage: "25%" },
    { stage: "On Offer of Possession", percentage: "10%" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-800 via-red-500 to-gray-800 bg-clip-text text-transparent mb-6">
          AVAILABLE <span className="bg-gradient-to-r from-red-500 to-gray-800 bg-clip-text text-transparent">OPTIONS</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Property Options */}
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-lg bg-white transition-transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image */}
              <img
                src={plan.image}
                alt={plan.type}
                className="w-full h-60 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {plan.type}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{plan.size}</p>
                
                {/* Highlighted Price Section */}
                <div className="bg-gradient-to-r from-red-500 to-gray-800 text-white text-lg font-bold p-3 rounded-lg shadow-md mb-4">
                  {plan.price}
                </div>

                <button
                  className="w-full py-3 rounded-md border border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition"
                >
                  Schedule a Visit
                </button>
              </div>
            </div>
          ))}

          {/* Payment Plan (as a Card) */}
          <div className="border rounded-xl shadow-lg bg-white overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Payment Plan
              </h3>
              <div className="max-h-96 overflow-y-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gradient-to-r from-red-500 to-gray-800 text-white">
                      <th className="px-4 py-2 text-sm font-semibold">Stage</th>
                      <th className="px-4 py-2 text-sm font-semibold text-center">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentPlan.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-100">
                        <td className="px-4 py-3 text-gray-700">{item.stage}</td>
                        <td className="px-4 py-3 font-semibold text-center text-red-500">{item.percentage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Pricing;










// image: "https://www.decorpot.com/images/616698669top-15-insider-tip-%20to-a-high-end-luxury-interior-design-for-your-dream-home.jpg",
// image: "https://5.imimg.com/data5/SELLER/Default/2024/5/415601493/BY/JY/JC/220900187/a-modern-tv-wall-unit-is-seamles-500x500.jpg",