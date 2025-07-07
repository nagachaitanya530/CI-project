import Table from "./Table";

function FeeSection() {

<<<<<<< HEAD

=======
    
>>>>>>> cost-of-studying-usa
    const testtime = [
        { left: "Test Fee", right: "₹17,000/- (IELTS UKVI: ₹17250/-)" },
        { left: "Rescheduling Fee", right: "₹4250/- (IELTS UKVI: ₹4300/-)" },
        { left: "Extra Score Reporting Fee", right: "₹1500/- for courier, ₹400/- for registered post." },

    ]
<<<<<<< HEAD
=======


>>>>>>> cost-of-studying-usa
    return (
        <>
            <section id="fee">
                <h1 className="text-4xl  my-5">Miscellaneous  <strong className="underline decoration-red-500">Details </strong></h1>
<<<<<<< HEAD
=======

>>>>>>> cost-of-studying-usa
                <ul className="list-disc px-5 my-2 text-lg  ">
                    <li><strong>Score Validity:</strong> 2 years</li>
                    <li><strong>Registration Mode:</strong> Edwise Centre / Online</li>
                    <li><strong>Mode of payment:</strong> Debit Card / Credit card / ICICI Challan</li>
                    <li><strong>Test Administration Frequency:</strong> 3-4 times a month for both paper and computer-based testing.</li>
                    <li><strong>Test Repetition Policy:</strong> Next available date</li>
                    <li><strong>Score Reporting time:</strong>
                        <ul className="list-inside">
                            <li>Paper Based: 7 working days</li>
                            <li>Computer based: 2 working days</li>
                        </ul>
                    </li>
                    <li><strong>Computer Based only 2 Slots:</strong> 9am to 12 pm and 1pm to 4pm</li>
                </ul>
<<<<<<< HEAD
                <br />
                <h3 className="text-xl font-bold mb-5 text-cyan-900">Fees :</h3>
                <Table bodyrows={testtime} heading="" thead1="Time Slot	" thead2="Duration" /><br />
=======
<br />
                <h3 className="text-xl font-bold mb-5 text-cyan-900">Fees :</h3>
                <Table bodyrows={testtime} heading="" thead1="Time Slot	" thead2="Duration" /><br />

>>>>>>> cost-of-studying-usa
            </section>
        </>
    );
}
export default FeeSection;