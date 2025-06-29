"use client";
import React, { useState } from "react";
import Navigation from "../_components/Navigation";
import Footer from '../_components/footer1'

import JobCard from './JobCard'

import FilterPage from './FilterPage'



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




const page = () => {
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
      <div className="p-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Careers</h2>
        <FilterPage
          filters={filters}
          onChange={handleChange}
          onSearch={handleSearch}
          onClear={handleClear}
        />
        <div className="mt-6 space-y-4">
          {results.map(job => <JobCard key={job.id} job={job} />)}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page