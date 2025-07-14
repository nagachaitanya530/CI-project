"use client";

import { useEffect, useState } from "react";
import MemberCard from "./MemberCard";

export type Member = {
  name: string;
  image: string;
  role: "Faculty" | "Student";
  joined: string;
  activity: string;
};

export default function Members({ members }: { members: Member[] }) {
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("Alphabetical");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 20;

  useEffect(() => {
    setCurrentPage(1);
  }, [type, sort]);

  const filtered = members
    .filter((m) => (type === "All" ? true : m.role === type))
    .sort((a, b) => {
      if (sort === "Alphabetical") return a.name.localeCompare(b.name);
      if (sort === "Newest") return b.joined.localeCompare(a.joined);
      if (sort === "Recently Active") return a.activity === "Active recently" ? -1 : 1;
      return 0;
    });

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Members</h1>

      <div className="border-b mb-6">
        <button className="border-b-2 border-blue-600 text-blue-600 px-2 pb-2 font-medium">
          All Members
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        {/* Left Content: Filter controls + Members */}
        <div>
          <p className="text-gray-700 mb-4">{filtered.length} Members</p>

          <div className="flex flex-wrap gap-4 mb-6">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option value="All">All Types</option>
              <option value="Faculty">Faculty</option>
              <option value="Student">Student</option>
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option value="Alphabetical">Alphabetical</option>
              <option value="Newest">Newest Member</option>
              <option value="Recently Active">Recently Active</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginated.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded border ${
                    currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="border rounded-xl p-4 h-fit">
          <h2 className="text-lg font-semibold mb-2">Filter Results</h2>
          <p className="text-gray-500">Please add fields to search members.</p>
        </div>
      </div>
    </div>
  );
}
