"use client";

import { Users, Mic2, BookText, MessageSquareQuote, GaugeCircle, ClipboardCheck } from "lucide-react";

const roles = [
  {
    title: "Club President",
    description: "Responsible for all activities of the club - Permanent Role (NIL Representative)",
    color: "bg-blue-600",
    icon: <Users size={50} className="text-white" />,
  },
  {
    title: "Toastmaster",
    description: "Host of the meeting. Decides and nominates other meeting roles for the day.",
    color: "bg-pink-600",
    icon: <Mic2 size={50} className="text-white" />,
  },
  {
    title: "Grammarian",
    description: "Provides new vocabulary words and new grammar tidbits",
    color: "bg-teal-500",
    icon: <BookText size={50} className="text-white" />,
  },
  {
    title: "Table Topics Master",
    description: "Responsible for providing topics for spontaneous speaking.",
    color: "bg-blue-600",
    icon: <MessageSquareQuote size={50} className="text-white" />,
  },
  {
    title: "Evaluator",
    description: "Responsible for evaluation for 1 team mate with whom they have been paired.",
    color: "bg-pink-600",
    icon: <GaugeCircle size={50} className="text-white" />,
  },
  {
    title: "General Evaluator",
    description: "Responsible for evaluation of all the team members of the day.",
    color: "bg-teal-500",
    icon: <ClipboardCheck size={50} className="text-white" />,
  },
];

export default function MeetingRoles() {
  return (
    <section className="w-full bg-white py-16 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Meeting Roles and Responsibilities
        </h2>
        <div className="border-t-4 border-black w-16 mx-auto mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 text-white text-center ${role.color} shadow-md hover:scale-105 transform transition duration-300`}
            >
              <div className="mb-4 flex justify-center">{role.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{role.title}</h4>
              <p className="text-sm">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
