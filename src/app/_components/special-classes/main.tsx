
'use client'
import React, { useEffect, useState } from 'react';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import {Newspaper, Mic, Users, Star, CheckCircle, Award,Clock, MessageCircle, HelpCircle, Quote, Video
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const TARGET_DATE = new Date('2025-07-01T00:00:00');
export default function SpokenWithPDCCPage() {
    const [timeLeft, setTimeLeft] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = TARGET_DATE.getTime() - now;
            if (distance <= 0) {
                setTimeLeft('Batch has started!');
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleCalendlyBooking = () => {
        window.open('https://calendly.com/pdcc-free-consultation', '_blank');
    };

    const handleWhatsApp = () => {
        window.open('https://wa.me/919000000000?text=I%20want%20to%20enquire%20about%20PDCC%20Spoken%20English%20course', '_blank');
    };

    return (
        <motion.div
            className="min-h-screen bg-white text-gray-800 p-6 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <section className="text-center py-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Spoken English with PDCC</h1>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                    A premium spoken English and communication training course designed for students, professionals, and job-seekers who want to speak fluently, confidently, and with impact.
                </p>
                <a href='/enrollment'>
                <Button className="text-lg px-6 py-3">Enroll Now</Button></a>
            </section>

            <section className="py-10">
                <h2 className="text-3xl font-semibold text-center mb-8">What’s Included in the Program</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: '1:1 Mentorship', description: 'Work closely with a personal mentor for feedback and progress tracking.', icon: <Users /> },
                        { title: 'Daily Newspaper Discussion', description: 'Improve vocabulary and comprehension.', icon: <Newspaper /> },
                        { title: 'Communication Building', description: 'Interactive tasks and exercises.', icon: <Mic /> },
                        { title: 'Public Speaking Practice', description: 'Weekly presentations and speeches.', icon: <Star /> },
                        { title: 'Real-Life Scenarios', description: 'Mock interviews and group discussions.', icon: <CheckCircle /> },
                        { title: 'Completion Certificate', description: 'Official certification to boost your resume.', icon: <Award /> },
                    ].map((f, i) => (
                        <Card key={i} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="bg-blue-100 p-2 rounded-full">{f.icon}</div>
                                    <h3 className="text-xl font-semibold">{f.title}</h3>
                                </div>
                                <p className="text-gray-600">{f.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="py-12 text-center">
                <div className="inline-flex items-center gap-3 justify-center mb-4">
                    <Clock className="w-6 h-6 text-blue-500" />
                    <p className="text-xl font-semibold">
                        Next Batch Starts In: <span className="text-red-600">{timeLeft}</span>
                    </p>
                </div>
                <p className="text-gray-600">Enroll early to secure your seat!</p>
            </section>

            <section className="py-12 bg-white">
                <h2 className="text-3xl font-semibold text-center mb-8">Skills You'll Master</h2>
                <div className="flex flex-wrap justify-center gap-4 text-gray-700 max-w-4xl mx-auto">
                    {['Fluency', 'Articulation', 'Listening', 'Public Speaking', 'Pronunciation', 'Vocabulary', 'Grammar Usage', 'Interview Handling'].map((skill, i) => (
                        <span key={i} className="px-4 py-2 bg-blue-100 rounded-full text-sm font-medium">{skill}</span>
                    ))}
                </div>
            </section>

            <section className="py-12 max-w-5xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-6">Weekly Curriculum Overview</h2>
                <ul className="space-y-4 text-gray-700">
                    <li><strong>Week 1:</strong> Fluency assessment, grammar foundation</li>
                    <li><strong>Week 2:</strong> Vocabulary via newspapers, dialogues</li>
                    <li><strong>Week 3:</strong> Communication games & etiquette</li>
                    <li><strong>Week 4:</strong> Debate, interview prep</li>
                    <li><strong>Week 5:</strong> Presentation, storytelling</li>
                    <li><strong>Week 6:</strong> Final evaluation, certification</li>
                </ul>
            </section>

            <section className="py-12 bg-gray-50 text-center">
                <h2 className="text-3xl font-semibold mb-8">Who Should Join This Course?</h2>
                <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto text-gray-700">
                    <div className="p-4 bg-white shadow rounded-lg">Students preparing for placements</div>
                    <div className="p-4 bg-white shadow rounded-lg">Working professionals</div>
                    <div className="p-4 bg-white shadow rounded-lg">Job-seekers needing fluency boost</div>
                </div>
            </section>

            <section className="py-12 bg-white text-center">
                <h2 className="text-3xl font-semibold mb-6">Meet Your Trainer</h2>
                <div className="max-w-3xl mx-auto">
                    <img src="/trainer.jpg" alt="Trainer" className="w-32 h-32 mx-auto rounded-full mb-4 shadow-md" />
                    <h3 className="text-xl font-bold">Ms. Priya D. Choudhary</h3>
                    <p className="text-gray-700">12+ years as a Communication Coach | Trained 2000+ learners</p>
                </div>
            </section>

            <section className="py-12 text-center bg-gray-100">
                <h2 className="text-3xl font-semibold mb-6">Watch a Glimpse of Our Training</h2>
                <div className="max-w-3xl mx-auto">
                    <iframe className="w-full aspect-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/your_video_id" title="Course Demo" allowFullScreen />
                </div>
            </section>

            <section className="text-center py-12 bg-gray-100 rounded-xl mt-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Course Fee & Inclusions</h2>
                <p className="text-lg text-gray-700 mb-2">₹25,000 – one-time payment</p>
                <Link href="/enrollment">
                    <Button className="text-lg px-6 py-3 mt-4">Pay & Enroll</Button>
                    </Link>
                
            </section>

            <section className="py-12 bg-green-50 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Confidence Guarantee</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
                    Complete the program and if you're not more fluent, we'll keep guiding you — or refund you.*
                </p>
                <p className="text-sm text-gray-500 italic">*Conditions apply</p>
            </section>

            {/* Registration Progress Bar */}
            <section className="py-12 bg-white text-center">
                <h2 className="text-3xl font-semibold mb-6">Registration Progress</h2>
                <div className="max-w-md mx-auto bg-gray-200 rounded-full h-6 relative">
                    <div className="bg-blue-600 h-6 rounded-full transition-all duration-500" style={{ width: '70%' }} />
                    <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-sm">70% Seats Filled</span>
                </div>
                <p className="text-gray-600 mt-3">Hurry! Limited seats left.</p>
            </section>

            <section className="py-12 text-center">
                <h2 className="text-3xl font-semibold mb-6">What Our Students Say</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        { name: 'Rohit', quote: 'This course transformed my confidence!', img: '/avatar1.jpg' },
                        { name: 'Sana', quote: 'The public speaking module is gold.', img: '/avatar2.jpg' },
                        { name: 'Kunal', quote: 'My mentor guided me like a coach.', img: '/avatar3.jpg' }
                    ].map((t, i) => (
                        <Card key={i} className="p-6 text-left">
                            <div className="flex items-center gap-3 mb-4">
                                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full" />
                                <div>
                                    <h4 className="font-semibold">{t.name}</h4>
                                    <p className="text-gray-500 text-sm">Student</p>
                                </div>
                            </div>
                            <p className="italic text-gray-700">“{t.quote}”</p>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="py-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4 text-left">
                    <div><h3 className="font-semibold">Is this for beginners?</h3><p className="text-gray-600">Yes! We start with a foundation assessment.</p></div>
                    <div><h3 className="font-semibold">Is there a certificate?</h3><p className="text-gray-600">Yes, issued after course completion.</p></div>
                    <div><h3 className="font-semibold">Can I attend at flexible times?</h3><p className="text-gray-600">Mostly live, recordings available.</p></div>
                </div>
            </section>

            <section className="text-center py-10">
                <h2 className="text-2xl font-bold mb-2">Still Have Questions?</h2>
                <p className="text-gray-600 mb-4">Talk to us on WhatsApp or book a free call.</p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-3" onClick={handleWhatsApp}>
                        WhatsApp Us
                    </Button>
                    <a href="/book-demo">
                    <Button className="text-lg px-6 py-3" onClick={handleCalendlyBooking}>
                        Book Free Demo
                    </Button>
                    </a>
                </div>
            </section>
        </motion.div>
    );
}