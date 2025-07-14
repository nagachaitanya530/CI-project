'use client';
import React from "react";

type FilterPageProps = {
  filters: {
    country: string;
    branch: string;
    from: string;
    to: string;
  };
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  onSearch: React.MouseEventHandler<HTMLButtonElement>;
  onClear: React.MouseEventHandler<HTMLButtonElement>;
};

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
        </button>
      </div>
    </div>
  );
}
