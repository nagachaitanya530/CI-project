"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";

export default function LeadCaptureModal() {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const alreadySubmitted = localStorage.getItem("popupClosed");
    if (!alreadySubmitted) {
      const timeout = setTimeout(() => setShow(true), 1000); // Show after 1 sec
      return () => clearTimeout(timeout);
    }
  }, []);

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    setShow(false);
    localStorage.setItem("popupClosed", "true"); // Optional: prevent re-show
    // TODO: send `data` to your backend API
  };

  if (!show) return null;

  return (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white rounded-lg w-full max-w-3xl shadow-xl p-6 relative flex flex-col md:flex-row gap-6">
        {/* Left Side - Image */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src="/student.png"
            alt="Student"
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow text-sm font-semibold">
            🎉 Celebrating The Spirit
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">We are here to help.</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">What course are you looking for? *</label>
              <select {...register("course", { required: true })} className="w-full border rounded px-3 py-2">
                <option value="">- Select -</option>
                <option value="Spoken English">Spoken English</option>
                <option value="IELTS">IELTS</option>
                <option value="TOEFL">TOEFL</option>
                <option value="Study Abroad Counseling">Study Abroad Counseling</option>
              </select>
              {errors.course && <p className="text-red-500 text-xs">This field is required</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Your Name *</label>
              <input
                {...register("name", { required: true })}
                className="w-full border rounded px-3 py-2"
                placeholder="E.g. Abhinav Mohan"
              />
              {errors.name && <p className="text-red-500 text-xs">This field is required</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                {...register("phone")}
                className="w-full border rounded px-3 py-2"
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                {...register("email", { required: true })}
                className="w-full border rounded px-3 py-2"
                placeholder="Email Address"
              />
              {errors.email && <p className="text-red-500 text-xs">This field is required</p>}
            </div>

            <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded w-full">
              Submit
            </button>
          </form>
        </div>

        {/* Close Button */}
        <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
          <X size={24} />
        </button>
      </div>
    </div>
  );
}
