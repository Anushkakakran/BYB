import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logoimg from "../assets/LOGO.jpg";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";
import Grid from "../pages/Grid";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="relative bg-black text-white w-full z-[100] shadow-md">
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
        <div className="hidden md:flex items-center justify-between w-full text-sm lg:text-base font-medium">
          <div className="flex-1 flex justify-center space-x-6 lg:space-x-8">
            <Link to="/" className="hover:text-lightGray">
              Home
            </Link>
            <Link to="/book-bouncer" className="hover:text-lightGray">
              Book
            </Link>
            <Link to="/about-us" className="hover:text-lightGray">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-lightGray">
              Contact Us
            </Link>
            <a
              href="https://orgfarm-bbb820bd93-dev-ed.develop.my.site.com"
              onClick={handleLinkClick}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black text-sm px-4 py-2 rounded-full border hover:bg-lightGray transition"
            >
              Register As A Bouncer
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Grid />
            <Profile />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <div className="md:hidden text-2xl">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="px-5 py-4 flex items-center justify-between border-b border-lightGray">
          <img src={Logoimg} alt="Logo" className="w-10 h-10 rounded-full" />
        </div>
        <ul className="flex flex-col mt-4 space-y-4 px-6 text-base font-medium">
          <li>
            <Link
              to="/"
              onClick={handleLinkClick}
              className="hover:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/book-bouncer"
              onClick={handleLinkClick}
              className="hover:text-lightGray"
            >
              Book
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              onClick={handleLinkClick}
              className="hover:text-lightGray"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="hover:text-lightGray"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <a
              href="https://orgfarm-bbb820bd93-dev-ed.develop.my.site.com"
              onClick={handleLinkClick}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black text-sm px-4 py-2 rounded-full border hover:bg-lightGray transition"
            >
              Register As A Bouncer
            </a>
          </li>

          <li className="border-t border-lightGray !mt-8"></li>

          {/* Grid */}
          <li className="hover:text-lightGray">
           <Grid onLinkClick={handleLinkClick} />
          </li>

          {/* Profile */}
          <li className="hover:text-lightGray">
            
           <Profile onLinkClick={handleLinkClick} />

          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
