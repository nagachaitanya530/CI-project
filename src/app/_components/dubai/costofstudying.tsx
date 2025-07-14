import React from "react";

const CostOfStudying = () => {
  return (
    <div className="bg-[#e8eff8] py-10 px-6 md:px-16 lg:px-24 rounded-3xl w-full overflow-x-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-black">
            <span className="relative inline-block">
              <span className="relative z-10 underline decoration-red-500 underline-offset-4">
                Cost Of Studying
              </span>{" "}
              In Dubai
            </span>
          </h2>

          <p className="mt-6 text-[#222] text-[17px] leading-relaxed">
            The cost of studying in Dubai for international students depends on
            several factors, including the institution, program of study, location,
            and available funding opportunities. Additionally, living expenses such
            as rent, utilities, and recreational activities play a significant role
            in the overall cost.
          </p>
        </div>
        <div className="space-y-6">
          <div className="bg-[#e8eff8] border rounded-2xl px-6 py-3 text-lg font-semibold text-gray-800 w-fit border-blue-100">
            Tuition Fees (Average per annum)
          </div>
          <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow border border-blue-100 text-lg font-semibold">
            <span>Bachelor's</span>
            <span className="text-black">AED 37,000 – 1,15,000</span>
          </div>
          <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow border border-blue-100 text-lg font-semibold">
            <span>Master's</span>
            <span className="text-black">AED 48,000 – 1,35,000</span>
          </div>
          <div className="bg-[#e8eff8] border rounded-2xl px-6 py-3 text-lg font-semibold text-gray-800 w-fit border-blue-100">
            Living Expenses (Average per annum)
          </div>
          <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow border-2  border-[#C6D3E3] text-lg font-semibold">
            <span>Approx. AED 48,000</span>
          </div>
          <div className="bg-[#e8eff8] border rounded-2xl px-6 py-3 text-lg font-semibold text-[#4D5566] w-fit border-[#C6D3E3]">
            Accommodation (Average per month)
          </div>
          <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow border-2  border-[#C6D3E3] text-lg font-semibold">
            <span>On–Campus</span>
            <span className="text-black">AED 3,000 – 5,000</span>
          </div>
          <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow border-2  border-[#C6D3E3] text-lg font-semibold">
            <span>Off–Campus</span>
            <span className="text-black">AED 1,200 – 3,500</span>
          </div>
          <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow border-2  border-[#C6D3E3] text-lg font-semibold">
            <span>Homestay</span>
            <span className="text-black">AED 2,000 – 6,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostOfStudying;
