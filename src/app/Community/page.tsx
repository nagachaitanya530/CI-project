"use client";

import { useState } from "react";
import React from "react";
import Members from "~/app/_components/Community/Members";
import type { Member } from "~/app/_components/Community/Members";
import Navigation from "~/app/_components/Navigation";
import Footer from "~/app/_components/Footer";




const membersData: Member[] = [
  {
    name: "Anchal",
    image: "/alltestTestimonialimg1.webp",
    role: "Faculty",
    joined: "Joined Sep 2021",
    activity: "Not recently active",
  },
  {
    name: "Andriyas K",
    image: "/alltestTestimonialimg2.webp",
    role: "Faculty",
    joined: "Joined Jan 2022",
    activity: "Active 7 months ago",
  },
  {
    name: "Angad",
    image: "/alltestTestimonialimg3.webp",
    role: "Faculty",
    joined: "Joined Jul 2022",
    activity: "Not recently active",
  },
  {
    name: "Neha",
    image: "/alltestTestimonialimg4.webp",
    role: "Student",
    joined: "Joined Apr 2023",
    activity: "Active recently",
  },
  {
    name: "Sumit",
    image: "/alltestTestimonialimg2.webp",
    role: "Student",
    joined: "Joined Jan 2024",
    activity: "Not recently active",
  }
  
  
];

export default function MembersPage() {
  return (
  <>
  
  <Navigation/>
  <Members members={membersData} />
  <Footer/>

  </>
    
  );
}