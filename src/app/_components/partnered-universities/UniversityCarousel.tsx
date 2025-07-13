'use client';

import Image from "next/image";

interface UniversityType {
  image: string;
  name: string;
}

interface UniversityListProps {
  universiteslist: UniversityType[];
}

function UniversityList({ universiteslist }: UniversityListProps) {
  return (
    <ul>
      {universiteslist.length === 0 ? (
        <li className="text-center text-gray-500">No universities found.</li>
      ) : (
        universiteslist.map((university, index) => (
          <li
            key={index}
            className="flex gap-6 items-center shadow-sm p-2 rounded-2xl my-3"
          >
            <Image
              src={university.image}
              alt="University"
              className="border rounded-full h-15 w-15 object-cover"
              width={500} height={300}
            />
            <p>{university.name}</p>
          </li>
        ))
      )}
    </ul>
  );
}

export default UniversityList;