'use client';
import NavigationSection from "../_components/navigation1"
import FooterSection from "../_components/footer1"
import YourJourney from "../_components/study-abroad/your-journey"
import Hero_Section from "../_components/Visa-assistance/hero"
import VisaDetails from "../_components/Visa-assistance/VisaDetails"
import VisaSteps from "../_components/Visa-assistance/VisaSteps"
import ConsultationForm from "../_components/study-abroad/Germany/ConsultationForm"
import { useState } from 'react';



export default function Visa_Assistance() {
    const [showModal, setShowModal] = useState(false);
    return (
        <><NavigationSection />
            <Hero_Section onFreeConsultClick={() => setShowModal(true)} />
            <>
                <ConsultationForm show={showModal} onClose={() => setShowModal(false)} />
            </>
            <VisaDetails />
            <VisaSteps />
            <YourJourney />
            <FooterSection /></>


    )
}