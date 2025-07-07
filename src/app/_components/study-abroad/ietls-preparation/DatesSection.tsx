import Table from "./Table";

function Dates() {

    const testdates = [
        { left: "November 2024", right: "16, 30" },
        { left: "December 2024", right: "7, 14, 21, 28" },
        { left: "January 2025", right: "4, 16" },
<<<<<<< HEAD
=======

>>>>>>> cost-of-studying-usa
    ]

    const testtime = [
        { left: "1st slot", right: "9:00 am to 12:00 pm" },
        { left: "2nd slot", right: "1:00 pm to 4:00 pm" },
        { left: "3rd slot", right: "5:00 pm to 8:00 pm" },
<<<<<<< HEAD
=======

>>>>>>> cost-of-studying-usa
    ]

    return (
        <>
            <section id="dates">
<<<<<<< HEAD
=======

>>>>>>> cost-of-studying-usa
                <h1 className="text-4xl  my-5">IELTS  <strong className="underline decoration-red-500"> Dates </strong></h1>
                <ul className="text-lg list-disc px-5 my-2">
                    <li>
                        Paper-based IELTS academic test dates in India are accessible two to
                        four times a month (depending on the location of test centre).
                    </li>
                    <li>
                        For General Training, they are available twice a month, and are normally held on Saturdays and Thursdays.
                    </li>
                </ul>
                <h3 className="text-xl font-bold mb-10 text-cyan-900">Below are the upcoming test dates : </h3>
                <Table bodyrows={testdates} heading="" thead1="Month" thead2="Academic" />
                <h3 className="text-xl font-bold my-10 text-cyan-900">
                    IELTS on Computer exam dates are offered up to 7 days a week, three times each day (morning, afternoon, and evening).
                </h3>
                <Table bodyrows={testtime} heading="" thead1="Time Slot	" thead2="Duration" /><br />
                <h3 className="text-xl font-bold mt-10 text-cyan-900">Ways To Take IELTS:</h3>

                <p className="my-2 text-cyan-900">
                    IELTS in Test Centre
                </p>

                <ul className="text-lg list-disc px-5 my-2">
                    <li>
                        IELTS on Paper: The test is taken with a pen and paper at an Authorised Testing Facility and includes listening, reading, and writing abilities. Results are accessible 7 days after test completion.
                    </li>
                    <li>
                        IELTS on Computer: The test is taken on a computer at an authorised IELTS testing facility. The Speaking part of the test is done face-to-face with a qualified IELTS examiner whereas listening, reading, and writing are done on the computer. Results are accessible 2 days after test completion.
                    </li>
                </ul>
            </section>
        </>
    );
}

export default Dates;