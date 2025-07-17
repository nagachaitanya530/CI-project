function IeltsStories()
{
    return(
        <section className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 py-10 px-6 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6 animate-fadeInUp">
            <h2 className="text-4xl font-bold leading-tight">
              Make your
              <br />
              IELTS story
            </h2>
            <p className="text-lg">
              Prepare for your IELTS examination online with the help of National Institute of Language and its expert faculty.
            </p>
            <p className="text-lg">
              National Institute of Language provides you British Council and Cambridge certified educators in its online IELTS classes.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:scale-105 transition-transform"
            >
              Read More
            </a>
          </div>

          {/* Right Column */}
          <div className="   animate-fadeInUp">
            <iframe
              className="w-full  h-80 rounded  shadow-lg"
              src="https://www.youtube.com/embed/fJqTKYwPspY?controls=1&rel=0"
              title="IELTS with the National Institute of Language"


              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    )
}
export default IeltsStories;