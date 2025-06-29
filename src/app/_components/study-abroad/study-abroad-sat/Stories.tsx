"use client";
import React, { useRef } from "react";

const stories = [
  {
    id: 1,
    text: "TOEFL sessions were fun with the faculty engaging all the students with simultaneous exercises. The assessments were all digital and with time constraints.",
    name: "THANESHVAR",
    course: "TOEFL",
    img: "https://www.edwiseinternational.com/img/testim/prof-pic-TOEFL.webp",
  },
  {
    id: 2,
    text: "I have taken IELTS test & Glad to say that the teachers here are very supportive, attentive and helpful. All thanks to my teacher that I scored a total of 7 bands.",
    name: "Jaspreet Kaur Chauhan",
    course: "IELTS",
    img: "https://www.edwiseinternational.com/img/testim/prof-pic-IELTS.webp",
  },
  {
    id: 3,
    text: "I am very much satisfied with the  methods you teach and well planned classes. Each and every part of the sessions were always interesting, worksheets given for practices too. ",
    name: "Varuneswar K V",
    course: "PTE",
    img: "https://www.edwiseinternational.com/img/testim/prof-pic-PTE.webp",
  },
  {
    id: 4,
    text: "Thank you for the exceptional IELTS coaching at Edwise International. I felt well-prepared and was ultimately admitted to my desired university. ",
    name: "Pragatheesh",
    course: "IELTS",
    img: "https://www.edwiseinternational.com/img/testim/prof-pic-IELTS1.webp",
  },
  {
    id: 5,
    text: "I studied GRE at Edwise, and the coaching was excellent. The Quant faculty solved every problem, clarified doubts, covered all topics, and provided many practice tests. ",
    name: "HARISH M",
    course: "GRE",
    img: "https://www.edwiseinternational.com/img/testim/prof-pic-GRE.webp",
  },
  {
    id: 6,
    text: "Great learning and coaching experience for the GMAT prep program. The flexible timings were convenient, and the instructor was kind enough to explain ideas multiple times.",
    name: "Nikil G",
    course: "GMAT",
    img: "https://www.edwiseinternational.com/img/testim/prof-pic-GMAT.webp",
  },
  {
    id: 7,
    text: "I recently attended TOEFL classes at Edwise. Overall, my experience at Edwise was outstanding, and I highly recommend it to anyone preparing for the TOEFL exam. ",
    name: "Daryan Monteiro",
    course: "TOEFL",
    img: "https://www.edwiseinternational.com/img/testim/prof-pic-Daryn.webp",
  },
  {
    id: 8,
    text: "I studied IELTS at Edwise, your guidance and support were invaluable in helping me prepare for the exam. I couldn't have done it without your help. I highly recommend Edwise.",
    name: "Abijith Premanandh",
    course: "IELTS",
    img: "https://www.edwiseinternational.com/img/testim/prof-pic-Abijith.webp",
  },
  {
    id: 9,
    text: "I attended GRE  classes conducted by Edwise. Your teaching methods, dedication to clearing all my doubts, and unwavering support until the end were truly remarkable.",
    name: "Thayaananthan Kanakaraj",
    course: "GRE",
    img: "https://www.edwiseinternational.com/img/testim/prof-pic-Thayaananthan.webp",
  },
  {
    id: 10,
    text: "I attended PTE online classes from Edwise, I found it easy and I attended the test with confidence. I really appreciate the coaching I recieved from Edwise.",
    name: "Madhumiithaa V.S",
    course: "PTE",
    img: "https://www.edwiseinternational.com/img/testim/prof-pic-Madhumiithaa.webp",
  },
  {
    id: 11,
    text: "I had an amazing experience with Edwise International while applying to study in the UK. I am very happy with Edwise and would recommend it to all students applying abroad. ",
    name: "Deepshikha De",
    course: "TOEFL",
    img: "https://www.edwiseinternational.com/img/testim/prof-pic-Deepshikha.webp",
  },
  {
    id: 12,
    text: "The IELTS classes conducted by Edwise significantly helped in developing and re-nourishing my English proficiency skills. Overall great experience.",
    name: "Apurbo Roy Choudhury",
    course: "IELTS",
    img: "https://www.edwiseinternational.com/img/testim/prof-pic-Apurbo.webp",
  },
  {
    id: 13,
    text: "I attended the PTE classes at Edwise. The comprehensive course material &amp; structured teaching methods were very effective. Overall, my experience at Edwise was excellent. ",
    name: "Advaitha Shree Gopal Krishnan",
    course: "PTE",
    img: "https://www.edwiseinternational.com/img/testim/prof-pic-Advaitha.webp",
  },
  {
    id: 14,
    text: "I had enrolled for the IELTS coaching. lt was a great experience and they made me very confident. Thank you Edwise Consultancy for all your help and support.",
    name: "Dipika Das",
    course: "IELTS",
    img: "https://www.edwiseinternational.com/img/testim/prof-pic-Dipika.webp",
  },
  // ... add other stories similarly
];

export default function SuccessStories() {
  // Type the ref as HTMLDivElement or null
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollAmount = 350;

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-blue-200 pb-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-semibold text-blue-900">
            <span className="text-red-600">Success Stories</span>
          </h3>

          <div className="flex space-x-4">
            <button
              onClick={scrollLeft}
              aria-label="Previous slide"
              className="p-2 rounded bg-white shadow hover:bg-gray-100"
            >
              {/* Left arrow icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              aria-label="Next slide"
              className="p-2 rounded bg-white shadow hover:bg-gray-100"
            >
              {/* Right arrow icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex space-x-12 overflow-x-auto scrollbar-hide scroll-smooth"
          role="list"
        >
          {stories.map(({ id, text, name, course, img }) => (
            <article
              key={id}
              className="flex-shrink-0 w-85 bg-white rounded-lg shadow p-6"
              role="listitem"
            >
              <p className="mb-4 text-black text-xl">{text}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={img}
                  alt={`${name} - ${course}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-blue-900">{name}</h4>
                  <h5 className="text-sm text-gray-500">{course}</h5>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
