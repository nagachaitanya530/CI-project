"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Personalized Guidance",
    description:
      "Our experienced team of study visa consultants will work closely with you to understand your unique circumstances and how it aligns with the specific student visa requirement. From preparing your application to organizing your documents, Edwise will provide personalized guidance at every step.",
    image: "/segment3.png",
  },
  {
    title: "Visa Application Support",
    description:
      "We’ll help complete your visa application accurately and efficiently, ensuring timely submission of all documents required for student visa in compliance with visa requirements. Our aim is to streamline the process of getting a student visa for Indian students and reduce the risk of delays or rejections.",
    image: "/Digital-Visa-Application-Form.jpg",
  },
  {
    title: "Mock Interviews",
    description:
      "Our team of abroad visa consultants will conduct mock interviews to help you feel confident and prepared. We’ll simulate real-life interview scenarios and provide feedback and tips to help you ace your visa interview with ease.",
    image: "/nterview-questions.jpg",
  },
  {
    title: "Ongoing Support",
    description:
      "Our support doesn't end once you have paid the student visa fee and submitted the student visa application. We'll address any questions or concerns you may have throughout the processing period, providing you with peace of mind and reassurance during this critical stage of your journey.",
    image: "/874_plate.jpg",
  },
];

const connectors = [
  "/section-join-lines-img1.png",
  "/section-join-lines-img (1).png",
  "/3rdline.jpeg",
];

export default function VisaSteps() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex flex-col relative z-10">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center w-full ${idx !== steps.length - 1 ? "mb-10 md:mb-16" : ""
              }`}
          >

            <div
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
            >

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


              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: idx % 2 === 1 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-3 text-center md:text-left">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center md:text-left">
                  {step.description}
                </p>
              </motion.div>
            </div>

            {idx < connectors.length && connectors[idx] && (
              <div className="relative w-full h-48 md:h-64 lg:h-80 mt-6">
                <Image
                  src={connectors[idx]}
                  alt={`Connector ${idx + 1}`}
                  fill
                  className="object-contain opacity-90"
                />
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}
