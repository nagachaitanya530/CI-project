"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const articles = [
  "USA Study Visa",
  "10 things to know before studying in USA",
  "10 Trending Undergraduate Courses In USA",
  "Community Colleges in USA",
  "Study Finance in the USA",
  "Master's in Law In USA",
  "Diploma Courses in USA",
  "Masters in Data Analytics in USA",
  "Engineering in USA for International Students",
  "Study in USA After 12th",
  "University in USA for Masters",
  "Study Computer Science and Information Technology in USA",
  "Data Science and Analytics in USA",
  "Studying Biotechnology and Biomedical Sciences in USA",
  "MBA in USA",
  "List of Scholarships in USA for Indian Students",
  "Courses to study in USA",
  "Interesting Fun Facts About The USA",
  "1 Year STEM Courses in USA",
  "Postgraduation Courses in USA for International Students",
  "Trending MS Programs To Study in USA",
  "Best Business Schools to study abroad in USA",
  "10 Reasons to Study in USA",
  "Architecture Universities in USA",
  "Study Business Courses in USA",
  "Undergraduate Courses in USA and Canada",
  "Universities in USA for MBA",
];

const RelatedArticlesUSA = () => {
  return (
    <section className="bg-[#f8fafc] py-16 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          <span className="underline decoration-red-500 decoration-2 underline-offset-4">
            Related Articles
          </span>{" "}
          on Studying in the USA
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((title, idx) => (
            <div
              key={idx}
              className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-between"
            >
              <p className="text-sm text-gray-800">{title}</p>
              <ArrowRight className="w-4 h-4 text-blue-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticlesUSA;
