'use client'
import { useState, useEffect } from "react";
import SideBarSection from "./SideBar";
import UniversityList from "./UniversityCarousel";

export type CountryKey =
  | "USA" | "UK" | "Canada" | "Australia" | "Germany" | "Switzerland" | "New Zealand"
  | "Singapore" | "Ireland" | "France" | "Dubai" | "Spain" | "Malaysia" | "Mauritius"
  | "India" | "Netherlands" | "Italy" | "Malta" | "Hungary" | "Poland" | "Finland" | "International";


const countries: CountryKey[] = [
  "UK",
  "USA",
  "Canada",
  "Australia",
  "New Zealand",
  "Singapore",
  "Ireland",
  "France",
  "Germany",
  "Switzerland",
  "Dubai",
  "Spain",
  "Malaysia",
  "Mauritius",
  "India",
  "Netherlands",
  "Italy",
  "Malta",
  "Hungary",
  "Poland",
  "Finland",
  "International"
];

const universitiesByCountry: Record<CountryKey, { image: string; name: string }[]> = {
  "USA": [
    { image: "/university/Massachusetts_Institute_of_Technology-Logo.png", name: "Massachusetts Institute of Technology (MIT)" },
    { image: "/study-abroad/su.jpg", name: "Stanford University" },

  ],
  "UK": [
    { image: "/university/Birkbeck-University-of-London.png", name: "Birkbeck University of London" },
    { image: "/university/bcu-birmingham-city-university.jpg", name: "Birmingham City University International College" },

  ],
  "Canada": [
    { image: "/university/University_of_Toronto-Logo.wine.png", name: "University of Toronto" },
    { image: "/university/university-of-british-columbia.png", name: "University of British Columbia" },

  ],
  "Australia": [
    { image: "/university/University of Melbourne.png", name: "University of Melbourne" },
    { image: "/university/Australian National University (ANU).png", name: "Australian National University (ANU)" },

  ],
  "Germany": [
    { image: "/university/Technical University of Munich.png", name: "Technical University of Munich" },
    { image: "/university/Ludwig Maximilian University of Munich.png", name: "Ludwig Maximilian University of Munich" },

  ],
  "Switzerland": [
    { image: "/university", name: "ETH Zurich - Swiss Federal Institute of Technology" },
    { image: "/university", name: "École Polytechnique Fédérale de Lausanne (EPFL)" }
  ],
  "Singapore": [
    { image: "/university/National University of Singapore (NUS).png", name: "National University of Singapore (NUS)" },
    { image: "/university/Nanyang Technological University (NTU).png", name: "Nanyang Technological University (NTU)" }
  ],
  "Netherlands": [
    { image: "/university/Delft University of Technology.png", name: "Delft University of Technology" },

  ],
  "France": [
    { image: "/university/Université PSL (Paris Sciences & Lettres).png", name: "Université PSL (Paris Sciences & Lettres)" },
    { image: "/university/École Polytechnique.png", name: "École Polytechnique" },
    { image: "/university/Sorbonne University.png", name: "Sorbonne University" }
  ],
  "India": [
    { image: "/university/Indian Institute of Technology Bombay (IITB).png", name: "Indian Institute of Technology Bombay (IITB)" },
    { image: "/university/Indian Institute of Science (IISc) Bangalore.png", name: "Indian Institute of Science (IISc) Bangalore" },
  ],
  "Ireland": [
    { image: "/university/Trinity College Dublin.jpeg", name: "Trinity College Dublin" },
    { image: "/university/University College Dublin.png", name: "University College Dublin" }
  ],
  "New Zealand": [
    { image: "/university/university-of-auckland.png", name: "University of Auckland" },
    { image: "/university/University of Otago Doctoral.jpeg", name: "University of Otago" }
  ],
  "Spain": [
    { image: "/university/university-of-barcelona.jpeg", name: "University of Barcelona" },
    { image: "/university/Autonomous University of Madrid.png", name: "Autonomous University of Madrid" }
  ],
  "Italy": [
    { image: "/university/University-of-Bologna.jpeg", name: "University of Bologna" },
    { image: "/university/Sapienza University of Rome.jpeg", name: "Sapienza University of Rome" }
  ],
  "Malaysia": [
    { image: "/university/university-of-malaya.png", name: "University of Malaya (UM)" },
    { image: "/university/university-of-malaysia.png", name: "Universiti Putra Malaysia (UPM)" }
  ],
  "Poland": [
    { image: "/university/University of Warsaw Logo.jpeg", name: "University of Warsaw" },
    { image: "/university/Jagiellonian University logo.png", name: "Jagiellonian University" }
  ],
  "Finland": [
    { image: "/university/university-of-helsinki.jpeg", name: "University of Helsinki" },
    { image: "/university/Aalto University.jpeg", name: "Aalto University" }
  ],
  "Hungary": [
    { image: "/university/eotvos-lorand-university.png", name: "Eötvös Loránd University" },
    { image: "/university/UOS.avif", name: "University of Szeged" }
  ],
  "Dubai": [
    { image: "/university/dubai.png", name: "University of Dubai" },
    { image: "/university/aud.jpg", name: "American University in Dubai" }
  ],
  "Mauritius": [
    { image: "/university/UOM.jpg", name: "University of Mauritius" },
    { image: "/university/MUM.jpg", name: "Middlesex University Mauritius" }
  ],
  "Malta": [
    { image: "/university/UOMA.png", name: "University of Malta" }
  ],
  "International": [
    { image: "/university/JUB.png", name: "Jacobs University Bremen" },
    { image: "/university/SIU.png", name: "Schiller International University" }
  ]
};

function CountryUniversity() {
  const [selectCountry, setSelectCountry] = useState<CountryKey>('UK');
  const [universities, setUniversities] = useState(universitiesByCountry['UK']);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSelect = (country: CountryKey) => {
    setSelectCountry(country);
    setUniversities(universitiesByCountry[country]);
    setSearchTerm('');
    setCurrentPage(1);
  };

  const filteredUniversities = universities.filter((university) =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUniversities = filteredUniversities.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, universities]);

  return (
    <section className="mx-4 sm:mx-6 md:mx-10 lg:mx-25">
      <div className="lg:hidden overflow-x-auto whitespace-nowrap my-4 py-2 px-2 border rounded-md shadow-sm scroll-smooth">
        <ul className="flex gap-3">
          {countries.map((country) => (
            <li
              key={country}
              onClick={() => handleSelect(country)}
              className={`cursor-pointer px-4 py-2 rounded-md whitespace-nowrap ${selectCountry === country ? 'bg-cyan-700 text-white' : 'bg-gray-100 hover:bg-cyan-100'
                }`}
            >
              {country}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-5">
        <div className="hidden lg:block w-[17%]">
          <SideBarSection
            countries={countries}
            onSelectCountry={handleSelect}
            selectedCountry={selectCountry}
          />
        </div>
        <div className="w-full">
          <div className="flex justify-end  gap-3 my-5">
            <input
              type="text"
              placeholder="Search University"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="shadow-lg rounded-sm p-2 border w-full sm:w-96"
            />
            <button className="bg-cyan-900 py-2 px-4 rounded text-white">
              Search
            </button>
          </div>
          <div className="my-4">
            <UniversityList universiteslist={currentUniversities} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 gap-3">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-2 py-1">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default CountryUniversity;