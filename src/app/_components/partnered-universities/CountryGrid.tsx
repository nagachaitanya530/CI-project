'use client'
import { useState ,useEffect } from "react";
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
    { image: "/", name: "Massachusetts Institute of Technology (MIT)" },
    { image: "/", name: "Stanford University" },
    { image: "/", name: "Harvard University" },
    { image: "/", name: "California Institute of Technology (Caltech)" },
    { image: "/", name: "University of Chicago" },
    { image: "/", name: "University of Pennsylvania" },
    { image: "/", name: "Columbia University" },
    { image: "/", name: "Yale University" },
    { image: "/", name: "University of California, Berkeley" },
    { image: "/", name: "Princeton University" }
  ],
  "UK": [
    { image: "/", name: "Birkbeck University of London" },
    { image: "/", name: "Birmingham City University International College" },
    { image: "/", name: "Bristol University" },
    { image: "/", name: "Brunel University" },
    { image: "/", name: "Buckinghamshire New University" },
    { image: "/", name: "Canterbury Christ Church University" },
    { image: "/", name: "Cardiff Metropolitan University" },
    { image: "/", name: "Cardiff University" },
    { image: "/", name: "City University of London" },
    { image: "/", name: "Coventry University" },
    { image: "/", name: "University of Oxford" },
    { image: "/", name: "University of Cambridge" },
    { image: "/", name: "Imperial College London" },
    { image: "/", name: "University College London (UCL)" },
    { image: "/", name: "London School of Economics and Political Science (LSE)" }
  ],
  "Canada": [
    { image: "/", name: "University of Toronto" },
    { image: "/", name: "University of British Columbia" },
    { image: "/", name: "McGill University" },
    { image: "/", name: "University of Alberta" },
    { image: "/", name: "University of Montreal" }
  ],
  "Australia": [
    { image: "/", name: "University of Melbourne" },
    { image: "/", name: "Australian National University (ANU)" },
    { image: "/", name: "University of Sydney" },
    { image: "/", name: "University of Queensland" },
    { image: "/", name: "University of New South Wales (UNSW Sydney)" }
  ],
  "Germany": [
    { image: "/", name: "Technical University of Munich" },
    { image: "/", name: "Ludwig Maximilian University of Munich" },
    { image: "/", name: "Heidelberg University" },
    { image: "/", name: "Humboldt University of Berlin" },
    { image: "/", name: "RWTH Aachen University" }
  ],
  "Switzerland": [
    { image: "/", name: "ETH Zurich - Swiss Federal Institute of Technology" },
    { image: "/", name: "École Polytechnique Fédérale de Lausanne (EPFL)" }
  ],
  "Singapore": [
    { image: "/", name: "National University of Singapore (NUS)" },
    { image: "/", name: "Nanyang Technological University (NTU)" }
  ],
  "Netherlands": [
    { image: "/", name: "Delft University of Technology" },
    { image: "/", name: "University of Amsterdam" },
    { image: "/", name: "Eindhoven University of Technology" }
  ],
  "France": [
    { image: "/", name: "Université PSL (Paris Sciences & Lettres)" },
    { image: "/", name: "École Polytechnique" },
    { image: "/", name: "Sorbonne University" }
  ],
  "India": [
    { image: "/", name: "Indian Institute of Technology Bombay (IITB)" },
    { image: "/", name: "Indian Institute of Science (IISc) Bangalore" },
    { image: "/", name: "Indian Institute of Technology Delhi (IITD)" }
  ],
  "Ireland": [
    { image: "/", name: "Trinity College Dublin" },
    { image: "/", name: "University College Dublin" }
  ],
  "New Zealand": [
    { image: "/", name: "University of Auckland" },
    { image: "/", name: "University of Otago" }
  ],
  "Spain": [
    { image: "/", name: "University of Barcelona" },
    { image: "/", name: "Autonomous University of Madrid" }
  ],
  "Italy": [
    { image: "/", name: "University of Bologna" },
    { image: "/", name: "Sapienza University of Rome" }
  ],
  "Malaysia": [
    { image: "/", name: "University of Malaya (UM)" },
    { image: "/", name: "Universiti Putra Malaysia (UPM)" }
  ],
  "Poland": [
    { image: "/", name: "University of Warsaw" },
    { image: "/", name: "Jagiellonian University" }
  ],
  "Finland": [
    { image: "/", name: "University of Helsinki" },
    { image: "/", name: "Aalto University" }
  ],
  "Hungary": [
    { image: "/", name: "Eötvös Loránd University" },
    { image: "/", name: "University of Szeged" }
  ],
  "Dubai": [
    { image: "/", name: "University of Dubai" },
    { image: "/", name: "American University in Dubai" }
  ],
  "Mauritius": [
    { image: "/", name: "University of Mauritius" },
    { image: "/", name: "Middlesex University Mauritius" }
  ],
  "Malta": [
    { image: "/", name: "University of Malta" }
  ],
  "International": [
    { image: "/", name: "Jacobs University Bremen" },
    { image: "/", name: "Schiller International University" }
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

      {/* Responsive Navigation - shows only on sm and md */}
      <div className="lg:hidden overflow-x-auto whitespace-nowrap my-4 py-2 px-2 border rounded-md shadow-sm scroll-smooth">
        <ul className="flex gap-3">
          {countries.map((country) => (
            <li
              key={country}
              onClick={() => handleSelect(country)}
              className={`cursor-pointer px-4 py-2 rounded-md whitespace-nowrap ${
                selectCountry === country ? 'bg-cyan-700 text-white' : 'bg-gray-100 hover:bg-cyan-100'
              }`}
            >
              {country}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-5">
        {/* Sidebar - only visible on lg and up */}
        <div className="hidden lg:block w-[17%]">
          <SideBarSection
            countries={countries}
            onSelectCountry={handleSelect}
            selectedCountry={selectCountry}
          />
        </div>

        {/* Main Content */}
        <div className="w-full">
          {/* Search */}
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

          {/* Scrollable University List */}
          <div className="my-4">
            <UniversityList universiteslist={currentUniversities} />
          </div>

        </div>
      </div>
          {/* Pagination */}
          {/* {filteredUniversities.length > itemsPerPage && ( */}
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
