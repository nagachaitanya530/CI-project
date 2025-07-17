'use client';

import Image from 'next/image';
import React from 'react';

interface Section {
  title: string;
  image: string;
  description: (string | { text: string; url: string })[];
}

interface InstituteInfoProps {
  sections: Section[];
}

export default function InstituteInfo({ sections }: InstituteInfoProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 space-y-16 text-center">
      {sections.map((section, index) => (
        <div key={index} className="max-w-4xl space-y-6">
<Image
  src={section.image}
  alt={section.title}
  width={400}
  height={400}
  className={`mx-auto object-cover ${index === 0 ? '' : 'rounded-full w-48 h-48'}`}
/>
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          <p className="text-gray-700">
            {section.description.map((part, i) =>
              typeof part === 'string' ? (
                <React.Fragment key={i}>{part}</React.Fragment>
              ) : (
                <a
                  key={i}
                  href={part.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  {part.text}
                </a>
              )
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
