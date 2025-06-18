"use client"

import type React from "react"
import Footer from "../_components/Footer"
import HeroSection from "./Hero"
import { useState, type FC, type ReactNode } from "react"
import { Mail, Phone, MapPin, Users, ArrowRight ,Linkedin,Twitter,Facebook,Instagram, Factory } from "lucide-react"

const RevealOnScroll: FC<{ children: ReactNode; className?: string; delay?: number }> = ({
  children,
  className = "",
  delay = 0,
}) => {
  return <div className={className}>{children}</div>
}

const AnimatedButton: FC<{
  children: ReactNode
  type: "submit" | "button" | "reset"
  size?: string
  className?: string
  disabled?: boolean
}> = ({ children, type, size, className, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`rounded-lg font-medium transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null as string | null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to send details")
      }

      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      })

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: "",
      })
    } catch (error: any) {
      console.error("Submission error:", error)
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: error.message,
      })
      alert(error.message || "Failed to send details. Please try again.")
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      title: "Call Us",
      content: "+91(953)263-4109",
      action: "tel:+91(953)263-4109",
      actionText: "Call now",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      title: "Email Us",
      content: "support@aalionsinfotech.com",
      action: "mailto:support@aalionsinfotech.com",
      actionText: "Send email",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      title: "Visit Us",
      content: "Noida-Greater Noida Expy, Sector 144",
      action: "https://maps.google.com",
      actionText: "Get directions",
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: "Our Team",
      content: "Available 24/7 ",
      action: "/about",
      actionText: "Meet our experts",
    },
  ]

  

  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin/>, url: "https://linked-in.com" },
    { name: "Twitter", icon: <Twitter/>, url: "https://twitter.com" },
    { name: "Facebook", icon: <Facebook/>, url: "https://facebook.com" },
    { name: "Instagram", icon: <Instagram/>, url: "https://instagram.com" },
  ]

  return (
    <div>
    

<HeroSection />

    <section id="contact" className="py-10 container px-4  mb-8 mx-auto bg-gradient-to-br from-blue-950 to-slate-700  rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/dots-pattern.svg')] opacity-5" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-400 opacity-5 blur-2xl" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-indigo-500 opacity-10 blur-2xl" />
      </div>

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-400/20 text-blue-200 font-medium text-sm tracking-wide mb-3 backdrop-blur-sm">
            Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
           
            With Your <span className="text-blue-300"> Questions</span>
            </h2>
            <p className="text-base text-blue-200 max-w-xl mx-auto -mb-2">
            Tell us about yourself so we can give you a personalized demo.
            </p>
          </div>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Contact Info */}
        <RevealOnScroll className="lg:col-span-5">
          <div className="bg-gradient-to-br from-blue-850 to-blue-800 rounded-2xl shadow-xl p-6 h-full border border-blue-700/30 relative z-10 backdrop-blur-sm">
            <div className="relative z-10 space-y-5 mb-8">
              <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-blue-600/20">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200 text-base">{item.title}</h4>
                    <p className="text-white text-sm">{item.content}</p>
                    {item.action && (
                      <a
                        href={item.action}
                        className="text-xs font-medium text-blue-300 hover:text-blue-200 flex items-center gap-1 group-hover:underline"
                        target={item.action.startsWith("http") ? "_blank" : ""}
                        rel="noopener noreferrer"
                      >
                        {item.actionText}
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-blue-700/30 pt-5">
              <h4 className="font-semibold text-white mb-4 text-sm">Follow Our Journey</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-400/50 hover:bg-blue-600 transition-colors duration-300 shadow-md shadow-blue-800/20 border border-blue-700/30"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                   {social.icon} 
                  </a>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Contact Form */}
        <RevealOnScroll delay={200} className="lg:col-span-7">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-200/30 relative z-10">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your learning</h3>

              {formStatus.isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Message Received!</h4>
                  <p className="text-green-700 mb-6">We'll contact you soon.</p>
                  <button
                    onClick={() => setFormStatus({ isSubmitting: false, isSubmitted: false, error: null })}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {formStatus.error && (
                    <div className="text-sm bg-red-50 text-red-700 p-4 rounded-lg border border-red-200">
                      {formStatus.error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500"
                      />
                    </div>
                   
                  </div>

                 

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                     Add Query *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us more about your project requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500 resize-vertical"
                    />
                  </div>

                

                  <AnimatedButton
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-4 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    disabled={formStatus.isSubmitting}
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </AnimatedButton>
                </form>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
      <Footer />
    </div>
  )
}

export default Contact
