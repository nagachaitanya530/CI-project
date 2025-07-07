"use client";

export default function WhyStudyInSpain() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-black font-light mb-10">
          Why{" "}
          <span className="font-extrabold underline decoration-red-500 underline-offset-[6px]">
            Study In Spain
          </span>
        </h2>
        <div className="space-y-10">
          {features.map((feature, index) => (
            <div key={index} className="pb-4">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shadow-xl rounded-full bg-white">
                  <img
                    src="/images/certificate.png"
                    alt={feature.title}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-700 text-base sm:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              <hr className="mt-6 border-gray-300" />
            </div>
          ))}
        </div>


        {/* Right Form */}
    


      </div>
    </section>
  );
}
const features = [
  {
    title: "Highly Ranked Institutions",
    description:
      "Spain boasts several highly ranked universities, including the University of Barcelona and IE University, known for their academic excellence and innovative research.",
  },
  {
    title: "Diverse Academic Programs",
    description:
      "Spanish universities offer a wide range of academic programs, right from the Arts and Humanities to Science, Technology, and Business.",
  },
  {
    title: "Affordable",
    description:
      "Compared to the USA and other European countries, the cost of living in Spain is lower, making it an affordable destination for international students.",
  },
  {
    title: "Good Job Opportunities",
    description:
      "Spain has a strong economy and a huge demand for skilled candidates, providing excellent internship and post-study work opportunities.",
  },
  {
    title: "Study in English",
    description:
      "Many universities in Spain offer programs in English or bilingual formats, making them accessible for international students.",
  },
];
