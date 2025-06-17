'use client'

import { useEffect, useRef, useState } from 'react';

type PackageItem = {
  title: string;
  description: string;
};

const packages: PackageItem[] = [
  {
    title: 'Business English 1 Month',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eos dolores tempore necessitatibus laboriosam ea. Soluta laborum aliquid temporibus, minima, maxime accusamus eos asperiores odio voluptates illo, adipisci quisquam natus!',
  },
  {
    title: 'Business English 3 Month',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eos dolores tempore necessitatibus laboriosam ea. Soluta laborum aliquid temporibus, minima, maxime accusamus eos asperiores odio voluptates illo, adipisci quisquam natus!',
  },
  {
    title: 'Business English 6 Month',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eos dolores tempore necessitatibus laboriosam ea. Soluta laborum aliquid temporibus, minima, maxime accusamus eos asperiores odio voluptates illo, adipisci quisquam natus!',
  },
];

const TrackPackage = () => {
  const [expanded, setExpanded] = useState<boolean[]>([false, false, false]);
  const [showButtons, setShowButtons] = useState<boolean[]>([false, false, false]);
  const refs = useRef<(HTMLParagraphElement | null)[]>([]);

  const paragraphStyle: React.CSSProperties = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
  };

  useEffect(() => {
    const updatedShowButtons = refs.current.map((ref) => {
      if (ref) {
        return ref.scrollHeight !== ref.clientHeight;
      }
      return false;
    });
    setShowButtons(updatedShowButtons);
  }, []);

  const toggleExpand = (index: number) => {
    setExpanded((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <section className="py-10 px-4">
      <h1 className="text-4xl font-bold text-cyan-800 mb-10">
        Choose From Below Options
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg transition-all transform hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-600 hover:text-white"
          >
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-3 transition-all hover:text-white">
              {pkg.title}
            </h3>
            <p
              className="text-sm text-gray-600 hover:text-white transition-all"
              style={expanded[index] ? undefined : paragraphStyle}
              ref={(el) => {
                refs.current[index] = el;
              }}
            >
              {pkg.description}
            </p>
            {showButtons[index] && (
              <button
                onClick={() => toggleExpand(index)}
                className="mt-3 text-cyan-600 hover:underline text-sm transition-all"
              >
                {expanded[index] ? 'Read Less...' : 'Read More...'}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrackPackage;
