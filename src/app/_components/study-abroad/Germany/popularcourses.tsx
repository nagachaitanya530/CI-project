"use client"; // (optional) if it uses hooks

import React from "react";

const courses = [
    { name: "Engineering", image: "/engineering.jpg" },
    { name: "Business Administation", image: "/BusinessAni.png" },
    { name: "Renewable Energy", image: "/RenewableEnergy.jpg" },
    { name: "Automative Engineering", image: "/AutomativeEngineering.webp" },
    { name: "Data Science", image: "/DataScience.jpg" },
    { name: "Computer Science", image: "/ComputerScience.jpg" },
    // Add more courses as needed
];

const PopularCoursesSection = () => {
    return (
        <div className="py-12 px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
                <span className="relative inline-block">
                    <span className="relative z-10 text-black">Popular Courses</span>
                    <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
                </span>{" "}
                In Germany
            </h2>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                Germany is recognized for providing a broad array of sought-after courses across different disciplines. Here are the top courses in Germany that are preferred by international students:
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {courses.map((course, index) => (
                    <div key={index} className="rounded-3xl overflow-hidden border border-blue-100 shadow bg-white">
                        <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
                        <div className="py-4 text-lg font-semibold text-gray-900">{course.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default PopularCoursesSection;
