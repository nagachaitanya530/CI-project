import React from "react";

const CostOfStudying = () => {
  return (
    <div className="bg-[#e8eff8] py-12 px-6 md:px-16 lg:px-24 rounded-3xl">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10 underline decoration-red-500 underline-offset-4">
                Cost of studying
              </span>{" "}
              in Germany
            </span>
          </h2>

          <p className="mt-6 text-[#222] text-[17px] leading-relaxed">
            The cost of studying in Dubai for international students depends on several factors, including the institution, program of study, location, and available funding opportunities. Additionally, living expenses such as rent, utilities, and recreational activities play a significant role in the overall cost.
          </p>
        </div>

        {/* Right Content */}
        <div className="space-y-6">

          {/* Tuition Fees Title */}
          <div className="bg-[#e8eff8] border border-blue-100 rounded-2xl px-6 py-3 text-lg font-semibold text-gray-800 w-fit">
            Tuition Fees (Average per annum)
          </div>

          {/* Tuition Details */}
          <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow border border-blue-100 text-lg font-semibold">
            <span>Bachelor's</span>
            <span className="text-black">EUR 8,000 – 10,000</span>
          </div>

          <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow border border-blue-100 text-lg font-semibold">
            <span>Master's</span>
            <span className="text-black">EUR 10,000 – 12,000</span>
          </div>

          {/* Living Expenses Title */}
          <div className="bg-[#e8eff8] border border-blue-100 rounded-2xl px-6 py-3 text-lg font-semibold text-gray-800 w-fit">
            Living Expenses (Average per annum)
          </div>

          <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow border border-[#C6D3E3] text-lg font-semibold">
            <span>Approx. EUR 10000</span>
          </div>

          {/* Accommodation Title */}
          <div className="bg-[#e8eff8] border border-[#C6D3E3] rounded-2xl px-6 py-3 text-lg font-semibold text-[#4D5566] w-fit">
            Accommodation (Average per month)
          </div>

          {/* Accommodation Options */}
          <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow border border-[#C6D3E3] text-lg font-semibold">
            <span>On–Campus</span>
            <span className="text-black">EUR 180 - 330</span>
          </div>

          <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow border border-[#C6D3E3] text-lg font-semibold">
            <span>Student Dormitories</span>
            <span className="text-black">EUR 180 - 330</span>


          </div>

          <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow border border-[#C6D3E3] text-lg font-semibold">
            <span>Private Housing</span>
            <span className="text-black">EUR 400 - 600</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostOfStudying;
