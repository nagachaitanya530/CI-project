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
    heading: "In the Heart of Europe",
    description:
      "Germany is situated in the heart of Europe, making it an excellent base for exploring...",
  },
  {
    heading: "Low Tuition Fees",
    description:
      "Since universities in Germany are state-funded, tuition fees are generally low...",
  },
];

export default function WhyStudy() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-10 text-center lg:text-left">
          Why{" "}
          <span className="font-semibold underline decoration-red-500">
            Study in Germany?
          </span>
        </h1>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-red-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1">
                    {item.heading}
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
