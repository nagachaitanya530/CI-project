"use client";
import { useState } from "react";
import AuthModal from "../_components/login/Authmodel";
import LoginForm from "../_components/login/loginForm";

function login()
{
 const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
    return(
      <>
      <section>
        <header className="w-full bg-white shadow-md fixed top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <nav className="flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center">
              <a href="#" className="block md:hidden">
                <img src="/logo/eD9U2xbVCF.png" alt="Logo" className="h-10" />
              </a>
              <a href="#" className="hidden md:block">
                <img
                  src="https://www.tcyonline.info/india/showimage.jpg?wt=200&ht=100&img=/logo/eD9U2xbVCF.png&d=b&time=1629717114"
                  alt="Logo"
                  className="h-10"
                />
              </a>
            </div>

            {/* Right: Hamburger & LOGIN */}
            <div className="flex items-center gap-4">
              {/* Mobile menu toggle */}
              <button
                className="md:hidden text-gray-700"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

              {/* LOGIN Button - opens modal */}
              <button
                onClick={() => setShowModal(true)}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                <img
                  src="/laravel/public/images/TCYimages/BPC/Franchise/newLogin/padlock.png"
                  alt="Padlock"
                  className="h-4 w-4"
                />
                LOGIN
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4">
              <ul className="flex flex-col gap-4">
                <li>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setShowModal(true);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                  >
                    <img
                      src="/laravel/public/images/TCYimages/BPC/Franchise/newLogin/padlock.png"
                      alt="Padlock"
                      className="h-4 w-4"
                    />
                    LOGIN
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
     <AuthModal show={showModal} onClose={() => setShowModal(false)} />
      </section>
       <LoginForm/>
        <section>
           <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column - Image */}
        <div className="flex justify-center">
          <img
            src="/login/pexels-artempodrez-5716042.jpg"
            alt="About Us"
            className="w-full max-w-md object-cover"
          />
        </div>

        {/* Right Column - Text */}
        <div>
          <h5 className="text-5xl font-bold mb-4">About Us</h5>
          <p className="text-gray-700 leading-relaxed">
            <strong>National Institute of Language</strong>, CI Academy and CI Technologies are units of CI Edutech (P) Limited, where we are reinventing e-learning to suit the needs of the students especially in South-East Asia.
            <br /><br />
            Developing skills with the use of technology and qualified educators is the main goal of our team. We have created not only the name but also a culture in education in Asia.
          </p>
        </div>
      </div>
    </div>
    <div className="w-full bg-black text-center py-4">
      <p className="text-2xl text-white items-center ">National Institute of Language</p>
    </div>
        </section>
       
        </>

    )
}
export default login;   