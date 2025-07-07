<<<<<<< HEAD
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
=======

'use client';
import React ,{ useState }from 'react'
import Navigation from "../../_components/navigation1";
import UniversityBanner from '~/app/_components/what-we-do/university-visits/UniversityBanner';
 
import Footer from "~/app/_components/footer1";
import YourJourney from "~/app/_components/study-abroad/your-journey"
import UniversityFilter from '~/app/_components/what-we-do/university-visits/UniversityFilter';
import UniversityCard from '~/app/_components/what-we-do/university-visits/UniversityCard';

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Bangalore",
    department: "Engineering",
    type: "Full-Time",
    experience: "1-3 years",
    company: "TechNova Pvt. Ltd.",
    posted: "Posted 2 weeks ago",
    description: "Seeking a skilled React developer with strong UI/UX understanding and experience in Tailwind CSS."
  },
  {
    id: 2,
    title: "Marketing Manager",
    location: "Delhi",
    department: "Marketing",
    type: "Part-Time",
    experience: "2-5 years",
    company: "BrightWave Solutions",
    posted: "Posted 1 month ago",
    description: "Looking for a creative marketing manager to lead campaigns and digital outreach strategies."
  },
  {
    id: 3,
    title: "Backend Developer",
    location: "Remote",
    department: "Engineering",
    type: "Full-Time",
    experience: "3+ years",
    company: "Cloudify Inc.",
    posted: "Posted 5 days ago",
    description: "Responsible for building APIs using Node.js, integrating databases, and ensuring server reliability."
  },
  {
    id: 4,
    title: "English Language Instructor",
    location: "Remote",
    department: "Language",
    type: "Part-Time",
    experience: "1+ years",
    company: "National Institute of Language",
    posted: "Posted 4 months ago",
    description: "We are looking for dynamic individuals who possess excellent English communication skills and impart those same skills to our students in online sessions."
  },
  {
    id: 5,
    title: "UI/UX Designer",
    location: "Mumbai",
    department: "Design",
    type: "Full-Time",
    experience: "2-4 years",
    company: "PixelPerfect Studio",
    posted: "Posted 2 weeks ago",
    description: "Design intuitive user interfaces and collaborate closely with developers to bring designs to life."
  },
  {
    id: 6,
    title: "Data Analyst",
    location: "Hyderabad",
    department: "Analytics",
    type: "Full-Time",
    experience: "1-2 years",
    company: "InsightEdge Analytics",
    posted: "Posted 3 weeks ago",
    description: "Interpret data, analyze results using statistical techniques and provide ongoing reports."
  },
  {
    id: 7,
    title: "HR Executive",
    location: "Kolkata",
    department: "Human Resources",
    type: "Full-Time",
    experience: "0-2 years",
    company: "PeopleFirst Solutions",
    posted: "Posted 6 days ago",
    description: "Assist in recruitment, onboarding, and employee engagement activities in a fast-paced environment."
  },
  {
    id: 8,
    title: "Sales Representative",
    location: "Pune",
    department: "Sales",
    type: "Part-Time",
    experience: "1-3 years",
    company: "GrowPlus Ltd.",
    posted: "Posted 2 days ago",
    description: "Drive sales, build client relationships, and meet monthly targets in B2B SaaS domain."
  },
  {
    id: 9,
    title: "Content Writer",
    location: "Remote",
    department: "Content",
    type: "Freelance",
    experience: "1+ years",
    company: "WriteSmart Media",
    posted: "Posted 3 weeks ago",
    description: "Produce high-quality content for blogs, social media, and marketing campaigns. SEO experience preferred."
  },
  {
    id: 10,
    title: "Project Manager",
    location: "Chennai",
    department: "Management",
    type: "Full-Time",
    experience: "4+ years",
    company: "Zenith Tech Corp",
    posted: "Posted 1 month ago",
    description: "Manage software development projects, coordinate cross-functional teams, and ensure timely delivery."
  }
];
export default function Page() {




  const [filters, setFilters] = useState({ keyword: "", location: "", department: "", type: "" });
    const [results, setResults] = useState(jobs);
  
    const handleChange = (e: { target: { name: any; value: any; }; }) => setFilters({ ...filters, [e.target.name]: e.target.value });
  
    const handleSearch = () => {
      const filtered = jobs.filter(job =>
        (!filters.keyword || job.title.toLowerCase().includes(filters.keyword.toLowerCase())) &&
        (!filters.location || job.location === filters.location) &&
        (!filters.department || job.department === filters.department) &&
        (!filters.type || job.type === filters.type)
      );
      setResults(filtered);
    };
  
    const handleClear = () => {
      setFilters({ keyword: "", location: "", department: "", type: "" });
      setResults(jobs);
    };
  return (
<>

      <Navigation />
<UniversityBanner/>
      <UniversityFilter 
          filters={filters}
                onChange={handleChange}
                onSearch={handleSearch}
                onClear={handleClear}
      />
<UniversityCard/>
           
<YourJourney />
      <Footer />

</>
  )
}

>>>>>>> cost-of-studying-usa
