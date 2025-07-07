"use client";

export default function RelatedArticles() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-10 w-full max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        <span className="underline decoration-red-500 underline-offset-4">
          Related Articles
        </span>{" "}
        Studying in Germany
      </h2>

      <div className="bg-white p-5 mt-8 rounded-2xl border border-gray-200 shadow-sm">
        <ul className="text-blue-700 text-sm sm:text-base leading-relaxed space-y-3">
          <li>
            <a
              href="https://www.edwiseinternational.com/blogs/ever-dreamt-of-living-in-germany.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              ➤ Ever Dreamt Of Living In Germany?
            </a>
          </li>
          <li>
            <a
              href="https://www.edwiseinternational.com/blogs/safety-tips-for-international-students-in-germany.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              ➤ Safety Tips For International Students In Germany
            </a>
          </li>
          <li>
            <a
              href="https://www.edwiseinternational.com/blogs/cost-of-studying-in-germany.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              ➤ Cost of Studying in Germany
            </a>
          </li>
          <li>
            <a
              href="https://www.edwiseinternational.com/blogs/Busting-Myths-about-studying-for-free-in-Germany.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              ➤ Study in Germany for Free
            </a>
          </li>
          <li>
            <a
              href="https://www.edwiseinternational.com/blogs/study-in-germany.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              ➤ Study in Germany: A Guide for Indian Students
            </a>
          </li>
          <li>
            <a
              href="https://www.edwiseinternational.com/blogs/Gear-Up-to-Study-Automotive-Engineering-in-Germany.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              ➤ Study Automotive Engineering in Germany | MBA in Germany
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
