import { useState } from "react";

type AuthModalProps = {
  show: boolean;
  onClose: () => void;
};

export default function AuthModal({ show, onClose }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg relative overflow-hidden flex">
        {/* Overlay Section */}
        <div className="hidden md:flex justify-center items-center text-white w-1/2 transition-all">
          <img
            src="/login/pexels-mikhail-nilov-6893955.jpg"
            alt="Login Side"
            className="max-w-full h-auto"
          />
        </div>

        {/* Forms Section */}
        <div className="w-full md:w-1/2 p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xl font-bold"
          >
            ×
          </button>

          <form className="space-y-4">
            <h2 className="text-xl font-semibold">Sign In</h2>
            <input
              className="w-full p-2 border rounded"
              placeholder="Username"
            />
            <input
              className="w-full p-2 border rounded"
              type="password"
              placeholder="Password"
            />
            <button className="w-full bg-blue-600 text-white p-2 rounded">
              Sign In
            </button>

            <a href="#" className="text-xs text-gray-500">
              Forgot your password?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
