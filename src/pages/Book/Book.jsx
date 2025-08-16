import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button.jsx";
import { fetchAllBouncers, fetchFilteredBouncers} from "../../api/bouncerApi.jsx";
import FilterSidebar from "../Book/Filters/filterSidebar.jsx";
import { hasActiveFilter } from "../../utils/filterUtils.jsx";
import BouncerCard from "../BouncerDetails/bouncercard.jsx";
import Calender from "../Book/Calendar/calender.jsx";
import { HiMenu } from "react-icons/hi";
import Location from "../Book/Filters/Location.jsx";
import SubLocation from "../Book/Filters/subLocation.jsx";

const Book = () => {
  const [bouncers, setBouncers] = useState([]);
  const [allBouncers, setAllBouncers] = useState([]);
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
    const [area, setarea] = useState({
      Bangalore:false ,
      Chennai:false,
      Delhi_NCR:false,
      Kolkata:false,
      Mumbai:false,
    });
    const [subarea,setsubarea] = useState({
      Delhi:false ,
      Gurgaon: false ,
      Noida:false,
      Greater_Noida: false ,
      Ghaziabad: false , 
      Faridabad : false ,
      Andheri:false, 
      Bandra:false
    })
  const [visible, setVisible] = useState(false);
  const [see, setsee] = useState(false);
    const [seen, setseen] = useState(false);
  const [selectedRange, setSelectedRange] = useState({ from: undefined, to: undefined });
  const [shift, setShift] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(true);

  useEffect(() => {
    fetchAllBouncers()
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
    if (!hasActiveFilter(filters,area)) {
      setBouncers(allBouncers);
      return;
    }

    fetchFilteredBouncers(filters,area,subarea)
      .then((res) => {
        const safeData = Array.isArray(res.data) ? res.data : [];
        setBouncers(safeData);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, [filters,area,subarea, allBouncers]);

  const handleFilter = (e) => {
    const { name, checked } = e.target;
       setFilters((prev) => ({ ...prev, [name]: checked }));
  };
    const handleArea = (e) => {
    const { name, checked } = e.target;
      setarea((prev)=>({...prev,[name]:checked}));
  };
    const handleSubArea = (e) => {
    const { name, checked } = e.target;
      setsubarea((prev)=>({...prev,[name]:checked}))
  };

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
          className="sm:hidden fixed top-16 left-4 z-50 p-2"
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
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] overflow-auto text-black z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform sm:static sm:translate-x-0 sm:h-auto sm:overflow-visible`}
      >
        <FilterSidebar
          IsChecked={filters}
          onchecked={handleFilter}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* Main Booking Section: scrollable */}
      <main className="flex-1 px-4 sm:px-8 md:px-16 lg:px-24 pb-24 mt-10 overflow-y-auto h-[calc(100vh-2.5rem)]">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-black">
          <div className="flex justify-center space-x-4">
            <Link>
              <Button text="Location"onclick={() => setsee(!see)} />
            </Link>
            {Object.values(area).some(Boolean)&&(<Link>
              <Button text="Sub-Location"onclick={() => setseen(!seen)} />
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
        {see&&(<Location isChecked={area} Onchecked={handleArea}/>)}
        {seen&&(<SubLocation isChecked={area} IsChecked={subarea} Onchecked={handleSubArea}/>)}
        {!Array.isArray(bouncers) || bouncers.length === 0 ? (
          <p className="text-center text-gray text-lg">
            No bouncers available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bouncers.map((bouncer, index) => (
              <BouncerCard key={bouncer._id || index} bouncer={bouncer} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Book;
