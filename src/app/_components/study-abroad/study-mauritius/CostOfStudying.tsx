"use client";

const CostOfStudying = () => {
  return (
    <section className="bg-[#e8eff8] py-10 px-4 md:px-10 rounded-t-3xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-[20px] sm:text-3xl font-bold text-gray-900 leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10">Cost Of Studying</span>
              <span className="absolute left-0 bottom-0 h-[6px] w-full bg-red-400 -z-0 rounded-full"></span>
            </span>
            <br />
            <span className="text-[20px] sm:text-3xl font-medium">In Mauritius</span>
          </h2>
          <p className="text-gray-700 mt-4 text-sm sm:text-base leading-relaxed">
            The cost of studying in Mauritius for international students depends on
            several factors, including the institution, program of study, location,
            and available funding opportunities. Additionally, living expenses such
            as rent, utilities, and recreational activities play a significant role
            in the overall cost.
          </p>
        </div>

        <div className="md:w-1/2 space-y-8">
          <div>
            <h3 className="font-semibold text-gray-600 bg-[#d7e1f0] py-2 px-4 rounded-lg text-sm w-fit">
              Tuition Fees (Average per annum)
            </h3>
            <div className="mt-3 space-y-3">
              <div className="bg-white rounded-xl shadow px-4 py-3 text-sm font-semibold flex justify-between items-center">
                <span>Bachelor’s/Undergraduation</span>
                <span className="text-right text-xs sm:text-sm">1,50,000 To 3,50,000 MUR/Year</span>
              </div>
              <div className="bg-white rounded-xl shadow px-4 py-3 text-sm font-semibold flex justify-between items-center">
                <span>Master’s/Graduate</span>
                <span className="text-right text-xs sm:text-sm">130,000–600,000 MUR/Year</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-600 bg-[#d7e1f0] py-2 px-4 rounded-lg text-sm w-fit">
              Living Expenses
            </h3>
            <div className="mt-3 space-y-3">
              <div className="bg-white rounded-xl shadow px-4 py-3 text-sm font-semibold flex justify-between items-center">
                <span>Rent</span>
                <span className="text-right text-xs sm:text-sm">11,910–19,850 MUR As Rentals/Month</span>
              </div>
              <div className="bg-white rounded-xl shadow px-4 py-3 text-sm font-semibold flex justify-between items-center">
                <span>Utilities</span>
                <span className="text-right text-xs sm:text-sm">150–1500 MUR/Month</span>
              </div>
              <div className="bg-white rounded-xl shadow px-4 py-3 text-sm font-semibold flex justify-between items-center">
                <span>Conveyance</span>
                <span className="text-right text-xs sm:text-sm">4000 Onwards MUR/Month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostOfStudying;
