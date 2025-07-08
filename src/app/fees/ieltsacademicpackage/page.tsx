"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import Navigation from "../../_components/Navigation";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "~/components/ui/card";
import Footer from '../../_components/Footer'

const IeltsGeneralPage = () => {
  const router = useRouter();
  const handleExploreClick = (packageType: string) => {
    router.push(`/fees/${packageType}`);
  };
  const ROUTES = {
    IELTS_TURBO: 'ieltsturbo',
    IELTS_SUPERFAST: 'ieltssuperfast',
    IELTS_COMPLETE: 'ieltscomplete',
    IELTS_FOUNDATION: 'ieltsfoundation',
  };


  return (
    <>
      <Navigation />
      {/*-------------------------------------------------------------CARD 1--------------------------------------------------------------------------------------------- */}
      <section className="mt-10 py-2 px-4 lg:px-8 bg-background min-h-min-h-screen">
        <div className="container mx-auto">
          {/* Rounded rectangle container for the course section */}
          <div className="bg-white rounded-2xl shadow-lg p-4 lg:p-6 mb-24 border border-black">
            <div className="grid lg:grid-cols-2 gap-6 items-start">

              {/* Left Column - Course Information */}
              <div className="space-y-3">
                {/* IELTS TURBO Branding */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-red-600">IELTS</span>
                  <span className="bg-blue-600 text-white font-bold px-1 py-1  text-lg">TURBO</span>
                </div>

                <div>
                  <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4">
                    IELTS Turbo : International English Language Testing System
                  </h1>
                  <p className="text-base text-gray-600 mb-3">
                    This course is intended for people who have quite a good understanding of English language in grammar. It is a fast paced Preparation program not intended for beginners.
                  </p>
                </div>

                {/* Instructor Information */}
                <div className="flex items-center gap-3 mb-3">
                  {/* Image */}
                  <img
                    src="/fees/britishcouncil.webp"
                    alt="British Council"
                    className="w-10 h-10 object-contain"
                  />

                  {/* Instructor Text */}
                  <div className="text-sm text-gray-700">
                    <div className="font-semibold">Instructors:</div>
                    <div>XYZ Trained & British Council Certified</div>
                  </div>
                </div>
                {/* KNOW MORE Button */}
                <Button
                  onClick={() => handleExploreClick(ROUTES.IELTS_TURBO)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 transition-all duration-300 mt-10"
                >
                  KNOW MORE
                </Button>

                {/* Price + EMI Info below button */}
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-xl font-bold text-red-600">₹5,990</p>
                  <p className="text-sm text-gray-500">(Credit/Debit EMI Available)</p>
                </div>

                {/* Enrolled count */}
                <p className="text-sm text-gray-800 font-semibold mt-0">
                  27,287 <span className="font-normal text-gray-600">already enrolled</span>
                </p>


              </div>

              {/* Right  */}
              <div>
                <Card className="py-0 shadow-lg overflow-hidden">
                  <CardHeader className="px-4 py-3 bg-gradient-to-r from-orange-100 to-blue-100 relative">
                    {/**/}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-orange-400 rounded-full opacity-20 -translate-y-6 translate-x-6"></div>
                    <div className="absolute top-2 right-8 w-8 h-8 bg-blue-400 rounded-full opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-10 h-10 bg-blue-500 opacity-20 -translate-x-5 translate-y-5"></div>

                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-lg font-bold text-blue-600">IELTS Turbo <br /> Group</span>
                          </div>
                          <div className="text-xs text-gray-600 mb-2">XYZ TestPrep</div>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-sm font-medium text-blue-600">4.8</span>
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm text-gray-500">(9,437 Ratings)</span>
                          </div>
                        </div>

                        {/* Course Image */}
                        <div className="flex-shrink-0">
                          <img
                            src="/fees/ielts-turbo.jpg"
                            alt="IELTS Course"
                            className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-4 py-3 space-y-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">IELTS Crash Course</h3>
                      <p className="text-gray-700 text-base mb-7">Super-fast IELTS preparation for advanced aspirants. Group of 10-15 Students</p>
                    </div>

                    <div className="border-t mb-0.5">

                      <h3 className="font-semibold text-gray-900 mb-2 mt-2 text-lg">Advanced Level</h3>
                      <p className="text-gray-700 text-base mb-7">Recommended Experience</p>

                    </div>

                    <div className="border-t mb-0.5">
                      <h3 className="font-semibold text-gray-900 mb-2 mt-4 text-base">Upto 1 months / 22+22 hours</h3>
                    </div>


                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*-------------------------------------------------------------CARD 2--------------------------------------------------------------------------------------------- */}
      <section className="py-2 px-4 lg:px-8 bg-background min-h-min-h-screen">
        <div className="container mx-auto">
          {/* Rounded rectangle container for the course section */}
          <div className="bg-white rounded-2xl shadow-lg p-4 lg:p-6 mb-24 border border-black">
            <div className="grid lg:grid-cols-2 gap-6 items-start">

              {/* Left Column - Course Information */}
              <div className="space-y-3">
                {/* IELTS TURBO Branding */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-red-600">IELTS</span>
                  <span className="bg-blue-600 text-white font-bold px-1 py-1  text-lg">SUPERFAST</span>
                </div>

                <div>
                  <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4">
                    IELTS Superfast : International English Language Testing System
                  </h1>
                  <p className="text-base text-gray-600 mb-3">
                    This course is a little faster, Best preparation programmes and comprehensive course if you do not have enough time to pay for Isles. This provides you the platform to make your preparation a little quick
                  </p>
                </div>

                {/* Instructor Information */}
                <div className="flex items-center gap-3 mb-3">
                  {/* Image */}
                  <img
                    src="/fees/britishcouncil.webp"
                    alt="British Council"
                    className="w-10 h-10 object-contain"
                  />

                  {/* Instructor Text */}
                  <div className="text-sm text-gray-700">
                    <div className="font-semibold">Instructors:</div>
                    <div>XYZ Trained & British Council Certified</div>
                  </div>
                </div>
                {/* KNOW MORE Button */}
                <Button
                  onClick={() => handleExploreClick(ROUTES.IELTS_SUPERFAST)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 transition-all duration-300 mt-10"
                >
                  KNOW MORE
                </Button>

                {/* Price + EMI Info below button */}
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-xl font-bold text-red-600">₹7,590</p>
                  <p className="text-sm text-gray-500">(Credit/Debit EMI Available)</p>
                </div>

                {/* Enrolled count */}
                <p className="text-sm text-gray-800 font-semibold mt-0">
                  12,587 <span className="font-normal text-gray-600">already enrolled</span>
                </p>


              </div>

              {/* Right  */}
              <div>
                <Card className="py-0 shadow-lg overflow-hidden">
                  <CardHeader className="px-4 py-3 bg-gradient-to-r from-orange-100 to-blue-100 relative">
                    {/**/}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-orange-400 rounded-full opacity-20 -translate-y-6 translate-x-6"></div>
                    <div className="absolute top-2 right-8 w-8 h-8 bg-blue-400 rounded-full opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-10 h-10 bg-blue-500 opacity-20 -translate-x-5 translate-y-5"></div>

                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-lg font-bold text-blue-600">IELTS SUPERFAST <br /> Group</span>
                          </div>
                          <div className="text-xs text-gray-600 mb-2">XYZ TestPrep</div>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-sm font-medium text-blue-600">4.8</span>
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm text-gray-500">(9,437 Ratings)</span>
                          </div>
                        </div>

                        {/* Course Image */}
                        <div className="flex-shrink-0">
                          <img
                            src="/fees/ielts-superfast.jpg"
                            alt="IELTS Course"
                            className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-4 py-3 space-y-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">IELTS Semi Crash Course</h3>
                      <p className="text-gray-700 text-base mb-7">Fast paced IELTS preparation for advanced aspirants. Group of 10-15 Students</p>
                    </div>

                    <div className="border-t mb-0.5">

                      <h3 className="font-semibold text-gray-900 mb-2 mt-2 text-lg">Intermediate Advanced Level</h3>
                      <p className="text-gray-700 text-base mb-7">Recommended Experience</p>

                    </div>

                    <div className="border-t mb-0.5">
                      <h3 className="font-semibold text-gray-900 mb-2 mt-4 text-base">Upto 1.5 months / 33+33 hours</h3>
                    </div>


                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*-------------------------------------------------------------CARD 3-------------------------------------------------------------------------------------------- */}
      <section className="py-2 px-4 lg:px-8 bg-background min-h-min-h-screen">
        <div className="container mx-auto">
          {/* Rounded rectangle container for the course section */}
          <div className="bg-white rounded-2xl shadow-lg p-4 lg:p-6 mb-24 border border-black">
            <div className="grid lg:grid-cols-2 gap-6 items-start">

              {/* Left Column - Course Information */}
              <div className="space-y-3">
                {/* IELTS TURBO Branding */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-red-600">IELTS</span>
                  <span className="bg-blue-600 text-white font-bold px-1 py-1  text-lg">COMPLETE</span>
                </div>

                <div>
                  <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4">
                    IELTS Complete : International English Language Testing System
                  </h1>
                  <p className="text-sm text-gray-600 mb-3">
                    This course is intended to provide training for IELTS from initial level. Comprises of general to advanced level English language training with IELTS specific course training
                  </p>
                </div>

                {/* Instructor Information */}
                <div className="flex items-center gap-3 mb-3">
                  {/* Image */}
                  <img
                    src="/fees/britishcouncil.webp"
                    alt="British Council"
                    className="w-10 h-10 object-contain"
                  />

                  {/* Instructor Text */}
                  <div className="text-sm text-gray-700">
                    <div className="font-semibold">Instructors:</div>
                    <div>XYZ Trained & British Council Certified</div>
                  </div>
                </div>

                {/* KNOW MORE Button */}
                <Button
                  onClick={() => handleExploreClick(ROUTES.IELTS_COMPLETE)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 transition-all duration-300 mt-10"
                >
                  KNOW MORE
                </Button>

                {/* Price + EMI Info below button */}
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-xl font-bold text-red-600">₹7,590</p>
                  <p className="text-sm text-gray-500">(Credit/Debit EMI Available)</p>
                </div>

                {/* Enrolled count */}
                <p className="text-sm text-gray-800 font-semibold mt-0">
                  12,587 <span className="font-normal text-gray-600">already enrolled</span>
                </p>


              </div>

              {/* Right  */}
              <div>
                <Card className="py-0 shadow-lg overflow-hidden">
                  <CardHeader className="px-4 py-3 bg-gradient-to-r from-orange-100 to-blue-100 relative">
                    {/**/}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-orange-400 rounded-full opacity-20 -translate-y-6 translate-x-6"></div>
                    <div className="absolute top-2 right-8 w-8 h-8 bg-blue-400 rounded-full opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-10 h-10 bg-blue-500 opacity-20 -translate-x-5 translate-y-5"></div>

                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-lg font-bold text-blue-600">IELTS Complete <br /> Group</span>
                          </div>
                          <div className="text-xs text-gray-600 mb-2">XYZ TestPrep</div>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-sm font-medium text-blue-600">4.8</span>
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm text-gray-500">(9,437 Ratings)</span>
                          </div>
                        </div>

                        {/* Course Image */}
                        <div className="flex-shrink-0">
                          <img
                            src="/fees/ielts-complete.jpg"
                            alt="IELTS Course"
                            className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-4 py-3 space-y-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Complete Preparatory Course</h3>
                      <p className="text-gray-700 text-base mb-7">Comprehensive English & IELTS Training - Group of 10-15 Students</p>
                    </div>

                    <div className="border-t mb-0.5">

                      <h3 className="font-semibold text-gray-900 mb-2 mt-2 text-lg">Beginner Intermediate Level</h3>
                      <p className="text-gray-700 text-base mb-7">Recommended Experience</p>

                    </div>

                    <div className="border-t mb-0.5">
                      <h3 className="font-semibold text-gray-900 mb-2 mt-4 text-base">Upto 2 months / 44 hours</h3>
                    </div>


                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*-------------------------------------------------------------CARD 4--------------------------------------------------------------------------------------------- */}
      <section className="py-2 px-4 lg:px-8 bg-background min-h-min-h-screen">
        <div className="container mx-auto">
          {/* Rounded rectangle container for the course section */}
          <div className="bg-white rounded-2xl shadow-lg p-4 lg:p-6 mb-24 border border-black">
            <div className="grid lg:grid-cols-2 gap-6 items-start">

              {/* Left Column - Course Information */}
              <div className="space-y-3">
                {/* IELTS TURBO Branding */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-red-600">IELTS</span>
                  <span className="bg-blue-600 text-white font-bold px-1 py-1  text-lg">Foundation</span>
                </div>

                <div>
                  <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4">
                    IELTS Foundation : International English Language Testing System
                  </h1>
                  <p className="text-sm text-gray-600 mb-3">
                    This course is intended to provide training for IELTS from initial level. Comprises of general to advanced level English language training with IELTS specific course training.
                  </p>
                </div>

                {/* Instructor Information */}
                <div className="flex items-center gap-3 mb-3">
                  {/* Image */}
                  <img
                    src="/fees/britishcouncil.webp"
                    alt="British Council"
                    className="w-10 h-10 object-contain"
                  />

                  {/* Instructor Text */}
                  <div className="text-sm text-gray-700">
                    <div className="font-semibold">Instructors:</div>
                    <div>XYZ Trained & British Council Certified</div>
                  </div>
                </div>


                {/* KNOW MORE Button */}
                <Button
                  onClick={() => handleExploreClick(ROUTES.IELTS_FOUNDATION)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 transition-all duration-300 mt-10"
                >
                  KNOW MORE
                </Button>

                {/* Price + EMI Info below button */}
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-xl font-bold text-red-600">₹7,590</p>
                  <p className="text-sm text-gray-500">(Credit/Debit EMI Available)</p>
                </div>

                {/* Enrolled count */}
                <p className="text-sm text-gray-800 font-semibold mt-0">
                  12,587 <span className="font-normal text-gray-600">already enrolled</span>
                </p>


              </div>

              {/* Right  */}
              <div>
                <Card className="py-0 shadow-lg overflow-hidden">
                  <CardHeader className="px-4 py-3 bg-gradient-to-r from-orange-100 to-blue-100 relative">
                    {/**/}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-orange-400 rounded-full opacity-20 -translate-y-6 translate-x-6"></div>
                    <div className="absolute top-2 right-8 w-8 h-8 bg-blue-400 rounded-full opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-10 h-10 bg-blue-500 opacity-20 -translate-x-5 translate-y-5"></div>

                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-lg font-bold text-blue-600">IELTS Foundation <br /> Group</span>
                          </div>
                          <div className="text-xs text-gray-600 mb-2">XYZ TestPrep</div>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-sm font-medium text-blue-600">4.8</span>
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm text-gray-500">(9,437 Ratings)</span>
                          </div>
                        </div>

                        {/* Course Image */}
                        <div className="flex-shrink-0">
                          <img
                            src="/fees/ielts-foundation.webp"
                            alt="IELTS Course"
                            className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-4 py-3 space-y-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Extended Preparatory Course</h3>
                      <p className="text-gray-700 text-base mb-7">Comprehensive English & IELTS Training - Group of 10-15 Students</p>
                    </div>

                    <div className="border-t mb-0.5">

                      <h3 className="font-semibold text-gray-900 mb-2 mt-2 text-lg">Beginner Level</h3>
                      <p className="text-gray-700 text-base mb-7">Recommended Experience</p>

                    </div>

                    <div className="border-t mb-0.5">
                      <h3 className="font-semibold text-gray-900 mb-2 mt-4 text-base">Upto 3 months / 88 hours</h3>
                    </div>


                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*-------------------------------------------------------------CARD 5-------------------------------------------------------------------------------------------- */}
      <section className="py-2 px-4 lg:px-8 bg-background min-h-min-h-screen">
        <div className="container mx-auto">
          {/* Rounded rectangle container for the course section */}
          <div className="bg-white rounded-2xl shadow-lg p-4 lg:p-6 mb-24 border border-black">
            <div className="grid lg:grid-cols-2 gap-6 items-start">

              {/* Left Column - Course Information */}
              <div className="space-y-3">
                {/* IELTS TURBO Branding */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-red-600">IELTS</span>
                  <span className="bg-blue-600 text-white font-bold px-1 py-1  text-lg">Foundation</span>
                </div>

                <div>
                  <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Personal Training : International English Language Testing System
                  </h1>
                  <p className="text-sm text-gray-600 mb-3">
                    If you want to study quickly or deeply or you have a specific requirements, you should go for personal training. It is customised according to experience & requirements.
                  </p>
                </div>

                {/* Instructor Information */}
                <div className="flex items-center gap-3 mb-3">
                  {/* Image */}
                  <img
                    src="/fees/britishcouncil.webp"
                    alt="British Council"
                    className="w-10 h-10 object-contain"
                  />

                  {/* Instructor Text */}
                  <div className="text-sm text-gray-700">
                    <div className="font-semibold">Instructors:</div>
                    <div>XYZ Trained & British Council Certified</div>
                  </div>
                </div>


                {/* KNOW MORE Button */}
                <Button
                  onClick={() => handleExploreClick(ROUTES.IELTS_TURBO)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 transition-all duration-300 mt-10"
                >
                  KNOW MORE
                </Button>

                {/* Price + EMI Info below button */}
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-xl font-bold text-red-600">₹7,590</p>
                  <p className="text-sm text-gray-500">(Credit/Debit EMI Available)</p>
                </div>

                {/* Enrolled count */}
                <p className="text-sm text-gray-800 font-semibold mt-0">
                  12,587 <span className="font-normal text-gray-600">already enrolled</span>
                </p>


              </div>
              {/* Right  */}
              <div>
                <Card className="py-0 shadow-lg overflow-hidden">
                  <CardHeader className="px-4 py-3 bg-gradient-to-r from-orange-100 to-blue-100 relative">
                    {/**/}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-orange-400 rounded-full opacity-20 -translate-y-6 translate-x-6"></div>
                    <div className="absolute top-2 right-8 w-8 h-8 bg-blue-400 rounded-full opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-10 h-10 bg-blue-500 opacity-20 -translate-x-5 translate-y-5"></div>

                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-lg font-bold text-blue-600">Personal Training <br /> Group</span>
                          </div>
                          <div className="text-xs text-gray-600 mb-2">XYZ TestPrep</div>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-sm font-medium text-blue-600">4.8</span>
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm text-gray-500">(9,437 Ratings)</span>
                          </div>
                        </div>

                        {/* Course Image */}
                        <div className="flex-shrink-0">
                          <img
                            src="/fees/personal-training.webp"
                            alt="IELTS Course"
                            className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-4 py-3 space-y-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Variable length course</h3>
                      <p className="text-gray-700 text-base mb-7">1:1 training with customised curriculum according to needs of the student.</p>
                    </div>

                    <div className="border-t mb-0.5">

                      <h3 className="font-semibold text-gray-900 mb-2 mt-2 text-lg">Beginner -Advanced Level</h3>
                      <p className="text-gray-700 text-base mb-7">Recommended Experience</p>

                    </div>

                    <div className="border-t mb-0.5">
                      <h3 className="font-semibold text-gray-900 mb-2 mt-4 text-base">1 to 2 Months / 22 to 44 hours</h3>
                    </div>


                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};


export default IeltsGeneralPage;
