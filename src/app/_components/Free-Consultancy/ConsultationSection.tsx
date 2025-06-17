"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function BookConsultationPage() {
  const testimonials = [
    {
      name: "Riya Sharma",
      review: "CI Overseas made the whole process smooth and stress-free. Highly recommended!",
      stars: 5,
    },
    {
      name: "Arjun Mehta",
      review: "Extremely helpful team and great guidance throughout my application journey.",
      stars: 4,
    },
    {
      name: "Sneha Verma",
      review: "Great experience! Got my visa and admission without any hassle.",
      stars: 5,
    },
  ];

  return (
    <section className="relative min-h-screen w-full px-6 py-16 md:py-24 animated-gradient hover:animate-gradient-move transition-all duration-1000">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 opacity-30 blur-lg animate-background" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 📋 Left: Form */}
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-purple-300 transition duration-300 animate-fade-in-up">
          <h2 className="text-3xl font-extrabold mb-6 text-purple-800">
            Book a Free Consultation
          </h2>
          <form className="space-y-5">
            {["Name", "Email", "Phone Number"].map((label) => (
              <div key={label}>
                <label className="block text-sm font-medium text-gray-700">{label}</label>
                <input
                  type={label === "Email" ? "email" : "text"}
                  placeholder={`Enter your ${label.toLowerCase()}`}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="bg-purple-700 text-white font-semibold px-6 py-3 rounded hover:bg-purple-800 hover:scale-105 transition duration-300 w-full"
            >
              Submit
            </button>
          </form>
        </div>

        {/* 🖼️ Right: Image */}
        <div className="w-full h-auto animate-fade-in-up">
          <Image
            src="/middle.jpg"
            alt="Consult Banner"
            width={800}
            height={600}
            layout="responsive"
            className="rounded-xl object-contain shadow-lg"
            priority
          />
        </div>
      </div>

      {/* 🌟 Testimonials */}
      <div className="mt-24 max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-purple-800 mb-12 animate-fade-in-down">
          What Our Students Say
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-purple-300 transition duration-500 text-left animate-fade-in-up"
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{t.review}"</p>
              <p className="mt-4 font-semibold text-purple-700">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✨ Animations and Gradient Style */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }

        .animated-gradient {
          background: linear-gradient(-45deg, #ffb6c1, #dda0dd, #87cefa, #ffc0cb);
          background-size: 400% 400%;
          transition: background 0.5s ease-in-out;
        }

        .animate-gradient-move:hover {
          animation: gradientMove 8s ease infinite;
        }
      `}</style>
    </section>
  );
}
