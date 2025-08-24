import React, { useCallback, useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import FilterSidebar from "../Book/Filters/filterSidebar.jsx";
import BouncerCard from "../BouncerDetails/bouncercard.jsx";
import Calender from "../Book/Calendar/calender.jsx";
import Location from "../Book/Filters/Location.jsx"; 
import SubLocation from "../Book/Filters/SubLocation.jsx";

const Book = () => {
  const [Filterbouncer, setFilterbouncer] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedRange, setSelectedRange] = useState({ from: undefined, to: undefined });
  const [shift, setShift] = useState("");
  const [visible, setVisible] = useState(false); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(true);

  const handleBouncerData = useCallback((bouncer) => {
    setFilterbouncer(bouncer);
  }, []);

  const handleContinue = () => {
    const payload = {
      location: selectedLocation,
      dateRange: selectedRange,
      shift: shift,
    };
    console.log("Booking selection:", payload);
    alert("Booking selection submitted!");
  };

  // Show/hide menu button based on scroll
  useEffect(() => {
    const handleScroll = () => setShowMenuButton(window.scrollY < 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex bg-gray-50 h-screen">
      {/* Mobile menu button */}
      {showMenuButton && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed top-16 left-4 z-50 p-2"
        >
          <HiMenu className="text-3xl text-black" />
        </button>
      )}

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen
            ? "fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r transform transition-transform duration-300 z-50 translate-x-0"
            : "fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r transform transition-transform duration-300 z-50 -translate-x-full"
        } 
          md:translate-x-0 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:overflow-y-auto`}
      >
        <FilterSidebar onchecked={handleBouncerData} onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-8 md:px-16 lg:px-24 pb-24 mt-10 overflow-y-auto h-[calc(100vh-2.5rem)]">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">
          Booking
        </h1>

        {/* Filters Row */}
        <div className="flex justify-center space-x-4 relative flex-wrap mb-12">
          {/* Location Input */}
          <div className="relative w-64">
            <Location
              onLocationSelect={(loc) => {
                setSelectedLocation(loc);
                handleBouncerData([]); // reset bouncer list for now
              }}
            />
          </div>

          {/* Sub-Location Input (only shows after city selected) */}
          {selectedLocation && (
            <div className="relative w-64">
              <SubLocation
                isChecked={{ [selectedLocation]: true }}
                onchecked={handleBouncerData}
              />
            </div>
          )}

          {/* Date-Time */}
          <div className="relative w-64">
            <div
              onClick={() => setVisible((prev) => !prev)}
              className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm cursor-pointer"
            >
              <span className="text-gray-600">Select Date & Time</span>
            </div>
            {visible && (
              <div className="absolute top-full left-0 mt-2 w-full sm:w-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white shadow-xl rounded-2xl z-50 p-4 max-h-[80vh] overflow-y-auto">
                <Calender
                  shift={shift}
                  range={selectedRange}
                  onDateChange={setSelectedRange}
                  onShiftChange={setShift}
                  onContinue={handleContinue}
                />
              </div>
            )}
          </div>
        </div>

        {/* Bouncer Cards */}
        {!Array.isArray(Filterbouncer) || Filterbouncer.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No bouncers available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Filterbouncer.map((bouncer, index) => (
              <BouncerCard key={bouncer._id || index} bouncer={bouncer} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Book;
