import React from "react";

const CareerProspectsUK = () => {
  const courses = [
    {
      title: "Information Technology",
      image: "https://www.edwiseinternational.com/img/univ-courses-imgs/it-img.webp",
      link: ""
    },
    {
      title: "Healthcare",
      image: "https://www.edwiseinternational.com/img/univ-courses-imgs/healthcare-img.webp",
      link: "https://www.edwiseinternational.com/blogs/how-about-pursuing-mba-in-healthcare-management-in-the-uk.html"
    },
    {
      title: "Education",
      image: "https://www.edwiseinternational.com/img/univ-courses-imgs/educ-img.webp",
      link: "https://www.edwiseinternational.com/blogs/Top-7-Courses-to-Study-in-UK-May-2020.html"
    },
    {
      title: "Hospitality",
      image: "https://www.edwiseinternational.com/img/univ-courses-imgs/hospitality-img.webp",
      link: "https://www.edwiseinternational.com/blogs/Top-10-universities-in-UK-for-Hospitality-Jan-2020.html"
    },
    {
      title: "Law",
      image: "https://www.edwiseinternational.com/img/univ-courses-imgs/law-img.webp",
      link: "https://www.edwiseinternational.com/blogs/reasons-to-study-law-in-the-uk.html"
    },
    {
      title: "Business Marketing",
      image: "https://www.edwiseinternational.com/img/univ-courses-imgs/bussiness1-img.webp",
      link: ""
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
          <a
            key={index}
            href={course.link || "#"}
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
        ))}
      </div>
    </div>
  );
};

export default CareerProspectsUK;
