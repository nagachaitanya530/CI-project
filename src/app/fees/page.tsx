"use client"; 

import React from 'react';
import Navigation from "../_components/Navigation";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { useRouter } from 'next/navigation'; 
import { Phone,MessageCircle } from 'lucide-react';
import Footer from '../_components/Footer'

const FeesPage = () => {
  const router = useRouter();

  const handleExploreClick = (packageType: string) => {
    router.push(`/fees/${packageType}`);
  };
const ROUTES = {
  IELTS_GENERAL: 'ieltsgeneralpackage',
  IELTS_ACADEMIC: 'ieltsacademicpackage',
  SPOKEN_ENGLISH: 'spokenenglishpackage',
  FOREIGN_LANGUAGE: 'foreignlanguagepackage',
  KIDS_LANGUAGE: 'kidslanguagepackage',
  TEST_SERIES: 'testseriespackage',
};
  return (
    <>
      <Navigation />

      {/* Get started now section */}
     <section className="bg-gradient-to-br from-pink-500 via-purple-500 to-purple-700 min-h-screen flex items-center justify-center px-6 lg:px-12">
  <div className="container mx-auto text-center">
          <h2 className="text-lg md:text-2xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 lg:mb-12">
            Get Started Now
          </h2>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed">
            Choose any of the packages depending upon your need or if you're confused you can talk to us directly to decide what's best for you
          </p>

   <div className="flex items-center justify-center">
        <div className="bg-white rounded-full p-1 shadow-xl">
            <div className="flex items-center">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 lg:px-8 xl:px-10 py-2 lg:py-3 xl:py-4 rounded-full transition-colors duration-300 flex items-center gap-2 min-w-[140px] lg:min-w-[180px] xl:min-w-[200px] text-sm lg:text-base xl:text-lg">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </button>

                <div className="text-gray-700 px-4 lg:px-6 xl:px-8 py-2 lg:py-3 xl:py-4 font-medium text-sm lg:text-base xl:text-lg">
                  OR
                </div>

                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 lg:px-8 xl:px-10 py-2 lg:py-3 xl:py-4 rounded-full transition-colors duration-300 flex items-center gap-2 min-w-[140px] lg:min-w-[180px] xl:min-w-[200px] text-sm lg:text-base xl:text-lg">
                  <Phone className="w-4 h-4" /> Call us
                </button>
            </div>
        </div>
   </div>
</div>
</section>


        {/* Packages Section */}
    
<section className="pt-10 lg:pt-16 xl:pt-20 pb-24 lg:pb-32 xl:pb-40 px-8 lg:px-16 xl:px-24 bg-background">

        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* IELTS General Package */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 relative overflow-hidden">
                  <img 
                    src="/fees/ieltsgeneral.webp"
                    alt="IELTS Study Material"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-900 shadow-lg border border-gray-200">
                    IELTS
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-center">IELTS General Packages</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">Choose from many different options</p>
                <Button 
                  className="w-full bg-purple-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300"
                  onClick={() => handleExploreClick(ROUTES.IELTS_GENERAL)}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>

            {/* IELTS Academic Package */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 relative overflow-hidden">
                  <img 
                    src="/fees/ieltsacademic.webp" 
                    alt="IELTS Study Material"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-900 shadow-lg border border-gray-200">
                    IELTS
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-center">IELTS Academic Packages</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">Choose from many different options</p>
                <Button 
                  className="w-full bg-purple-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300"
                  onClick={() => handleExploreClick(ROUTES.IELTS_ACADEMIC)}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>

            {/* Spoken English Package */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 relative overflow-hidden">
                  <img 
                    src="/fees/spokenenglish.webp" 
                    alt="IELTS Study Material"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-900 shadow-lg border border-gray-200">
                    ENGLISH
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-center">Spoken English Packages</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">Choose from many different options</p>
                <Button 
                  className="w-full bg-purple-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300"
                  onClick={() => handleExploreClick(ROUTES.SPOKEN_ENGLISH)}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>

            {/* Foreign Language Packages */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 relative overflow-hidden">
                  <img 
                    src="/fees/foreignlan.webp" 
                    alt="Foreign Language Study Material"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-900 shadow-lg border border-gray-200">
                    Foreign Languages
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-center">Foreign Language Packages</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">Choose from many different options</p>
                <Button 
                  className="w-full bg-purple-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300"
                  onClick={() => handleExploreClick(ROUTES.FOREIGN_LANGUAGE)}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>

            {/* Kids Language Packages */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 relative overflow-hidden">
                  <img 
                    src="/fees/kidslan.webp" 
                    alt="Kids Language Study Material"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-900 shadow-lg border border-gray-200">
                    Kids Programmes
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-center">Kids Language Packages</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">Choose from many different options</p>
                <Button 
                  className="w-full bg-purple-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300"
                  onClick={() => handleExploreClick(ROUTES.KIDS_LANGUAGE)}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>

          {/* Test Series IELTS/TOEFL/PTE/OET/ CELPIP */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 relative overflow-hidden">
                  <img 
                    src="/fees/testseries.webp" 
                    alt="Kids Language Study Material"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-900 shadow-lg border border-gray-200">
                    Test Series Packages
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-center">Test Series Packages</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">Choose from many different options</p>
                <Button 
                  className="w-full bg-purple-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300"
                  onClick={() => handleExploreClick(ROUTES.TEST_SERIES)}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
            
          </div>
        </div>
       
      </section>
        
      <Footer />
    </>
    
  );
   
};

export default FeesPage;
