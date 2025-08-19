import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = ({ onLinkClick }) => {
  const Navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
 let token = localStorage.getItem("token");
 let username = localStorage.getItem("username");
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownLinkClick = () => {
    setIsOpen(false);
    if (onLinkClick) onLinkClick(); 
  };

  const handleAuthAction = () => {
        localStorage.removeItem("token");
         localStorage.removeItem("username");
                 localStorage.removeItem("userid");
    handleDropdownLinkClick();
    Navigate("/login");
  };

  return (
    <div ref={dropdownRef} className="relative text-black">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-lightGray"
      >
        <FaUserCircle className="text-3xl" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-4 w-44 md:w-32 bg-white rounded-lg shadow-lg z-50">
          <h1 className="w-full text-left px-4 py-2 ">{username}</h1>
          {token?(
           (   
            <button
              onClick={handleAuthAction}
              className="w-full text-left px-4 py-2 hover:text-lightGray"
            >
              Sign Out
            </button>)
          ) : (
            <Link
              to="/login"
              onClick={handleDropdownLinkClick}
              className="block px-4 py-2 hover:text-lightGray"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
