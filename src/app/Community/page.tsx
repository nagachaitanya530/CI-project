"use client";

import { useState, useMemo } from "react";
import Navigation from "../_components/Navigation";
import Footer from "../_components/Footer";
import FilterControls from "../_components/Community/FilterControls";
import MemberCards from "../_components/Community/MemberCards";

// Member type definition
export type Member = {
  name: string;
  joined: string;
  active: string;
  role: "Student" | "Faculty";
  avatar: string; // URL
};

// Generate dummy data
const randomRole = (): "Student" | "Faculty" =>
  Math.random() < 0.5 ? "Student" : "Faculty";

const randomAvatar = (i: number) => `https://i.pravatar.cc/150?img=${(i % 70) + 1}`;

const allMembers: Member[] = Array.from({ length: 100 }, (_, i) => {
  const role = randomRole();
  return {
    name: role === "Faculty" ? `Dr. Smith ${i}` : `Student ${i}`,
    joined: `Sep 202${i % 10}`,
    active:
      Math.random() < 0.25
        ? "Active now"
        : `Active ${Math.floor(Math.random() * 30) + 1} minutes ago`,
    role,
    avatar: randomAvatar(i),
  };
});

const roleFilterOptions = ["All Types", "Student", "Faculty"];
const sortOptions = ["Recently Active", "Alphabetical", "Newest Members"];

export default function Page() {
const [selectedRole, setSelectedRole] = useState("All Types");
  const [selectedSort, setSelectedSort] = useState("Recently Active");
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 20;

  const filteredAndSortedMembers = useMemo(() => {
    let filtered = [...allMembers];

    if (selectedRole !== "All Types") {
      filtered = filtered.filter((m) => m.role === selectedRole);
    }

    if (selectedSort === "Alphabetical") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === "Newest Members") {
      filtered.sort((a, b) => b.joined.localeCompare(a.joined));
    } else if (selectedSort === "Recently Active") {
      filtered.sort((a, b) => {
       const getActiveMinutes = (active: string) => {
  if (active === "Active now") return 0;
  const minutes = active.match(/Active (\d+) minutes ago/)?.[1];
  return minutes ? parseInt(minutes) : Infinity;
};

        return getActiveMinutes(a.active) - getActiveMinutes(b.active);
      });
    }

    return filtered;
  }, [selectedRole, selectedSort]);

  const totalPages = Math.ceil(filteredAndSortedMembers.length / membersPerPage);
  const currentMembers = filteredAndSortedMembers.slice(
    (currentPage - 1) * membersPerPage,
    currentPage * membersPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <>
      <Navigation />
      <main className="px-6 py-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Members</h1>

        <FilterControls
          total={filteredAndSortedMembers.length}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          roleFilterOptions={roleFilterOptions}
          sortOptions={sortOptions}
        />

        <MemberCards members={currentMembers} />

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-black text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
