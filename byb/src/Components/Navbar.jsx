import React, { useState } from 'react';
import { IoIosContact } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoBody } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import Logoimg from '../assets/LOGO.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); 
    setLoginDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-darkBlue to-accent text-white shadow w-full fixed top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
          {/* Logo */}
          <Link to='/'>
            <div className="flex items-center space-x-2 flex-shrink-0 ">
              <img src={Logoimg} alt="Company Logo" className='w-14 h-14 rounded-full' />
              <span className="text-xl font-bold text-yellow-500 hidden sm:inline">BYB</span>
            </div>
          </Link>

          {/* Hamburger Menu Icon (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 font-bold text-lg whitespace-nowrap  ml-auto">
            <Link to="/">
              <li className="flex  items-center space-x-2 hover:text-LightGray">
                <span>Home</span>
                <FaHome />
              </li>
            </Link>
            <Link to="/Book-Bouncer">
              <li className="flex  items-center space-x-2 hover:text-LightGray">
                <span>Book-Bouncer</span>
                <IoBody />
              </li>
            </Link>
            <Link to="/about-us">
              <li className="flex  items-center space-x-2 hover:text-LightGray">
                <span>About Us</span>
                <FcAbout />
              </li>
            </Link>
            <Link to="/contact">
              <li className="flex  items-center space-x-2 hover:text-LightGray">
                <span>Contact Us</span>
                <IoIosContact />
              </li>
            </Link>
            {/* Dropdown */}
            <li className="relative group">
              <div className="flex  items-center space-x-1 cursor-pointer hover:text-LightGray">
                <span>Login</span>
                <IoMdArrowDropdown />
              </div>
              <ul className="absolute left-0 mt-2 w-40 bg-accent text-white rounded shadow opacity-0 group-hover:opacity-100 group-hover:visible z-50">
                <li>
                  <Link to="/register" className="block px-4 py-2 hover:text-LightGray" onClick={handleLinkClick}>
                    For Bouncer
                  </Link>
                </li>
                <li>
                  <Link to="/customer-login" className="block px-4 py-2 hover:text-LightGray" onClick={handleLinkClick}>
                    For Customer
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Mobile Slide Menu */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-darkBlue to-accent text-white z-50 transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          <ul className="flex flex-col mt-16 space-y-4 p-4 font-bold text-lg">
            <li className="flex items-center space-x-2 hover:text-LightGray">
              <Link to="/" onClick={handleLinkClick}>Home</Link>
              <FaHome />
            </li>
            <li className="flex items-center space-x-2 hover:text-LightGray">
              <Link to="/Book-Bouncer" onClick={handleLinkClick}>Book Bouncer</Link>
              <IoBody />
            </li>
            <li className="flex items-center space-x-2 hover:text-LightGray">
              <Link to="/about-us" onClick={handleLinkClick}>About Us</Link>
              <FcAbout />
            </li>
            <li className="flex items-center space-x-2 hover:text-LightGray">
              <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
              <IoIosContact />
            </li>
            <li className="relative">
              <div className="cursor-pointer" onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}>
                <span className="flex items-center">Login <IoMdArrowDropdown className="ml-1" /></span>
              </div>
              {loginDropdownOpen && (
                <ul className="ml-4 mt-2 space-y-1 bg-royalBlue rounded shadow z-50">
                  <li>
                    <Link to="/register" className="block px-2 py-1 hover:text-LightGray" onClick={handleLinkClick}>
                      For Bouncer
                    </Link>
                  </li>
                  <li>
                    <Link to="/customer-login" className="block px-2 py-1 hover:text-LightGray" onClick={handleLinkClick}>
                      For Customer
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <div className="pt-28"></div>
    </>
  );
}

export default Navbar;
