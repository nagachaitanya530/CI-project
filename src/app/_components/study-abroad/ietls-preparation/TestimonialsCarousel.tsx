import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';


interface Story {
    imageUrl: string;
    name: string;
    examName: string;
    story: string;
}

const stories: Story[] = [
    {
        imageUrl: '/home/ielts-class.png', 
        name: 'John Doe',
        examName: 'IELTS',
        story: 'I had an amazing experience with Edwise International while applying to study in the UK. I am very happy with Edwise and would recommend it to all students applying abroad. ',
    },
    {
        imageUrl: '/home/thumbsup_guy.jpg', 
        name: 'Jane Smith',
        examName: 'PTE',
        story: 'The IELTS classes conducted by Edwise significantly helped in developing and re-nourishing my English proficiency skills. Overall great experience.',
    },
    {
        imageUrl: '/home/spoken-english.png',
        name: 'Alex Lee',
        examName: 'TOEFL',
        story: 'I attended the PTE classes at Edwise. The comprehensive course material & structured teaching methods were very effective. Overall, my experience at Edwise was excellent.',
    },
    {
        imageUrl: '/home/ielts-class.png', 
        name: 'John Doe',
        examName: 'IELTS',
        story: 'I had enrolled for the IELTS coaching. lt was a great experience and they made me very confident. Thank you Edwise Consultancy for all your help and support.',
    },
    {
        imageUrl: '/home/professional-women-3.png',
        name: 'Jane Smith',
        examName: 'PTE',
        story: 'TOEFL sessions were fun with the faculty engaging all the students with simultaneous exercises. The assessments were all digital and with time constraints. ',
    },
    {
        imageUrl: '/home/professional-women-2.png',
        name: 'Alex Lee',
        examName: 'TOEFL',
        story: 'I have taken the IELTS test and am glad to say that the teachers here are very supportive, attentive and helpful.All thanks to my teacher that I scored a total of 7 bands.',
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
        <section className='my-20 bg-cyan-50 min-h-[500px]'>
            <div className="space-y-6">
                <div className="relative flex flex-col md:flex-row items-center md:justify-between md:px-20">

               
                <h2 className="text-4xl underline decoration-red-600 font-semibold py-15 text-gray-800">Success Stories</h2>
                <div>
                    <button
                        onClick={prevStory}
                        disabled={currentIndex === 0}
                        className={`text-gray-800 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
                    >
                        <ArrowBigLeft />
                    </button>
                    <button
                        onClick={nextStory}
                        disabled={currentIndex + cardsPerPage >= stories.length}
                        className={`text-2xl text-gray-800 bg-white p-3 m-2 rounded-full shadow-lg hover:bg-gray-100 ${currentIndex + cardsPerPage >= stories.length ? 'opacity-30 cursor-not-allowed' : ''}`}
                    >
                        <ArrowBigRight />
                    </button>
                </div>
                </div>
                <div className="relative flex items-center justify-center">
                    <div className="flex items-center overflow-hidden w-full">
                        <div
                            className="flex transition-transform duration-500 ease-in-out py-1"
                            style={{
                                transform: `translateX(-${(currentIndex * 100) / cardsPerPage}%)`,
                            }}>
                            {stories.map((story, index) => (
                                <div
                                    key={index}
                                    className="w-1/4 md:w-1/3 bg-white rounded-xl shadow-lg p-10 mx-3 flex-none"
                                >
                                    <p className="text-xl mb-4 text-gray-700">{story.story}</p>
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            src={story.imageUrl}
                                            alt={story.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                            width={500} height={300}  
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
                </div>
            </div>
        </section>
    );
}


export default TestimonialsCarousel;