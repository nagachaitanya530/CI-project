import Link from "next/link";

function CourcesDesc()
{
    return(
        <section className="pb-5">
      <div className="w-full bg-gray-100 flex justify-center items-start pt-10 px-4">
        <div className="w-full max-w-[1400px] flex flex-col lg:flex-row justify-center items-stretch gap-15">

          {/* Complete Course */}
          <div className="bg-white rounded-xl shadow-lg w-full lg:w-1/3">
            <img src="/Ielts/section3.jpg" alt="Complete" className="w-full h-40 object-cover" />
            <div className="bg-blue-700 p-6 text-white rounded-b-xl">
              <div className="bg-white text-black p-4 mb-4 rounded-xl text-center font-bold text-xl">Complete</div>
              <div className="mb-2">⭐⭐⭐⭐⭐</div>
              <p className="font-semibold mb-2">Comprehensive IELTS Course.</p>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>2 Months Group Classes</li>
                <li>Live Sessions</li>
                <li>Mon-Fri</li>
                <li>Sat Mock tests</li>
                <li>Sunday Webinars</li>
                <li>A.I Mock Test Access</li>
              </ul>
              <Link href="/fees/ieltscomplete">
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">KNOW MORE</button>
              </Link>
            </div>
          </div>

          {/* SuperFast Course */}
          <div className="bg-white rounded-xl shadow-lg w-full lg:w-1/3">
            <img src="/Ielts/section3.1.jpg" alt="SuperFast" className="w-full h-40 object-cover" />
            <div className="bg-blue-700 p-6 text-white rounded-b-xl">
              <div className="bg-white text-black p-4 mb-4 rounded-xl text-center font-bold text-xl">SuperFast</div>
              <div className="mb-2">⭐⭐⭐⭐⭐</div>
              <p className="font-semibold mb-2">Fast Paced IELTS Course.</p>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>45 Days Group Classes</li>
                <li>Live Sessions</li>
                <li>Mon-Fri</li>
                <li>Sat Mock tests</li>
                <li>Sunday Webinars</li>
                <li>A.I Mock Test Access</li>
              </ul>
               <Link href="/fees/ieltssuperfast">
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">KNOW MORE</button>
              </Link>
            </div>
          </div>

          {/* Turbo Course */}
          <div className="bg-white rounded-xl shadow-lg w-full lg:w-1/3">
            <img src="/Ielts/section3.2.jpg" alt="Turbo" className="w-full h-40 object-cover" />
            <div className="bg-blue-700 p-6 text-white rounded-b-xl">
              <div className="bg-white text-black p-4 mb-4 rounded-xl text-center font-bold text-xl">Turbo</div>
              <div className="mb-2">⭐⭐⭐⭐⭐</div>
              <p className="font-semibold mb-2">Crash IELTS Course.</p>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>1 Month Group Classes</li>
                <li>Live Sessions</li>
                <li>Mon-Fri</li>
                <li>Sat Mock tests</li>
                <li>Sunday Webinars</li>
                <li>A.I Mock Test Access</li>
              </ul>
              <Link href="/fees/ieltsturbo">
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">KNOW MORE</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
    )
}
export default CourcesDesc;