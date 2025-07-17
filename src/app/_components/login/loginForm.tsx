import { useState, useEffect } from "react";

function LoginForm() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setNum1(a);
    setNum2(b);
    setCaptchaAnswer((a - b).toString()); // using subtraction
    setUserCaptcha(""); // reset user input
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (userCaptcha.trim() === captchaAnswer) {
      setError("");
      alert("Captcha correct! Form submitted.");
      // proceed with form logic
    } else {
      setError("Incorrect captcha. Try again.");
      generateCaptcha();
    }
  };

  return (
    <section>
      <div
        className="relative w-full min-h-screen bg-[url('/Ielts/section2.jpg')] bg-cover bg-no-repeat bg-center flex items-center justify-center px-6"
        id="clientData"
      >
        <div className="absolute inset-0 bg-gray-200 opacity-70 z-0" />
        <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 items-center gap-10 text-black">
          <div>
            <h1 className="text-4xl font-bold mb-4">Explore...<br />The test portal</h1>
            <h2 className="text-xl font-semibold mb-2">
              Sign up to experience the portal and take a free mock test.
            </h2>
            <p className="text-md">
              Our Integrated Methodology ensures that you achieve your dream scores!
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg w-full max-w-md text-black shadow-md border border-black border-opacity-20">
            <h3 className="text-2xl font-semibold text-center mb-4">Sign Up</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 bg-white bg-opacity-20 text-black border border-black border-opacity-30 rounded focus:outline-none"
              />
              <div className="flex gap-2">
                <select className="w-1/3 px-2 py-2 bg-white bg-opacity-20 text-black border border-black border-opacity-30 rounded">
                  <option value="91">IND +91</option>
                  {/* Add more if needed */}
                </select>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-2/3 px-4 py-2 bg-white bg-opacity-20 text-black border border-black border-opacity-30 rounded"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-white bg-opacity-20 text-black border border-black border-opacity-30 rounded"
              />
              <select className="w-full px-4 py-2 bg-white bg-opacity-20 text-black border border-black border-opacity-30 rounded">
                <option>Select Course</option>
                <option>IELTS</option>
                <option>PTE</option>
                {/* ... */}
              </select>

              {/* Captcha */}
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Enter Captcha"
                  value={userCaptcha}
                  onChange={(e) => setUserCaptcha(e.target.value)}
                  className="w-2/3 px-4 py-2 bg-white bg-opacity-20 text-black border border-black border-opacity-30 rounded"
                />
                <div className="bg-white px-3 py-2 rounded text-black border-black font-semibold">
                  {num1} - {num2}
                </div>
              </div>
              {error && (
                <p className="text-red-600 text-sm font-semibold">{error}</p>
              )}

              <button
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded text-black font-semibold"
              >
                SUBMIT
              </button>
              <p className="text-center text-sm mt-2">
                Already have an account?{" "}
                <a href="#" className="underline text-black">
                  LOGIN
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
