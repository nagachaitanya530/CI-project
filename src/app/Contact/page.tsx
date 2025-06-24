'use client'
import React from 'react'
import ContactForm from './ContactForm'
import OurLocationSection from './OurLocationSection'
import Navigation from '../_components/navigation1'
import GetStartedBanner from '../_components/study-abroad/study-mauritius/GetStartedBanner'
import Footer from '../_components/footer1'


const page = () => {
  return (
   <>
    <Navigation />
    <ContactForm />
    <OurLocationSection />  
    <GetStartedBanner />
    <Footer />
   </>
  )
}

export default page