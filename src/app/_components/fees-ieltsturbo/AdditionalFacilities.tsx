function AdditionFacilities(){
    return(
    <>
    
      {/* Addition Facilities  */}
          <section id="addition" className="mb-10">
            <h1 className="text-center text-4xl font-semibold text-blue-950 m-15">
              Additional Facilities
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="bg-gradient-to-b from-cyan-900
                         to-cyan-600 rounded-xl shadow-lg
                         text-white flex flex-col justify-between h-[450px]">
                <div className="p-5">
                  <h2 className="text-xl font-semibold mt-10 mb-4">CBT Mock Tests</h2>
                  <p className="text-sm">Access to computer delivered mock tests with artificial intelligence powered assessment system. User experience mimics the actual interface of IELTS examination.</p>
                </div>
                <div className="">
                  <img
                    src="/home/professional-women.png"
                    alt="Sunday Webinars"
                    className="w-full h-55 "
                  />
                </div>
              </div>
              <div className="bg-gradient-to-b from-gray-900
                         to-gray-600 rounded-xl shadow-lg
                         text-white flex flex-col justify-between h-[450px]">
                <div className="p-5">
                  <h2 className="text-xl font-semibold mt-10 mb-4">Unlimited Practice</h2>
                  <p className="text-sm">You get access to a portal where you can attempt as many tests as you want to hone your skills in all four sections of the test. You get the detailed report on your performance as you go along.</p>
                </div>
                <div className="">
                  <img
                    src="/home/writing-girl.png"
                    alt="Sunday Webinars"
                    className="w-full h-55 "
                  />
                </div>
              </div>
              <div className="bg-gradient-to-b from-blue-950
                         to-blue-600 rounded-xl shadow-lg
                         text-white flex flex-col justify-between h-[450px]">
                <div className="p-8">
                  <h2 className="text-xl font-semibold mt-10 mb-2">Free Consultation</h2>
                  <p className="text-base">If you’re going for studies abroad, 
                    you can get a free consultation for your application,
                    visa, filing, post, landing support and
                    everything that you can think of.</p>
                </div>
                <div className="">
                  <img
                    src="/home/airplane-travel.png"
                    alt="Sunday Webinars"
                    className="w-full h-55 object-contain px-5"
                  />
                </div>
              </div>
              {/* </div> */}
            </div>
          </section>
    </>
    );
}

export default AdditionFacilities;