import Image from "next/image";

function AdditionFacilities() {
  return (
    <>
      <section id="addition">
        <h1 className="text-center text-4xl font-semibold text-blue-950 m-15">
          Additional Facilities
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="bg-gradient-to-b from-cyan-900
                         to-cyan-600 rounded-xl shadow-lg
                         text-white flex flex-col justify-between h-[450px]">
            <div className="p-5">
              <h2 className="text-xl font-semibold mt-10 mb-4">Sunday Webinars</h2>
              <p className="text-base">"Free access to Sunday webinars
                with activities like Group Discussions,
                debates and presentations for optimal
                public speaking practice.</p>
            </div>
            <div className="">
              <Image
                src="/home/professional-women.png"
                alt="Sunday Webinars"
                className="w-full h-55 "
                width={500} height={300}
              />
            </div>
          </div>
          <div className="bg-gradient-to-b from-gray-900
                         to-gray-600 rounded-xl shadow-lg
                         text-white flex flex-col justify-between h-[450px]">
            <div className="p-5">
              <h2 className="text-xl font-semibold mt-10 mb-4">Unlimited Practice</h2>
              <p className="text-base">Join unlimited group discussions
                with 6 months GD support even
                after your course completion.
                Join us each Sunday for upto 6 months.</p>
            </div>
            <div className="">
              <Image
                src="/home/writing-girl.png"
                alt="Sunday Webinars"
                className="w-full h-55 "
                width={500} height={300}
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
        </div>
        <div className="">
          <Image
            src="/home/airplane-travel.png"
            alt="Sunday Webinars"
            className="w-full h-55 object-contain px-5"
            width={500} height={300}
          />
        </div>
    
      </section>
    </>
  );
}

export default AdditionFacilities;
