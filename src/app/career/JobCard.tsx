
import { Building2 } from 'lucide-react';

import { CalendarCheck2 } from 'lucide-react';
import { useRouter } from "next/navigation";
interface Job {
   id: number;
  title: string;
  company?: string;
  location: string;
  department: string;
  type: string;
  experience?: string;
  posted?: string;
  description?: string;
}

export default function JobCard({ job }: { job: Job }) {

  const router = useRouter();
const handleApply = () => {
  const encodedId = btoa(String(job.id)); // encode job id
  router.push(`/careerJob?ref=${encodedId}`);
};

  return (
 <div className="border rounded p-4 shadow-sm hover:shadow-md space-y-2 relative">
  <div className="flex justify-between items-start gap-4 flex-wrap sm:flex-nowrap">
    <h3 className="text-xl font-semibold flex-1 break-words">{job.title}</h3>
    <button  onClick={handleApply} className="bg-blue-600 text-white px-4 py-3 rounded text-sm hover:bg-blue-700 whitespace-nowrap cursor-pointer" >
    Apply Now
    </button>
  </div>

  {job.company && (
 <p className="flex items-center gap-2 text-gray-600 border-b border-gray-300 pb-2 mb-2 px-0">
  <span><Building2 /></span>
  <span>{job.company}</span>
</p>

  )}

  <p className="text-gray-600">
    {job.location} &bull; {job.department} &bull; {job.type}
  </p>
  {job.experience && (
    <p className="text-sm text-gray-700">Experience: {job.experience}</p>
  )}
 
  {job.posted && 
  
  <p className="flex items-center text-sm text-gray-500">
    
    <span> <CalendarCheck2 /></span>
    <span>{job.posted}</span></p>}
  {job.description && (
    <p className="text-gray-700 text-sm">{job.description}</p>
  )}
</div>

  );
}

