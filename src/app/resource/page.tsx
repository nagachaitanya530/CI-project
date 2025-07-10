"use client";
import FooterSection from "../_components/footer1";
import NavigationSection from "../_components/navigation1";
import BlogCard from "../_components/resource/BlogCard";
import Search from "../_components/resource/Search";
import { useState } from "react";

const blogData = [
    {
        id: 1,
        image: "blog-images/USA.jpg",
        title: "Cost of Studying in USA for Indian Students",
        country: "USA",
        category: ["Study Abroad", "General"]
    },
    {
        id: 2,
        image: "blog-images/UK.jpg",
        title: "Study MS in Bioinformatics in the UK",
        country: "UK",
        category: ["Study Abroad", "General"]
    },
    {
        id: 3,
        image: "blog-images/Switzerland.jpg",
        title: "Switzerland Study Visa Guide 2025: Requirements, Process & Tips",
        country: "Switzerland",
        category: ["Study Abroad", "General"]
    },
    {
        id: 4,
        image: "blog-images/USA2.jpg",
        title: "Study Cloud Computing and DevOps in USA",
        country: "USA",
        category: ["Study Abroad", "General"]
    },
    {
        id: 5,
        image: "blog-images/Uk2.jpg",
        title: "The World Inside: Study Interior Designing in the UK",
        country: "UK",
        category: ["Study Abroad", "General"]
    },
    {
        id: 6,
        image: "blog-images/Australia.jpg",
        title: "Study MS in Bioinformatics in Australia",
        country: "Australia",
        category: ["Study Abroad", "General"]
    },
    {
        id: 7,
        image: "blog-images/Germany.jpg",
        title: "Study MS in Economics in Germany",
        country: "Germany",
        category: ["Study Abroad", "General"]
    },
    {
        id: 8,
        image: "blog-images/Canada.jpg",
        title: "Study MS in Nursing in Canada",
        country: "Canada",
        category: ["Study Abroad", "General"]
    },
    {
        id: 9,
        image: "blog-images/UK3.jpg",
        title: "Know About the Best Law Schools in the UK",
        country: "UK",
        category: ["Study Abroad", "General",]
    },
    {
        id: 10,
        image: "blog-images/International.jpg",
        title: "Study Journalism in New Zealand for International",
        country: "",
        category: ["General",]
    },
    {
        id: 11,
        image: "blog-images/Australia2.jpg",
        title: "Know It All About Studying Public Health in Australia",
        country: "",
        category: ["General",]
    },
    {
        id: 12,
        image: "blog-images/Irland.jpg",
        title: "Study Creative Writing in Ireland for International Students",
        country: "Ireland",
        category: ["General",]
    },
    // Page 2
    {
        id: 13,
        image: "blog-images/UK4.jpg",
        title: "Study MS in Pharmacy in the UK",
        country: "UK",
        category: ["General",]
    },
    {
        id: 14,
        image: "blog-images/Australia3.jpg",
        title: "Highly Demanding Courses in Australia",
        country: "Australia",
        category: ["General",]
    },
    {
        id: 15,
        image: "blog-images/Germany2.jpg",
        title: "Study MS in Pharmacy in Germany",
        country: "Germany",
        category: ["General",]
    },
    {
        id: 16,
        image: "blog-images/UK5.jpg",
        title: "Study Animation in UK for International Students",
        country: "UK",
        category: ["General",]
    },
    {
        id: 17,
        image: "blog-images/USA.jpg",
        title: "Everything About Studying Digital Marketing in New Zealand",
        country: "New Zealand",
        category: ["General",]
    },
    {
        id: 18,
        image: "blog-images/germany3.jpg",
        title: "Explore the Bachelor's Degree in Germany",
        country: "Germany3",
        category: ["General",]
    },


]


function Resource() {
    const [filterdData, setFilterdData] = useState(blogData);
    const handleApplyFilters = (country: string = "", category: string = "") => {
        let newData = blogData;
        if (country === "" && category !== "") {
            newData = blogData.filter(blog => blog.category?.includes(category));
        } else if (category === "" && country !== "") {
            newData = blogData.filter(blog => blog.country === country);
        } else if (country !== "" && category !== "") {
            newData = blogData.filter(blog => blog.country === country && blog.category?.includes(category));
        } else {
            newData = blogData;
        }
        setFilterdData(newData);
    }

    return (
        <>
            <NavigationSection />
            <Search handleApplyFilters={handleApplyFilters} />
            <BlogCard blogData={filterdData} />
            {/* <Nextbutton/> */}
            <FooterSection />
        </>
    )
}
export default Resource;