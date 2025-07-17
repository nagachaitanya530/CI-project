import { motion } from "framer-motion";
import React from "react";

const courses = [
  {
    name: "Bussiness Management",
    image: "/uk/management.jpg" , 
  },
  {
    name: "Engineering",
    image: "/uk/engineering.jpg",
  },
  {
    name: "Computer science",
    image: "/uk/computer.jpg",
  },
   {
    name: "Law",
    image: "/uk/law.jpg",
  },
   {
    name: "Finance",
    image: "/uk/finance.jpg",
  },
   {
    name: "Architecture",
    image: "/uk/Architecture.jpg",
  },
];

const PopularCoursesSection = () => {
  return (
    <div className="py-12 px-4 text-center w-full">
  {/* Title */}
  <h2 className="text-3xl font-bold text-gray-900">
    <span className="relative inline-block">
      <span className="relative z-10 text-black">Popular Courses</span>
      <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
    </span>{" "}
    In The UK
  </h2>

  {/* Subtext */}
  <p className="text-gray-700 mt-4 max-w-4xl mx-auto">
    Studying in the UK gives international students great options for a global education.
    Here are the top courses in UK that are preferred by international students:
  </p>

  {/* Cards */}
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-10">
    {courses.map((course, index) => (
       <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white border rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                >
      <div
        key={index}
        className="rounded-3xl overflow-hidden border border-blue-100 shadow bg-white"
      >
        <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
        <div className="py-4 text-lg font-semibold text-gray-900">{course.name}</div>
      </div>
      </motion.div>
    ))}
    
  </div>
</div>

  );
};

export default PopularCoursesSection ;