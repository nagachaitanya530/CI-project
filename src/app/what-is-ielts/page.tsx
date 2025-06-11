import { CheckCircle } from "lucide-react";
import Footer from "../_components/Footer";
import Navigation from "../_components/Navigation";

function IeltsPage()
{
    
    return(
        <div>
            <Navigation/>
            <section>
       <div className="relative bg-[#12191D] text-white overflow-hidden">
      {/* Bottom White Curve */}
      <div className="absolute bottom-0 w-full pointer-events-none z-0">
        <svg
          className="w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,256L48,245.3C96,235,192,213,288,202.7C384,192,480,192,576,186.7C672,181,768,171,864,186.7C960,203,1056,245,1152,261.3C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 pt-32 pb-52 grid md:grid-cols-2 gap-16">
        {/* Left Side Heading */}
        <div className="border-l-4 border-green-500 pl-8">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#FDEBD0]">
            IELTS Makes <br /> The World Go <br /> Round
          </h1>
        </div>

        {/* Right Side Features */}
        <div className="grid grid-cols-1 gap-5 text-lg md:text-xl">
          {[
            "10000+ Institutions",
            "140+ Countries",
            "1100+ Test Centres",
            "1.4 Million Test Takers",
            "14000+ Evaluators",
            "No. 1 Language Test in The World",
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <span className="text-orange-500 mr-4 text-2xl mt-1">✔</span>
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
            </section>
            <section>
                
                 <div className="w-1/2 p-4 overflow-y-auto h-screen">
        <div className="elementor-element elementor-element-40d04d4a e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-6070f67c e-flex e-con-boxed e-con e-child">
            <div className="e-con-inner">
              {/* --- Start of Content Blocks --- */}
              {/* Customised TestPrep Platform */}
              <div className="elementor-element elementor-element-381f824e elementor-widget elementor-widget-premium-addon-icon-box">
                <div className="elementor-widget-container">
                  <div className="premium-icon-box-container-in premium-icon-box-flex-top premium-icon-box-flex-ver-top">
                    <div className="premium-icon-box-icon-container">
                      <div className="premium-icon-wrapper">
                        <img
                          src="https://nationalinstituteoflanguage.in/wp-content/uploads/2024/07/typeelementorsiteurlhttpsnationalinstituteoflanguage.inwp-jsonelementsid3fd08ddelTypewidgetisInnerfalseisLockedfalsesettingscontent_widthfullspaceunitpxsize87sizesspace_tabletu.png"
                          alt="Customised TestPrep"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="premium-icon-box-content-wrap premium-icon-box-cta-">
                      <div className="premium-icon-box-text-wrap">
                        <h3 className="text-lg font-bold">Customised TestPrep™ Platform</h3>
                        <p>
                          Specially developed online conferencing system to make it feel like a
                          physical classroom.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer */}
              <div className="h-4"></div>

              {/* A.I Powered Mock Tests */}
              <div className="elementor-element elementor-element-7cb81637 elementor-widget elementor-widget-premium-addon-icon-box">
                <div className="elementor-widget-container">
                  <div className="premium-icon-box-container-in premium-icon-box-flex-top premium-icon-box-flex-ver-top">
                    <div className="premium-icon-box-icon-container">
                      <div className="premium-icon-wrapper">
                        <img
                          src="https://nationalinstituteoflanguage.in/wp-content/uploads/2024/07/nnnws.gif"
                          alt="AI Powered Mock Tests"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="premium-icon-box-content-wrap premium-icon-box-cta-">
                      <div className="premium-icon-box-text-wrap">
                        <h3 className="text-lg font-bold">A.I Powered Mock Tests -InTake™</h3>
                        <p>
                          NIL’s proprietary A.I powered Mock Test Platform InTake™ for accurate
                          progress tracking
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* More items... (Repeat same pattern for next 2 blocks) */}

              <div className="h-4"></div>

              <div className="elementor-element elementor-element-1f975db4 elementor-widget elementor-widget-premium-addon-icon-box">
                <div className="elementor-widget-container">
                  <div className="premium-icon-box-container-in premium-icon-box-flex-top premium-icon-box-flex-ver-top">
                    <div className="premium-icon-box-icon-container">
                      <div className="premium-icon-wrapper">
                        <img
                          src="https://nationalinstituteoflanguage.in/wp-content/uploads/2024/07/typeelementorsiteurlhttpsnationalinstituteoflanguage.inwp-jsonelementsid3fd08ddelTypewidgetisInnerfalseisLockedfalsesettingscontent_widthfullspaceunitpxsize87sizesspace_tabletu-1.png"
                          alt="Dual Certified Coaches"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="premium-icon-box-content-wrap premium-icon-box-cta-">
                      <div className="premium-icon-box-text-wrap">
                        <h3 className="text-lg font-bold">Dual Certified IELTS™ Coaches</h3>
                        <p>
                          A truly interactive experience with experts who have immense experience &
                          Competence
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-4"></div>

              <div className="elementor-element elementor-element-7bc898f4 elementor-widget elementor-widget-premium-addon-icon-box">
                <div className="elementor-widget-container">
                  <div className="premium-icon-box-container-in premium-icon-box-flex-top premium-icon-box-flex-ver-top">
                    <div className="premium-icon-box-icon-container">
                      <div className="premium-icon-wrapper">
                        <img
                          src="https://nationalinstituteoflanguage.in/wp-content/uploads/2024/07/NEWSS.gif"
                          alt="Flexible Timings"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="premium-icon-box-content-wrap premium-icon-box-cta-">
                      <div className="premium-icon-box-text-wrap">
                        <h3 className="text-lg font-bold">Flexible Timings in Every Time Zone</h3>
                        <p>
                          Don’t fret over time and schedule. We work in every time zone with great
                          flexibility.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* --- End of Content Blocks --- */}
            </div>
          </div>
        </div>
      </div>
            </section>
            <section>
                <div className="p-6 max-w-4xl mx-auto">
      {/* Title Section */}
      <div className="flex items-center gap-3 mb-4">
        {/* SVG Icon */}
        <CheckCircle className="text-green-600 w-6 h-6" />

        {/* Animated Heading (simplified animation) */}
        <h2 className="text-2xl font-bold text-gray-800 flex flex-wrap">
          {"Most Popular Group Courses".split("").map((char, index) => (
            <span
              key={index}
              style={{ animationDelay: `${index * 0.05}s` }}
              className="inline-block animate-fadeIn"
            >
              {char}
            </span>
          ))}
        </h2>
      </div>

      {/* Description Paragraph */}
      <p className="text-gray-600 mb-4">
        Most comprehensive and effective group classes with no more than 10
        students per batch.
      </p>

      {/* Divider */}
      <div className="border-t border-gray-300"></div>
    </div>
  
            </section>
            <Footer/>
        </div>
    )

}
export default IeltsPage;