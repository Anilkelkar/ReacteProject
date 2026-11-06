import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional icons, or use any

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow-md px-6 py-4">
      <div className=" bg-transparent max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className=" bg-transparent text-2xl font-bold text-gray-800">Farmer</div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Center + Right: Links and Search (Desktop only) */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          <Link to="/login" className="hover:text-yellow-400">Login</Link>
          <Link to="/register" className="hover:text-yellow-400">Register</Link>

          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded-md focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 gap-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Contact</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Login</Link>
          <Link to="/register" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Register</Link>
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded-md w-11/12 focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
