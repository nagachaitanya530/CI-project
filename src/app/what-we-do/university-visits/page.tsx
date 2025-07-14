'use client';
import React, { useState } from 'react';
import Navigation from "../../_components/navigation1";
import UniversityBanner from '~/app/_components/what-we-do/university-visits/UniversityBanner';
import Footer from "~/app/_components/footer1";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import UniversityFilter from '~/app/_components/what-we-do/university-visits/UniversityFilter';
import UniversityCard from '~/app/_components/what-we-do/university-visits/UniversityCard';
import FadeInOnScroll from '~/app/study-abroad/study-mauritius/FadeInOnScroll';

const toDDMMYYYY = (input: string): string => {
  const date = new Date(input);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const compareDates = (d1: string, d2: string): number => {
  const [day1, month1, year1] = d1.split('/').map(Number);
  const [day2, month2, year2] = d2.split('/').map(Number);

  if (
    [day1, month1, year1, day2, month2, year2].some(
      (val) => val === undefined || isNaN(Number(val))
    )
  ) {

    return 0;
  }


  return new Date(
    year1 as number,
    (month1 as number) - 1,
    day1 as number
  ).getTime() - new Date(
    year2 as number,
    (month2 as number) - 1,
    day2 as number
  ).getTime();
};

const universityData = [
  {
    id: 1,
    name: "University Of Bristol",
    location: "Kolkata",
    date: "30/06/2025",
    time: "2:00pm–TBC",
    country: "United Kingdom",
    logo: "/unniversityvisitcar1.jpeg",
  },
  {
    id: 2,
    name: "University Of Edinburgh",
    location: "Kolkata",
    date: "30/06/2025",
    time: "4:00pm–TBC",
    country: "United Kingdom",
    logo: "/unniversityvisitcar2.jpeg",
  },
  {
    id: 3,
    name: "Johns Hopkins University",
    location: "Chandigarh",
    date: "03/07/2025",
    time: "2:00pm–4:00pm",
    country: "United Kingdom",
    logo: "/unniversityvisitcar3.jpeg",
  },
  {
    id: 4,
    name: "University Of Melbourne",
    location: "Cochin",
    date: "30/06/2025",
    time: "11:00am–TBC",
    country: "United Kingdom",
    logo: "/unniversityvisitcar4.jpeg",
  },
  {
    id: 5,
    name: "University of Aekland",
    location: "Surat",
    date: "01/07/2025",
    time: "12:30pm–2:00pm",
    country: "United States Of America",
    logo: "/unniversityvisitcard6.jpeg",
  },
];

export default function Page() {
  const [filters, setFilters] = useState({ country: '', branch: '', from: '', to: '' });
  const [results, setResults] = useState(universityData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const from = filters.from ? toDDMMYYYY(filters.from) : null;
    const to = filters.to ? toDDMMYYYY(filters.to) : null;

    const filtered = universityData.filter((u) => {
      const matchCountry = !filters.country || u.country === filters.country;
      const matchBranch = !filters.branch || u.location.toLowerCase() === filters.branch.toLowerCase();
      const matchFrom = !from || compareDates(u.date, from) >= 0;
      const matchTo = !to || compareDates(u.date, to) <= 0;

      return matchCountry && matchBranch && matchFrom && matchTo;
    });

    setResults(filtered);
  };

  const handleClear = () => {
    setFilters({ country: '', branch: '', from: '', to: '' });
    setResults(universityData);
  };

  return (
    <>
      <Navigation />
      <UniversityBanner />
      <FadeInOnScroll>
        <UniversityFilter
          filters={filters}
          onChange={handleChange}
          onSearch={handleSearch}
          onClear={handleClear}
        />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <UniversityCard data={results} />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <YourJourney />
      </FadeInOnScroll>
      <Footer />
    </>
  );
}
