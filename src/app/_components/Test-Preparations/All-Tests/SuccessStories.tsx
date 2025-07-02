"use client";

import { useRef, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export interface Testimonial {
  text: string;
  name: string;
  exam: string;
  profile: string;
}

// All testimonials data - stored internally
const allTestimonials: Testimonial[] = [
  {
    text: "TOEFL sessions were fun with the faculty engaging all the students with simultaneous exercises. The assessments were all digital and with time constraints.",
    name: "THANESHVAR",
    exam: "TOEFL",
    profile: "/alltestTestimonialimg1.webp",
  },
  {
    text: "I have taken IELTS test & Glad to say that the teachers here are very supportive, attentive and helpful. All thanks to my teacher that I scored a total of 7 bands.",
    name: "Jaspreet Kaur Chauhan",
    exam: "IELTS",
    profile: "/alltestTestimonialimg2.webp",
  },
  {
    text: "I am very much satisfied with the methods you teach and well planned classes. Each and every part of the sessions were always interesting, worksheets given for practices too.",
    name: "Varuneswar K V",
    exam: "PTE",
    profile: "/alltestTestimonialimg3.webp",
  },
  {
    text: "Thank you for the exceptional IELTS coaching at Edwise International. I felt well-prepared and was ultimately admitted to my desired university.",
    name: "Pragatheesh",
    exam: "IELTS",
    profile: "/alltestTestimonialimg4.webp",
  },
  {
    text: "The coaching for TOEFL was top-notch. The mock tests helped me improve my timing and accuracy. Faculty guidance was excellent throughout.",
    name: "Sneha Reddy",
    exam: "TOEFL",
    profile: "/alltestTestimonialimg5.webp",
  },
  {
    text: "I took PTE coaching here and found the strategies taught to be very effective. I gained a lot of confidence in speaking and writing tasks.",
    name: "Manish Verma",
    exam: "PTE",
    profile: "/alltestTestimonialimg6.webp",
  },
  {
    text: "Thanks to the IELTS coaching at Edwise, I managed to score 8 bands. The personal attention and constant feedback made a big difference.",
    name: "Aarushi Patel",
    exam: "IELTS",
    profile: "/alltestTestimonialimg7.webp",
  },
  {
    text: "The faculty is amazing and always ready to help. My TOEFL preparation went smoothly, and I was able to achieve my target score.",
    name: "Rohan Mehta",
    exam: "TOEFL",
    profile: "/alltestTestimonialimg8.webp",
  },
  {
    text: "Excellent experience overall! The PTE classes were very structured, and the practice materials covered every possible question type.",
    name: "Divya Narayanan",
    exam: "PTE",
    profile: "/alltestTestimonialimg9.webp",
  },
  {
    text: "The one-on-one speaking sessions really boosted my confidence. I'm grateful to the trainers who made learning so easy and enjoyable.",
    name: "Anjali Sharma",
    exam: "IELTS",
    profile: "/alltestTestimonialimg10.webp",
  },
  {
    text: "With continuous support and realistic practice tests, I improved steadily in every module of TOEFL. Highly recommended!",
    name: "Abhishek Dutta",
    exam: "TOEFL",
    profile: "/alltestTestimonialimg11.webp",
  },
  {
    text: "The learning environment is motivating and the study resources are up to date. I cracked my PTE exam with great scores.",
    name: "Harshitha Iyer",
    exam: "PTE",
    profile: "/alltestTestimonialimg12.webp",
  },
  {
    text: "I never expected online coaching to be this effective. The virtual IELTS sessions were interactive and thorough.",
    name: "Kunal Singh",
    exam: "IELTS",
    profile: "/alltestTestimonialimg13.webp",
  },
  {
    text: "Edwise gave me the confidence and skills to ace my TOEFL exam. The speaking mock drills were particularly useful.",
    name: "Nikita Rao",
    exam: "TOEFL",
    profile: "/alltestTestimonialimg14.webp",
  },
];

// Function to randomly select 4 testimonials
const getRandomTestimonials = (testimonials: Testimonial[], count: number = 4): Testimonial[] => {
  const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export default function SuccessStories() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  
  // Memoize random testimonials to prevent re-shuffling on re-renders
  const selectedTestimonials = useMemo(() => getRandomTestimonials(allTestimonials), []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8; // Scroll by 80% of container width
      const offset = direction === 'left' ? -scrollAmount : scrollAmount;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#d5deeb] py-8 px-3 sm:py-12 sm:px-4 md:px-8 lg:px-16 xl:px-20 rounded-[20px] sm:rounded-[30px] md:rounded-[40px]">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
        {/* Heading - Left aligned with better styling */}
        <div className="mb-4 sm:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 relative antialiased">
            <span className="inline-block relative z-10">
              Success Stories
              <span className="absolute left-0 bottom-1 w-full h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-red-400 via-red-500 to-red-600 z-[-1] rounded-full transform translate-y-1"></span>
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 font-medium antialiased">Real experiences from our students</p>
        </div>

        {/* Scroll Buttons - Right aligned */}
        <div className="flex justify-center sm:justify-end gap-2 sm:gap-3">
          <button
            onClick={() => scroll('left')}
            className="p-2 sm:p-3 bg-[#1e3a8a] text-white rounded-full shadow-lg hover:bg-[#1a347a] transition-all duration-200 active:scale-95 sm:hover:scale-105 touch-manipulation"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 sm:p-3 bg-[#1e3a8a] text-white rounded-full shadow-lg hover:bg-[#1a347a] transition-all duration-200 active:scale-95 sm:hover:scale-105 touch-manipulation"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Testimonials Scroll Area - Centered start */}
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scroll-smooth pb-2 sm:pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x mandatory',
            paddingLeft: 'calc(50% - 45%)', // Center the first card
            paddingRight: 'calc(50% - 45%)', // Center the last card
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {selectedTestimonials.map((story, index) => (
            <div
              key={`${story.name}-${index}`}
              className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%] flex-shrink-0 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] sm:shadow-[0_8px_30px_0_rgba(0,0,0,0.12)] hover:shadow-[0_8px_25px_0_rgba(0,0,0,0.12)] sm:hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1"
              style={{ scrollSnapAlign: 'center' }}
            >
              {/* Exam Badge */}
              <div className="inline-block mb-3 sm:mb-4">
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#1e3a8a] text-white text-xs sm:text-sm font-semibold rounded-full">
                  {story.exam}
                </span>
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 font-medium">
                "{story.text}"
              </blockquote>
              
              {/* Profile Section */}
              <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-100">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative rounded-full overflow-hidden ring-1 sm:ring-2 ring-[#1e3a8a]/10 flex-shrink-0">
                  <Image
                    src={story.profile}
                    alt={`${story.name} profile picture`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 truncate">
                    {story.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">
                    {story.exam} Test Taker
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays - Responsive */}
        <div className="absolute left-0 top-0 w-4 sm:w-6 md:w-8 h-full bg-gradient-to-r from-[#d5deeb] via-[#d5deeb]/50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 w-4 sm:w-6 md:w-8 h-full bg-gradient-to-l from-[#d5deeb] via-[#d5deeb]/50 to-transparent pointer-events-none z-10"></div>
      </div>
      
      {/* Indicator dots - Mobile optimized */}
      <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        {selectedTestimonials.map((_, index) => (
          <div
            key={index}
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1e3a8a]/30"
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
}