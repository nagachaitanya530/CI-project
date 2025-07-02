"use client";

import React from "react";
import { CalendarCheck, Users, PlaneTakeoff } from "lucide-react";

const facilities = [
    {
        title: "Sunday Webinars",
        description:
            "Free access to Sunday webinars with activities like Group Discussions, debates, and presentations to enhance public speaking.",
        icon: <CalendarCheck size={32} className="text-white" />,
        gradient: "from-cyan-700 to-cyan-900",
    },
    {
        title: "Unlimited Practice",
        description:
            "Join group discussions every Sunday for up to 6 months even after course completion. Stay consistent, stay sharp.",
        icon: <Users size={32} className="text-white" />,
        gradient: "from-gray-800 to-gray-900",
    },
    {
        title: "Free Consultation",
        description:
            "Planning to study abroad? Get free support with your application, visa, post-landing needs and more.",
        icon: <PlaneTakeoff size={32} className="text-white" />,
        gradient: "from-indigo-700 to-blue-900",
    },
];

const AdditionalFacilities = () => {
    return (
        <section className="py-16 px-4 md:px-20 bg-white">
            <div className="text-center mb-12">
                <h2 className="relative text-center text-[#284c87] text-3xl md:text-4xl font-bold mb-12 group">
                    Additional Facilities
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-[#284c87] group-hover:w-1/2 transition-all duration-500 rounded"></span>
                </h2>

            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {facilities.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl p-6 bg-gradient-to-br ${item.gradient} text-white shadow-lg hover:scale-[1.03] hover:shadow-2xl transition duration-300 flex flex-col gap-4`}
                    >
                        <div className="bg-white/20 p-3 w-fit rounded-full">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm md:text-base leading-relaxed text-white/90">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AdditionalFacilities;
