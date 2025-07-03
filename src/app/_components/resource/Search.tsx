import React, { useState } from "react";

function Search({ handleApplyFilters }: any) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");

    return (
        <div className="flex flex-col gap-6 mt-8 px-4 md:px-20 md:flex-row md:justify-between md:items-center">
            <h1 className="text-3xl md:text-5xl mt-4 md:mt-0">
                All <span className="text-orange-600 font-bold">Blogs</span>
            </h1>
            <div className="flex flex-col gap-4 w-full md:flex-row md:items-center md:w-auto md:gap-4 flex-wrap">
                <select
                    className="border-2 text-gray-600 rounded-xl py-2 px-4 w-full md:w-60 hover:cursor-pointer"
                    defaultValue=""
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="">Select Country</option>
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
                <select
                    className="border-2 text-gray-600 rounded-xl py-2 px-4 w-full md:w-60 hover:cursor-pointer"
                    defaultValue=""
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Select Category</option>
                    <option value="General">General</option>
                    <option value="Scholarships">Scholarships</option>
                    <option value="Study Abroad">Study Abroad</option>
                    <option value="Education Fairs">Education Fairs</option>
                    <option value="Test Prep">Test Prep</option>
                </select>
                <input
                    type="submit"
                    value="Search"
                    onClick={() => handleApplyFilters(country, category)}
                    className="border-blue-900 bg-blue-900 text-white hover:bg-white hover:text-blue-900 font-semibold border-1 hover:cursor-pointer rounded-xl py-3 px-3  md:px-20 w-full md:w-auto"
                />
            </div>
        </div>
    );
}

export default Search;