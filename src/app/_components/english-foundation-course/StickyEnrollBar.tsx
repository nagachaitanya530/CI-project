"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyEnrollBar() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBar(scrollY > 400); // Show when user scrolls past 400px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showBar && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] border-t border-gray-200"
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 sm:px-8">
            <span className="font-semibold text-[#284c87] text-lg sm:text-xl">
              English Foundation Course
            </span>
            <Link
              href="/book-demo"
              className="bg-[#284c87] text-white font-bold px-5 py-2 rounded-md hover:bg-[#1f3b6d] transition"
            >
              Enroll Now
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
