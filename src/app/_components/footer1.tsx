export default function FooterSection() {
    return (
        <footer className="bg-gradient-to-br from-blue-50 to-green-50 text-gray-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                    <h3 className="text-3xl font-medium text-gray-950 relative pb-2">
                        <span className="border-b-4 border-red-400">Subscribe</span> For More Info
                    </h3>

                    <button type="submit" className="mt-4 md:mt-0 b-blue-900 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
                        Subscribe Now
                    </button>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-gray-400 opacity-30 my-6"></div>
                <div className="grid grid-cols-2 md:grid-cols-7 md:justify-items-end-safe  gap-12 text-sm realtive">
                    <div >
                        <h4 className="text-blue-800 mb-3 font-medium text-lg">Important Links</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">What We Do</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">About Us</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Work with us</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">University Vists</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Media & Press</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Events</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">E-Brochure Download</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Refer a Friend</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Pay Online</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-blue-800 mb-3 font-medium text-lg">Test Prep</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">TOEFL</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">PTE</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">IELTS</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">GMAT</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">GRE</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">SAT</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">CAEL</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">CELPIP</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Duolingo</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">ACT</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-blue-800 mb-3 font-medium text-lg">Study Destination</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in UK</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in USA</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in Canada</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in Australia</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in New-Zealand</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in Singapore</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in Ireland</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in France</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in Germany</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in Switzerland</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in Dubai</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in Spain</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in Malaysia</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in Mauritius</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in India</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in Netherlands</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study in Italy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-blue-800 mb-3 font-medium text-lg">Student Services</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Visa Guidance</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Admission Guidance</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Career Counseling</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Finance Assistance</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Travel Assistance</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Forex Assistance</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Scholarship</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Study Abroad</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-blue-800 mb-3 font-medium text-lg">Test Prep</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">TOEFL</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">PTE</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">IELTS</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">GMAT</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">GRE</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">SAT</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">CAEL</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">CELPIP</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Duolingo</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">ACT</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-blue-800 mb-3 font-medium text-lg">Contact Us</h4>
                        <ul className="space-y-2">

                            <li className="text-sm text-gray-950 ">Mumbai Branches</li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Mumbai HO</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Marine Lines</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Santacruz</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Malad</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Thane</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Vashi</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="text-sm text-gray-950 ">India Branches</li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Ahmedabad</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Bangalore</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Chandigarh</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Chennai</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Cochin</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Coimbatore</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Delhi</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Hyderabad</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Indore</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Jaipur</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Nashik</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Kolkata</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Pune</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Pune FC</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Surat</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Trivandrum</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Vadodara</a></li>
                            <li className="text-sm text-gray-700 hover:text-white"><a href="#">Vizag</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className="w-full border-t border-gray-300 mt-12 pt-4 text-center text-sm text-gray-600">
                    <p>Copyright © 2025. xxxxxxxxxxxxxxxxx <a
                        href="mailto:info@edwiseinternational.com"
                        className="text-blue-600 hover:underline"
                    >
                        info@xxxxxxxxxxxxxxxxxxxx.com
                    </a></p>
                    <div className="mt-2 space-x-4">
                        <a href="#" className="hover:underline">Disclaimer</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Sitemap</a>
                    </div>
                </div>
            </div>

        </footer >
    )
}
