import React, { useState, useEffect, useRef } from "react";
import { fetchAllBouncers, fetchFilteredBouncers } from "../../../api/bouncerApi.jsx";
import { hasActiveFilter } from "../../../utils/filterUtils.jsx";
import { FaMapMarkerAlt } from "react-icons/fa";

const SubLocation = ({ isChecked = {}, onchecked = () => {} }) => {
  const subLocationData = {
    Delhi_NCR: [
      { label: "Delhi", key: "Delhi" },
      { label: "Gurgaon", key: "Gurgaon" },
      { label: "Noida", key: "Noida" },
      { label: "Greater Noida", key: "Greater_Noida" },
      { label: "Ghaziabad", key: "Ghaziabad" },
      { label: "Faridabad", key: "Faridabad" },
    ],
    Mumbai: [
      { label: "Bandra", key: "Bandra" },
      { label: "Andheri", key: "Andheri" },
    ],
  };

  const selectedCities = Object.keys(subLocationData).filter((city) => isChecked[city]);

  const [allBouncers, setAllBouncers] = useState([]);
  const [subarea, setSubarea] = useState({});
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const allSubLocations = selectedCities.flatMap((city) => subLocationData[city] || []);

  const filteredSubLocations = allSubLocations.filter((loc) =>
    loc.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubArea = (key) => {
    setSubarea((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // ✅ Fetch all bouncers initially
  useEffect(() => {
    fetchAllBouncers()
      .then((res) => {
        const safeData = Array.isArray(res.data) ? res.data : [];
        setAllBouncers(safeData);
        onchecked(safeData);
      })
      .catch((err) => console.error("API error:", err));
  }, [onchecked]);

  // ✅ Apply filter whenever subarea changes
  useEffect(() => {
    if (!hasActiveFilter(subarea)) {
      onchecked(allBouncers);
      return;
    }

    fetchFilteredBouncers(subarea)
      .then((res) => {
        const safeData = Array.isArray(res.data) ? res.data : [];
        onchecked(safeData);
      })
      .catch((err) => console.error("API error:", err));
  }, [subarea, allBouncers, onchecked]);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto" ref={dropdownRef}>
      {/* Input Field */}
      <div
        className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm cursor-pointer"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <FaMapMarkerAlt className="text-gray-500 mr-2" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          placeholder="Select Sub-Location"
          className="w-full outline-none text-gray-700 placeholder-gray-400 cursor-pointer"
        />
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
          {filteredSubLocations.length > 0 ? (
            filteredSubLocations.map(({ label, key }) => (
              <label
                key={key}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700"
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={!!subarea[key]}
                  onChange={() => handleSubArea(key)}
                />
                {label}
              </label>
            ))
          ) : (
            <p className="px-4 py-2 text-gray-500">No sub-locations found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SubLocation;
