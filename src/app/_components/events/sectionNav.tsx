'use client';
import { useState } from "react";
import React from "react";

const SectionNav = () => {
    const [active, setActive] = useState("section1");

    const sections = [
        { id: "section1", label: "Upcoming Events" },
        { id: "section2", label: "University Visits" },
        { id: "section3", label: "Gallery" }
    ];

    return (
        <div className="w-full overflow-x-auto py-4 bg-white shadow rounded-md">
            <div className="flex flex-nowrap justify-center gap-4 min-w-max px-4">
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`} // ✅ Corrected this line
                        onClick={() => setActive(section.id)}
                        className={`text-sm font-medium px-6 py-2 rounded-full transition ${
                            active === section.id
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {section.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SectionNav;
