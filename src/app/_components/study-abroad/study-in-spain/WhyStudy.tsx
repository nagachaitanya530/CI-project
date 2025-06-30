'use client';

export default function WhyStudyInSpain() {
  return (
    <section className="bg-white py-16">
      <div className="flex flex-col lg:flex-row gap-14 px-6 lg:px-20">
        {/* Left Content */}
        <div className="lg:w-2/3">
          <h2 className="text-4xl text-black font-light">
              Why{" "}
             <span className="font-extrabold underline decoration-red-500 underline-offset-[6px]">
               Study In Spain
             </span>
            </h2>


          {features.map((feature, index) => (
            <div key={index} className="pt-10 pb-6">
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-14 h-14 shadow-xl rounded-full">
                  <img
                    src="/images/certificate.png"
                    alt={feature.title}
                    className="w-8 h-8"
                  />
                </div>
                <h2 className="text-2xl font-bold">{feature.title}</h2>
              </div>
              <p className="text-lg mt-2 text-gray-700">{feature.description}</p>
              <hr className="w-[90%] border-gray-300 mt-5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "border border-gray-300 p-3 rounded-2xl text-blue-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300";

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
