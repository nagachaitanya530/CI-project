import EnrollForm from "~/app/_components/english-business-course/EnrollForm";
import Footer from "~/app/_components/Footer";
import Navigation from "~/app/_components/Navigation";

function FreeWebinar() {
    return (
        <>
            <Navigation />
            <section>
                <div className="" >
                    <div className=" flex flex-col justify-center items-center">
                        <div >
                            <h1 className="text-5xl m-5">Aalions Coaching Institute Online Webinar</h1>
                        </div>
                        <div className="w-1/2 text-xl px-5">
                            <p className="text-gray-500">
                                <span className="border-2 border-black px-2 text-5xl ">W</span> e are dedicated to our students as well as society. We want to provide education and assistance to everybody who needs it. Although, we can only accommodate a limited number of students in free webinars, we try to facilitate everyone who registers.
                            </p>
                            <div className="h-50">

                            </div>
                        </div>
                    </div>

                    <div className="bg-cyan-500 h-64">
                        <div className="flex justify-center items-center">
                            <div className="w-3/5 relative bottom-40 bg-cyan-700">
                                <iframe
                                    className="w-full h-96"
                                    src="https://www.youtube-nocookie.com/embed/ZVnjOPwW4ZA=1"
                                    title="National Institute of Language"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
export default FreeWebinar;