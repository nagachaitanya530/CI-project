"use client";

import React, { useState } from "react";
import Footer from "../_components/footer1";
import Navigation from "../_components/navigation1";

const EnrollForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    address: "",
    contact: "",
    email: "",
    education: "",
    parentName: "",
    parentRelation: "",
    parentContact: "",
    parentEmail: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Partial<typeof formData>>({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors: Partial<typeof formData> = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required.";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required.";
    if (
      !formData.email.trim() ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    ) errors.email = "Valid email address is required.";

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const isValid = validateForm();
    if (!isValid) return;

    try {
      const response = await fetch("http://localhost:5050/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setMessage("✅ Enrollment submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          birthDate: "",
          gender: "",
          address: "",
          contact: "",
          email: "",
          education: "",
          parentName: "",
          parentRelation: "",
          parentContact: "",
          parentEmail: "",
        });
        setFieldErrors({});
      } else {
        setError(result.message || "❌ Submission failed.");
      }
    } catch (err: any) {
      console.error("Error:", err);
      setError("❌ Server error: " + err.message);
    }
  };

  return (
    <>
      <Navigation />
      <section className="bg-cyan-100 py-10 min-h-screen">
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-2xl rounded-2xl">
          <h1 className="text-4xl font-bold text-center text-cyan-700 mb-6">
            Enrollment Form
          </h1>

          {message && <div className="text-green-600 bg-green-50 p-2 mb-4 rounded text-center">{message}</div>}
          {error && <div className="text-red-600 bg-red-50 p-2 mb-4 rounded text-center">{error}</div>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <Section title="Personal Information">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} error={fieldErrors.firstName} />
                <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} error={fieldErrors.lastName} />
                <Input label="Birth Date" name="birthDate" type="date" value={formData.birthDate} onChange={handleChange} />
                <Input label="Gender" name="gender" value={formData.gender} onChange={handleChange} />
                <Input label="Address" name="address" value={formData.address} onChange={handleChange} />
                <Input label="Contact Number" name="contact" value={formData.contact} onChange={handleChange} />
                <Input label="Email" name="email" value={formData.email} onChange={handleChange} error={fieldErrors.email} />
              </div>
            </Section>

            <Section title="Education">
              <Input label="Education Level" name="education" value={formData.education} onChange={handleChange} />
            </Section>

            <Section title="Parent/Guardian">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Parent Name" name="parentName" value={formData.parentName} onChange={handleChange} />
                <Input label="Relation" name="parentRelation" value={formData.parentRelation} onChange={handleChange} />
                <Input label="Parent Contact" name="parentContact" value={formData.parentContact} onChange={handleChange} />
                <Input label="Parent Email" name="parentEmail" value={formData.parentEmail} onChange={handleChange} />
              </div>
            </Section>

            <div className="text-center">
              <button type="submit" className="bg-cyan-700 text-white px-6 py-3 rounded hover:bg-cyan-800 cursor-pointer">
                Submit Enrollment
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, name, value, onChange, type = "text", error }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} className={`w-full p-2 border rounded ${error ? 'border-red-500' : 'border-gray-300'}`} />
    {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2 border-b pb-1">{title}</h3>
    {children}
  </div>
);

export default EnrollForm;
