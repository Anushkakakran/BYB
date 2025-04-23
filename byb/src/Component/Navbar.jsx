import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import Logoimg from '../assets/LOGO.jpg';
import { GiStrongMan } from "react-icons/gi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-600 text-black dark:text-white shadow w-full fixed top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={Logoimg} alt="Company Logo" className='w-14 h-14 rounded-full' />
            <span className="text-xl font-bold text-yellow-500 hidden sm:inline">BYB</span>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="sm:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* Menu Items */}
          <ul className={`sm:flex gap-10 mt-4 sm:mt-0 text-yellow-500 font-bold text-lg 
            ${menuOpen ? 'block absolute top-20 left-0 w-full bg-white dark:bg-gray-800 px-6 py-4 z-40' : 'hidden sm:flex'}`}>
            <li>
              <a href="#" className="flex items-center">Home <FaHome className="ml-2" /></a>
            </li>
            <li>
              <a href="#" className="flex items-center">Bouncers <GiStrongMan  className='ml-2 '/></a>
            </li>
            <li>
              <a href="#" className="flex items-center">About Us <FcAbout className="ml-2" /></a>
            </li>
            <li>
              <a href="#" className="flex items-center">Contact Us <IoIosContact className="ml-2" /></a>
            </li>
            {/* Dropdown */}
            <li className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer">
                <span>Login</span>
                <IoMdArrowDropdown />
              </div>
              <ul className="hidden group-hover:block absolute bg-white dark:bg-gray-700 text-black dark:text-white mt-2 rounded shadow w-40 z-50">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-yellow-500">
                    For Bouncer
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-yellow-500">
                    For Customer
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <div className="pt-28"></div>
    </>
  );
}

export default Navbar;
