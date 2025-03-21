const DesignInfo = () => {
    return (
      <div className="w-full max-w-6xl mx-auto bg-gray-50 py-16 px-8 md:px-16 rounded-2xl shadow-lg">
        {/* Heading */}
        <h2 className="text-center text-gray-800 font-extrabold text-3xl md:text-4xl leading-snug mb-12">
          Designed by World-leading Creative Minds in <br />
          <span className="text-bg-gradient-to-r from-red-500 to-black ">Architecture, Interior Design, and Landscaping</span>
        </h2>
  
        {/* Info Container */}
        <div className="flex flex-wrap justify-center gap-16">
          {/* Design Consultant */}
          <div className="flex flex-col items-center">
            <h3 className="text-gray-500 text-sm uppercase font-semibold tracking-wider">
              Design Consultant
            </h3>
            <p className="text-gray-800 font-bold text-xl mt-2">
              Architect Hafeez Contractor
            </p>
          </div>
  
          {/* Interiors */}
          <div className="flex flex-col items-center">
            <h3 className="text-gray-500 text-sm uppercase font-semibold tracking-wider">
              Interiors
            </h3>
            <p className="text-gray-800 font-bold text-xl mt-2">
              BM&A
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Bobby Mukherji & Associates
            </p>
          </div>
  
          {/* Landscaping */}
          <div className="flex flex-col items-center">
            <h3 className="text-gray-500 text-sm uppercase font-semibold tracking-wider">
              Landscaping
            </h3>
            <p className="text-gray-800 font-bold text-xl mt-2">
              Coopers Hill
            </p>
          </div>
        </div>
  
        {/* Button */}
       
      </div>
    );
  };
  
  export default DesignInfo;
  
  