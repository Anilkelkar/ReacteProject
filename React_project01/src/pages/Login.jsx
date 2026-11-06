import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const slides = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${slides[index]})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative bg-white shadow-lg rounded-lg p-8 w-full max-w-md z-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <form className="space-y-4">
          <input type="text" placeholder="Username" className="w-full px-4 py-2 border rounded-md" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md" />

          <button className="w-full bg-yellow-400 text-white py-2 rounded-md">
            Login
          </button>

          {/* ✅ Register button navigation */}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="w-full bg-gray-800 text-white py-2 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
 