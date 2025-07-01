import { ShieldCheck } from "lucide-react";

interface WhyStudyItem {
  heading: string;
  description: string;
}

const items: WhyStudyItem[] = [
  {
    heading: "International Exposure",
    description:
      "Every year, Germany is chosen by over 25,000 international students for their studies and research...",
  },
  {
    heading: "Quality Education",
    description:
      "German universities have a renowned tradition dating back to the 14th century...",
  },
  {
    heading: "Wide choice of programs",
    description:
      "Universities in Germany have over 300 international degree programs...",
  },
  {
    heading: "Economic Power",
    description:
      "Germany is a major global economic player and India's top business partner...",
  },
  {
    heading: "Practical Experience",
    description:
      "Education in Germany for international students often involves working closely with the industry...",
  },
  {
    heading: "In the Heart of Europe:",
    description:
      "Germany is situated in the heart of Europe, making it an excellent base for exploring...",
  },
  {
    heading: "Low Tuition Fees",
    description:
      "Since universities in Germany are state-funded, tuition fees are generally low...",
  },
];

const inputClass =
  "border border-gray-300 rounded-lg px-4 py-2 text-sm text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500";

function WhyStudy() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Side */}
        <div className="lg:w-3/5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            Why{" "}
            <span className="font-semibold underline decoration-red-500">
              Study in Germany?
            </span>
          </h1>

          {items.map((item, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-red-500 w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <hr className="my-6 border-gray-300" />
            </div>
          ))}
        </div>
         </div>
    </section>
  );
}

export default WhyStudy;
