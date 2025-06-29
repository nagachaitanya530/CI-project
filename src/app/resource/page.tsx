"use client";
import FooterSection from "../_components/footer1";
import NavigationSection from "../_components/navigation1";
import BlogCard from "../_components/resource/BlogCard";
import Nextbutton from "../_components/resource/NextButton";
import Search from "../_components/resource/Search";

const blogData = [
    {
        image: "blog-images/USA.jpg",
        title: "Cost of Studying in USA for Indian Students"
    },
    {
        image: "france.jpg",
        title: "Study MS in Bioinformatics in the UK"
    },
    {
        image: "france.jpg",
        title: "Switzerland Study Visa Guide 2025: Requirements, Process"
    },
    {
        image: "france.jpg",
        title: "Study Cloud Computing and DevOps in USA"
    },
    {
        image: "france.jpg",
        title: "The World Inside: Study Interior Designing in the UK"
    },
    {
        image: "france.jpg",
        title: "Study MS in Bioinformatics in Australia"
    },
    {
        image: "france.jpg",
        title: "Study MS in Economics in Germany"
    },
    {
        image: "france.jpg",
        title: "Study MS in Nursing in Canada"
    },
    {
        image: "france.jpg",
        title: "Know About the Best Law Schools in the UK"
    },
    {
        image: "france.jpg",
        title: "Study Journalism in New Zealand for International"
    },
    {
        image: "france.jpg",
        title: "Know It All About Studying Public Health in Australia"
    },
    {
        image: "france.jpg",
        title: "Study Creative Writing in Ireland for International"
    },

]

function Resource(){
    return(
        <>
            <NavigationSection/>
            <Search/>
            <BlogCard blogData={blogData}/>
            {/* <Nextbutton/> */}
            <FooterSection/>
        </>
    )
}
export default Resource;