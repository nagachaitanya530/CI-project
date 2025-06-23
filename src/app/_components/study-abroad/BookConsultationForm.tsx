const BookConsultationForm = () => {
  return (
    <div className="w-80 bg-white shadow-lg rounded-lg p-6 border border-gray-200 ml-auto">
      <h3 className="text-gray-800 text-sm font-semibold mb-4 leading-tight">
        Book your Free Consultation<br />
        with Trustworthy Counsellors
      </h3>

      <form className="space-y-3">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
        />

        <input
          type="text"
          placeholder="Preferred Course"
          className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
        />

        <select className="w-full px-3 py-2.5 text-sm text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400">
          <option>Select Month</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>

        <select className="w-full px-3 py-2.5 text-sm text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400">
          <option>Select Year</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
          <option>2027</option>
        </select>

        <div className="flex items-start gap-2 pt-1">
          <input 
            type="checkbox" 
            id="consent" 
            className="mt-0.5 w-3 h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed">
            I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-blue-600 border border-blue-600 rounded py-2.5 text-sm font-medium hover:bg-blue-50 transition-colors mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookConsultationForm;