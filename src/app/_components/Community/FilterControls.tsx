"use client";

type Props = {
  total: number;
  selectedRole: string;
  setSelectedRole: (value: string) => void;
  selectedSort: string;
  setSelectedSort: (value: string) => void;
  roleFilterOptions: string[];
  sortOptions: string[];
};

export default function FilterControls({
  total,
  selectedRole,
  setSelectedRole,
  selectedSort,
  setSelectedSort,
  roleFilterOptions,
  sortOptions,
}: Props) {
  return (
    <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
      <div className="text-gray-500 text-sm">{total} Members</div>

      <div className="flex gap-4">
        <select
          className="border px-4 py-2 rounded bg-white shadow-sm"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          {roleFilterOptions.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>

        <select
          className="border px-4 py-2 rounded bg-white shadow-sm"
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          {sortOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
