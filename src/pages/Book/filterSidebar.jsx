import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from "react-icons/hi";

const FilterSidebar = ({ IsChecked, onchecked }) => {
  const [menuOpen, setMenuOpen] = useState(false);
    const [showIcon, setShowIcon] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
       {showIcon && (
        <div className="md:hidden fixed h-full z-50 ml-2 mt-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      )}

      {menuOpen && (
        <div
          className="md:hidden  inset-0 bg-black bg-opacity-50 z-40"
           onClick={handleLinkClick}
        />
      )}


      <div
        className={`${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform  duration-300 ease-in-out md:block fixed md:static left-0 z-50`}
      >
        <aside className="w-64 bg-white  p-6 border-r border-gray-200 sticky h-full overflow-auto">
          <div className="md:hidden text-2xl mb-4">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          {/* Height Filters */}
          <div>
            <h3 className="text-lg font-medium mb-3">Height</h3>
            {[
              { label: '173–178 CM', key: 'height_173_178' },
              { label: '179–182 CM', key: 'height_179_182' },
              { label: 'Above 183 CM', key: 'height_above_183' },
            ].map(({ label, key }) => (
              <label key={key} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  name={key}
                  checked={IsChecked[key]}
                  onChange={onchecked}
                  className="mr-2"
                />
                {label}
              </label>
            ))}
          </div>

          {/* Build Filters */}
          <div>
            <h3 className="text-lg font-medium mb-3 mt-6">Build Type</h3>
            {[
              { label: 'Lean', key: 'lean' },
              { label: 'Medium', key: 'medium' },
              { label: 'Heavy', key: 'heavy' },
            ].map(({ label, key }) => (
              <label key={key} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  name={key}
                  checked={IsChecked[key]}
                  onChange={onchecked}
                  className="mr-2"
                />
                {label}
              </label>
            ))}
          </div>

          {/* Age Filters */}
          <div className="mb-8 mt-6">
            <h3 className="text-lg font-medium mb-3">Age</h3>
            {[
              { label: 'Below 25', key: 'age_below_25' },
              { label: '25–30', key: 'age_25_30' },
              { label: '30–35', key: 'age_30_35' },
              { label: 'Above 35', key: 'age_above_35' },
            ].map(({ label, key }) => (
              <label key={key} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  name={key}
                  checked={IsChecked[key]}
                  onChange={onchecked}
                  className="mr-2"
                />
                {label}
              </label>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
};

export default FilterSidebar;
