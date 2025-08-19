import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button.jsx";
import FilterSidebar from "../Book/Filters/filterSidebar.jsx";
import BouncerCard from "../BouncerDetails/bouncercard.jsx";
import Calender from "../Book/Calendar/calender.jsx";
import { HiMenu } from "react-icons/hi";
import Location from "../Book/Filters/Location.jsx";
import SubLocation from "../Book/Filters/subLocation.jsx";

const Book = () => {
    const  [Filterbouncer,setFilterbouncer] = useState([]);
     const  [area,setarea] = useState([]);
  const [visible, setVisible] = useState(false);
  const [see, setsee] = useState(false);
    const [seen, setseen] = useState(false);
  const [selectedRange, setSelectedRange] = useState({ from: undefined, to: undefined });
  const [shift, setShift] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(true);
 
  const handledata = useCallback((bouncer) => {
    setFilterbouncer(bouncer);
  }, []);
  
   const handleSubAreaButton = useCallback((bouncer) => {
    setarea(bouncer);
  }, []);

  const handleContinue = () => {
    const payload = {
      dateRange: selectedRange,
      shift: shift,
    };
    console.log("Booking selection:", payload);
    alert("Booking selection submitted!");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setShowMenuButton(true);
      } else {
        setShowMenuButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex bg-gray-50 h-screen">
      {showMenuButton && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed top-16 left-4 z-50 p-2"
        >
          <HiMenu className="text-3xl text-black" />
        </button>
      )}

      {/* Dark Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Sidebar: fixed with full viewport height */}
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen
            ? "fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r transform transition-transform duration-300 z-50 translate-x-0"
            : "fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r transform transition-transform duration-300 z-50 -translate-x-full"
        } 
          md:translate-x-0 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:overflow-y-auto`}
      >
        <FilterSidebar
          onchecked={handledata}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* Main Booking Section: scrollable */}
      <main className="flex-1 px-4 sm:px-8 md:px-16 lg:px-24 pb-24 mt-10 overflow-y-auto h-[calc(100vh-2.5rem)]">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-black">
          <div className="flex justify-center space-x-4">
            <Link>
              <Button text="Location" onclick={() => setsee(!see)} />
            </Link>
            {Object.values(area).some(Boolean)&&(<Link>
              <Button text="Sub-Location" onclick={() => setseen(!seen)} />
            </Link>)
            }
            <Link>
              <Button text="Date-Time" onclick={() => setVisible(!visible)} />
            </Link>
          </div>
        </h1>

        {visible && (
          <Calender
            shift={shift}
            range={selectedRange}
            onDateChange={setSelectedRange}
            onShiftChange={setShift}
            onContinue={handleContinue}
          />
        )}
        {see&&(<Location AREA={handleSubAreaButton} onchecked={handledata}/>)}
        {seen&&(<SubLocation isChecked={area}  onchecked={handledata}/>)}
        {!Array.isArray(Filterbouncer) || Filterbouncer.length === 0 ? (
          <p className="text-center text-gray text-lg">
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
