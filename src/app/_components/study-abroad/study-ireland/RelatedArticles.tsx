
import React from "react";
interface RelatedArticlesProps {
  headingCountry: string;
  articles: string[];
}

export default function RelatedArticles({ headingCountry, articles }: RelatedArticlesProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-20 py-12">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
        <span className="font-bold underline decoration-red-500">
          Related Articles
        </span>{" "}
        On Studying In <span className="text-black">{headingCountry}</span>
      </h2>

      <div className="rounded-3xl border border-blue-100 bg-white p-6 text-sm text-center text-blue-800 leading-relaxed">
        {articles.map((title, index) => (
          <React.Fragment key={index}>
            <span className="hover:underline cursor-pointer">{title}</span>
            {index !== articles.length - 1 && " | "}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
