import React from 'react';

const LearnWithConfidence = () => {
  return (
    <>
      <section className="bg-[#E5E5E5] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between mt-8">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-8">LEARN WITH CONFIDENCE</h2>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-2">Certified trainers</h3>
            <p className="text-gray-600">
              All NIL trainers are certified from relevant authorities to teach the foreign languages the excel in.
              Quality is our top priority.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-2">International CEFR standard</h3>
            <p className="text-gray-600">
              All the languages are taught according to the international standard CEFR. Common European framework
              for reference dictates how proficient you are in the language.
            </p>
          </div>

          <button className="mt-4 px-6 py-3 rounded-full bg-white hover:bg-gray-200 transition-all flex items-center gap-2 shadow-sm">
            KNOW ABOUT CEFR
            <span>→</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-12 md:mt-0 md:ml-12">
          <img
            src="/person-holding-earth-globe.jpg"
            alt="Globe in Hands"
            className="w-[400px] h-auto object-contain rounded-lg"
          />
        </div>
      </section>

      <section className="bg-[#06213F] text-white py-20 px-4 text-center mt-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Getting started is easy</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-10">
            When it comes to learning a foreign language, it is all about learning how to properly communicate and connect with others—
            an enormously crucial life skill that can only be developed via direct interaction with others. You can practise your new superhuman
            power of being able to understand what someone is saying, recall the appropriate vocab and grammar, place that vocab and grammar
            into the proper context, and respond back—all on the spot and in a timely manner—when you master a foreign language. You’ve made
            a connection. That is, after all, what it is all about.
          </p>
          <a href="/book-demo">
            <button className="bg-[#195fb7] hover:bg-[#0ea5e9] text-white font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out active:scale-95 relative overflow-hidden group hover:cursor-pointer">
              <span className="relative z-10">TRY FOR FREE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-opacity duration-300"></div>
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default LearnWithConfidence;
