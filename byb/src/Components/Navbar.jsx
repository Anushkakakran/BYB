import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Logoimg from '../assets/LOGO.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="relative bg-black text-white w-full z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={Logoimg}
            alt="Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm lg:text-base font-medium">
          <li><Link to="/" className="hover:text-lightGray">Home</Link></li>
          <li><Link to="/Book-Bouncer" className="hover:text-lightGray">Book Bouncer</Link></li>
          <li><Link to="/about-us" className="hover:text-lightGray">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-lightGray">Contact Us</Link></li>
          <li><Link to="/login" className="hover:text-lightGray">Login</Link></li>
          <li>
            <Link
              to="/"
              className="bg-white text-black px-3 py-1.5 rounded-full border hover:bg-lightGray transition text-sm"
            >
              Register As A Bouncer
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="px-5 py-4 flex items-center justify-between border-b border-lightGray">
          <img src={Logoimg} alt="Logo" className="w-10 h-10 rounded-full" />
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <HiX />
          </button>
        </div>
        <ul className="flex flex-col mt-4 space-y-4 px-6 text-base font-medium">
          <li><Link to="/" onClick={handleLinkClick} className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/Book-Bouncer" onClick={handleLinkClick} className="hover:text-lightGray">Book Bouncer</Link></li>
          <li><Link to="/about-us" onClick={handleLinkClick} className="hover:text-lightGray">About Us</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick} className="hover:text-lightGray">Contact Us</Link></li>
          <li><Link to="/login" onClick={handleLinkClick} className="hover:text-lightGray">Login</Link></li>
          <li>
            <Link
              to="/"
              onClick={handleLinkClick}
              className="bg-white text-black text-sm px-4 py-2 rounded-full border hover:hover:bg-lightGray transition"
            >
              Register As A Bouncer
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
