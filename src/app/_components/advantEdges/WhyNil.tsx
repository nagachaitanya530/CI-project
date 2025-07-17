'use client';

import { Check } from 'lucide-react';

export default function WhyChooseNILSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0e1d57] mb-16">
          Why Choose National Institute of Language
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <Check className="w-8 h-8 text-black mb-4" />
            <h3 className="text-lg font-semibold text-[#0e1d57] mb-2">
              Cambridge Certified Trainers
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xs">
              All the trainers at NIL hold at least Cambridge CEFR C1 level certification,
              which is the international standard for <span className="text-blue-600 font-semibold">English Proficiency</span>.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Check className="w-8 h-8 text-black mb-4" />
            <h3 className="text-lg font-semibold text-[#0e1d57] mb-2">
              Interactive Live Classes with activities
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xs">
              The classes are run on our custom platform which provides an environment
              just like a regular class with face to face interaction.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Check className="w-8 h-8 text-black mb-4" />
            <h3 className="text-lg font-semibold text-[#0e1d57] mb-2">
              Integrated Personality Development
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xs">
              <span className="text-blue-600 font-semibold">NIL English Communication Course</span> is
              integrated with Personality Development Modules which makes more versatile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
