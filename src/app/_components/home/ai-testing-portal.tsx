import Link from "next/link";

export default function AITestingPortalComplete() {
    return (
        <div className="min-h-screen bg-white">
            <div className="relative bg-slate-600 overflow-hidden">               
                <div className="absolute inset-0">
                    <img
                        src="../../home/ai.jpg?height=600&width=1200"
                        alt="Person using laptop for testing"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-slate-800/70" />
                </div>               
                <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-24">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-2xl lg:text-2xl xl:text-4xl font-sans text-white mb-6 leading-tight">
                            Artificial intelligence powered testing and practice portal
                        </h1>
                        <div className="text-white text-sm sm:text-xl font-medium">
                            <span className="inline-block">IELTS</span>
                            <span className="mx-3 text-gray-300">|</span>
                            <span className="inline-block">TOEFL</span>
                            <span className="mx-3 text-gray-300">|</span>
                            <span className="inline-block">PTE</span>
                            <span className="mx-3 text-gray-300">|</span>
                            <span className="inline-block">CELPIP</span>
                            <span className="mx-3 text-gray-300">|</span>
                            <span className="inline-block">OET</span>
                        </div>
                    </div>
                </div>
            </div>           
            <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">                   
                    <div className="lg:col-span-2 space-y-8">                       
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold font-sans text-gray-900 mb-4">No more PDFs for taking mock tests</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Because we comprehend the reasons behind the significance of strenuous preparation and evaluations for
                                examinations on international levels, we have collaborated in order to develop the most effective
                                method.
                            </p>
                        </div>                       
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Fully featured and detailed performance reports, analysis, remedial tests and a lot more helpful tools
                                to achieve the best possible results.
                            </p>
                        </div>                       
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Requirements</h3>
                            <ul className="text-gray-600 text-sm space-y-2">
                                <li>• Learners must have a personal computer</li>
                                <li>• Learners should be comfortable using a microphone and a headset</li>
                            </ul>
                        </div>
                    </div>                  
                    <div className="lg:col-span-1 space-y-6 ">                      
                        <div className="bg-gray-50 rounded-lg p-10 shadow-lg">
                            <div className="bg-white rounded border mb-6 shadow-sm">                             
                                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-3  rounded-t text-sm font-medium">
                                    Practice Portal
                                </div>                               
                                <div className="p-4 space-y-3 opacity-30">
                                    <div className="text-xs text-gray-600">
                                        Select tasks from the following tests (5) and generate customized practice online.
                                    </div>
                                    <div className="space-y-2 text-xs ">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-700">Test Name</span>
                                            <span className="text-gray-700">Category</span>
                                            <span className="text-gray-700">Score</span>
                                            <span className="text-gray-700">Date</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Reading Comprehension</span>
                                            <span className="text-gray-600">IELTS</span>
                                            <div className="w-12 h-2 bg-green-400 rounded"></div>
                                            <span className="text-gray-600">Jun 15,2025</span>
                                        </div>
                                        <div className="flex justify-between items-center py-1">
                                            <span className="text-gray-600">Listening Practice</span>
                                            <span className="text-gray-600">TOEFL</span>
                                            <div className="w-12 h-2 bg-blue-400 rounded"></div>
                                            <span className="text-gray-600">June 14,2025</span>
                                        </div>
                                    </div>
                                    <div className="bg-gray-600 text-white text-center py-2 rounded text-xs font-medium">
                                        Practice with intelligent system
                                    </div>
                                </div>
                            </div> 

                            <Link href = "online-mock-test" className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-4 font-bold py-4 px-4 rounded-lg text-medium transition-colors duration-200">
                                TAKE A FREE TEST
                            </Link>                       
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-5">Features</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="text-sm">Real Test User Interface</li>
                                    <li className="text-sm">Access on demand</li>
                                    <li className="text-sm">Smart Reports</li>
                                    <li className="text-sm">Exam parameter wise technical analysis</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
