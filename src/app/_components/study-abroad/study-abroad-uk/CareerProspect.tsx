import { motion } from "framer-motion";
import React from "react";

const CareerProspectsUK = () => {
  const courses = [
    {
      title: "Information Technology",
      image: "/uk/information.jpg",
      
    },
    {
      title: "Healthcare",
      image: "/uk/health.jpg",
     
    },
    {
      title: "Education",
      image: "/uk/education.jpg",
     
    },
    {
      title: "Hospitality",
      image: "/uk/Hospitality.jpg",
      
    },
    {
      title: "Law",
      image: "/uk/law2.jpg",
     
    },
    {
      title: "Business Marketing",
      image: "/uk/markting.jpg",
      
    }
  ];

  return (
    <div className="w-full py-12 bg-white">
      <h3 className="text-3xl font-bold text-center mb-4">
        Career Prospect <span className="text-black">in the UK</span>
      </h3>
      <p className="text-center text-black mb-10 px-4">
        The employment landscape in the UK is diverse, offering opportunities across various sectors. Here are some key sectors and industries that presently offer employment opportunities:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
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
          <a
            key={index}
            
            className="border rounded-2xl overflow-hidden shadow hover:shadow-lg transition group"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {course.title}
              </h3>
            </div>
          </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareerProspectsUK;
