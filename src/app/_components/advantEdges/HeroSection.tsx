'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import TrustedCompanies from '../home/trusted-companies';
import { BookOpenText, Clock, Earth, HelpCircle, Star } from 'lucide-react';

type HeroData = {
  heading: string;
  highlight: string;
  badge: string;
  description: string;
  courseLink: string;
  features: string[];
  demoButton: string;
  users: string[];
  logoImages: string[];
  studentCount: string;
  rating: string;
  reviewCount: string;
  painHeading: string;
  painSubheading: string;
  pains: string[];
  heroImage: string;
};

const HeroSection = ({ data }: { data: HeroData }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const el = scrollRef.current;
    let animationFrame: number;
    let scrollPos = 0;

    const scroll = () => {
      if (el) {
        scrollPos += 0.5;
        if (scrollPos >= el.scrollWidth / 2) scrollPos = 0;
        el.scrollLeft = scrollPos;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const icons = [BookOpenText, Clock, Earth];

  return (
    <section className="bg-white py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            {data.heading} <br />
            <span className="text-red-600 relative inline-block">
              {data.highlight}
              <span className="absolute w-full h-2 bg-red-500 bottom-0 left-0 rounded-full -z-10"></span>
            </span>
          </h1>

          <div className="mt-4">
            <span className="bg-red-600 text-white px-4 py-1 text-sm rounded-md font-medium">
              {data.badge}
            </span>
          </div>

          <p className="text-gray-700 mt-4 leading-relaxed">
            National Institute of Language’s{' '}
            <a
              href={data.courseLink}
              className="text-blue-500 hover:text-blue-600 font-medium cursor-pointer no-underline"
            >
              Online Spoken English course
            </a>{' '}
            is one of the best online course in the industry and includes personality development modules to cover all aspect of communication skills.
          </p>

          <div className="mt-6 space-y-2 text-sm text-gray-800">
            {data.features.map((feature, i) => {
              const Icon = icons[i % icons.length] || BookOpenText;
              return (
                <div key={i} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-blue-600" />
                  {feature}
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <button
              onClick={() => router.push("/book-demo")}
              className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg"
            >
              {data.demoButton}
            </button>

            <div className="flex items-center -space-x-3">
              {data.users.map((img, i) => (
                <div key={i} className="w-[56px] h-[56px] rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={img}
                    alt={`user${i}`}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
              <div className="w-[56px] h-[56px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white text-center leading-tight">
                {data.studentCount}
              </div>
            </div>

            <div className="flex flex-col items-start text-sm text-gray-700 font-medium">
              <div className="flex">
                <Star className="text-yellow-500 w-4 h-4" />
                <Star className="text-yellow-500 w-4 h-4" />
                <Star className="text-yellow-500 w-4 h-4" />
                <Star className="text-yellow-500 w-4 h-4" />
                <Star className="text-yellow-500 w-4 h-4" />
              </div>
              <span className="mt-1">{data.reviewCount}</span>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md">
          <Image
            src={data.heroImage}
            alt="Hero"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <TrustedCompanies />

      <div className="mt-16 max-w-5xl mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-800">{data.painHeading}</h2>
        <h3 className="text-3xl md:text-4xl font-bold mt-2">{data.painSubheading}</h3>

        <div className="mt-8 grid md:grid-cols-3 gap-6 text-gray-700">
          {data.pains.map((pain, i) => (
            <div key={i} className="flex gap-2 items-start">
              <HelpCircle className="text-red-500 text-xl" /> {pain}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
