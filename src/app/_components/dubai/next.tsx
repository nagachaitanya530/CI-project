import React from "react";

const StatsCard = () => {
  return (
    <div className=" bg-[#E9EEF5] rounded-3xl p-8 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-md ml-8 mr-8 mb-8">
      {/* Universities */}
      <div className="text-center px-4">
        <h2 className="text-3xl font-semibold text-[#1D438D] ...">27+</h2>
        <p className="text-lg font-semibold text-[#231F20] mt-2">Universities</p>
      </div>

      {/* Divider */}
      <div className="hidden sm:block h-16 w-px bg-gray-300"></div>

      {/* Tuition Fees */}
      <div className="text-center px-4">
        <h2 className="text-3xl font-semibold text-[#1D438D] ...">AED 37k–85k</h2>
        <p className="text-lg font-semibold text-[#231F20] mt-2">Annual tuition fees</p>
      </div>

      {/* Divider */}
      <div className="hidden sm:block h-16 w-px bg-gray-300"></div>

      {/* International Students */}
      <div className="text-center px-4">
        
        <h2 className="text-3xl font-semibold text-[#1D438D] ...">77K+</h2>
        <p className="text-lg font-semibold text-[#231F20] mt-2">International Students</p>
        
      </div>

      {/* Divider */}
      <div className="hidden sm:block h-16 w-px bg-gray-300"></div>

      {/* Work Visa */}
      <div className="text-center px-4">
        <h2 className="text-3xl font-semibold text-[#1D438D] ...">NA</h2>
        <p className="text-lg font-semibold text-[#231F20] mt-2">Post–Study Work Visa</p>
      </div>
    </div>
  );
};

export default StatsCard;
