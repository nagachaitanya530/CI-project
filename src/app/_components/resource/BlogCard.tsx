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
        <div className="grid grid-cols-3 gap-8 mx-26 mt-10">
        {
            currentBlogPage.map((blog: BlogItem, index) => (
                <div className=" border-2 border-gray-600 rounded-xl" key={index}>
                <div className="relative">
                    <img src={blog.image} alt="" className="rounded-xl object-cover w-full border-1 h-60"/>
                </div>
                <div className="px-5 py-5">
                    <p className="text-2xl h-20 font-medium">{blog.title}</p>
                    <button className="mt-4 text-xl text-blue-900 border-1 border-blue-900 hover:bg-blue-900 hover:text-white px-4 py-2 rounded-md transition hover:cursor-pointer">Read More</button>
                </div>
            </div>
            ))
        }
        </div>

         <ul className="flex justify-center gap-8 mt-8 mb-8">
                <li>
                    <a onClick={handelPrev} className={`${currentPage === 1 ? 'bg-gray-300 text-black hover:cursor-not-allowed' : 'bg-white hover:bg-blue-900 text-blue-900 hover:text-white border-blue-900 hover:cursor-pointer'} border-1 text-xl flex justify-center items-center rounded-full shadow-md h-15 w-15`}>{'<-'}</a>
                </li>
                {
                visiblePages.map((page, index) => (
                    <li key={index} className="" onClick={() =>  setCurrentPage(page)}>
                        <a className={`${currentPage === page ? 'bg-blue-900 text-white' : 'bg-white text-blue-900'} border-1 border-blue-900 text-xl flex justify-center items-center rounded-full shadow-md hover:bg-blue-900 hover:text-white hover:cursor-pointer h-15 w-15`}>{page}</a>
                    </li>
                        
                ))
                }
                <li>
                    <a onClick={handelNext} href="#" className={`${currentPage === lastBlogPage || lastBlogPage === 0? 'bg-gray-300 text-black hover:cursor-not-allowed' : 'bg-white hover:bg-blue-900 text-blue-900 hover:text-white border-blue-900 hover:cursor-pointer'} border-1 text-xl flex justify-center items-center rounded-full shadow-md h-15 w-15`}
                    >{'->'}</a>
                </li>
               
            </ul>
            </>
    )
}

export default BlogCard;