
import { GraduationCap, Briefcase, Users } from "lucide-react";

const learners = [
  {
    icon: <GraduationCap className="w-8 h-8 text-[#284c87]" />,
    title: "Students & Freshers",
    description: "Improve academic English and gain fluency to boost performance in class discussions, presentations, and interviews."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-[#284c87]" />,
    title: "Working Professionals",
    description: "Enhance communication skills for meetings, client calls, reports, and workplace interactions."
  },
  {
    icon: <Users className="w-8 h-8 text-[#284c87]" />,
    title: "Job Seekers & Homemakers",
    description: "Develop confidence for interviews, daily communication, and personal growth."
  },
];

export default function TargetLearners() {
  return (
    <section className="bg-[#eaf1fb] py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
       <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-[#284c87] mb-10 group">
  Who is this course for?
  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-0 bg-zinc-700 group-hover:w-full transition-all duration-500 rounded"></span>
</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {learners.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 border border-zinc-200 hover:shadow-lg transition">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#1e2b4a] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-gray-700 text-lg">
          📘 <strong>Level Covered:</strong> Beginner to Intermediate (CEFR A1 to B1)
        </p>
      </div>
    </section>
  );
}
