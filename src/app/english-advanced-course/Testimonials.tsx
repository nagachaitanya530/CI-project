'use client';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Nihal Saxena',
      title: 'IELTS Academic',
      review:
        "Thanks to National Institute of Language, I'm currently studying in one of the best universities in Canada and living my dream. I would highly recommend joining NIL for your IELTS test preparation, if you are serious about it.",
      image:
        'https://nationalinstituteoflanguage.in/wp-content/uploads/2022/04/81939369_10218931880580900_2889084943646851072_n.jpg',
    },
    {
      name: 'Kashish Tiwari',
      title: 'Foundation English',
      review:
        'I was always weak in English Communication and because of that I had to face a lot of rejections when I was trying to apply for jobs. I heard about NIL and joined the course after the demo class. It was the turning point of my life and now I am working for an MNC.',
      image:
        'https://nationalinstituteoflanguage.in/wp-content/uploads/2023/09/Screenshot-2023-09-22-at-1.31.48%C2%A0PM.png',
    },
    {
      name: 'Abhijeet Mishra',
      title: 'IELTS General',
      review:
        'If you are looking to migrate to a different country, do not look any further than National Institute of Language. For Migration, there is a higher score requirement in the test and I got a score of 8.0 in my first attempt with NIL.',
      image:
        'https://nationalinstituteoflanguage.in/wp-content/uploads/2022/05/118674061_3222765834479313_281819417628775336_n.jpeg',
    },
    {
      name: 'Anjali Gaud',
      title: 'English Business',
      review:
        'I always struggled with English since my school day and when I went to do MBA I had to manage everything in English. NIL Business English course proved to be a blessing for me. I thank the faculty of NIL for bringing knowledge and confidence in me to face my challenges.',
      image:
        'https://nationalinstituteoflanguage.in/wp-content/uploads/2023/09/Screenshot-2023-09-22-at-1.29.03%C2%A0PM.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerSlide = 2;
  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleReviews = () => {
    const start = currentIndex * reviewsPerSlide;
    return reviews.slice(start, start + reviewsPerSlide);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div id="Testimonials" className="w-full px-4 py-8 scroll-mt-35 md:flex-1/2 sm:w-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        We have a reputation among students
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 flex-wrap">
        <button
          onClick={goPrev}
          className="text-3xl text-gray-500 hover:text-blue-500 sm:order-none order-1"
        >
          &#60;
        </button>
        <div className="flex flex-col sm:flex-row gap-6 flex-wrap justify-center items-center">
          {getVisibleReviews().map((item, index) => (
            <div
              key={index}
              className="p-4 max-w-full sm:max-w-sm space-y-4 transition duration-500 ease-in-out w-[100%]   sm:w-auto"
            >
              <p className="bg-gray-100 text-gray-600 text-sm text-center p-4 h-47 rounded">
                "{item.review}"
              </p>
              <div className="flex items-center gap-5 justify-center">
                {item.image && (
                  <img
                    src={item.image}
                    alt="Reviewer"
                    className="w-12 h-12 rounded-full object-cover "
                  />
                )}
                <div className="text-left">
                  <h1 className="font-semibold text-gray-800 text-sm sm:text-base ">
                    {item.name}
                  </h1>
                  <span className="text-blue-500 text-xm">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={goNext}
          className="text-3xl text-gray-500 hover:text-blue-500 sm:order-none order-1"
        >
          &#62;
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2 flex-wrap">
        {[...Array(totalSlides)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              idx === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
