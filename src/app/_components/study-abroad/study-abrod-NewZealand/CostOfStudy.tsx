function CostOfStudy()
{
    return(
        <>
        
{/* cost of stying */}
<div className='flex flex-col md:flex-row justify-between p-6 md:p-6 bg-gray-100  rounded-4xl mt-10'>
{/* left section */}

        <div className='md: w-1/2 mb-10 md:mb-0 ml-20 mt-10'>
            <h2 className='text-4xl md:text-5xl font-semibold text-gray-800'>
                <span className='font-bold leading-20'>Cost Of Studying </span><br />
                <span className='font-normal'>In New Zealand</span>
            </h2>
            <p className='text-gray-700 mt-4 max-w-md text-xl'>
                New Zealand provides high quality education and a high standard of living at a lower cost than Australia, UK, and the USA. Tuition fees vary from program to program.
            </p>
        </div>

{/* Right Section */}
      <div className="md:w-1/1 space-y-4 ml-20 mt-10 mb-20">
        <div className="text-gray-800 font-medium shadow rounded-lg items-center md:w-1/3 p-3 ">Tuition Fees (Average per annum)</div>
        
        <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
          <span className="font-semibold text-xl">Diplomas And Certificates</span>
          <span className="font-semibold text-xl">NZD 24,000 – 30,000</span>
        </div>
        
        <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
          <span className="font-semibold text-xl">Bachelor’s</span>
          <span className="font-semibold text-xl">NZD 24,000 – 35,000</span>
        </div>
        
        <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
          <span className="font-semibold text-xl">Master’s</span>
          <span className="font-semibold text-xl">NZD 27,000 – 55,000</span>
        </div>

        <div className="text-gray-800 font-medium shadow rounded-lg items-center md:w-1/2 p-3 mt-10">Living Expenses (Average per annum)</div>

        <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
          <span className="font-semibold text-xl"></span>
          <span className="font-semibold text-xl">Approx. NZD 20,000</span>
        </div>
        <div className="text-gray-800 font-medium shadow rounded-lg items-center  md:w-1/2 p-3 mt-10">Accommodation (Average per month)</div>
        <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
          <span className="font-semibold text-xl">On-Campus</span>
          <span className="font-semibold text-xl">NZD 410 - 700</span>
        </div>
        <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
          <span className="font-semibold text-xl">Off-Campus Rental</span>
          <span className="font-semibold text-xl">NZD 90 - 190</span>
        </div>
        <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
          <span className="font-semibold text-xl">Homestay</span>
          <span className="font-semibold text-xl">NZD 290-310</span>
        </div>
      </div>    
</div>
</>
 )
}
export default CostOfStudy;
