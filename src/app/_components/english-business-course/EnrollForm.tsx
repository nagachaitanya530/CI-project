'use client';

function EnrollForm(){

  return (
    <section>
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-4xl font-bold text-center text-cyan-700 mb-8">
        Enrollment Form
      </h1>

      <form className="space-y-6">
        {/* Personal Info */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" placeholder="First Name" className="input border rounded-xs border-black p-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" placeholder="Last Name" className="input border rounded-xs border-black p-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Birth Date</label>
              <input type="date" className="input border border-black rounded-xs p-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" value="Male" className="accent-cyan-700" />
                  Male
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" value="Female" className="accent-cyan-700" />
                  Female
                </label>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea rows={1} placeholder="Enter your address" className="input w-full border rounded-xs border-black p-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input type="tel" placeholder="(00) 000-0000000" className="input border rounded-xs border-black p-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" placeholder="name@example.com" className="input border rounded-xs border-black p-1" />
            </div>
          </div>
        </section><hr />
         {/* Education */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
          <label className="block text-sm font-medium text-gray-700">Education Level</label>
          <input type="text" placeholder="Ex: 8th Grade" className="input w-1/2 border rounded-xs border-black p-1" />
        </section>
        <hr />

        {/* Parent Info */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Parent/Guardian Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" placeholder="Full Name" className="input border rounded-xs border-black p-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Relationship</label>
              <input type="text" placeholder="Ex: Father / Mother" className="input border rounded-xs border-black p-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input type="tel" placeholder="(00) 000-0000000" className="input border rounded-xs border-black p-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" placeholder="name@example.com" className="input border rounded-xs border-black p-1" />
            </div>
          </div>
        </section>
        <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Add Signature</h3>
            <p className="mb-4">I Confirm that all information provided above is true to the best of my knowledge</p>
          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-cyan-50 file:text-cyan-700
              hover:file:bg-cyan-100"
          />
        </section>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-800 transition">
            Submit
          </button>
        </div>
      </form>
    </div>
    </section>
  );
};

export default EnrollForm;

