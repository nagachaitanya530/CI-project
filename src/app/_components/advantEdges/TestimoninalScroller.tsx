'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'jaspreet Singh',
    role: 'Advisor at ICICI Lombard',
    image: '/prof-pic-GMAT.png',
    feedback:
      'One of the biggest benefits of taking a course at NIL was the significant boost in my confidence. The trainers not only helped me improve my language skills but also encouraged me to participate actively in class discussions. This helped me overcome my hesitation and speak English more fluently.',
  },
  {
    name: 'Rahul Sharma',
    role: 'Graduate Student',
    image: '/prof-pic-GRE.png',
    feedback:
      'Joining NIL was the best decision. The live classes and personal mentorship gave me the confidence to crack interviews. The trainers were always available and extremely supportive.',
  },
  {
    name: 'Geet Singh',
    role: 'Advisor at ICICI Lombard',
    image: '/prof-pic-IELTS.png',
    feedback:
      'One of the biggest benefits of taking a course at NIL was the significant boost in my confidence. The trainers not only helped me improve my language skills but also encouraged me to participate actively in class discussions. This helped me overcome my hesitation and speak English more fluently.',
  },
  {
    name: 'Rami Sharma',
    role: 'Graduate Student',
    image: '/prof-pic-PTE.png',
    feedback:
      'Joining NIL was the best decision. The live classes and personal mentorship gave me the confidence to crack interviews. The trainers were always available and extremely supportive.',
  },
];

export default function TestimonialScroller() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + direction;
        if (next >= testimonials.length || next < 0) {
          setDirection(-direction);
          return prev;
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [direction]);

  const data = testimonials[index];

  return (
    <section className="bg-gradient-to-br from-[#0e1d57] to-[#111c43] text-white py-20 px-6 md:px-16 relative rounded-b-[80px]">
      <h2 className="text-center text-yellow-300 text-sm font-medium mb-2">
        What our students say about us?
      </h2>
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-6">
        Most Trusted Platform
      </h1>
      <p className="max-w-3xl text-center mx-auto text-gray-300 mb-12">
        National Institute Of Language is the most trusted platform for online education. Thousands of students have benefited from our services and 95% of them recommend National Institute of Language to their friends.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex-1 text-left">
          <h3 className="text-white font-semibold text-lg mb-2 border-l-2 border-yellow-400 pl-2 uppercase">
            Unmatched Quality
          </h3>
          <p className="text-sm text-gray-300">
            Learn from certified expert trainers from British Council and Cambridge assessment in live sessions.
          </p>
        </div>

        <div
          className="flex-1 border border-gray-500 rounded-3xl p-6 relative bg-white/5 backdrop-blur transition-all duration-700 ease-in-out"
          ref={containerRef}
        >
          {data ? (
            <>
              <div className="flex justify-center mb-4">
                <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={data.image}
                    alt={data.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h4 className="text-white font-semibold text-lg text-center">
                {data.name}
              </h4>
              <p className="text-sm text-center text-gray-300 mb-4">
                {data.role}
              </p>
              <p className="text-sm italic text-center text-white">
                {data.feedback}
              </p>
              <div className="flex justify-center text-yellow-400 mt-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="w-4 h-4" fill="currentColor" />
                  ))}
              </div>
            </>
          ) : (
            <div className="text-center text-gray-400">No testimonial available.</div>
          )}
        </div>

        <div className="flex-1 text-right">
          <h3 className="text-white font-semibold text-lg mb-2 border-r-2 border-yellow-400 pr-2 uppercase">
            Endless Possibilities
          </h3>
          <p className="text-sm text-gray-300">
            Start with Foundation communication course, and go up to business or corporate level ENGLISH. We have everything that you may need.
          </p>
        </div>
      </div>
    </section>
  );
}
