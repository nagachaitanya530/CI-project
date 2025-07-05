function CostOfStudy() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between p-4 sm:p-6 bg-gray-100 rounded-3xl mt-10 space-y-10 md:space-y-0 md:space-x-10">
        <div className="md:w-1/2 mt-4 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
            <span className="font-bold">Cost Of Studying </span><br />
            <span className="font-normal">In New Zealand</span>
          </h2>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl max-w-lg">
            New Zealand provides high quality education and a high standard of living at a lower cost than Australia, UK, and the USA. Tuition fees vary from program to program.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col space-y-4 ">
          <div className="text-gray-800 font-semibold bg-white rounded-lg p-3 shadow">
            Tuition Fees (Average per annum)
          </div>
          <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
            <span className="font-semibold text-sm sm:text-base md:text-xl">Diplomas And Certificates</span>
            <span className="font-semibold text-sm sm:text-base md:text-xl">NZD 24,000 – 30,000</span>
          </div>
          <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
            <span className="font-semibold text-sm sm:text-base md:text-xl">Bachelor’s</span>
            <span className="font-semibold text-sm sm:text-base md:text-xl">NZD 24,000 – 35,000</span>
          </div>
          <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
            <span className="font-semibold text-sm sm:text-base md:text-xl">Master’s</span>
            <span className="font-semibold text-sm sm:text-base md:text-xl">NZD 27,000 – 55,000</span>
          </div>
          <div className="text-gray-800 font-semibold bg-white rounded-lg p-3 shadow mt-4">
            Living Expenses (Average per annum)
          </div>
          <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
            <span className="font-semibold text-sm sm:text-base md:text-xl">Estimated Cost</span>
            <span className="font-semibold text-sm sm:text-base md:text-xl">Approx. NZD 20,000</span>
          </div>
          <div className="text-gray-800 font-semibold bg-white rounded-lg p-3 shadow mt-4">
            Accommodation (Average per month)
          </div>
          <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
            <span className="font-semibold text-sm sm:text-base md:text-xl">On-Campus</span>
            <span className="font-semibold text-sm sm:text-base md:text-xl">NZD 410 - 700</span>
          </div>
          <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
            <span className="font-semibold text-sm sm:text-base md:text-xl">Off-Campus Rental</span>
            <span className="font-semibold text-sm sm:text-base md:text-xl">NZD 90 - 190</span>
          </div>
          <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
            <span className="font-semibold text-sm sm:text-base md:text-xl">Homestay</span>
            <span className="font-semibold text-sm sm:text-base md:text-xl">NZD 290 - 310</span>
          </div>
        </div>
      </div>
    </>
  )
}
export default CostOfStudy;
