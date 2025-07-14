"use client";

type Job = {
  title: string;
  location: string;
  experience: string;
  positions: number;
  skills: string[];
  description: string[];
};

export default function JobInfo({ job }: { job: Job }) {
  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-12 font-sans text-gray-900">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-6">
        <span className="text-blue-700">Home</span> &gt;{" "}
        <span className="text-blue-700">Work With Us</span> &gt;{" "}
        <span className="font-semibold">Job Details</span>
      </div>

      {/* Job Title */}
      <h1 className="text-4xl font-bold mb-4">{job.title}</h1>

      {/* Info Pills */}
      <div className="flex flex-wrap gap-4 mb-10">
        <span className="border border-blue-700 text-blue-700 px-4 py-1 rounded-full text-sm">Full Time</span>
        <span className="border border-blue-700 text-blue-700 px-4 py-1 rounded-full text-sm">{job.location}</span>
        <span className="border border-blue-700 text-blue-700 px-4 py-1 rounded-full text-sm">Posted 12 days ago</span>
      </div>

      {/* Skills and Requirements */}
      <div className="mb-10">
        <h2 className="text-lg font-bold text-blue-900 border-t border-b border-gray-300 py-2">
          Skills and Requirements:
        </h2>
        <div className="bg-blue-100 p-4 space-y-2 text-sm leading-6 mt-2">
          {job.skills.map((skill, idx) => (
            <p key={idx}>{skill}</p>
          ))}
        </div>
      </div>

      {/* Job Description */}
      <div className="mb-10">
        <h2 className="text-lg font-bold text-blue-900 border-t border-b border-gray-300 py-2">
          Job Description:
        </h2>
        <div className="bg-blue-100 p-4 space-y-2 text-sm leading-6 mt-2">
          {job.description.map((desc, idx) => (
            <p key={idx}>{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
