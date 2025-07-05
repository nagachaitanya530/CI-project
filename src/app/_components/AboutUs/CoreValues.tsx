import { Sparkles, Command, Lightbulb, Link } from "lucide-react";

const coreValues = [
  {
    title: "Excellence",
    description: "Providing the highest quality service to our students.",
    icon: <Sparkles size={40} className="text-[#1D438D]" />,
  },
  {
    title: "Commitment",
    description: "The guarantee of staying with you in every step of the process.",
    icon: <Command size={40} className="text-blue-900" />,
  },
  {
    title: "Knowledge",
    description: "Complete and up to date information regarding more than 850 universities worldwide.",
    icon: <Lightbulb size={40} className="text-blue-900" />,
  },
  {
    title: "Trust",
    description: "Thousands of students have entrusted us with their university onboarding.",
    icon: <Link size={40} className="text-blue-900" />,
  },
];

const CoreValues = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10 sm:mb-12">
        Our{" "}
        <span className="font-bold text-black relative inline-block">
          Core Values
          <span className="absolute left-0 bottom-0 w-full border-b-[3px] border-red-400 -mb-1 rotate-[1.5deg]"></span>
        </span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-3xl text-center shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="mb-4 flex justify-center sm:justify-start">{value.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">{value.title}</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
