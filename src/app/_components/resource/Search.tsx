import React, { useEffect, useState } from "react";
function Search({handleApplyFilters}:any){
    const [search, setSearch] = useState("");
    const[category, setCategory] = useState("");
    const[country, setCountry] = useState("");
    // const filterBlogData = blogData.filter(blog=> blog.title.toLowerCase().includes(search.toLowerCase()));

    return(
        <>
        <div className="flex justify-between mt-10 px-20">
            <h1 className="text-5xl">All <span className="text-orange-600 font-bold">Blogs</span></h1>
            <div className="text-md flex gap-4">
                <select className="border-2 text-gray-600 rounded-xl py-2 px-4 w-60 hover:cursor-pointer " defaultValue="" onChange={(e) => setCountry(e.target.value)}>
                    <option value="" className=" " >
                        Select Country
                    </option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="New-Zealand">New-Zealand</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Ireland">Ireland</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Spain">Spain</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="India">India</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Italy">Italy</option>
                    <option value="Global-Universities">Global-Universities</option>
                </select>
                <select className="border-2 text-gray-600 rounded-xl py-2 px-4 w-60 hover:cursor-pointer" defaultValue="" onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
	                <option value="General">General</option>
	                <option value="Scholarships">Scholarships</option>
	                <option value="Study Abroad">Study Abroad</option>
	                <option value="Education Fairs">Education Fairs</option>
	                <option value="Test Prep">Test Prep</option>
                </select>
                <input type="submit" value="Search" onClick={() => handleApplyFilters(country, category)} className="px-8 border-blue-900 bg-blue-900 text-white hover:bg-white hover:text-blue-900 hover:bg-white font-semibold border-1 hover:cursor-pointer rounded-xl py-3 px-3">
                </input>
                </div>
        </div>
        </>
    )
}
export default Search;