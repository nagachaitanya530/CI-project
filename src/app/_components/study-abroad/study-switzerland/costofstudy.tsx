 export default function CostOfStudy() {
  return (
 
 <main className="min-h-screen bg-[#e9eef5] px-4 py-10 text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* Left Section: Title + Paragraph */}
        <div>
          <h1 className="text-[28px] md:text-[32px] font-bold mb-3 leading-snug align-left">
            <span className="underline decoration-red-500 underline-offset-[6px] ">Cost Of Studying</span> In Switzerland
          </h1>
          <p className="mt-4 text-base leading-relaxed">
           Studying in Switzerland is very affordable compared to other popular study abroad destinations. The two main components of the total cost of education are living expenses and tuition fees.
          </p>
        </div>

        {/* Right Section: Boxes */}
        <div className="space-y-8">
          {/* Tuition Fees */}
          <div className="bg-[#e9eef5] p-4 rounded-xl border border-blue-100">
            <h2 className="text-lg font-semibold text-center border border-blue-200 bg-grey px-4 py-2 rounded-xl w-fit mx-auto -mt-10 relative z-10">
              Tuition Fees (Average per annum)
            </h2>
            <div className="mt-4 space-y-4">
              <div className="flex justify-between items-center bg-white px-6 py-4 rounded-xl shadow-sm">
                <span className="font-semibold text-lg">Bachelor's</span>
                <span className="font-bold text-black">EUR 3,000 – 17,000</span>
              </div>
              <div className="flex justify-between items-center bg-white px-6 py-4 rounded-xl shadow-sm">
                <span className="font-semibold text-lg">Master's</span>
                <span className="font-bold text-black">EUR 4,000 – 15,000</span>
              </div>
            </div>
          </div>

          {/* Living Expenses */}
          <div className="bg-[#e9eef5] p-4 rounded-xl border border-blue-100">
            <h2 className="text-lg font-semibold text-center border border-blue-200 bg-grey px-4 py-2 rounded-xl w-fit mx-auto -mt-10 relative z-10">
              Living Expenses (Average per annum)
            </h2>
            <div className="mt-4">
              <div className="flex justify-between items-center bg-white px-6 py-4 rounded-xl shadow-sm">
                <span className="font-semibold text-lg">Living Expenses</span>
                <span className="font-bold text-black">Approx. EUR 15,000</span>
              </div>
            </div>
          </div>

          {/* Accommodation */}
          <div className="bg-[#e9eef5] p-4 rounded-xl border border-blue-100">
            <h2 className="text-lg font-semibold text-center border border-blue-200 bg-grey px-4 py-2 rounded-xl w-fit mx-auto -mt-10 relative z-10">
              Accommodation (Average per month)
            </h2>
            <div className="mt-4 space-y-4">
              <div className="flex justify-between items-center bg-white px-6 py-4 rounded-xl shadow-sm">
                <span className="font-semibold text-lg">On-Campus</span>
                <span className="font-bold text-black">EUR 400 – 800</span>
              </div>
              <div className="flex justify-between items-center bg-white px-6 py-4 rounded-xl shadow-sm">
                <span className="font-semibold text-lg">Shared Apartment</span>
                <span className="font-bold text-black">EUR 150 – 300</span>
              </div>
              <div className="flex justify-between items-center bg-white px-6 py-4 rounded-xl shadow-sm">
                <span className="font-semibold text-lg">Private Apartment</span>
                <span className="font-bold text-black">EUR 600 – 1,000</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
};