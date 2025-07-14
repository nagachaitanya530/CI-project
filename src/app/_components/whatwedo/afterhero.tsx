"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const steps = [
  {
    title: "Career Counseling",
    description:
      "Career counseling, also known as career guidance or career coaching, is a process that assists individuals in making informed decisions about their career development and future employment opportunities.",
    image: "/careerimages.jpg",
    link:"/career-counseling"
  },
  {
    title: "Partnered Universities",
    description:
      "Edwise has partnered with 900+ universities worldwide, and our expert counselors offer personalized advice based on the student's academic background, personal interests, and financial situation.",
    image: "/partnerimage.jpg",
    link:"/study-abroad/partnered-universities",
  },
  {
    title: "Scholarships",
    description:
      "Scholarships are a valuable form of financial aid for international students, awarded based on various criteria. They are aimed to assist students with limited means in obtaining a good education. Scholarship amounts can vary greatly, covering partial to full tuition, room, board, and travel expenses.",
    image: "/scholarshipimages.jpg",
    link:"/study-abroad/scholarship"
  },
];

export default function VisaSteps() {
  
  return (
    <section className="relative max-w-6xl mx-auto px-2 py-10">
      <div className="flex flex-col relative z-10">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center w-full ${
              idx !== steps.length - 1 ? "mb-5" : ""
            }`}
          >
            <div
              className={`flex flex-col md:flex-row items-center gap-16 w-full ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Step Image */}
              <motion.div
                className="w-full md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: idx % 2 === 1 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={500}
                  height={350}
                  className="rounded-xl object-cover w-full h-auto shadow-md"
                />
              </motion.div>

              {/* Step Text */}
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: idx % 2 === 1 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {step.description}
                </p>
              
      
                <Link
                  className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                 href={step.link}
                >
                  Know More
                </Link>
                
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}