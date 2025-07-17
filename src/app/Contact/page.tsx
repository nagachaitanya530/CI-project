'use client'
import React from 'react'
import ContactForm from './ContactForm'
import OurLocationSection from './OurLocationSection'
import Navigation from '../_components/navigation1'
import YourJourney from '../_components/study-abroad/your-journey'
import Footer from '../_components/footer1'


const page = () => {
  return (
   <>
    <Navigation />
    <ContactForm />
    <OurLocationSection />  
    <YourJourney />
    <Footer />
   </>
  )
}

export default page