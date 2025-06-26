"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const stories = [
  {
    name: "THANESHVAR",
    test: "TOEFL",
    image: "/tp-cael/prof-TOEFL.png",
    message:
      "TOEFL sessions were fun with the faculty engaging all the students with simultaneous exercises. The assessments were all digital and with time constraints.",
  },
  {
    name: "Jaspreet Kaur Chauhan",
    test: "IELTS",
    image: "/tp-cael/prof-IELTS.png",
    message:
      "I have taken IELTS test & Glad to say that the teachers here are very supportive, attentive and helpful. All thanks to my teacher that I scored a total of 7 bands.",
  },
  {
    name: "Varuneswar K V",
    test: "PTE",
    image: "/tp-cael/prof-PTE.png",
    message:
      "I am very much satisfied with the methods you teach and well planned classes. Each and every part of the sessions were always interesting, worksheets given for practices too.",
  },
  {
    name: "Pragatheesh",
    test: "IELTS",
    image: "/tp-cael/pragatheesh.png",
    message:
      "Thank you for the exceptional IELTS coaching at Edwise International. I felt well-prepared and was ultimately admitted to my desired university.",
  },
  {
    name: "HARISH M",
    test: "GRE",
    image: "/tp-cael/prof-GRE.png",
    message:
      "I Studied GRE at Edwise, and the coaching was ecellent. The Quant faculty solved every problem, clarified doubts, covered all topics, and provided many practice tests.",
  },
  {
    name: "Nikil G",
    test: "GRAT",
    image: "/tp-cael/NikilG.png",
    message:
      "Great learning and coachinng experience for the GMAT prep program. The flexible timing were convenient, and  the instructor was kind enough to explain ideas multiple times.",
  },
  {
    name: "Daryn Monteiro",
    test: "TOEFL",
    image: "/tp-cael/Daryn.png",
    message:
      "I recently attended TOEFL classes at Edwise. Overall, my experience at Edwise was outstanding, and I highly recommend it to anyone preparing for the TOEFL exam.",
  },
  {
    name: "Abijith Premanandh",
    test: "IELTS",
    image: "/tp-cael/Abijith.png",
    message:
      "I studied IELTS at Edwise, your guidance and support were invaluable in helping me prepare for the exam. I couldn't have done it without your help. I highly recommend Edwise.",
  },
  {
    name: "Thanyaananthan Kanakaraj",
    test: "GRE",
    image: "/tp-cael/Thayaananthan.png",
    message:
      "I attended GRE classes conducted by Edwise. Your teaching methods, dedication to clearing all my doubts, and unwavering support until the end were truly remarkable.",
  },
   {
    name: "Madhumithaa V.S",
    test: "PTE",
    image: "/tp-cael/Madhumiithaa.png",
    message:
      "I attended PTE online classes from Edwise, I found it easy and I attended the test with confidence. I really appreciate the coaching I recieved from Edwise.",
  },
  {
    name: "Deepshika De",
    test: "TOEFL",
    image: "/tp-cael/Deepshikha.png",
    message:
      "I had an amazing experience with Edwise International while applying to study in the UK. I am very happy with Edwise and would recommend it to all students applying abroad.",
  },
   {
    name: "Apurbo Roy Choudhury",
    test: "IELTS",
    image: "/tp-cael/Apurbo.png",
    message:
      "The IELTS classes conducted by Edwise significantly helped in developing and re-nourishing my English Proficiency skills. Overall great experience.",
  },
   {
    name: "Advaitha Shree Gopal Krishnan",
    test: "PTE",
    image: "/tp-cael/Advaitha.png",
    message:
      "I attended the PTE classes at Edwise. The comprehensive course material & structured teaching methods were very effective. Overall, my exprience at Edwise was exellent.",
  },
   {
    name: "Dipika Das",
    test: "ILETS",
    image: "/tp-cael/Dipika.png",
    message:
      "I had enrolled for the IELTS coaching. It was a great experience and they made me very confident. Thank you Edwise Consultancy for all your help and support.",
  },
];



const SuccessStories = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

   
  return (
    <>
     <section className="bg-blue-50 py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold">
            <span className="text-blue-600">Success Stories</span>
          </h3>
          <div className="flex gap-4">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
            >
              &#8592;
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1.2}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {stories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-4xl shadow-md h-full flex flex-col justify-between">
                <p className="text-gray-700 mb-4">{story.message}</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 relative rounded-full overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black">
                      {story.name}
                    </h4>
                    <h5 className="text-sm text-gray-600">{story.test}</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
     </section>
    </>
  );
};

export default SuccessStories;
