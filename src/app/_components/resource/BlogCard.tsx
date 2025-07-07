import React, { useEffect, useState } from "react";
interface BlogItem{
    id: number;
    image:string;
    title:string;
    country?:string;
    category?:string[];
}

function BlogCard({ blogData }: { blogData: BlogItem[] }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [visiblePages, setVisiblePages] = useState<number[]>([]);

    const blogPerPage = 12;
    const indexOfLastPage= currentPage * blogPerPage;
    const indexOfFirstPage = indexOfLastPage - blogPerPage;
    const currentBlogPage = blogData.slice(indexOfFirstPage,indexOfLastPage);
    const lastBlogPage = Math.ceil(blogData.length/blogPerPage);

    const handlevisiblePages=()=>{
        if(lastBlogPage<5){
            let pages = [];
            for(let i=1; i<=lastBlogPage; i++){
                pages.push(i);
            }
            setVisiblePages(pages);
        }
        else{
            let pages = [];
            if(currentPage > 4){
                for(let i=currentPage-3; i<=currentPage; i++){
                    pages.push(i);
                }
            }
            else{
                for(let i=1; i<=4; i++){
                    pages.push(i);
                }
            }
            setVisiblePages(pages);
        }
    }
    const handelNext=()=>{
        if(currentPage<lastBlogPage){
            setCurrentPage(currentPage+1);
        }
    }

    const handelPrev=()=>{
        if(currentPage>1){
            setCurrentPage(currentPage-1)
        }
    }

    useEffect(() => {
        handlevisiblePages();
    }, [currentPage, visiblePages])


    return(
        <>
        {lastBlogPage == 0 && <div className="text-3xl font-semibold my-30 text-center text-gray-600">No Blogs Found</div>}
        <div className="grid lg:grid-cols-3 gap-8 sm:grid-col-1 sm:px-15 lg:mx-10 mt-10">
        {
            currentBlogPage.map((blog: BlogItem, index) => (
                <div className=" border-2 border-gray-600  rounded-xl" key={index}>
                <div className="relative">
                    <img src={blog.image} alt="" className="rounded-xl object-cover w-full border-1 h-60"/>
                </div>
                <div className="px-5 py-5">
                    <p className="text-lg md:text-xl lg:text-2xl h-20 -mt-5 font-medium ">{blog.title}</p>
                    <button className="mt-4 text-xl text-blue-900 border-1 border-blue-900 hover:bg-blue-900 hover:text-white px-4 py-2 rounded-md transition hover:cursor-pointer">Read More</button>
                </div>
            </div>
            ))
        }
        </div>

        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-8 mb-8">
            <li>
                <button
                    onClick={handelPrev}
                    disabled={currentPage === 1}
                    className={`border-1 text-base sm:text-lg md:text-xl flex justify-center items-center rounded-full shadow-md h-10 w-10 sm:h-12 sm:w-12 md:h-15 md:w-15 transition
                        ${currentPage === 1
                            ? 'bg-gray-300 text-black cursor-not-allowed'
                            : 'bg-white hover:bg-blue-900 text-blue-900 hover:text-white border-blue-900 cursor-pointer'
                        }`}
                    aria-label="Previous Page"
                >
                    {'<-'}
                </button>
            </li>
            {visiblePages.map((page, index) => (
                <li key={index}>
                    <button
                        onClick={() => setCurrentPage(page)}
                        className={`border-1 border-blue-900 text-base sm:text-lg md:text-xl flex justify-center items-center rounded-full shadow-md h-10 w-10 sm:h-12 sm:w-12 md:h-15 md:w-15 transition
                            ${currentPage === page
                                ? 'bg-blue-900 text-white'
                                : 'bg-white text-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer'
                            }`}
                        aria-current={currentPage === page ? "page" : undefined}
                    >
                        {page}
                    </button>
                </li>
            ))}
            <li>
                <button
                    onClick={handelNext}
                    disabled={currentPage === lastBlogPage || lastBlogPage === 0}
                    className={`border-1 text-base sm:text-lg md:text-xl flex justify-center items-center rounded-full shadow-md h-10 w-10 sm:h-12 sm:w-12 md:h-15 md:w-15 transition
                        ${currentPage === lastBlogPage || lastBlogPage === 0
                            ? 'bg-gray-300 text-black cursor-not-allowed'
                            : 'bg-white hover:bg-blue-900 text-blue-900 hover:text-white border-blue-900 cursor-pointer'
                        }`}
                    aria-label="Next Page"
                >
                    {'->'}
                </button>
            </li>
        </ul>
            </>
    )
}

export default BlogCard;