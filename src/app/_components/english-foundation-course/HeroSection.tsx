const HeroSection = () => {
  return (
    <section className="bg-[#eaf1fb] py-10 px-6 md:px-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
      {/* Left Side */}
      <div className="flex-1">
        <div className="bg-blue-700 text-white font-semibold text-sm px-3 py-1 w-fit rounded mb-4">
          FOUNDATION
        </div>

        {/* Headings */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          ENGLISH FOUNDATION COURSE:
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Personal Training.
        </h2>

        <p className="text-lg text-gray-600 mb-6">
          This course is intended to provide training for English from initial level. Comprises of general to advanced level English language training with personality development.
        </p>

        <div className="mb-6">
          <p className="font-bold text-gray-800">Instructors:</p>
          <p className="font-semibold text-gray-700">NIL Trained & British Council Certified</p>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <a href="#enrollment" className="bg-blue-600 text-white px-6 py-3 font-bold rounded hover:bg-zinc-700 transition">
            ENROLL NOW
          </a>
          <span className="text-gray-500">(Credit/Debit EMI Available)</span>
        </div>

        <div>
          <p className="text-red-700 font-bold text-xl mb-1">₹13990</p>
          <p className="text-gray-700 font-semibold text-lg">35,567 already enrolled</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
        <p className="text-blue-600 font-medium text-lg mb-2">4.7 ★ (28,497 Ratings)</p>
        <div className="mb-4">
          <p className="text-xl font-bold">Extended Preparatory Course</p>
          <p className="text-gray-600">Comprehensive English Course for everyone who wants to improve in English</p>
        </div>
        <hr className="my-3" />
        <div className="mb-4">
          <p className="text-lg font-semibold">Beginner Level</p>
          <p className="text-gray-600">Recommended Experience</p>
        </div>
        <hr className="my-3" />
        <div>
          <p className="text-lg font-bold">Upto 3 months / 66 hours</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
