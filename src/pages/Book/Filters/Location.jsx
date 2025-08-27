import React, { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { fetchAllBouncers, fetchFilteredBouncers } from "../../../api/bouncerApi.jsx";
import { hasActiveFilter } from "../../../utils/filterUtils.jsx";

function Location({ onchecked, islocation }) {
  const [search, setSearch] = useState("");
  const [area, setAllArea] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [locations, setLocations] = useState({
    Delhi_NCR: false,
    Mumbai: false,
    Bangalore: false,
    Kolkata: false,
    Chennai: false,
  });

  const dropdownRef = useRef(null);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Fetch all bouncers initially
  useEffect(() => {
    fetchAllBouncers()
      .then((res) => {
        const safeData = Array.isArray(res.data) ? res.data : [];
        setAllArea(safeData);
        onchecked(safeData);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, [onchecked]);

  // ✅ Refetch when filters change
  useEffect(() => {
    if (!hasActiveFilter(locations)) {
      onchecked(area);
      return;
    }

    fetchFilteredBouncers(locations)
      .then((res) => {
        const safeData = Array.isArray(res.data) ? res.data : [];
        onchecked(safeData);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, [locations, area, onchecked]);

  // ✅ Dropdown options
  const locationOptions = Object.keys(locations);

  const filteredLocations = locationOptions.filter((loc) =>
    loc.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Get selected locations text for input
  const selectedLocations = Object.keys(locations).filter((loc) => locations[loc]);

  return (
    <div className="relative w-full max-w-sm mx-auto" ref={dropdownRef}>
      {/* Input field */}
      <div
        className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm cursor-pointer"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <FaMapMarkerAlt className="text-gray-500 mr-2" />
        <input
          type="text"
          readOnly
          value={selectedLocations.join(", ")}
          placeholder="Select Location"
          className="w-full outline-none text-gray-700 placeholder-gray-400 cursor-pointer"
        />
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <ul className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
          {/* Search input inside dropdown */}
          <li className="px-3 py-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full border px-2 py-1 rounded-md outline-none text-gray-700"
            />
          </li>

          {filteredLocations.length > 0 ? (
            filteredLocations.map((loc, idx) => (
              <li
                key={idx}
                className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                <input
                  id={loc}
                  type="checkbox"
                  checked={locations[loc] || false}
                  onChange={(e) => {
                    const updated = { ...locations, [loc]: e.target.checked };
                    setLocations(updated);
                    islocation(updated); 
                  }}
                  className="mr-2"
                />
                <label htmlFor={loc}>{loc}</label>
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
