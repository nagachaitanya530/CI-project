import { ChevronRight } from "lucide-react"
import Link from 'next/link'
function Herosection() {
  return (
    <>
      <div className='flex p-5 mb-5 text-blue-900 ml-28'>
        <Link href="#about" >Home</Link><ChevronRight /><Link href="#">Blogs</Link><ChevronRight /><span>MBA Degree in Australia for Indian Students</span>
      </div>
      <div className="bg-white px-4 md:px-10 py-8 ">
        <h1 className="text-4xl md:text-4xl font-semibold text-start mb-6 text-gray-800 ml-20">
          MBA Degree in Australia for Indian Students
        </h1>
        <div className="flex justify-center">
          <img
            src="../swtizerlandstudyvisa/mba-degree-in-australia.webp"
            alt="Visa approval"
            className="rounded-3xl shadow-md w-full max-w-7xl object-cover h-120"
          />
        </div>
      </div>
    </>
  )
}
export default Herosection