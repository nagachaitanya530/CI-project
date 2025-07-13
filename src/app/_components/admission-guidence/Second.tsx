"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Free Expert Counseling",
    content:
      "Our expert counselors provide personalized guidance for students applying to universities abroad. They patiently understand each student's need and academic background and help them achieve their goals by recommending the best courses and institutions suited to their profile.",
    image: "/card3.jpg",
  },
  {
    id: "02",
    title: "Identify Course, Country And University",
    content:
      "We help the students identify the destination country most suited for them, the institution as well as the course. For those who are undecided about the course we administer a test to determine the interests and abilities of the student.",
    image: "/step6.jpg",
  },
  {
    id: "03",
    title: "International Test Prep",
    content:
      "We offer coaching for key standardized tests like TOEFL, PTE, IELTS, GMAT, GRE, SAT, and ACT, with personalized guidance provided by our expert faculty. Our comprehensive courseware and regular internal testing ensure that students achieve their target scores for admission to their desired institutions.",
    image: "/step2.jpg",
    customImageWidth: 380,
    customImageHeight: 250,
  },
  {
    id: "04",
    title: "Document Editing",
    content:
      "We prioritize delivering optimal results by meticulously processing each student’s application to eliminate errors. We focus on essential areas, provide feedback, and ensure all documents are properly compiled and sealed. Our counselors keep students updated on their application status, and our experts analyze documents to meet university-specific requirements, enhancing success rates and speeding up responses.",
    image: "/step3.jpg",
    customImageWidth: 200,
    customImageHeight: 100,
  },
  {
    id: "05",
    title: "Application Process",
    content:
      "We give special attention to every application for admission, whether it is paper based or online. Students and counselors collaborate to thoroughly check and improve documents before submission. Additionally, we provide personalized assessments to institutions, highlighting the student's strengths and suitability for a successful match.",
    image: "/bm.jpg",
  },
  {
    id: "06",
    title: "Interview Preparation",
    content:
      "Interviews are needed for admission, visa eligibility and for visa grant too. We help prepare students with answers to questions that universities are likely to ask. These mock interview sessions are led by specialists who are highly familiar with the typical questions asked by universities.",
    image: "/step8.jpg",
  },
  {
    id: "07",
    title: "Visa Guidance",
    content:
      "Visa guidance is free for all Edwise students for all countries. We maintain a 99% success rate in visa applications through updated consulate advice. Our special services includes mock visa interviews to prepare students for common questions and provide guidance on the dos and don'ts. We assist with the entire visa process, from application submission to document preparation, ensuring smooth navigation and minimizing delays.",
    image: "/card4.jpg",
  },
];

const StepCard = ({
  id,
  title,
  content,
  image,
  isReversed,
  customImageWidth,
  customImageHeight,
}: {
  id: string;
  title: string;
  content: string;
  image: string;
  isReversed: boolean;
  customImageWidth?: number;
  customImageHeight?: number;
}) => {
  return (
    <motion.div
      className="relative flex flex-col md:flex-row items-center justify-between py-14 gap-10 max-w-[1000px] mx-auto px-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Vertical Line */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full border-l border-dotted border-gray-300 z-0" />

      {/* Step Number Circle */}
      <div className="z-10 w-10 h-10 rounded-full bg-gray-200 text-gray-700 font-semibold flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        {id}
      </div>

      {/* Content */}
      <div
        className={`flex flex-col md:flex-row items-center justify-between w-full gap-6 z-10 ${
          isReversed ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Section */}
        <motion.div
          className="md:w-[48%] text-left"
          initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            {title}
          </h3>
          <p className="text-gray-700 text-[16px] leading-relaxed">{content}</p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-[48%]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src={image}
            alt={title}
            width={customImageWidth || 400}
            height={customImageHeight || 260}
            className="rounded-[20px] object-cover w-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const AdmissionSteps = () => {
  return (
    <div className="w-full px-4 md:px-10 py-16 bg-white">
      {steps.map((step, index) => (
        <StepCard
          key={step.id}
          {...step}
          isReversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default AdmissionSteps;