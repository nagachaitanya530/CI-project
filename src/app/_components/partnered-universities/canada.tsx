import SideBarSection from "./SideBar";

function CanadaUniversity() {
    return (
        <>
            <section id="canada" className="mx-25">
                {/* Searching Comtains  */}
                <div className="flex justify-end">
                    <input type="text" placeholder="Search University" />
                    <button>Search</button>
                </div>


                {/* Main container  */}
                <div className="flex gap-5">
                    <div className="w-[15%]"><SideBarSection /></div>
                    <div className="border w-full">This Is Canada section
                        <div className="flex">
                            <img src="" alt="" />
                            <p>Abertay University</p>
                        </div>
                    </div>
                </div>


                {/* last number div  */}
                <div></div>
            </section>
        </>
    );
}

export default CanadaUniversity;