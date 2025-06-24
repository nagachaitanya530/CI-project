import React, { useEffect, useState } from 'react'
import { Award, GraduationCap } from 'lucide-react'

const University = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const universities = [
    { name: "Le Cordon Bleu Thailand", logo: "/study-international-images/le-cordon-bleu-thailand.webp", popularFor: "Culinary Arts", ranking: "Top 10 Culinary Schools" },
    { name: "Hult International Business School", logo: "/study-international-images/hult-international-business-school-china.webp", popularFor: "Business", ranking: "Top 100 Global MBA" },
    { name: "Modul University Austria", logo: "/study-international-images/modul-university-austri.webp", popularFor: "Tourism & Hospitality", ranking: "Top 50 Europe" },
    { name: "Monash University South Africa", logo: "/study-international-images/monash-university-south-africa.webp", popularFor: "Engineering", ranking: "Top 100 Global" },
    { name: "Ross University Dominica", logo: "/study-international-images/ross-university-domicia.webp", popularFor: "Medicine", ranking: "Accredited Medical School" },
    { name: "American University Of Middle East", logo: "/study-international-images/america-university-of-malta.webp", popularFor: "Engineering & Business", ranking: "Regional Leader" },
    { name: "Amity Global Business School, Mauritius", logo: "/study-international-images/amity-global-business-school-mauritius.webp", popularFor: "Business Management", ranking: "Top Private University" },
    { name: "St Georges University", logo: "/study-international-images/st-georges-university-grenada.webp", popularFor: "Medicine & Veterinary", ranking: "Caribbean Leader" }
  ];

  // Create extended array for smooth infinite scroll
  const extendedUniversities = [...universities, ...universities.slice(0, 4)];
  const maxIndex = universities.length; // When to reset
  const visibleCards = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          // Reset to beginning after a brief moment
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(0);
            setTimeout(() => setIsTransitioning(true), 50);
          }, 500);
          return prevIndex + 1;
        }
        return prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const handleDotClick = (index: React.SetStateAction<number>) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="relative mb-8">
        <div 
          className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{ 
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            width: `${extendedUniversities.length * (100 / visibleCards)}%`
          }}
        >
          {extendedUniversities.map((university, index) => (
            <div key={index} className="w-full px-3 flex-shrink-0" style={{ width: `${100 / visibleCards}%` }}>
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full border border-gray-100">
                <div className="mb-4">
                  <div className="h-12 flex items-center justify-center mb-4">
                    <img
                      src={university.logo}
                      alt={university.name}
                      className="max-h-12 max-w-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzMzMzMzMyIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnt1bml2ZXJzaXR5Lm5hbWUuc3BsaXQoJyAnKS5tYXAod29yZCA9PiB3b3JkWzBdKS5qb2luKCcnKS5zbGljZSgwLCAzKX08L3RleHQ+Cjwvc3ZnPgo=";
                      }}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg text-center mb-4 min-h-[3rem] flex items-center justify-center">
                    {university.name}
                  </h3>
                </div>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Popular For</p>
                      <p className="text-gray-600 text-sm">{university.popularFor}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Ranking</p>
                      <p className="text-gray-600 text-sm">{university.ranking}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mb-8">
        {universities.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index || (currentIndex >= universities.length && index === 0) 
                ? 'bg-blue-600' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default University