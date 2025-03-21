const MarriottResidences = () => {
    return (
      <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-xl shadow-xl overflow-hidden">
        {/* Left Section: Image */}
        <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-[500px]">
          <img
            src="https://assets.simpleviewinc.com/simpleview/image/upload/crm/wichita/ictwe-exterior-5533-hor-clsc_E7BE6E1B-BF2A-40D9-2BF366A97DCC7976-e7be6daac4650f7_e7be7c17-d6d4-d2a7-e577fd383cb4cf0b.jpg"
            alt="Westin Residence"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Right Section: Text Content */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12">
          {/* Heading */}
          <h2 className="text-gray-800 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            The <span className="text-red-500">WESTIN Residence</span> by Marriott
          </h2>
  
          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            Located in Sector 103 on the Dwarka Expressway, this pristine master-planned community of 20 acres 
            offers ultimate connectivity and is a haven of serenity that redefines holistic living. Westin Residences 
            Gurugram features spacious three and four BHK residences and is designed with a focus on sustainability 
            and well-being, incorporating elements of biophilic architecture to enhance residents’ connection to 
            nature. The clubhouse will be the crown jewel, among the finest in India, with personalized amenities 
            centered around wellness, recreation, and dining.
          </p>
  
          {/* Button */}
          <a 
            href="https://marriottresidences.com/premium_brands/westin-residences/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-500 text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-red-600 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Learn More
          </a>
        </div>
      </div>
    );
  };
  
  export default MarriottResidences;
  

  