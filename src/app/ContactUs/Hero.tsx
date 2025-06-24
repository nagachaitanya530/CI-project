"use client"

import type React from "react"
import Navigation from "../_components/navigation1"

import { useState, useEffect } from "react"
import { ArrowRight, Play, Star, Users, Award, Zap, ChevronDown } from "lucide-react"

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
}: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const FloatingElement = ({
  children,
  delay = 0,
  className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) => {
  return (
    <div
      className={`animate-float ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: "6s",
        animationIterationCount: "infinite",
      }}
    >
      {children}
    </div>
  )
}

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  )
}

const HeroSection = () => {



  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "Fast Response" },
    { icon: <Award className="w-5 h-5" />, text: "Award-Winning institute" },
    { icon: <Users className="w-5 h-5" />, text: "24/7 Expert Support" },
  ]



  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="  bg-gradient-to-br from-blue-900 to-slate-600 overflow-hidden mb-12">
      <Navigation />
      {/* Background Elements */}
      <ParticleBackground />

      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <FloatingElement delay={0} className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" children={undefined} />
        <FloatingElement
          delay={1}
          className="absolute top-40 right-20 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl" children={undefined} />
        <FloatingElement
          delay={2}
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl" children={undefined} />
        <FloatingElement
          delay={1.5}
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl" children={undefined} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Contact Us For
                <br />
                Any Queries
                <br />

              </h1>


            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                >
                  <div className="text-blue-400">{feature.icon}</div>
                  <span className="text-white text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Lets Discuss Together
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>


            </div>

            {/* Stats */}

          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative">
              {/* Glassmorphism Card */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                {/* Mock Dashboard/Interface */}

                {/* Header */}
                <div className="flex items-center justify-between">
                  <img src="./home/63bbf22710f7d2fedab33ea2_contact us.svg"
                    alt="Logo"
                    className="rounded-xl w-full object-cover" />

                </div>

                {/* Chart Area */}


                {/* Status Cards */}



                {/* Floating Elements */}
                <FloatingElement
                  delay={0}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-lg shadow-lg" children={undefined} />
                <FloatingElement
                  delay={1}
                  className="absolute -bottom-2 -left-2 w-6 h-6 bg-cyan-500 rounded-full shadow-lg" children={undefined} />
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl -z-10 transform scale-110"></div>
            </div>
          </div>
        </div>

        {/* Client Logos */}


        {/* Scroll Indicator */}

      </div>

      {/* Video Modal */}


      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default HeroSection
