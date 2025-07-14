type Member = {
  name: string;
  image: string;
  role: "Faculty" | "Student";
  joined: string;
  activity: string;
};

export default function MemberCard({ member }: { member: Member }) {
  return (
    <div className="rounded-xl border shadow-sm p-4 flex flex-col items-center text-center bg-white">
      <img
        src={member.image}
        alt={member.name}
        className="w-24 h-24 rounded-full object-cover"
      />
      <span className="bg-red-600 text-white text-xs px-2 py-1 rounded mt-2">
        {member.role}
      </span>
      <h3 className="font-semibold mt-2">{member.name}</h3>
      <p className="text-sm text-gray-500">{member.joined}</p>
      <p className="text-xs text-gray-400">{member.activity}</p>
    </div>
  );
}
