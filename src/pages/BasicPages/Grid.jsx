import { MdApps } from "react-icons/md"; 
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Grid = ({ onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <div ref={dropdownRef} className="relative">
      <button
        className="p-2 rounded-full hover:text-lightGray"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MdApps size={28} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 text-black bg-white rounded-lg shadow-lg z-50">
          <Link
            to=""
            onClick={handleDropdownLinkClick}
            className="block px-4 py-2 hover:text-gray"
          >
            My Booking
          </Link>
          <Link
            to=""
            onClick={handleDropdownLinkClick}
            className="block px-4 py-2 hover:text-gray"
          >
            Booking History
          </Link>
            <Link
            to="/Reservation"
            onClick={handleDropdownLinkClick}
            className="block px-4 py-2 hover:text-gray"
          >
            My Reservations
          </Link>
        </div>
      )}
    </div>
  );
};

export default Grid;
