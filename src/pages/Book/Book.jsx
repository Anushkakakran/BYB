import React, { useEffect, useState } from 'react';
import { fetchAllBouncers, fetchFilteredBouncers } from '../../api/bouncerApi';
import { hasActiveFilter } from '../../utils/filterUtils';
import FilterSidebar from './filterSidebar';
import BouncerCard from './bouncerCard';

const Book = () => {
  const [bouncers, setBouncers] = useState([]);
  const [allBouncers, setAllBouncers] = useState([]);

  const [IsChecked, setIsChecked] = useState({
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
    fetchAllBouncers()
      .then((res) => {
        setBouncers(res.data);
        setAllBouncers(res.data);
      })
      .catch((err) => console.error('API error:', err));
  }, []);

  useEffect(() => {
    if (!hasActiveFilter(IsChecked)) {
      setBouncers(allBouncers);
      return;
    }

    fetchFilteredBouncers(IsChecked)
      .then((res) => setBouncers(res.data))
      .catch((err) => console.error('Filter error:', err));
  }, [IsChecked, allBouncers]);

  const onchecked = (event) => {
    const { name, checked } = event.target;
    setIsChecked((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <FilterSidebar IsChecked={IsChecked} onchecked={onchecked} />
      <main className="flex-1 p-6">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-black">Book a Bouncer</h1>
        {bouncers.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No bouncers available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bouncers.map((bouncer) => (
              <BouncerCard key={bouncer._id} bouncer={bouncer} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Book;
