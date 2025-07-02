import { Mic, Headphones, BookOpenText, Pencil, FileText } from "lucide-react";

const skills = [
  {
    icon: <Mic className="w-8 h-8 text-white" />,
    title: "Speaking",
    description:
      "Enhance fluency, pronunciation, and confidence for day-to-day conversations and public speaking.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-white" />,
    title: "Listening",
    description:
      "Develop active listening skills to understand accents, tones, and different English contexts.",
  },
  {
    icon: <BookOpenText className="w-8 h-8 text-white" />,
    title: "Reading",
    description:
      "Build comprehension by analyzing texts, articles, and reading materials with vocabulary support.",
  },
];

const lastRowSkills = [
  {
    icon: <Pencil className="w-8 h-8 text-white" />,
    title: "Writing",
    description:
      "Learn structured writing, from emails to essays, using proper grammar, tone, and flow.",
  },
  {
    icon: <FileText className="w-8 h-8 text-white" />,
    title: "Grammar",
    description:
      "Master the rules of English grammar to construct correct and clear sentences confidently.",
  },
];

export default function SkillsCovered() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-16 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="relative text-center text-[#284c87] text-3xl md:text-4xl font-bold mb-12 group">
          Skills Covered in This Course
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-[#284c87] group-hover:w-1/2 transition-all duration-500 rounded"></span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-[#284c87] rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1),_0_2px_6px_rgba(0,0,0,0.05)] hover:bg-zinc-800 transition duration-300"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-gray-200">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {lastRowSkills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-[#284c87] rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1),_0_2px_6px_rgba(0,0,0,0.05)] hover:bg-zinc-800 transition duration-300"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-gray-200">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
