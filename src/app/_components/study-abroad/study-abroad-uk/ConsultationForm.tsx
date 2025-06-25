import React, { useState } from "react";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    formfirstName: "",
    formEmail: "",
    formMobile: "",
    formCourse: "",
    formMonth: "",
    formYear: "",
    checkbox1: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Add actual submission logic here
  };

  return (
    <div className="lg:w-2/5 w-full p-6 bg-white rounded-lg shadow">
      <h4 className="text-xl font-semibold mb-6 text-center">
        Book your Free Consultation with Trustworthy Counsellors
      </h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="hidden"
          name="formType"
          value="countryPageForm"
        />

        <input
          type="text"
          name="formfirstName"
          placeholder="Name"
          value={formData.formfirstName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="email"
          name="formEmail"
          placeholder="Email"
          value={formData.formEmail}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          name="formMobile"
          placeholder="Mobile Number"
          value={formData.formMobile}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="formCourse"
          placeholder="Preferred Course"
          value={formData.formCourse}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <select
          name="formMonth"
          value={formData.formMonth}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select Month</option>
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"].map(month => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>

        <select
          name="formYear"
          value={formData.formYear}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select Year</option>
          {["2024", "2025", "2026"].map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="checkbox1"
            name="checkbox1"
            checked={formData.checkbox1}
            onChange={handleChange}
            className="mt-1"
            required
          />
          <label htmlFor="checkbox1" className="text-sm">
            I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>

        <div id="message" className="text-red-500 text-sm mt-2"></div>
      </form>
    </div>
  );
};

export default ConsultationForm;
