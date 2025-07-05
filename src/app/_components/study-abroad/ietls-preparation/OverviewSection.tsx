import Table from "./Table";

function OvervviewSection() {
    const body = [
        { left: "IELTS Academic", right: "For undergraduate and postgraduate students" },
        { left: "IELTS General", right: "For vocational studies or immigration" },
        { left: "IELTS for Life Skills", right: "For immigration application" },
        { left: "IELTS for UKVI", right: "Recognised by UK Visa and Immigration(UKVI)" },
    ]

    return (
        <>
            <section id="overview" className=" my-15">
                <h1 className="text-4xl my-5">IELTS <strong className="underline decoration-red-500">Overview </strong></h1>
                <p className="text-xl">
                    IELTS (International English Language Testing System) is a globally recognized English language proficiency test that assesses an individual's communication skills.
                    With a legacy of more than 30 years, today over 12,000 organizations and people around the world rely
                    on IELTS for professional, personal and academic purposes.
                </p>
                <br />
                <h2 className="text-2xl my-5 font-semibold">Ways To Take IELTS</h2>
                <h3 className="text-xl text-cyan-900 font-bold">IELTS in Test Centre</h3>
                <ul className="list-disc p-5 text-lg">
                    <li>IELTS on paper : The test is taken with a pen and paper at an Authorised Testing Facility and includes listening, reading and writing abilities. Results are accessible 13 days after test completion.</li>
                    <li>IELTS on computer : The test is taken on a computer at an authorised IELTS testing facility. The Speaking part of the test is done face-to-face with a qualified IELTS examiner whereas listening, reading and writing are done on the computer. Results are accessible 3-5 days after test completion.
                    </li>
                </ul>
                <h3 className="text-xl text-cyan-900 font-bold">IELTS Online</h3>
                <ul className="list-disc p-5 text-lg">
                    <li >
                        The test is taken online at home. The exam follows the same format, questions, time, and grading criteria. Results are accessible 6-8 days after taking the test.
                    </li>
                </ul>
                <Table bodyrows={body} heading="Types OF IELTS" thead1="Exam Type" thead2="Purpose" />
            </section>
        </>
    );
}
export default OvervviewSection;