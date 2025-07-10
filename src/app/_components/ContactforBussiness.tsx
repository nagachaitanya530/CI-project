'use client'

import React, { use, type ChangeEvent, type FormEvent } from "react"
import { useState } from "react"

interface FormData {
    course: string;
    name: string;
    phone: string;
    email: string;
}
interface FormErrors {
    course?: string;
    name?: string;
    phone?: string;
    email?: string;
}
const BusinessForm = () => {
    const [formData, setFormData] = useState<FormData>({
        course: '',
        name: '',
        phone: '',
        email: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const courses = [
        'Spoken English',
        'Business English',
        'Kids English',
        'IELTS Preparation',
        'French Language',
        'German Language',
        'Spanish Language',
        'IELTS/TOEFL/PTE Preparation'
    ]
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (errors[name as keyof FormData]) {
            setErrors({
                ...errors,
                [name]: undefined
            })
        }
    }

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.course) newErrors.course = 'Please select a course';
        if (!formData.name.trim()) newErrors.name = 'Please enter your name';
        if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            setIsSubmitted(true);
        }
    }
    if (isSubmitted) {
        return (
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
                <p className="text-gray-700">
                    We've received your inquiry. Our team will contact you shortly to discuss your requirements.
                </p>
            </div>
        );
    }
    return (
        <section className="relative">

            <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-500 sm:rounded-l-full md:rounded-l-full  md:-mr-0 py-8 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto gap-6">
                <div className=" absoulute  top-11/12 mt-28 text-center left-1/2 transform text-white">
                    <h1 className="text-4xl font-bold  mb-4">For Businesses and Corporations
                    </h1><br />
                    <p > If you are looking to train your workforce in English language and communication skills,
                        we have an expert team to provide you just what your business requires. Get in touch
                        with us and we will have a detailed discussion with you to understand your needs and
                        to tell you how we can help.</p>
                </div>
                <div className="max-w-2xl mx-auto p-6 rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="">
                            <label className="block text-gray-700 font-medium " htmlFor="course">
                                what course are you looking for? *
                            </label>
                            <select
                                id="course"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                className={`w-full p-3 border bg-white mb-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.course ? 'border-red-500' : 'border-gray-300'}`}
                            >
                                <option value="">-Select-
                                </option>
                                {courses.map((course) => (
                                    <option key={course} value={course}>
                                        {course}
                                    </option>
                                ))}
                            </select>
                            {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium" htmlFor="name">
                                We would like to know your name to personalize. *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Eg: Abhinav Mohan"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full p-3 border bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium " htmlFor="phone">
                                Your contact number so that we can send you the details.
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+91 9569285185"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full p-3 border bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium" htmlFor="email">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full p-3 border bg-white rounded-lg focus:ring-2 focus:ring-white focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-28 h-12 text-center bg-blue-400 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BusinessForm;