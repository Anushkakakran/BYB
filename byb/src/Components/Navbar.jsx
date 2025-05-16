import React, { useState } from 'react';
import { IoIosContact } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { IoBody } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import Logoimg from '../assets/LOGO.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); 
  };

  return (
    <>
      <nav className="bg-black text-white shadow w-full fixed top-0  z-50">
        <div className="max-w-6xl mx-auto px-4  py-4 flex flex-wrap justify-between items-center">
          {/* Logo */}
          <Link to='/'>
            <div className="flex items-center  flex-shrink-0 ">
              <img src={Logoimg} alt="Company Logo" className='w-28 h-28 rounded-full' />
            </div>
          </Link>

          {/* Hamburger Menu Icon (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-9 font-bold text-lg whitespace-nowrap  ml-auto">
            <Link to="/">
              <li className="flex  items-center space-x-2 hover:text-LightGray">
                <span>Home</span>
              </li>
            </Link>
            <Link to="/Book-Bouncer">
              <li className="flex  items-center space-x-2 hover:text-LightGray">
                <span>Book-Bouncer</span>
              </li>
            </Link>
            <Link to="/about-us">
              <li className="flex  items-center space-x-2 hover:text-LightGray">
                <span>About Us</span>
              </li>
            </Link>
            <Link to="/contact">
              <li className="flex  items-center space-x-2 hover:text-LightGray">
                <span>Contact Us</span>
              </li>
            </Link>

            <li className="relative group">
              <div className="flex  items-center space-x-1 cursor-pointer hover:text-LightGray">
               <Link to = '/login'>Login</Link>
              </div>
            </li>
           <li>
         <Link to="/"
         className="bg-white text-black px-4 py-2 rounded-full shadow-sm border border-gray hover:text-gray transition"
         >
          Register As A Bouncer
          </Link>
           </li>
          </ul>
        </div>

        {/* Mobile Slide Menu */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-black  text-white z-50 transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          <ul className="flex flex-col mt-16 space-y-4 p-4 font-bold text-lg">
            <li className="flex items-center space-x-2 hover:text-LightGray">
              <Link to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li className="flex items-center space-x-2 hover:text-LightGray">
              <Link to="/Book-Bouncer" onClick={handleLinkClick}>Book Bouncer</Link>
            </li>
            <li className="flex items-center space-x-2 hover:text-LightGray">
              <Link to="/about-us" onClick={handleLinkClick}>About Us</Link>
            </li>
            <li className="flex items-center space-x-2 hover:text-LightGray">
              <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
            </li>
            <li className="relative">
              <div className="cursor-pointer">
              <Link to = '/login' onClick={handleLinkClick}>Login</Link>
              </div>
           </li>
   <li className="relative">
        <Link to="/" onClick={handleLinkClick}
       className="inline-block bg-white text-black text-sm px-3 py-2 rounded-full shadow-sm border border-gray hover:bg-gray transition"
          >
        Regster As A Bouncer
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