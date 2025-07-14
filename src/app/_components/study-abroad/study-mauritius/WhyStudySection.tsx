"use client";
import { Award } from "lucide-react";

type Reason = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function WhyStudySection({
  country,
  reasons,
}: {
  country: string;
  reasons: Reason[];
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 gap-10 py-12 md:px-20 bg-white">
      <div className="grid md:grid-cols-3 gap-10 items-start px-4">
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Why{" "}
            <span className="font-bold text-black underline decoration-red-500">
              Study In {country}?
            </span>
          </h2>

          <ul className="space-y-6">
            {reasons.map((item, i) => (
              <li key={i} className="flex items-start gap-4 border-b pb-6">
                <div className="w-10 h-10 rounded-full bg-[#EDF2FA] flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}