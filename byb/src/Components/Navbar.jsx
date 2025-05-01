import React, { useState } from 'react';
import { IoIosContact } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { IoBody } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import Logoimg from '../assets/LOGO.jpg';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const moveToRegister = () => {
    navigate('/register');
    setMenuOpen(false);
  };

  const moveToLogin = () => {
    navigate('/login');
    setMenuOpen(false);
  };

  return (

      <nav className="bg-gradient-to-r from-darkBlue to-accent text-white shadow w-full fixed top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

      <nav className="bg-gradient-to-r from-darkBlue to-accent text-white shadow w-full fixed top-0  z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center>
          {/* Logo */}
          <Link to='/'>
            <div className="flex items-center flex-shrink-0">
              <img src={Logoimg} alt="Company Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
            </div>
          </Link>

          {/* Hamburger Menu Icon (Mobile) */}
          <div className="md:hidden">
            <button aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* Desktop Menu */}

          <ul className="hidden md:flex items-center space-x-3 font-bold text-sm sm:text-base whitespace-nowrap ml-auto">
            <Link to="/" onClick={handleLinkClick}>
              <li className="flex items-center space-x-1 hover:text-gray-300">

          <ul className="hidden md:flex items-center space-x-9 font-bold text-lg whitespace-nowrap  ml-auto">
            <Link to="/">
              <li className="flex  items-center space-x-2 hover:text-LightGray">

                <span>Home</span>
                <FaHome />
              </li>
            </Link>
            <Link to="/Book-Bouncer" onClick={handleLinkClick}>
              <li className="flex items-center space-x-1 hover:text-gray-300">
                <span>Book-Bouncer</span>
                <IoBody />
              </li>
            </Link>
            <Link to="/about-us" onClick={handleLinkClick}>
              <li className="flex items-center space-x-1 hover:text-gray-300">
                <span>About Us</span>
                <FcAbout />
              </li>
            </Link>
            <Link to="/contact" onClick={handleLinkClick}>
              <li className="flex items-center space-x-1 hover:text-gray-300">
                <span>Contact Us</span>
                <IoIosContact />
              </li>
            </Link>

            <button onClick={moveToRegister} className="border-2 border-black w-20 h-7 rounded-xl bg-button hover:bg-gray-700">
              <li className="flex items-center justify-center hover:text-gray-300">
                <span>Register</span>
              </li>
            </button>
            <button onClick={moveToLogin} className="border-2 border-black w-16 h-7 rounded-xl bg-button hover:bg-gray-700">
              <li className="flex items-center justify-center hover:text-gray-300">
                <span>Login</span>
              </li>
            </button>


            <li className="relative group">
              <div className="flex  items-center space-x-1 cursor-pointer hover:text-LightGray">
               <Link to = '/login'>Login</Link>
              </div>
            </li>
            <li>
         <Link to="/register"
         className="bg-white text-darkBlue px-4 py-2 rounded-full shadow-sm border border-LightGray hover:bg-LightGray transition >
           Register
          </Link>
           </li>


          </ul>
        </div>

        {/* Mobile Slide Menu */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-darkBlue to-accent text-white z-50 transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          <ul className="flex flex-col mt-16 space-y-4 p-4 font-bold text-lg">
            <li className="flex items-center space-x-2 hover:text-gray-300">
              <Link to="/" onClick={handleLinkClick}>Home</Link>
              <FaHome />
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-300">
              <Link to="/Book-Bouncer" onClick={handleLinkClick}>Book Bouncer</Link>
              <IoBody />
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-300">
              <Link to="/about-us" onClick={handleLinkClick}>About Us</Link>
              <FcAbout />
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-300">
              <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
              <IoIosContact />
            </li>

            <button onClick={moveToRegister} className="border-2 border-black w-24 h-8 rounded-xl bg-button hover:bg-gray-700">
              <li className="flex items-center space-x-2 hover:text-gray-300">
                <span>Register</span>
              </li>
            </button>
            <button onClick={moveToLogin} className="border-2 border-black w-20 h-8 rounded-xl bg-button hover:bg-gray-700">
              <li className="flex items-center space-x-2 hover:text-gray-300">
                <span>Login</span>
              </li>
            </button>
          </ul>
        </div>
      </nav>
      <div className="pt-16"></div>

            <li className="relative">
              <div className="cursor-pointer">
              <Link to = '/login'>Login</Link>
              </div>
           </li>
           <li className="relative">
        <Link to="/register"
       className="inline-block bg-white text-darkBlue text-sm px-3 py-2 rounded-full shadow-sm border border-LightGray hover:bg-LightGray transition"
          >
          Register
         </Link>
           </li>


          </ul>
        </div>
      </nav>
      <div className="pt-20"></div>

    </>
  );
}

export default Navbar;