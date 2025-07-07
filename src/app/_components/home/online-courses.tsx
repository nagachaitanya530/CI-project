import Link from 'next/link';
export default function OnlineCourses() {
    return (
        <div className="min-h-screen bg-white py-12 px-4 -mt-64">
            <div className="max-w-6xl mx-auto">               
                <div className="text-center mb-16">
                    <p className="text-gray-600 text-lg mb-4">Do you struggle with</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        expressing yourself{" "}
                        <span className="text-red-500 relative">
                            confidently?
                            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 20" fill="none">
                                <path
                                    d="M5 15C50 5, 100 5, 150 10C200 15, 250 10, 295 15"
                                    stroke="#ef4444"
                                    strokeWidth="3"
                                    fill="none"
                                />
                            </svg>
                        </span>
                    </h1>
                </div>             
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">?</span>
                        </div>
                        <p className="text-gray-700 font-medium">You can't make proper sentences</p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">?</span>
                        </div>
                        <p className="text-gray-700 font-medium">You want to perform well in interviews</p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">?</span>
                        </div>
                        <p className="text-gray-700 font-medium">Your vocabulary is very limited</p>
                    </div>
                </div>               
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">                       
                        <div className="bg-blue-50 rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Online IELTS™ Courses</h3>
                            <p className="text-gray-600 mb-6">IELTS General & Academic Online Classes</p>
                            <Link href="/what-is-ielts">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md transition-colors">
                                KNOW MORE
                            </button>
                            </Link>
                        </div>                       
                        <div className="bg-blue-50 rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Online English AdvantEdge™</h3>
                            <p className="text-gray-600 mb-6">Foundation, Business and Advanced English Courses</p>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md transition-colors">
                                KNOW MORE
                            </button>
                        </div>                      
                        <div className="bg-blue-50 rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Online Polyglot™ Courses</h3>
                            <p className="text-gray-600 mb-6">French, Spanish and German Online Courses</p>
                            <Link href="/foreign-languages">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md transition-colors">
                                KNOW MORE
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-8 -ml-96 ">
                        <div className="flex items-center justify-center -mt-18  transition-opacity duration-300">
                            <div className="relative">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg hover:opacity-35 transition-opacity duration-300">
                                    <img
                                        src="/home/ielts-class.png?height=128&width=128"
                                        alt="IELTS Instructor"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute top-4 -right-full bg-white rounded-lg px-8 py-5 shadow-md">
                                    <span className="text-red-500 font-bold text-lg">IELTS</span>
                                </div>
                                <div className="absolute -bottom-2 -left-2 bg-white rounded-full p-2 shadow-md">
                                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">90K+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-24">
                            <div className="relative">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg hover:opacity-35 transition-opacity duration-300">
                                    <img
                                        src="/home/spoken-english.png?height=128&width=128"
                                        alt="Spoken English Instructor"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute top-4 -right-full bg-white rounded-lg px-3 py-1 shadow-md">
                                    <span className="text-red-500 font-bold text-lg">SPOKEN</span>
                                    <div className="text-gray-900 font-bold">ENGLISH</div>
                                </div>
                                <div className="absolute -bottom-2 -left-2 bg-white rounded-full p-2 shadow-md">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">90K+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-24">
                            <div className="relative">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg hover:opacity-35 transition-opacity duration-300">
                                    <img
                                        src="/home/foreign-languages.jpg?height=128&width=128"
                                        alt="Foreign Languages Instructor"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute top-4 -right-full bg-white rounded-lg px-3 py-1 shadow-md">
                                    <span className="text-red-500 font-bold text-lg">Foreign</span>
                                    <div className="text-gray-900 font-bold">Languages</div>
                                    <div className="flex space-x-1 mt-1">
                                        <span className="text-xs">🇫🇷</span>
                                        <span className="text-xs">🇪🇸</span>
                                        <span className="text-xs">🇩🇪</span>
                                    </div>
                                </div>
                                <div className="absolute -bottom-2 -left-2 bg-white rounded-full p-2 shadow-md">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">19K+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
