"use client";
import { useState } from 'react';

export default function JobApplicationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        dob: '',
        address: '',
        education: '',
        degree: '',
        experience: '',
        lastOrg: '',
        lastDesignation: '',
        availability: '',
        file: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        setFormData(prev => ({ ...prev, file }));
    }
};


   const handleSubmit = async () => {
    const formDataToSend = new FormData();
    
    Object.entries(formData).forEach(([key, value]) => {
        if (key === 'file') {
            if (value instanceof File) {
                formDataToSend.append('file', value);
            }
        } else {
            formDataToSend.append(key, value as string); // cast to string
        }
    });

    try {
        const response = await fetch('http://localhost:5000/api/career', {
            method: 'POST',
            body: formDataToSend,
        });

        const result = await response.json();
        alert(result.message || "Submitted successfully!");
    } catch (error) {
        console.error('Submission failed:', error);
        alert("Something went wrong. Please try again later.");
    }
};


    return (
        <div className="flex bg-gray-600 mb-8">
            <div className="w-full max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row">
                {/* Left Section */}
                <div className="md:w-4/5 py-8 pr-8">
                    <h1 className="text-5xl font-normal text-blue-400 mb-8 mt-8">Apply for a job</h1>
                    <p className="text-white text-lg mb-6">
                        Send us your CV by filling in the form on the right or emailing us at{' '}
                        <a href="mailto:resume@foxsolution.com" className="text-red-400 hover:underline">
                            resume@foxsolution.com
                        </a>.
                    </p>
                    <p className="text-white text-lg">
                        We will get in touch with you if something comes up!
                    </p>
                </div>

                {/* Right Section - Form */}
                <div className="md:w-3/5 py-8">
                    <div className="space-y-6">
                        {[
                            { id: 'fullName', label: 'Your Full Name*', placeholder: 'John Doe' },
                            { id: 'email', label: 'E-mail*', placeholder: 'john@example.com', type: 'email' },
                            { id: 'phone', label: 'Phone Number*', placeholder: '081234 56789' },
                            { id: 'dob', label: 'Date of Birth*', type: 'date' },
                            { id: 'address', label: 'Address*', placeholder: 'Street, City, State, PIN' },
                            { id: 'degree', label: 'Name of the degree*', placeholder: 'MCA / B.Tech / Ph.D' },
                            { id: 'lastOrg', label: 'Last Organisation (if any)', placeholder: 'ABC Pvt. Ltd.' },
                            { id: 'lastDesignation', label: 'Last designation held', placeholder: 'Frontend Developer' },
                            { id: 'availability', label: 'How soon will you be able to join?', placeholder: 'e.g., Immediately / 2 Weeks' },
                        ].map(({ id, label, placeholder, type = 'text' }) => (
                            <div key={id}>
                                <label htmlFor={id} className="block text-white mb-1">{label}</label>
                                <input
                                    type={type}
                                    id={id}
                                    name={id}
                                    value={(formData as any)[id]}
                                    onChange={handleChange}
                                    placeholder={placeholder}
                                    className="w-full bg-transparent text-white border-b border-gray-500 pb-2 focus:outline-none focus:border-blue-400"
                                />
                            </div>
                        ))}

                        {/* Education Dropdown */}
                        <div>
                            <label htmlFor="education" className="block text-white mb-1">Highest Education*</label>
                            <select
                                id="education"
                                name="education"
                                value={formData.education}
                                onChange={handleChange}
                                className="w-full bg-transparent text-white border-b border-gray-500 pb-2 focus:outline-none focus:border-blue-400 appearance-none"
                            >
                                <option value="">Select</option>
                                <option value="PhD" className="bg-blue-950">Ph.D</option>
                                <option value="Masters" className="bg-blue-950">Masters</option>
                                <option value="Bachelors" className="bg-blue-950">Bachelors</option>
                                <option value="Diploma" className="bg-blue-950">Diploma</option>
                                <option value="Other" className="bg-blue-950">Other</option>
                            </select>
                        </div>

                        {/* Experience Dropdown */}
                        <div>
                            <label htmlFor="experience" className="block text-white mb-1">Experience*</label>
                            <select
                                id="experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                className="w-full bg-transparent text-white border-b border-gray-500 pb-2 focus:outline-none focus:border-blue-400 appearance-none"
                            >
                                <option value="">Select</option>
                                <option value="None" className="bg-blue-950">None</option>
                                <option value="0-1 Years" className="bg-blue-950">0-1 Years</option>
                                <option value="1-3 Years" className="bg-blue-950">1-3 Years</option>
                                <option value="3+ Years" className="bg-blue-950">3+ Years</option>
                            </select>
                        </div>

                        {/* Attach File & Submit */}
                        <div className="flex justify-between items-center pt-4">
                            <label htmlFor="file-upload" className="cursor-pointer flex items-center text-white hover:text-blue-400 transition-colors">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                                Attach file
                                <input
                                    id="file-upload"
                                    name="file"
                                    type="file"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </label>
                            <button
                                onClick={handleSubmit}
                                className="bg-blue-500 hover:bg-blue-700 text-white px-12 py-3 rounded transition-colors"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
