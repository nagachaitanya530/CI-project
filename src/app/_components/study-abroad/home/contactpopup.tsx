import { useState, type ChangeEvent, type FormEvent } from 'react';
import { X, Mail, Upload, Check, Calendar } from 'lucide-react';
import BookingConsultation from './BookingConsultant';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Label } from '~/components/ui/label';
import { Controller, useForm } from 'react-hook-form';

type ContactPopupProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
};

interface FormData {
    name: string;
    email: string;
    message: string;
    country: string
    course: string;
}

const ContactPopup = ({ isOpen, onClose, title = "Virtual meeting", description }: ContactPopupProps) => {
    const { control, handleSubmit: handleFormSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
        country: '',
        course: ''
    });
    const [showBooking, setShowBooking] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };



    const handleRemoveFile = () => {
        setFormData(prev => ({
            ...prev,
            file: null
        }));
    };

    const onSubmit = async (data: any) => {
        const formDataToSend = new FormData();

        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('message', formData.message);
        formDataToSend.append('studyCourse', data.course);
        formDataToSend.append('studyCountry', data.Country);

    };
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
                <div className="bg-blue-950 rounded-xl shadow-2xl w-full max-w-5xl animate-fade-in text-white my-4 max-h-[90vh] overflow-y-auto">
                    {/* Header */}
                    <div className="border-b border-black p-4 sm:p-6 flex justify-between items-center sticky top-0 bg-blue-950 z-10">
                        <h2 className="text-3xl font-bold">{title}</h2>
                        <button
                            onClick={onClose}
                            className="text-blue-300 hover:text-white p-2 rounded-full hover:bg-blue-800 transition-colors"
                            aria-label="Close popup"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-4 sm:p-6 md:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                            <div>
                                <div className="flex items-center text-white mb-6 flex-wrap">
                                    <Mail size={20} className="mr-2" />
                                    <span className="text-sm sm:text-base md:text-lg">
                                        Email us: <span className="font-semibold">support@xxxxxxxxxx.com</span>
                                    </span>
                                </div>

                                <form onSubmit={handleFormSubmit(onSubmit)} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-1 sm:mb-2">
                                            Full Name<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white border border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-black placeholder-gray-600"
                                            placeholder="John Smith"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white mb-1 sm:mb-2">
                                            Email Address<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white border border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-black placeholder-gray-600"
                                            placeholder="name@company.com"
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <Label className="text-white text-sm mb-2 block">When do you plan to study?</Label>
                                            <Controller
                                                name="Courses"
                                                control={control}
                                                rules={{ required: "Please select a Courses" }}
                                                render={({ field }) => (
                                                    <Select onValueChange={field.onChange} value={field.value}>
                                                        <SelectTrigger
                                                            className={`bg-transparent border-2 text-white h-12 rounded-lg ${errors.course ? "border-red-400" : "border-white/30"}`}
                                                        >
                                                            <SelectValue placeholder="Select Month" className="text-white/60" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {[
                                                                "Bachelors", "Masters", "Phd", "Diploma"
                                                            ].map(course => (
                                                                <SelectItem key={course.toLowerCase()} value={course.toLowerCase()}>
                                                                    {course}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                            {errors.course && (
                                                <p className="text-red-300 text-xs mt-1">
                                                    {errors.course.message as string}
                                                </p>
                                            )}
                                        </div>

                                        <div className="gap-4">
                                            <div>
                                                <Label className="text-white text-sm mb-2 block">Country you want to study?</Label>
                                                <Controller
                                                    name="StudyCountry"
                                                    control={control}
                                                    rules={{ required: "Please select a Country" }}
                                                    render={({ field }) => (
                                                        <Select onValueChange={field.onChange} value={field.value}>
                                                            <SelectTrigger
                                                                className={`bg-transparent border-2 text-white h-12 rounded-lg ${errors.country ? "border-red-400" : "border-white/30"}`}
                                                            >
                                                                <SelectValue placeholder="Select Country" className="text-white/60" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {[
                                                                    "INDIA", "USA", "UK", "CANADA", "NEW ZEALAND", "NETHER LAND", "FRANCE", "ITALY", "SPAIN", "SWITZER LAND", "IRELAND", "AUSTRALIA",
                                                                    "MALASYIA", "SINGAPORE", "GERMANY"
                                                                ].map(country => (
                                                                    <SelectItem key={country.toLowerCase()} value={country.toLowerCase()}>
                                                                        {country}
                                                                    </SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                    )}
                                                />
                                                {errors.country && (
                                                    <p className="text-red-300 text-xs mt-1">
                                                        {errors.country.message as string}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <p className="mt-1 sm:mt-2 text-xs text-white">
                                            Your data is protected in accordance with our Privacy Notice.
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                                        <button
                                            type="submit"
                                            className="w-full sm:w-48 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg"
                                        >
                                            Send
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowBooking(true)}
                                            className="w-full sm:w-64 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                                        >
                                            <Calendar className="mr-2" size={20} />
                                            Book Consultation
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="space-y-4 sm:space-y-6 mt-6 lg:mt-0">
                                <div className="bg-blue-800/30 border border-blue-700 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                                    <h3 className="text-xl sm:text-xl font-semibold text-white mb-3 sm:mb-4">Premium Services</h3>
                                    <p className="text-blue-100 mb-4 sm:mb-5 text-sm sm:text-base">
                                        Our team provides expert services tailored to your business needs.
                                    </p>
                                    <ul className="space-y-2 sm:space-y-3">
                                        {['University & Course Selection', 'Application Guidance', 'Visa & Immigration Assistance', 'Financial Planning & Scholarship Information'].map((item) => (
                                            <li key={item} className="flex items-start">
                                                <Check size={18} className="text-green-400 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                                                <span className="text-blue-100 text-sm sm:text-base">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showBooking && (
                <BookingConsultation onClose={() => setShowBooking(false)} />
            )}
        </>
    );
};

export default ContactPopup;