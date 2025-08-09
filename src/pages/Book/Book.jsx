import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button.jsx";
import {fetchAllBouncers, fetchFilteredBouncers} from "../../api/bouncerApi.jsx";
import FilterSidebar from "../Book/filterSidebar.jsx";
import {hasActiveFilter} from "../../utils/filterUtils.jsx";
import BouncerCard from '../Book/bouncercard.jsx';
import Calender from "../Book/Calendar/calender.jsx";

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
  useEffect(() => {
   fetchAllBouncers().then((res) => {
        const safeData = Array.isArray(res.data) ? res.data : [];
        setBouncers(safeData);
        setAllBouncers(safeData);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, []);

  useEffect(() => {

       if(!hasActiveFilter(filters)){
        setBouncers(allBouncers);
        return;
       }

      fetchFilteredBouncers(filters).then((res)=>{
          const safeData = Array.isArray(res.data) ? res.data : [];
          setBouncers(safeData);
      })
           .catch((err) => {
        console.error("API error:", err);
      });
  },[filters,allBouncers]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
  };

    const [selectedRange, setSelectedRange] = useState({
    from: undefined,
    to: undefined,
  });
  const [shift, setShift] = useState("");
  const handleContinue = () => {
    const payload = {
      dateRange: selectedRange,
      shift: shift,
    };
    console.log("Booking selection:", payload);
    alert("Booking selection submitted!");
  };

  const [visible,setvisible] = useState(false);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Left Filter Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 hidden sm:block">
       <FilterSidebar IsChecked={filters} onchecked={handleCheckboxChange}/>
      </aside>

      {/* Main Booking Section */}
      <main className="flex-1 px-4 sm:px-8 md:px-16 lg:px-24 pb-24 mt-10">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-black">
             <Link>
          <Button text="Where ?" />
        </Link>
             <Link>
          <Button text="Date-Time" onclick={()=>{setvisible(!visible)}} />
        </Link>
        </h1>
      {/* Calendar section  */}
      {visible?( <Calender
  shift={shift}
  range={selectedRange}
  onDateChange={setSelectedRange}
  onShiftChange={setShift}
  onContinue={handleContinue}
/>):(console.log("Calendar is not visible"))}
        {/* Bouncer Cards */}
        {!Array.isArray(bouncers) || bouncers.length === 0 ? (
          <p className="text-center text-gray text-lg">
            No bouncers available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bouncers.map((bouncer,index) => (
             <BouncerCard key={bouncer._id || index} bouncer={bouncer}/>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Book;
