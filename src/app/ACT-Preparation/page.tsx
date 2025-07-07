"use client";
import NavigationSection from "../_components/navigation1"
import FooterSection from "../_components/footer1"
import YourJourney from "../_components/study-abroad/your-journey"
import Hero from "../_components/ACT-Preparation/Hero"
import Scrollingnavbar from "~/app/_components/ACT-Preparation/Scrollingnavbar"
import Overview from "~/app/_components/ACT-Preparation/Overview"
import Pattern from "~/app/_components/ACT-Preparation/Pattern"
import Syllabus from "../_components/ACT-Preparation/Syllabus"
import Score from "../_components/ACT-Preparation/Score"
import Dates from "../_components/ACT-Preparation/Dates"
import Training from "../_components/ACT-Preparation/Training"
import Miscellaneous from "../_components/ACT-Preparation/Miscellaneous"
import FAQ from "../_components/ACT-Preparation/FAQ"
import SuccessStories from "../_components/study-abroad/Germany/SuccessStories"
import ConsultationForm from "../_components/study-abroad/study-abroad-france/ConsultationForm"
import { useState } from 'react'




export default function ACT_Preparation() {
    const [showModal, setShowModal] = useState(false);
    return (
        <><NavigationSection />

           <Hero onFreeConsultClick={() => setShowModal(true)} />
            <>
      <ConsultationForm show={showModal} onClose={() => setShowModal(false)} />
    </>
<<<<<<< HEAD
=======
            
>>>>>>> cost-of-studying-usa
            <Scrollingnavbar/>
            <Overview/>
            <Pattern/>
            <Syllabus />
            <Score />
            <Dates />
<<<<<<< HEAD
            <Training />
            <Miscellaneous />
            <FAQ/>
            <SuccessStories/>
            <YourJourney />
            <FooterSection />
    </>
=======
             <Training />
             <Miscellaneous />
             <FAQ/>
             <SuccessStories/>
           

            <YourJourney />
            <FooterSection />


        </>

>>>>>>> cost-of-studying-usa

    )
}