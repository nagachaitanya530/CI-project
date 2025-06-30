"use client";
import FooterSection from "../_components/footer1";
import NavigationSection from "../_components/navigation1";
import BlogCard from "../_components/resource/BlogCard";
import Nextbutton from "../_components/resource/NextButton";
import Search from "../_components/resource/Search";
import { useState } from "react";

const blogData = [
    {
        id:1,
        image: "blog-images/USA.jpg",
        title: "Cost of Studying in USA for Indian Students",
        country: "USA",
        category: ["Study Abroad","General"]
    },
    {
        id:2,
        image: "blog-images/UK.jpg",
        title: "Study MS in Bioinformatics in the UK",
        country: "UK",
        category: ["Study Abroad","General"]
    },
    {
        id:3,
        image: "blog-images/Switzerland.jpg",
        title: "Switzerland Study Visa Guide 2025: Requirements, Process & Tips",
        country: "Switzerland",
        category: ["Study Abroad","General"]
    },
    {
        id:4,
        image: "blog-images/USA2.jpg",
        title: "Study Cloud Computing and DevOps in USA",
        country: "USA",
        category: ["Study Abroad","General"]
    },
    {
        id:5,
        image: "blog-images/Uk2.jpg",
        title: "The World Inside: Study Interior Designing in the UK",
        country: "UK",
        category: ["Study Abroad","General"]
    },
    {
        id:6,
        image: "blog-images/Australia.jpg",
        title: "Study MS in Bioinformatics in Australia",
        country: "Australia",
        category: ["Study Abroad","General"]
    },
    {
        id:7,
        image: "blog-images/Germany.jpg",
        title: "Study MS in Economics in Germany",
        country: "Germany",
        category: ["Study Abroad","General"]
    },
    {
        id:8,
        image: "blog-images/Canada.jpg",
        title: "Study MS in Nursing in Canada",
        country: "Canada",
        category: ["Study Abroad","General"]
    },
    {
        id:9,
        image: "blog-images/UK3.jpg",
        title: "Know About the Best Law Schools in the UK",
        country: "UK",
        category: ["Study Abroad","General",]
    },
    {
        id:10,
        image: "blog-images/International.jpg",
        title: "Study Journalism in New Zealand for International",
        country: "",
        category: ["General",]
    },
    {
        id:11,
        image: "blog-images/Australia2.jpg",
        title: "Know It All About Studying Public Health in Australia",
        country: "",
        category: ["General",]
    },
    {
        id:12,
        image: "blog-images/Irland.jpg",
        title: "Study Creative Writing in Ireland for International Students",
        country: "Ireland",
        category: ["General",]
    },
    // Page 2
    {
        id:13,
        image: "blog-images/UK4.jpg",
        title:"Study MS in Pharmacy in the UK",
        country:"UK",
        category: ["General",]
    },
    {
        id:14,
        image: "blog-images/Australia3.jpg",
        title:"Highly Demanding Courses in Australia",
        country:"Australia",
        category: ["General",]
    },
    {
        id:15,
        image: "blog-images/Germany2.jpg",
        title:"Study MS in Pharmacy in Germany",
        country:"Germany",
        category: ["General",]
    },
    {
        id:16,
        image: "blog-images/UK5.jpg",
        title:"Study Animation in UK for International Students",
        country:"UK",
        category: ["General",]
    },
    {
        id:17,
        image: "blog-images/USA.jpg",
        title:"Everything About Studying Digital Marketing in New Zealand",
        country:"New Zealand",
        category: ["General",]
    },
    {
        id:18,
        image: "blog-images/germany3.jpg",
        title:"Explore the Bachelor's Degree in Germany",
        country:"Germany3",
        category: ["General",]
    },
    {
        id:19,
        image: "blog-images/Canada2.jpg",
        title:"Study MS in Bioinformatics in Canada",
        country:"Canada",
        category: ["General",]
    },
    {
        id:20,
        image: "blog-images/UK6.jpg",
        title:"Study MS in Creative Arts in the UK",
        country:"UK",
        category: ["General",]
    },
    {
        id:21,
        image: "blog-images/Australia2.jpg",
        title:"Study MS in Economics in Australia",
        country:"Australia",
        category: ["General",]
    },
    {
        id:22,
        image: "blog-images/Canada3.jpg",
        title:"Study STEM Courses in Canada",
        country:"Canada",
        category: ["General",]
    },
    {
        id:23,
        image: "blog-images/UK7.jpg",
        title:"All About Studying Accounting in UK",
        country:"UK",
        category: ["General",]
    },
    {
        id:24,
        image: "blog-images/Canada3.jpg",
        title:"Study Digital Marketing in Canada",
        country:"Canada",
        category: ["General",]
    },

    // Page 3
    {
        id:25,
        image: "blog-images/World.jpg",
        title:"Edwise's World Education Fair is Back in 2025!",
        country:"",
        category: ["General",]
    },
    {
        id:26,
        image: "blog-images/Germany4.jpg",
        title:"Is Germany Good for Indian Students?",
        country:"Germany",
        category: ["General",]
    },
    {
        id:27,
        image: "blog-images/Canada5.jpg",
        title:"Student Life and Culture in Canada",
        country:"Canada",
        category: ["General",]
    },
    {
        id:28,
        image: "blog-images/Canada6.jpg",
        title:"Explore the Best Cities to Study in Germany",
        country:"Germany",
        category: ["General",]
    },
    {
        id:29,
        image: "blog-images/UK8.jpg",
        title:"Cost of Studying in UK for International Students",
        country:"UK",
        category: ["General",]
    },
    {
        id:30,
        image: "blog-images/Canada7.jpg",
        title:"Healthcare Management in Canada: A Guide for International Students 2025",
        country:"Canada",
        category: ["General",]
    },
    {
        id:31,
        image: "blog-images/Ireland.jpg",
        title:"Cost of Studying in Ireland for Indian Students",
        country:"Ireland",
        category: ["General",]
    },
    {
        id:32,
        image: "blog-images/Aurstralia4.jpg",
        title:"Top Courses in Australia for International Students",
        country:"Australia",
        category: ["General",]
    },
    {
        id:33,
        image: "blog-images/Australia5.jpg",
        title:"Masters Programs in Australia for International Students",
        country:"Australia",
        category: ["General",]
    },
    {
        id:34,
        image: "blog-images/UK9.jpg",
        title:"Top 6 Universities in the UK without IELTS",
        country:"UK",
        category: ["General",]
    },
    {
        id:35,
        image: "blog-images/USA3.jpg",
        title:"Top MBA in Healthcare Management Programs in the USA for 2025",
        country:"USA",
        category: ["General",]
    },
    {
        id:36,
        image: "blog-images/UK10.jpg",
        title:"Welcome to the UK Virtual Admissions Day by Edwise!",
        country:"UK",
        category: ["General",]
    },
    // page 4
    {
        id:37,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:38,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:39,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:40,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:41,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:42,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:43,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:44,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:45,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:46,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:47,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:48,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:49,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:50,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:51,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:52,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:53,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:54,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:55,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:56,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:57,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:58,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:59,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:60,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:61,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:62,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:63,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:64,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:65,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:66,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:67,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:68,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:69,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:70,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:71,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:72,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:73,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:74,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:75,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:76,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:77,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:78,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:79,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:80,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:81,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:82,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:83,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },
    {
        id:84,
        image: "blog-images/",
        title:"",
        country:"",
        category: ["General",]
    },


]


function Resource(){
    const [filterdData, setFilterdData] = useState(blogData);
    const handleApplyFilters = (country: string="", category: string="") => {
        let newData = blogData;
        if(country === "" && category !== ""){
            newData = blogData.filter(blog => blog.category?.includes(category));
        }else if(category === "" && country !== ""){
            newData = blogData.filter(blog => blog.country === country);
        }else if(country !== "" && category !== ""){
            newData = blogData.filter(blog => blog.country === country && blog.category?.includes(category));
        }else{
            newData = blogData;
        }
        setFilterdData(newData);
    }
    
    return(
        <>
            <NavigationSection/>
            <Search handleApplyFilters={handleApplyFilters}/>
            <BlogCard blogData={filterdData}/>
            {/* <Nextbutton/> */}
            <FooterSection/>
        </>
    )
}
export default Resource;