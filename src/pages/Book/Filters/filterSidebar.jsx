import React ,{ useEffect, useState }  from "react";
import { HiX } from "react-icons/hi";
import { fetchAllBouncers, fetchFilteredBouncers} from "../../../api/bouncerApi.jsx";
import { hasActiveFilter } from "../../../utils/filterUtils.jsx";

function FilterSidebar({  onchecked, onClose}) {
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
        fetchAllBouncers()
          .then((res) => {
            const safeData = Array.isArray(res.data) ? res.data : [];
            setAllBouncers(safeData);
             onchecked(safeData);
          })
          .catch((err) => {
            console.error("API error:", err);
          });
      }, [onchecked]);
        useEffect(() => {
          if (!hasActiveFilter(filters)) {
            onchecked(allBouncers);
            return;
          }
      
          fetchFilteredBouncers(filters)
            .then((res) => {
              const safeData = Array.isArray(res.data) ? res.data : [];
              onchecked(safeData);
            })
            .catch((err) => {
              console.error("API error:", err);
            });
        }, [filters, allBouncers,onchecked]);
      
        const handleFilter = (e) => {
          const { name, checked } = e.target;
             setFilters((prev) => ({ ...prev, [name]: checked }));
        };
  return (
   <aside className="w-64 bg-white p-6 border-r border-gray-200 sticky top-0 h-full overflow-auto">

    <div className="flex justify-between items-center mb-4 sm:hidden">
      <h2 className="text-xl font-semibold">Filters</h2>
      <button onClick={onClose} className="text-2xl">
        <HiX />
      </button>
    </div>


    <h2 className="text-xl font-semibold mb-4 hidden sm:block">Filters</h2>

    {/* Height Filters */}
    <div>
      <h3 className="text-lg font-medium mb-3">Height</h3>
      {[
        { label: "173–178 CM", key: "height_173_178" },
        { label: "179–182 CM", key: "height_179_182" },
        { label: "Above 183 CM", key: "height_above_183" },
      ].map(({ label, key }) => (
        <label key={key} className="flex items-center mb-2">
          <input
            type="checkbox"
            name={key}
            checked={filters[key]}
            onChange={handleFilter}
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
        { label: "Lean", key: "lean" },
        { label: "Medium", key: "medium" },
        { label: "Heavy", key: "heavy" },
      ].map(({ label, key }) => (
        <label key={key} className="flex items-center mb-2">
          <input
            type="checkbox"
            name={key}
            checked={filters[key]}
            onChange={handleFilter}
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
        { label: "Below 25", key: "age_below_25" },
        { label: "25–30", key: "age_25_30" },
        { label: "30–35", key: "age_30_35" },
        { label: "Above 35", key: "age_above_35" },
      ].map(({ label, key }) => (
        <label key={key} className="flex items-center mb-2">
          <input
            type="checkbox"
            name={key}
            checked={filters[key]}
            onChange={handleFilter}
            className="mr-2"
          />
          {label}
        </label>
      ))}
    </div>
  </aside>
  )
}

export default FilterSidebar;
