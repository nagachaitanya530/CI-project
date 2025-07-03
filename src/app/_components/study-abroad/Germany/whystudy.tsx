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

        {/* Right Side Form */}
        <div className="lg:w-2/5">
          <div className="flex flex-col border-2 border-gray-300 rounded-2xl p-8 gap-4 h-[800px] space-y-4">
            <h1 className="text-blue-900 text-xl font-bold">
              Book Your Free Consultation with Trustworthy Counsellors
            </h1>

            <input type="text" placeholder="Name" className={inputClass} />
            <input type="email" placeholder="Email" className={inputClass} />
            <input type="tel" placeholder="Mobile Number" className={inputClass} />
            <input type="text" placeholder="Preferred Course" className={inputClass} />

            <select className={inputClass} defaultValue="">
              <option value="" disabled>
                Select Month
              </option>
              {[
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ].map((month) => (
                <option key={month} value={month.toLowerCase()}>
                  {month}
                </option>
              ))}
            </select>

            <select className={inputClass} defaultValue="">
              <option value="" disabled>
                Select Year
              </option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
            </select>

            <label className="flex gap-2 items-start text-blue-900 text-sm">
              <input type="checkbox" className="accent-blue-700 mt-1" />
              <span>
                I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.
              </span>
            </label>

            <input
              type="submit"
              value="Submit"
              className="mt-4 w-fit py-3 px-6 font-semibold text-blue-900 rounded-2xl border border-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
