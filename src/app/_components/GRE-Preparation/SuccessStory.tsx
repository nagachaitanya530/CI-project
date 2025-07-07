import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import { useState } from 'react';
<<<<<<< HEAD
interface Story {
  imageUrl: string;
  name: string;
  examName: string;
  story: string;
}
const stories: Story[] = [
  {
    imageUrl: '/prof-pic-TOEFL.png',
    name: 'THANESHVAR',
    examName: 'TOEFL',
    story: 'TOEFL sessions were fun with the faculty engaging all the students with simultaneous exercises. The assessments were all digital and with time constraints.  ',
  },
  {
    imageUrl: '/prof-pic-IELTS.png',
    name: 'Jaspreet Kaur Chauhan',
    examName: 'IELTS',
    story: 'I have taken IELTS test &  Glad to say that the teachers here are very supportive, attentive and helpful.All thanks to my teacher that I scored a total of 7 bands.',
  },
  {
    imageUrl: 'prof-pic-PTE.png',
    name: 'Varuneswar K V',
    examName: 'PTE',
    story: 'I am very much satisfied with the  methods you teach and well planned classes. Each and every part of the sessions were always interesting, worksheets given for practices too.',
  },
  {
    imageUrl: '/prof-pic-IELTS1.png',
    name: 'Praghteesh',
    examName: 'IELTS',
    story: 'Thank you for the exceptional IELTS coaching at Edwise International. I felt well-prepared and was ultimately admitted to my desired university.',
  },
  {
    imageUrl: 'prof-pic-GRE.png',
    name: 'Harish G',
    examName: 'GRE',
    story: ' I studied GRE at Edwise, and the coaching was excellent. The Quant faculty solved every problem, clarified doubts, covered all topics, and provided many practice tests.',
  },
  {
    imageUrl: '/prof-pic-GMAT.png',
    name: 'NIkhil G',
    examName: 'GMAT',
    story: 'Great learning and coaching experience for the GMAT prep program. The flexible timings were convenient, and the instructor was kind enough to explain ideas multiple times.',
  },

];
function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 2;

  const nextStory = () => {
    if (currentIndex + cardsPerPage < stories.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  const prevStory = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
return (
    <section className='my-20 bg-gray-200 min-h-[500px]'>
      <div className="space-y-6">
        <h2 className="text-4xl underline decoration-red-600 font-semibold p-15 text-gray-800">
          Success Stories
        </h2>
        <div className="relative flex items-center justify-center">
          <button
            onClick={prevStory}
            disabled={currentIndex === 0}
            className={`text-gray-800 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 ${currentIndex === 0 ? 'opacity-30 ' : ''
              }`}
          >
            <ArrowBigLeft />
          </button>
          <div className="flex items-center overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / cardsPerPage}%)`,
              }}
            >
              {stories.map((story, index) => (
                <div
                  key={index}
                  className="w-1/3 bg-white rounded-xl shadow-lg p-10 mx-3 flex-none"
                >
                  <p className="text-xl mb-4 text-gray-700">{story.story}</p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={story.imageUrl}
                      alt={story.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{story.name}</p>
                      <p className="text-sm text-gray-500">{story.examName}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextStory}
            disabled={currentIndex + cardsPerPage >= stories.length}
            className={`text-2xl text-gray-800 bg-white p-3 m-2 rounded-full shadow-lg hover:bg-gray-100 ${currentIndex + cardsPerPage >= stories.length ? 'opacity-30 ' : ''
              }`}
          >
            <ArrowBigRight />
          </button>
        </div>
      </div>
    </section>
  );
}
=======


interface Story {
    imageUrl: string;
    name: string;
    examName: string;
    story: string;
}

const stories: Story[] = [
    {
        imageUrl: 'https://www.edwiseinternational.com/img/testim/prof-pic-TOEFL.webp', // Replace with real image URL
        name: 'THANESHVAR',
        examName: 'TOEFL',
        story: 'TOEFL sessions were fun with the faculty engaging all the students with simultaneous exercises. The assessments were all digital and with time constraints.  ',
    },
    {
        imageUrl: 'https://www.edwiseinternational.com/img/testim/prof-pic-IELTS.webp', // Replace with real image URL
        name: 'Jaspreet Kaur Chauhan',
        examName: 'IELTS',
        story: 'I have taken IELTS test &  Glad to say that the teachers here are very supportive, attentive and helpful.All thanks to my teacher that I scored a total of 7 bands.',
    },
    {
        imageUrl: 'https://www.edwiseinternational.com/img/testim/prof-pic-PTE.webp', // Replace with real image URL
        name: 'Varuneswar K V',
        examName: 'PTE',
        story: 'I am very much satisfied with the  methods you teach and well planned classes. Each and every part of the sessions were always interesting, worksheets given for practices too.',
    },
    {
        imageUrl: 'https://www.edwiseinternational.com/img/testim/prof-pic-IELTS1.webp', // Replace with real image URL
        name: 'Praghteesh',
        examName: 'IELTS',
        story: 'Thank you for the exceptional IELTS coaching at Edwise International. I felt well-prepared and was ultimately admitted to my desired university.',},
    {
        imageUrl: 'https://www.edwiseinternational.com/img/testim/prof-pic-GRE.webp', // Replace with real image URL
        name: 'Harish G',
        examName: 'GRE',
        story: ' I studied GRE at Edwise, and the coaching was excellent. The Quant faculty solved every problem, clarified doubts, covered all topics, and provided many practice tests.',
    },
    {
        imageUrl: 'https://www.edwiseinternational.com/img/testim/prof-pic-GMAT.webp', // Replace with real image URL
        name: 'NIkhil G',
        examName: 'GMAT',
        story: 'Great learning and coaching experience for the GMAT prep program. The flexible timings were convenient, and the instructor was kind enough to explain ideas multiple times.',
    },
    // Add more stories here
];




function TestimonialsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 2;

    const nextStory = () => {
        if (currentIndex + cardsPerPage < stories.length) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevStory = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <section className='my-20 bg-gray-200 min-h-[500px]'>
  <div className="space-y-6">
    <h2 className="text-4xl underline decoration-red-600 font-semibold p-15 text-gray-800">
      Success Stories
    </h2>

    <div className="relative flex items-center justify-center">
      {/* Left Arrow */}
      <button
        onClick={prevStory}
        disabled={currentIndex === 0}
        className={`text-gray-800 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 ${
          currentIndex === 0 ? 'opacity-30 ' : ''
        }`}
      >
        <ArrowBigLeft />
      </button>

      {/* Carousel */}
      <div className="flex items-center overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsPerPage}%)`,
          }}
        >
          {stories.map((story, index) => (
            <div
              key={index}
              className="w-1/3 bg-white rounded-xl shadow-lg p-10 mx-3 flex-none"
            >
              <p className="text-xl mb-4 text-gray-700">{story.story}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={story.imageUrl}
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{story.name}</p>
                  <p className="text-sm text-gray-500">{story.examName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextStory}
        disabled={currentIndex + cardsPerPage >= stories.length}
        className={`text-2xl text-gray-800 bg-white p-3 m-2 rounded-full shadow-lg hover:bg-gray-100 ${
          currentIndex + cardsPerPage >= stories.length ? 'opacity-30 ' : ''
        }`}
      >
        <ArrowBigRight />
      </button>
    </div>
  </div>
</section>

    );
}


>>>>>>> cost-of-studying-usa
export default TestimonialsCarousel;



