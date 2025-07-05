import { ChevronRight } from "lucide-react"
import Link from 'next/link'
function Herosection() {
    return (
        <>
            <div className='flex p-5 mb-5 text-blue-900 ml-30'>
                <Link href="#about" >Home</Link><ChevronRight /><Link href="#">Blogs</Link><ChevronRight /><span>Switzerland Study Visa Guide 2025: Requirements, Process & Tips</span>
            </div>
            <div className=" bg-white px-4 md:px-10 py-8 ">
                <h1 className="text-3xl md:text-4xl font-semibold text-start mb-6 text-gray-800 ml-20">
                    Cost of Studying in Australia for Indian Students
                </h1>
                <div className="flex justify-center">
                    <img
                        src="../swtizerlandstudyvisa/Cost-of-Study2.webp"
                        alt="Visa approval"
                        className="rounded-3xl shadow-md w-full max-w-7xl object-cover h-140"
                    />
                </div>
            </div>
        </>
    )
}
export default Herosection