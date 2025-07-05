import { CheckCircle } from "lucide-react";

const benefits = [
  "Strengthen your English for daily and professional use.",
  "Improve fluency and confidence through live interaction.",
  "Learn from certified and experienced trainers.",
  "Receive AI-based evaluation and personalized feedback.",
  "Access to exclusive study materials and practice resources.",
  "Flexible class timings for working professionals and students.",
];

export default function Benefits() {
  return (
    <section className="bg-[#f5f9ff] py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="relative text-center text-[#284c87] text-3xl md:text-4xl font-bold mb-12 group">
          Benefits of Learning with This Course
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-[#284c87] group-hover:w-1/2 transition-all duration-500 rounded"></span>
        </h2>
        <ul className="space-y-6">
          {benefits.map((point, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <CheckCircle className="text-green-600 w-6 h-6 mt-1 shrink-0" />
              <p className="text-base text-[#284c87] font-medium leading-relaxed border-b border-zinc-200 pb-4 w-full">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
