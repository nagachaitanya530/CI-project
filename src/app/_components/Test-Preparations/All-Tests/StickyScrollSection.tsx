"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Tab {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface StickyScrollSectionProps {
  heading: string;
  subheading: string;
  imageUrl: string;
  imageAlt: string;
  tabs: Tab[];
}

export default function StickyScrollSection({
  heading,
  subheading,
  imageUrl,
  imageAlt,
  tabs,
}: StickyScrollSectionProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveTab(visible[0]?.target.id ?? "");
        }
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: "0px 0px -40% 0px",
      }
    );

    tabs.forEach((tab) => {
      if (refs.current[tab.id]) observer.observe(refs.current[tab.id]!);
    });

    return () => observer.disconnect();
  }, [tabs]);

  return (
    <section className=" mx-auto px-4 md:px-20 py-12">
<div className="text-left mb-12 max-w-3xl">
  <h2 className="text-3xl md:text-5xl font-bold leading-snug text-black">
    Unlock The Unparalleled Benefits Of
    <br />
    <span className="relative inline-block font-extrabold text-black">
      <span className="relative z-10">Test Prep</span>
      <span className="absolute left-0 bottom-0 w-full h-[6px] bg-red-400 z-[-1] rounded-full translate-y-1"></span>
    </span>{" "}
    With Edwise
  </h2>
  <p className="text-gray-600 mt-4 text-base md:text-lg">{subheading}</p>
</div>
<<<<<<< HEAD
=======


>>>>>>> cost-of-studying-usa
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 md:sticky md:top-24 h-fit">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={500}
            height={500}
            className="rounded-3xl w-full h-auto object-cover"
          />
        </div>
<<<<<<< HEAD
=======

>>>>>>> cost-of-studying-usa
        <div className="flex-1 space-y-10">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              ref={(el) => {
                refs.current[tab.id] = el;
              }}
              className="p-6 border rounded-3xl shadow-sm scroll-mt-24 bg-white"
            >
              <div className="text-2xl text-red-500 font-bold">{tab.number}</div>
              <h3 className="text-xl font-bold text-gray-900 mt-2">{tab.title}</h3>
              <p className="text-gray-700 mt-2">{tab.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
