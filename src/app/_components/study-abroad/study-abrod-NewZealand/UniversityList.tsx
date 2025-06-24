'use client'
import { FileBadge2, FileText, IdCardLanyard, Images } from 'lucide-react'
import { useEffect, useRef, useState, type JSX } from 'react';
import Image from "next/image";




const universities = [
  {
    name: "The University of Auckland",
    image: "/images/university-of-auckland-new-zealand.webp",
    popularFor: "Geography",
    ranking: "68",
  },
  {
    name: "University Of Otago ",
    image: "/images/university-of-otago.webp",
    popularFor: "Health Sciences",
    ranking: "206",
  },
  {
    name: "Massey University",
    image: "/images/massey-university.webp",
    popularFor: "Bussiness And Management",
    ranking: "239",
  },
  {
    name: "Victoria University wellington",
    image: "/images/victoria-university-of-wellington.webp",
    popularFor: "Humanities and social Science",
    ranking: "250",
  },
  {
    name: "University of Waikato",
    image: "/images/university-of-waikato.webp",
    popularFor: "Business & Law",
    ranking: "195",
  },
  {
    name: "University of Canterbury",
    image: "/images/university-of-canterbury.webp",
    popularFor: "Engineering",
    ranking: "256",
  },
  {
    name: "University of Lincoln",
    image: "/images/lincoin-university.webp",
    popularFor: "Health Science & Business",
    ranking: "362",
  },
];
function UniversityList()
{

const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || universities.length < 4) return;

    const cardWidth = 280 + 24; 
    const totalCards = universities.length;

    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex > totalCards) {
        currentIndex = 1;
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollTo({ left: cardWidth * currentIndex, behavior: "smooth" });
      }

      setIndex(currentIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const duplicatedList =
    universities.length >= 0 ? [...universities, ...universities.slice(1,0)] : universities;




    return(
<>
{/* list of universities */}

 <div className="bg-[#e8eff8] py-10 px-4">
      <h2 className="text-5xl font-semibold text-center">
        <span className="underline decoration-red-500 underline-offset-4">
        List of Universities 
        </span>{" "}
        In New Zealand
      </h2>
    <p className="text-center text-gray-600 mt-2 text-xl">
        New-Zealand is a top choice for international students seeking a prestigious
        <br />
        education. Here are some top universities where we have successfully placed 
        <br/>
        students.
        </p>


      <div className="relative mt-10">
    
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden gap-6 scroll-smooth"
        >
          {duplicatedList.map((uni, i) => (
            <div
              key={i}
              className="w-[290px] flex-shrink-0 bg-white rounded-3xl p-6 shadow-md border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                 <Image
                  src={uni.image}
                  alt={""}
                  width={64}
                  height={64}
                  className="object-contain border-0 rounded"
                /> 
                <h3 className="font-semibold text-[15px] text-gray-900 leading-snug break-words">
                  {uni.name}
                </h3>
              </div>

              <hr className="mb-3 border-gray-300" />

              <div className="flex items-start gap-2 mb-2">
                <span className="text-blue-600 text-xl">🎓</span>
                <div className="text-sm text-gray-800">
                  <p className="font-medium">Popular For</p>
                  <p className="font-semibold">{uni.popularFor}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-blue-600 text-xl">🎖️</span>
                <div className="text-sm text-gray-800">
                  <p className="font-medium">QS World Ranking</p>
                  <p className="font-semibold">{uni.ranking}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {universities.length >= 4 && (
          <div className="w-full mt-4 px-5 relative">
            <div className="h-[1px] bg-gray-300 relative overflow-hidden">
              <div
                className="absolute top-0 h-[1px] w-[40%] bg-blue-600 transition-all duration-700"
                style={{
                    transform: `translateX(${index * 20}%)`,
                }}

              ></div>
            </div>
            
          </div>
        )}


        <div className="flex justify-center mt-10">
        <button className=" text-blue-900 border border-blue-900 hover:bg-blue-900 hover:text-white transition-all px-6 py-2 rounded-xl">
          View Our Partnered Universities
        </button>
        </div>
      </div>
      
    </div>

 




</>

    )

}
export default UniversityList;


