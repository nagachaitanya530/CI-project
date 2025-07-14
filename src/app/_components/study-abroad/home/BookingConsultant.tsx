"use client"
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { X, ChevronLeft, Calendar, Check, Users, Shield, Clock } from 'lucide-react';

interface BookingConsultationProps {
    onClose: () => void;
}

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    guests: string[];
    newGuestEmail: string;
    acceptCommunications: boolean;
}

const BookingConsultation = ({ onClose }: BookingConsultationProps) => {
    const [step, setStep] = useState<number>(1);
    const [selectedDate, setSelectedDate] = useState<Date>(() => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    });
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        guests: [],
        newGuestEmail: '',
        acceptCommunications: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Generate time slots
    const generateTimeSlots = () => {
        const startHour = 9;
        const endHour = 19;
        const slots: string[] = [];

        for (let hour = startHour; hour < endHour; hour++) {
            slots.push(formatTime(hour, 0));
            if (hour < endHour - 1) {
                slots.push(formatTime(hour, 30));
            }
        }
        return slots;
    };

    const formatTime = (hour: number, minutes: number): string => {
        const date = new Date();
        date.setHours(hour);
        date.setMinutes(minutes);
        return date.toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };

    const timeSlots = generateTimeSlots();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddGuest = () => {
        if (formData.newGuestEmail && formData.guests.length < 10) {
            setFormData(prev => ({
                ...prev,
                guests: [...prev.guests, prev.newGuestEmail],
                newGuestEmail: ''
            }));
        }
    };

    const handleRemoveGuest = (index: number) => {
        setFormData(prev => ({
            ...prev,
            guests: prev.guests.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('http://localhost:5000/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    selectedDate,
                    selectedTime
                }),
            });

            if (!res.ok) throw new Error('Booking failed');

            alert('Booking confirmed!');
            onClose();
        } catch (err) {
            console.error('Booking error:', err);
            alert('Booking failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-start justify-center z-50 p-4 overflow-y-auto pt-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-2xl w-full max-w-2xl animate-fade-in mb-8">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-xl p-4 flex justify-between items-center text-white">
                    <button
                        onClick={step === 1 ? onClose : () => setStep(1)}
                        className="p-1 rounded-full hover:bg-white/10 transition-colors"
                        aria-label={step === 1 ? 'Close' : 'Back'}
                    >
                        {step === 1 ? <X size={24} /> : <ChevronLeft size={24} />}
                    </button>
                    <h2 className="text-xl font-bold">
                        {step === 1 ? 'Book a Consultation' : 'Complete Your Booking'}
                    </h2>
                    <div className="w-6" />
                </div>

                <div className="flex justify-center py-4">
                    <div className="flex items-center space-x-4 text-sm">
                        <div className={`flex items-center ${step === 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center shadow-md ${step === 1 ? 'bg-blue-600 text-white' : step > 1 ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                                {step > 1 ? <Check size={16} /> : '1'}
                            </div>
                            <span className="ml-2 font-medium">Choose Time</span>
                        </div>
                        <div className={`h-px w-8 ${step > 1 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <div className={`flex items-center ${step === 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center shadow-md ${step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                                2
                            </div>
                            <span className="ml-2 font-medium">Your Info</span>
                        </div>
                    </div>
                </div>

                {step === 1 && (
                    <div className="p-6">
                        <div className="flex flex-col items-center justify-center text-center mb-6 w-full">

                            <div className="flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4 w-12 h-12">
                                <Calendar size={24} className="text-blue-600" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                                Book a virtual meet
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Select a date and time for your 30-minute consultation.
                            </p>
                        </div>
                        <div className='flex justify-center w-full'>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date: Date | null) => {
                                    if (date) {
                                        setSelectedDate(date);
                                        setSelectedTime(null);
                                    }
                                }}
                                minDate={new Date()}
                                inline
                                className=" border rounded-lg overflow-hidden"
                            />
                        </div>

                        <div className="mt-6">
                            <div className="flex items-center mb-4">
                                <Clock size={18} className="text-blue-600 mr-2" />
                                <label className="font-medium text-gray-700">
                                    Available Time Slots
                                </label>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                {timeSlots.map((time) => (
                                    <button
                                        key={time}
                                        type="button"
                                        onClick={() => setSelectedTime(time)}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${selectedTime === time
                                            ? 'bg-blue-600 text-white border-blue-600'
                                            : 'bg-white text-gray-700 border hover:border-blue-400'
                                            } border`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center mt-8">
                            <button
                                type="button"
                                onClick={() => selectedTime && setStep(2)}
                                disabled={!selectedTime}
                                className={`px-8 py-3 rounded-lg font-medium ${selectedTime
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                Continue to Details
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="p-6">
                        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="flex items-start">
                                <Calendar size={20} className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">
                                        {selectedDate.toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </h3>
                                    <p className="text-gray-600 font-medium">
                                        {selectedTime}
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="ml-2 text-blue-600 hover:text-blue-800 hover:underline text-sm"
                                        >
                                            Edit
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        First name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Last name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <div className="flex items-center mb-4">
                                    <Shield size={18} className="text-blue-600 mr-2" />
                                    <h3 className="text-lg font-bold text-gray-800">Data privacy</h3>
                                </div>
                                <div className="p-4 bg-white rounded-lg border border-gray-200 text-sm text-gray-600 space-y-3">
                                    <p>
                                        Our Consultancy is committed to protecting and respecting your privacy.
                                    </p>
                                    <div className="flex items-start">
                                        <input
                                            type="checkbox"
                                            id="acceptCommunications"
                                            name="acceptCommunications"
                                            checked={formData.acceptCommunications}
                                            onChange={(e) => setFormData({ ...formData, acceptCommunications: e.target.checked })}
                                            className="mt-1 mr-2"
                                        />
                                        <label htmlFor="acceptCommunications" className="cursor-pointer">
                                            I agree to receive other communications.
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
                                >
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-70"
                                >
                                    {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingConsultation;