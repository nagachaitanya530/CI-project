'use client';

import { useRouter } from 'next/navigation';
import { Facebook, Instagram, Linkedin, Youtube, Calendar } from 'lucide-react';

export default function WhyLearnEnglishSection() {
  const router = useRouter();

  return (
    <section className="bg-[url('/grid-bg.png')] bg-cover bg-center py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0e1d57] mb-4">
          Why Learn English?
        </h2>
        <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-6">
          Why is it important to speak well in English?
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
          English is the modern language. Knowing English comforts you to reach fluency & it also changes your life.
          <span className="text-blue-700 font-medium"> English </span>
          increases your chances of getting a good job in an MNC within your home country or for finding work abroad.
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          It’s also a Global language. English is the Language of Worldwide Communication. It is the most common
          following language in the world. If you want to communicate to someone from another country or state, most
          probably both of you need to communicate in English, else without English you may have a language barrier.
          Learning English is necessary as it qualifies you to connect easily with your colleagues from
          <span className="text-blue-700 font-medium"> across the world. </span>
        </p>
      </div>

      <div className="mt-16 bg-gradient-to-r from-[#ec1962] to-[#f57c00] rounded-xl py-10 px-6 md:px-16 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <p className="text-sm mb-2">Meet the experts and experience the quality</p>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              Get a free demo class today to <br /> know more
            </h2>
          </div>
          <button
            onClick={() => router.push('/book-demo')}
            className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Book Demo
          </button>
        </div>
      </div>

      <div className="mt-16 flex justify-end">
        <div className="text-right space-y-2">
          <h3 className="text-xl font-bold text-[#0e1d57]">And, Yes! We're Social.</h3>
          <div className="flex justify-end gap-4 text-[#0e1d57]">
            <a href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/account" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-3xl">
        <h2 className="text-3xl font-bold text-[#0e1d57] mb-2">
          Exclusive Features & Facilities by NIL
        </h2>
        <h4 className="text-lg font-semibold text-[#0e1d57] mb-4">
          Simply The Best Quality In Industry
        </h4>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          National Institute of Language does beyond a normal English Communication Development Course. You will not
          only get access to live classes everyday but also we provide you certification from British Council if you
          need to show your skills to the world and want an International Certification added to your resume.
        </p>
      </div>
    </section>
  );
}
