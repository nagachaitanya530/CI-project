import React from "react";

const courses = [
  { name: "MBA", image: "/courses/M.jpg" },
  { name: "Engineering", image: "/courses/E.jpg" },
  { name: "Accounts & Finance", image: "/courses/A.jpg" },
  { name: "Tourism & Hospitality", image: "/courses/T.jpeg" },
  { name: "Architecture", image: "/courses/AR.webp" },
  { name: "Aviation", image: "/courses/av.webp" },
];

const PopularCoursesSection = () => {
  return (
    <section className="w-full  px-4 sm:px-6 lg:px-20 py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900">
        <span className="relative inline-block">
          <span className="relative z-10 text-black">Popular Courses</span>
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
        </span>{" "}
        In Dubai
      </h2>
      <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
        Studying in Dubai gives international students great options for a global education.
        <br />
        Here are the top courses in Dubai that are preferred by international students:
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden border border-blue-100 shadow bg-white hover:shadow-lg transition"
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="py-4 text-base font-semibold text-gray-900">{course.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCoursesSection;
