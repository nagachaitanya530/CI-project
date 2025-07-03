import { Link } from "lucide-react";

function Date() {
    return (
        <div
            id="dates"
            className="px-4 sm:px-8 md:px-16 lg:px-20"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
                CELPIP <span className="text-blue-900">Date</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mt-2">
                Test dates are available on Friday, Saturday, Sunday every month. Check the updated dates at{' '}
                <a
                    href="https://www.celpip.ca/take-celpip/find-a-test-date/"
                    className="text-blue-700 underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    "Link for CELPIP Test Dates"
                </a>
            </p>
        </div>
    );
}
export default Date;