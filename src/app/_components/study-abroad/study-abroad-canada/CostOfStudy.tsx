"use client";

function CostOfStudy() {
  return (
    <main className="bg-blue-50 rounded-4xl text-black font-sans min-h-screen md:px-5">
      <section className="bg-gray p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Left Section */}
          <div className="md:w-2/5 mb-5 px-5">
            <h1 className="text-[28px] md:text-5xl font-bold my-3 leading-snug md:px-5">
              Cost Of Studying<br />In Canada
            </h1>
            <p className="text-xl md:p-5">
              The cost of studying in Canada for international students depends on several factors,
              including the institution, program of study, location, and available funding opportunities.
              Additionally, living expenses such as rent, utilities, and recreational activities play a
              significant role in the overall cost.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-3/5 mx-3 md:mx-0">
            {/* Tuition Fees */}
            <div className="border font-semibold md:w-1/2 rounded-xl px-5 py-4 text-xl text-gray-500 my-6">
              Tuition Fees (Average per annum)
            </div>
            {[
              ["PG Diploma, Diploma & Certificate Program", "CAD 15,000 – 20,000"],
              ["Bachelor's", "CAD 15,000 – 30,000"],
              ["Master's", "CAD 17,000 – 35,000"],
            ].map(([label, cost], i) => (
              <div
                key={i}
                className="bg-white border-gray rounded-xl p-5 text-lg font-semibold flex flex-col md:flex-row md:justify-between mb-5"
              >
                <p className="mb-2 md:mb-0">{label}</p>
                <p>{cost}</p>
              </div>
            ))}

            {/* Living Expenses */}
            <h2 className="border font-semibold md:w-1/2 rounded-xl px-5 py-4 text-xl text-gray-500 my-6">
              Living Expenses (Average per annum)
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 font-semibold flex justify-end text-lg">
              Approx. CAD 20,000
            </div>

            {/* Accommodation */}
            <h2 className="border font-semibold md:w-1/2 rounded-xl px-5 py-4 text-xl text-gray-500 my-6">
              Accommodation (Average per month)
            </h2>
            {[
              ["On-Campus", "CAD 600 - 1,000"],
              ["Off-campus rental", "CAD 550 – 1,200"],
              ["Homestay", "CAD 1000 – 1,300"],
            ].map(([type, price], i) => (
              <div
                key={i}
                className="bg-white border-gray rounded-xl p-5 text-lg font-semibold flex flex-col md:flex-row md:justify-between mb-5"
              >
                <p className="mb-2 md:mb-0">{type}</p>
                <p>{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default CostOfStudy;
