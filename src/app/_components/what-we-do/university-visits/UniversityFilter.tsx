import React from "react";
import { Search } from 'lucide-react';
import { X } from 'lucide-react';
type FilterPageProps = {
  filters: {
    keyword: string;
    location: string;
    department: string;
    type: string;
  };
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  onSearch: React.MouseEventHandler<HTMLButtonElement>;
  onClear: React.MouseEventHandler<HTMLButtonElement>;
};

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
        </button>
      </div>
    </div>
  );
}