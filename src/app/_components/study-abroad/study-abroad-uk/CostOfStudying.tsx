function CostOfStudying()
{
    return(
            <section>
                <div className="bg-[#e9eff6] py-16 px-4 rounded-3xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold text-black leading-snug">
            <span className="relative inline-block">
              Cost Of Studying
              <span className="absolute left-0 bottom-0 w-full h-1 bg-red-500 rounded-full -z-10 transform translate-y-1.5"></span>
            </span>
            <br />
            In The UK
          </h2>
          <p className="text-gray-800 text-2xl leading-relaxed">
            The <strong className="font-semibold">cost of studying in the uk</strong> 
            for international students depends on several factors, including the institution, program of study, location, and available funding opportunities. Additionally,
             living expenses such as rent, utilities, and recreational activities play a significant role in the overall cost.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-8">
          {/* Tuition Fees */}
          <div>
            <h4 className="bg-white/70 text-gray-800 font-semibold text-center py-2 px-4 rounded-md shadow border border-gray-300 mb-4">
              Tuition Fees (Average per annum)
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-white rounded-xl px-6 py-4 shadow text-gray-800 font-semibold">
                <span>Foundation Program</span>
                <span>£10,000 - £20,000</span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-xl px-6 py-4 shadow text-gray-800 font-semibold">
                <span>Bachelor's</span>
                <span>£15,000 - £35,000</span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-xl px-6 py-4 shadow text-gray-800 font-semibold">
                <span>Master's</span>
                <span>£15,000 - £40,000</span>
              </div>
            </div>
          </div>

          {/* Living Expenses */}
          <div>
            <h4 className="bg-white/70 text-gray-800 font-semibold text-center py-2 px-4 rounded-md shadow border border-gray-300 mb-4">
              Living Expenses (Average per month)
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-white rounded-xl px-6 py-4 shadow text-gray-800 font-semibold">
                <span>Outer London</span>
                <span>£1,136</span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-xl px-6 py-4 shadow text-gray-800 font-semibold">
                <span>Inner London</span>
                <span>£1,483</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            </section>
    )
}
export default CostOfStudying;