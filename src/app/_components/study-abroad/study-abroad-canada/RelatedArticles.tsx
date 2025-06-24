import React from "react";

const RelatedArticles = () => {
 const articles = [
  { title: "10 Things To Know Before Studying Abroad in Canada", url: "URL_HERE" },
  { title: "Best Courses in Canada for Indian Students", url: "URL_HERE" },
  { title: "Health Science Studies in Canada", url: "URL_HERE" },
  { title: "Study in Niagara College in Canada", url: "URL_HERE" },
  { title: "Must-Know Facts For Students Planning To Study In Canada", url: "URL_HERE" },
  { title: "Education in Canada", url: "URL_HERE" },
  { title: "Engineering in Canada", url: "URL_HERE" },
  { title: "Study Environmental Science in Canada", url: "URL_HERE" },
  { title: "Business Management in Canada", url: "URL_HERE" },
  { title: "MBA in UK vs MBA in Canada", url: "URL_HERE" },
  { title: "Canada Colleges and Universities", url: "URL_HERE" },
  { title: "Canada's One-Year Courses For International Students", url: "URL_HERE" },
  { title: "Career Oriented Courses in Canada", url: "URL_HERE" },
  { title: "Computer Science in Canada", url: "URL_HERE" },
  { title: "Study Hotel Management in Canada", url: "URL_HERE" },
  { title: "Logistics and Supply Management in Canada", url: "URL_HERE" },
  { title: "Scholarships in Canada for international students", url: "URL_HERE" },
  { title: "Top 10 Universities and Colleges in Canada for Hospitality", url: "URL_HERE" },
  { title: "Trending Courses in Canada in 2025", url: "URL_HERE" },
  { title: "Trending MS Programs in Canada", url: "URL_HERE" },
  { title: "Trending UG and PG courses to Study in Canada", url: "URL_HERE" },
  { title: "Best Universities for Engineering in Canada", url: "URL_HERE" },
  { title: "Best Universities in Canada 2025 for International Students", url: "URL_HERE" },
  { title: "4 Tips to remember while applying to universities in Canada", url: "URL_HERE" },
  { title: "Study Business Courses In Canada", url: "URL_HERE" },
  { title: "Health Science Courses in Canada", url: "URL_HERE" },
  { title: "Study Science degree in Canada", url: "URL_HERE" },
  { title: "Study Aeronautical Engineering in Canada", url: "URL_HERE" },
  { title: "Study Animation & Gaming in Canada", url: "URL_HERE" },
  { title: "Reasons to Study in Canada Among Other Study Destination", url: "URL_HERE" },
  { title: "Reasons to Study in Canada", url: "URL_HERE" },
  { title: "Masters in Marketing in Canada", url: "URL_HERE" },
  { title: "Study Law in Canada", url: "URL_HERE" },
  { title: "Bachelor's in Canada", url: "URL_HERE" },
  { title: "Diploma Courses in Canada", url: "URL_HERE" },
  { title: "Masters in Education In Canada", url: "URL_HERE" },
  { title: "Top 6 MS Programs in Canada", url: "URL_HERE" },
];


  return (
    <div className="bg-cyan-200 py-16 px-4 rounded-3xl" data-aos="fade-in" data-duration="50" >
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">
          <span className="text-cyan-600 underline decoration-red-500">Related Articles</span> on Studying in the Canada
        </h3>
        <div className="flex flex-wrap gap-2 text-center justify-center text-gray-900 font-medium">
          {articles.map((article, index) => (
            <React.Fragment key={index}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600"
              >
                {article.title}
              </a>
              {index < articles.length - 1 && <span className="text-gray-400">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;