import React, { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function Location({ onLocationSelect }) {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
 const locations = [
    "New Delhi, India",
    "Mumbai, India",
    "Bengaluru, India",
    "Kolkata, India",
    "Chennai, India",
    "Jaipur, India",
    "Goa, India",
    "Hyderabad, India",
  ];

  const dropdownRef = useRef(null);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (loc) => {
    setSearch(loc);
    setShowDropdown(false);
    onLocationSelect(loc);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto" ref={dropdownRef}>
      <div className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm">
        <FaMapMarkerAlt className="text-gray-500 mr-2" />
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowDropdown(true);
          }}
          onClick={() => setShowDropdown(true)} // ✅ open dropdown on click
          placeholder="Search location"
          className="w-full outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {showDropdown && (
        <ul className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((loc, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(loc)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700"
              >
                {loc}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Location;
