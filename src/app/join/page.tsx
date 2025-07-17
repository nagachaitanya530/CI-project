"use client";

import React from "react";
import Footer from "../_components/Footer";
import Navigation from "../_components/Navigation";
import HeroSection from "../_components/join/Hero";
import JoinEvents from "../_components/join/JoinEvents";
import MeetingRoles from "../_components/join/Roles";
import MembershipSection from "../_components/join/Membership";

const Join = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <JoinEvents />
      < MeetingRoles />
      <MembershipSection />
      <Footer />
    </div>
  );
};

export default Join;
