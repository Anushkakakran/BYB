import { useState ,useEffect} from "react";
import React from  'react';
import { fetchAllBouncers, fetchFilteredBouncers} from "../../../api/bouncerApi.jsx";
import { hasActiveFilter } from "../../../utils/filterUtils.jsx";

function Location({onchecked={},AREA={}}) {
      const [allBouncers, setAllBouncers] = useState([]);
      const [area, setarea] = useState({
        Bangalore:false ,
        Chennai:false,
        Delhi_NCR:false,
        Kolkata:false,
        Mumbai:false,
      });
          const handleArea = (e) => {
    const { name, checked } = e.target;
      setarea((prev)=>({...prev,[name]:checked}));
  };
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
                  if (!hasActiveFilter(area)) {
                    onchecked(allBouncers);
                    AREA(area)
                    return;
                  }
              
                  fetchFilteredBouncers(area)
                    .then((res) => {
                      const safeData = Array.isArray(res.data) ? res.data : [];
                      onchecked(safeData);
                      AREA(area)
                    })
                    .catch((err) => {
                      console.error("API error:", err);
                    });
                }, [area, allBouncers,onchecked,AREA]);
  return (
  <>
      <div>
      <h3 className="text-lg font-medium mb-3">Select Area</h3>
      {[
        { label: "Bangalore", key:"Bangalore" },
        { label: "Chennai", key: "Chennai" },
        { label: "Delhi_NCR", key: "Delhi_NCR" },
        { label: "Kolkata", key: "Kolkata" },
        { label: "Mumbai", key: "Mumbai" },
      ].map(({ label, key }) => (
        <label key={key} className="flex items-center mb-2">
          <input
            type="checkbox"
            name={key}
            checked={area[key]}
            onChange={handleArea}
            className="mr-2"
          />
          {label}
        </label>
      ))}
    </div>
  </>
  )
}

export default Location;
