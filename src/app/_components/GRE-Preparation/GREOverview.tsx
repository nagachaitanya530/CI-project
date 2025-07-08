import React, { useRef } from "react";
<<<<<<< HEAD
const GreOverview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollToSection = (id: string) => {
=======

const GreOverview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
    const scrollToSection = (id: string) => {
>>>>>>> cost-of-studying-usa
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <>
<<<<<<< HEAD
  <div id="overview"  className="px-6 py-12 md:px-20 bg-white scroll-mt-30">
=======

    <div id="overview"  className="px-6 py-12 md:px-20 bg-white scroll-mt-30">
      {/* GRE Overview Heading */}
>>>>>>> cost-of-studying-usa
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
        GRE <span className="relative inline-block">
          <span className="z-10 relative">Overview</span>
          <span className="absolute bottom-0 left-0 w-full h-1 border-b-4 border-red-400 transform -translate-y-1" />
        </span>
      </h2>
<<<<<<< HEAD
=======

      {/* Description */}
>>>>>>> cost-of-studying-usa
      <p className="text-lg text-gray-900 mb-2">
        GRE or the Graduate Record Examination is a world-renowned admission test. The GRE exam preparation is undertaken by those 
        candidates who wish to seek admission to graduate programs primarily in the areas of Engineering and Sciences, primarily 
        in the USA. Sometimes used as a substitute for GMAT.
      </p>
      <p className="text-lg text-gray-700 mb-8">
        GRE exam scores are used by more than 3,000 graduate programs throughout the world. It assesses test takers
        verbal reasoning, numeric reasoning, critical thinking, and analytical writing abilities, which have been
        built over time and are unrelated to a specific subject of study but are relevant for everyone.
      </p>
<<<<<<< HEAD
=======

      {/* Ways to Take GRE */}
>>>>>>> cost-of-studying-usa
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ways to take GRE</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-2 text-lg">
        <li>
          <span className="text-gray-800">
            The GRE General Test can be taken from over 1000 ETS-authorized test centres across the world.
          </span>
        </li>
        <li>
          <span className="text-gray-800">
            The GRE General Test – Home edition can be taken online, monitored by a human proctor. Available 24/7
          </span>
        </li>
      </ul>
    </div>
<<<<<<< HEAD
  </>
  );
};
=======
     



    </>
  );
};

>>>>>>> cost-of-studying-usa
export default GreOverview;

