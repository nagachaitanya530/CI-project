"use client";

type Member = {
  name: string;
  joined: string;
  active: string;
  role: "Student" | "Faculty";
  avatar: string;
};

type Props = {
  members: Member[];
};

export default function MemberCards({ members }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {members.map((member, index) => (
        <div
          key={index}
          className="border rounded-lg shadow-md p-4 text-center hover:shadow-lg transition"
        >
          <div className="relative w-24 h-24 mx-auto mb-3">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover border"
            />
            {member.active === "Active now" && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            )}
          </div>
          <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
            {member.role}
          </span>
          <h2 className="mt-2 text-lg font-semibold">{member.name}</h2>
          <p className="text-gray-500 text-sm">
            Joined {member.joined} • {member.active}
          </p>
        </div>
      ))}
    </div>
  );
}
