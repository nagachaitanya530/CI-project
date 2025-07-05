import Footer from "../_components/footer1";
import Navigation from "../_components/navigation1";

const OETSection = () => {
  return (
    <>
      <Navigation />
      <div>
        <section>
          <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col md:flex-row items-center justify-between -mt-12">
            <div className="md:w-1/2 space-y-6 mt-5">
              <h2 className="text-2xl font-semibold text-gray-800">
                Online Classes For
              </h2>
              <h1 className="text-4xl font-bold text-blue-600">
                Occupational English Test
              </h1>
              <p className="text-gray-600">
                OET (Occupational English Test) is designed to meet the specific English language needs of the healthcare sector. It assesses the language proficiency of healthcare professionals who wish to practise in an English-speaking environment. National Institute of Language prepares you for OET with expert professional trainers.
              </p>
              <a href="/book-demo">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded">
                BOOK A DEMO
              </button>
              </a>
            </div>
            <div className="right">
              <img src="scientist.jpg" alt="" className="max-w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row p-6 gap-6 bg-white">
            <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md w-full md:w-1/2 md:ml-5">
              <h2 className="text-2xl font-bold mb-4">
                Healthcare <span className="font-medium">professionals choose OET</span> because:
              </h2>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                <li>OET uses real healthcare scenarios so you’ll feel more confident on test day.</li>
                <li>OET is widely recognised as proof of English proficiency for registration, study and work in the healthcare sector, as well as for visas in some countries.</li>
                <li>OET helps you develop language skills for success in your career – see stories about people like you.</li>
                <li>It’s easy to prepare for the test using the OET Preparation Portal – check it out now!</li>
                <li>Test materials that reflect real workplace scenarios so you’ll know what to expect and feel more confident on test day.</li>
              </ul>
            </div>
            <div className="text-gray-800 w-full md:w-1/2 flex flex-col justify-center mt-10 md:mt-0">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                OET is the English language test designed for the healthcare sector
              </h2>
              <p className="mb-4">
                Do you need to take an English test to work or study in healthcare in the UK, the US, Ireland, Australia, New Zealand, Ukraine, Dubai, Singapore or Namibia? Then OET is the test for you!
              </p>
              <p>
                By taking OET you will prove you have the right level of English plus you’ll be learning the kind of language you will need every day at work.
              </p>
            </div>
          </div>
          <div className="p-8 bg-white flex flex-col items-center ">
            <h2 className="text-2xl font-bold mb-4 m1-0 w-full ">
              Hear from Filipino nurse Emjee on how OET prepared her to work as a nurse with the NHS:
            </h2>
            <div className="aspect-video w-full px-20m m1-8 ">
              <div className="">
                <iframe
                  className="w-full min-h-screen  "
                  src="https://www.youtube-nocookie.com/embed/ZVnjOPwW4ZA=1"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>

          <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center ml-8 mt-[-50]">
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-4">Healthcare organisations</h2>
              <p className="mt-2 text-gray-700">
                Healthcare organisations and regulators choose OET because it helps them to
                select healthcare professionals with the right level of English proficiency to
                deliver safe and high quality care.
              </p>
              <h3 className="text-2xl font-bold text-gray-950 mb-4">Patient safety and quality care</h3>
              <p className="text-gray-700 mb-4">
                Using the right English proficiency to communicate in healthcare improves patient outcomes and ensures quality care.
              </p>
              <h3 className="text-2xl font-bold mb-4">Valid and reliable</h3>
              <p className="text-gray-700">
                OET is backed by leading academic institutions, providing accurate and specific purpose tests for the healthcare industry.
              </p>
            </div>
            <div>
              <img
                src="/doctor.jpg"
                alt="Healthcare Professionals"
                className="w-full "
              />
            </div>
          </section>

          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0">
              <div className="p-4 border rounded-md flex items-start gap-2 bg-white shadow">
                <p className="text-lg font-semibold text-gray-800">
                  🩺 Designed specifically for healthcare professionals
                </p>
              </div>
              <div className="p-4 border rounded-md flex items-start gap-2 bg-white shadow">
                <p className="text-lg font-semibold text-gray-800">
                  💻 Choose between a computer-based test (results in{' '}
                  <span className="text-blue-600 font-bold">10 days</span>) or paper-based test (results in{' '}
                  <span className="text-blue-600 font-bold">17 days</span>)*
                </p>
              </div>
              <div className="p-4 border rounded-md flex items-start gap-2 bg-white shadow">
                <p className="text-lg font-semibold text-gray-800">
                  🌍 Accepted worldwide: US, UK, Australia, New Zealand and more
                </p>
              </div>
              <div className="p-4 border rounded-md flex items-start gap-2 bg-white shadow">
                <p className="text-sm text-gray-600">
                  ⚠️ <span className="font-semibold">Disclaimer:</span> OET on Computer results are released
                  within 10 days for 95% of candidates.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-10 px-6 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Do you need to take an English test to work or study in healthcare in the UK, US, Australia or other English-speaking countries?
            </h2>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4">
              Then OET is the test for you!
            </h1>
            <p className="text-sm md:text-base text-gray-700 max-w-3xl mt-6">
              Beyond just English – learn medical vocabulary, and more. By taking OET you’ll be learning
              the kinds of vocabulary and phrases you’ll need every day at work in your new country. Not
              only will you prove you have the right level of English — you’ll be ready to perform in
              the global healthcare industry.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
export default OETSection;