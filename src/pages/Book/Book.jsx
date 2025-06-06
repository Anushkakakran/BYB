import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../../Components/Button.jsx";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const Book = () => {
  const [bouncers, setBouncers] = useState([]);
  const [allBouncers, setAllBouncers] = useState([]);
  const [selectedRange, setSelectedRange] = useState({
    from: undefined,
    to: undefined,
  });
  const [shift, setShift] = useState("");

  const [filters, setFilters] = useState({
    height_173_178: false,
    height_179_182: false,
    height_above_183: false,
    age_below_25: false,
    age_25_30: false,
    age_30_35: false,
    age_above_35: false,
    lean: false,
    medium: false,
    heavy: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5858/api/accounts/")
      .then((res) => {
        const safeData = Array.isArray(res.data) ? res.data : [];
        setBouncers(safeData);
        setAllBouncers(safeData);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, []);

  useEffect(() => {
    const activeFilters = Object.entries(filters).filter(
      ([_, checked]) => checked
    );
    if (activeFilters.length === 0) {
      setBouncers(allBouncers);
      return;
    }

    const filtered = allBouncers.filter((b) => {
      const height = b.Height__c || 0;
      const age = b.Age__c || 0;
      const body = b.Body_Type__c?.toLowerCase();

      return (
        (!filters.height_173_178 || (height >= 173 && height <= 178)) &&
        (!filters.height_179_182 || (height >= 179 && height <= 182)) &&
        (!filters.height_above_183 || height > 183) &&
        (!filters.age_below_25 || age < 25) &&
        (!filters.age_25_30 || (age >= 25 && age <= 30)) &&
        (!filters.age_30_35 || (age >= 30 && age <= 35)) &&
        (!filters.age_above_35 || age > 35) &&
        (!filters.lean || body === "lean") &&
        (!filters.medium || body === "medium") &&
        (!filters.heavy || body === "heavy")
      );
    });

    setBouncers(filtered);
  }, [filters, allBouncers]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
  };

  const isFormValid = selectedRange.from && selectedRange.to && shift;

  const handleContinue = () => {
    const payload = {
      dateRange: selectedRange,
      shift: shift,
    };
    console.log("Booking selection:", payload);
    alert("Booking selection submitted!");
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Left Filter Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 hidden sm:block">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        <div className="space-y-2">
          <h3 className="font-medium text-gray-700">Height</h3>
          <label className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
            <input
              type="checkbox"
              name="height_173_178"
              onChange={handleCheckboxChange}
              className="mr-2 cursor-pointer"
            />
            173–178 cm
          </label>
          <br />
          <label className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
            <input
              type="checkbox"
              name="height_179_182"
              onChange={handleCheckboxChange}
              className="mr-2 cursor-pointer"
            />
            179–182 cm
          </label>
          <br />
          <label className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
            <input
              type="checkbox"
              name="height_above_183"
              onChange={handleCheckboxChange}
              className="mr-2 cursor-pointer"
            />
            Above 183 cm
          </label>
        </div>

        <div className="space-y-2 mt-4">
          <h3 className="font-medium text-gray-700">Age</h3>
          <label className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
            <input
              type="checkbox"
              name="age_below_25"
              onChange={handleCheckboxChange}
              className="mr-2 cursor-pointer"
            />
            Below 25
          </label>
          <br />
          <label className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
            <input
              type="checkbox"
              name="age_25_30"
              onChange={handleCheckboxChange}
              className="mr-2 cursor-pointer"
            />
            25–30
          </label>
          <br />
          <label className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
            <input
              type="checkbox"
              name="age_30_35"
              onChange={handleCheckboxChange}
              className="mr-2 cursor-pointer"
            />
            30–35
          </label>
          <br />
          <label className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
            <input
              type="checkbox"
              name="age_above_35"
              onChange={handleCheckboxChange}
              className="mr-2 cursor-pointer"
            />
            Above 35
          </label>
        </div>

        <div className="space-y-2 mt-4">
          <h3 className="font-medium text-gray-700">Body Type</h3>
          <label className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
            <input
              type="checkbox"
              name="lean"
              onChange={handleCheckboxChange}
              className="mr-2 cursor-pointer"
            />
            Lean
          </label>
          <br />
          <label className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
            <input
              type="checkbox"
              name="medium"
              onChange={handleCheckboxChange}
              className="mr-2 cursor-pointer"
            />
            Medium
          </label>
          <br />
          <label className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
            <input
              type="checkbox"
              name="heavy"
              onChange={handleCheckboxChange}
              className="mr-2 cursor-pointer"
            />
            Heavy
          </label>
        </div>
      </aside>

      {/* Main Booking Section */}
      <main className="flex-1 px-4 sm:px-8 md:px-16 lg:px-24 pb-24 mt-10">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-black">
          Book Bouncer
        </h1>

        {/* Booking Card */}
        <div className="max-w-3xl mx-auto mb-10 p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Select Booking Dates & Shift
          </h2>

          {/* Date Range Picker */}
          <div className="flex justify-center mb-6">
            <DayPicker
              mode="range"
              selected={selectedRange}
              onSelect={setSelectedRange}
              fromDate={new Date()}
              className="text-sm"
              styles={{
                caption: { fontSize: "0.85rem" },
                head_cell: { padding: "0.25rem" },
                day: {
                  padding: "0.25rem",
                  width: "1.8rem",
                  height: "1.8rem",
                },
                day_selected: { width: "1.8rem", height: "1.8rem" },
              }}
            />
          </div>

          {/* Shift Selection */}
          <div className="flex justify-center gap-4 mb-6">
            {["Day", "Night"].map((option) => (
              <button
                key={option}
                onClick={() => setShift(option)}
                className={`px-4 py-2 rounded-md border transition-transform duration-300 ${
                  shift === option
                    ? "bg-blue-600 text-white scale-105 shadow-lg"
                    : "bg-gray-100 hover:bg-black hover:text-white hover:scale-105"
                }`}
              >
                {option} Shift
              </button>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-4 text-center text-gray-700">
            {selectedRange.from && (
              <p>
                Selected: {format(selectedRange.from, "PPP")} →{" "}
                {selectedRange.to ? format(selectedRange.to, "PPP") : "..."} |{" "}
                Shift: {shift || "Not selected"}
              </p>
            )}
          </div>

          {/* Continue Button */}
          <div className="mt-6 flex justify-center">
            <button
              disabled={!isFormValid}
              onClick={handleContinue}
              className={`px-6 py-2 rounded-xl transition-transform duration-300 ${
                isFormValid
                  ? "bg-black text-white hover:bg-gray-900 hover:scale-105 cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
        </div>

        {/* Bouncer Cards */}
        {bouncers.length === 0 ? (
          <p className="text-center text-gray text-lg">
            No bouncers available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bouncers.map((bouncer) => (
              <div
                key={bouncer._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden 
                  hover:shadow-xl hover:-translate-y-2 hover:scale-105 
                  transform transition-all duration-300 cursor-pointer"
              >
                <img
                  src={bouncer.Profile_Image__c}
                  alt={bouncer.Name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-xl font-bold text-black">
                    {bouncer.Salutation} {bouncer.FirstName} {bouncer.LastName}
                  </h2>
                  <p className="text-gray mt-1">Age: {bouncer.Age__c}</p>
                  <p className="text-gray">Phone: {bouncer.Phone}</p>
                  <div className="mt-4">
                    <Link to={`/book-bouncer/${bouncer._id}`} state={bouncer}>
                      <Button
                        text="View Details"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Book;
