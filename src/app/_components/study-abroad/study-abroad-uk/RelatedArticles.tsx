import React from "react";

const RelatedArticles = () => {
  const articles = [
    { title: "Scholarships to Study UK", url: "https://www.edwiseinternational.com/blogs/scholarships-to-study-uk-for-indian-students.html" },
    { title: "Best Universities in the UK", url: "https://www.edwiseinternational.com/blogs/best-universities-in-the-uk-2021-for-international-students.html" },
    { title: "Reasons To Study In The UK", url: "https://www.edwiseinternational.com/blogs/reasons-to-study-in-the-uk.html" },
    { title: "PhD in UK", url: "https://www.edwiseinternational.com/blogs/study-phd-courses-in-the-uk-july-2015.html" },
    { title: "Degree or Diploma Courses in UK", url: "https://www.edwiseinternational.com/blogs/degree-or-diploma-courses-in-uk-for-indian-students.html" },
    { title: "10 Reasons to Study Master's in the UK", url: "https://www.edwiseinternational.com/blogs/10-reasons-to-study-masters-in-the-uk.html" },
    { title: "Post-Graduation in UK", url: "https://www.edwiseinternational.com/blogs/pursuing-postgraduation-in-the-uk.html" },
    { title: "Study Law in the UK", url: "https://www.edwiseinternational.com/blogs/reasons-to-study-law-in-the-uk.html" },
    { title: "Post-Study Work Permit in UK", url: "https://www.edwiseinternational.com/blogs/post-study-work-permit-in-the-uk.html" },
    { title: "UK College Admission Requirements", url: "https://www.edwiseinternational.com/blogs/uk-college-admission-requirements.html" },
    { title: "Best Colleges For Masters In English in UK", url: "https://www.edwiseinternational.com/blogs/best-colleges-for-masters-in-english-in-uk.html" },
    { title: "Best Colleges in the UK for Master's in Journalism", url: "https://www.edwiseinternational.com/blogs/best-colleges-in-the-uk-for-masters-in-journalism.html" },
    { title: "Study Architecture in the UK", url: "https://www.edwiseinternational.com/blogs/study-the-world-of-architecture-in-the-uk.html" },
    { title: "MBA in Healthcare Management in UK", url: "https://www.edwiseinternational.com/blogs/how-about-pursuing-mba-in-healthcare-management-in-the-uk.html" },
    { title: "Why Study MBA in UK?", url: "https://www.edwiseinternational.com/blogs/why-study-MBA-in-UK-oct-2019.html" },
    { title: "Universities in UK for Finance", url: "https://www.edwiseinternational.com/blogs/leading-universities-in-uk-for-finance.html" },
    { title: "MBA in Finance in UK", url: "https://www.edwiseinternational.com/blogs/All-About-Pursuing-MBA-in-Finance-in-the-UK.html" },
    { title: "Study Engineering in UK", url: "https://www.edwiseinternational.com/blogs/Study-engineering-abroad-in-UK-with-edwise.html" },
    { title: "Study Business Analytics in UK", url: "https://www.edwiseinternational.com/blogs/know-all-about-studying-business-analytics-in-uk.html" },
    { title: "STEM Courses in the UK", url: "https://www.edwiseinternational.com/blogs/pursuing-stem-courses-in-the-uk.html" },
    { title: "MSc Automotive Engineering in UK", url: "https://www.edwiseinternational.com/blogs/pursuing-msc-automotive-engineering-in-the-uk.html" },
    { title: "Master's of Public Health in the UK", url: "https://www.edwiseinternational.com/blogs/masters-of-public-health-in-the-uk.html" },
    { title: "Study PhD in UK", url: "https://www.edwiseinternational.com/blogs/study-phd-courses-in-the-uk-july-2015.html" },
    { title: "University of Manchester in UK", url: "https://www.edwiseinternational.com/blogs/University-of-Manchester-in-UK-Nov-2014.html" },
  ];

  return (
    <div className="bg-blue-200 py-16 px-4 rounded-3xl" data-aos="fade-in" data-duration="50" >
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">
          <span className="text-blue-600 underline decoration-red-500">Related Articles</span> on Studying in the UK
        </h3>
        <div className="flex flex-wrap gap-2 text-center justify-center text-blue-700 font-medium">
          {articles.map((article, index) => (
            <React.Fragment key={index}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
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
