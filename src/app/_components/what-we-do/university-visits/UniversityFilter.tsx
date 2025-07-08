<<<<<<< HEAD
'use client';
import React from "react";

type FilterPageProps = {
  filters: {
    country: string;
    branch: string;
    from: string;
    to: string;
=======
import React from "react";
import { Search } from 'lucide-react';
import { X } from 'lucide-react';
type FilterPageProps = {
  filters: {
    keyword: string;
    location: string;
    department: string;
    type: string;
>>>>>>> cost-of-studying-usa
  };
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  onSearch: React.MouseEventHandler<HTMLButtonElement>;
  onClear: React.MouseEventHandler<HTMLButtonElement>;
};

<<<<<<< HEAD
export default function UniversityFilter({
  filters,
  onChange,
  onSearch,
  onClear,
}: FilterPageProps) {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-7xl flex flex-col md:flex-row flex-wrap gap-4 items-center justify-center p-6 bg-white">
        <select
          name="country"
          value={filters.country}
          onChange={onChange}
          className="w-full md:w-auto border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none"
        >
          <option value="">Select Country</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States Of America">United States Of America</option>
        </select>
        <select
          name="branch"
          value={filters.branch}
          onChange={onChange}
          className="w-full md:w-auto border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none"
        >
          <option value="">Select Branch</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Surat">Surat</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Cochin">Cochin</option>
        </select>
        <input
          type="date"
          name="from"
          value={filters.from}
          onChange={onChange}
          className="w-full md:w-auto border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none"
        />
        <input
          type="date"
          name="to"
          value={filters.to}
          onChange={onChange}
          className="w-full md:w-auto border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none"
        />
        <button
          onClick={onSearch}
          className="w-full md:w-auto bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>

        <button
          onClick={onClear}
          className="w-full md:w-auto bg-gray-300 px-6 py-3 rounded-lg hover:bg-gray-400 transition"
        >
          Clear
=======
export default function UniversityFilter({ filters, onChange, onSearch, onClear }: FilterPageProps) {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }} className="grid grid-cols-1 md:grid-cols-4 gap-4  p-6    rounded-lg shadow-md mb-6">
      <input
        name="keyword"
        value={filters.keyword}
        onChange={onChange}
        placeholder="Keyword (e.g. Software Engineer)"
        className="border p-2 rounded md:col-span-5 bg-white"
      />

      <select name="department" value={filters.department} onChange={onChange} className="border p-2 rounded bg-white">
        <option value="">All Departments</option>
        <option value="Engineering">Engineering</option>
        <option value="Marketing">Marketing</option>
      </select>

      <select name="type" value={filters.type} onChange={onChange} className="border p-2 rounded bg-white">
        <option value="">All Types</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
      </select>

      <select name="location" value={filters.location} onChange={onChange} className="border p-2 rounded bg-white">
        <option value="">All Locations</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Delhi">Delhi</option>
        <option value="Remote">Remote</option>
      </select>

      <div className="flex gap-2 items-center justify-end md:col-span-5">
        <button onClick={onSearch} className="bg-blue-500 text-white px-4 py-2 rounded d-block flex items-center gap-2 hover:bg-blue-600 cursor-pointer">
            <span><Search /></span>
            <span>search</span>
        </button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded d-block flex items-center gap-2 hover:bg-gray-400 cursor-pointer">
<span>Clear</span>
            <span><X /></span>
>>>>>>> cost-of-studying-usa
        </button>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> cost-of-studying-usa
