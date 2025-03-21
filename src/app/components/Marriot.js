const MarriottResidences = () => {
    return (
      <div 
        className="w-full h-[500px] bg-gradient-to-r from-red-500 to-black relative rounded-xl shadow-xl overflow-hidden"
        style={{
          backgroundImage: 'url("https://assets.simpleviewinc.com/simpleview/image/upload/crm/wichita/ictwe-exterior-5533-hor-clsc_E7BE6E1B-BF2A-40D9-2BF366A97DCC7976-e7be6daac4650f7_e7be7c17-d6d4-d2a7-e577fd383cb4cf0b.jpg")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full h-full  bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          {/* Heading */}
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl drop-shadow-lg">
          The WESTIN Residence by Marriott
          </h2>
  
          {/* Description */}
          <p className="text-white text-sm sm:text-base md:text-lg max-w-4xl mt-4 leading-relaxed opacity-90">
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
            className="mt-6 bg-red-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-red-600 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Learn More
          </a>
        </div>
      </div>
    );
  };
  
  export default MarriottResidences;
  
  



  