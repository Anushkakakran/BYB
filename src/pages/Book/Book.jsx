import React, { useEffect, useState } from 'react';
import { fetchAllBouncers, fetchFilteredBouncers } from '../../api/bouncerApi';
import { hasActiveFilter } from '../../utils/filterUtils';
import FilterSidebar from './filterSidebar';
import BouncerCard from './bouncercard';

const Book = () => {
  const [bouncers, setBouncers] = useState([]);
  const [allBouncers, setAllBouncers] = useState([]);

  const [isChecked, setIsChecked] = useState({
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

  // 🔁 Fetch All Bouncers on Load
  useEffect(() => {
    fetchAllBouncers()
      .then((res) => {
        console.log("✅ fetchAllBouncers →", res.data);
        const safeData = Array.isArray(res.data) ? res.data : [];
        setBouncers(safeData);
        setAllBouncers(safeData);
      })
      .catch((err) => {
        console.error('❌ Error fetching all bouncers:', err);
      });
  }, []);

  // 🔍 Apply Filters Whenever Checkboxes Change
  useEffect(() => {
    if (!hasActiveFilter(isChecked)) {
      console.log("🧹 No filters active → restoring all bouncers");
      setBouncers(allBouncers);
      return;
    }

    fetchFilteredBouncers(isChecked)
      .then((res) => {
        console.log("🎯 fetchFilteredBouncers →", res.data);
        const safeData = Array.isArray(res.data) ? res.data : [];
        setBouncers(safeData);
      })
      .catch((err) => {
        console.error('❌ Error applying filters:', err);
      });
  }, [isChecked, allBouncers]);

  // ✅ Checkbox Toggle Handler
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setIsChecked((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="flex  min-h-screen bg-gray-50">
      <FilterSidebar IsChecked={isChecked} onchecked={handleCheckboxChange} />
      <main className="flex-1 mt-14 p-6 ">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-black">
          Book a Bouncer
        </h1>

        {!Array.isArray(bouncers) || bouncers.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
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
