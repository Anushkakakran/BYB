import React from 'react';
import { useState,useEffect } from 'react';
import { fetchAllBouncers, fetchFilteredBouncers} from "../../../api/bouncerApi.jsx";
import { hasActiveFilter } from "../../../utils/filterUtils.jsx";

const SubLocation = ({ isChecked ={ },onchecked={}}) => {
     const subLocationData = {
  Delhi_NCR: [
    { label: "Delhi", key: "Delhi" },
    { label: "Gurgaon", key: "Gurgaon" },
    { label: "Noida", key: "Noida" },
    { label: "Greater_Noida", key: "Greater_Noida" },
    { label: "Ghaziabad", key: "Ghaziabad" },
    { label: "Faridabad", key: "Faridabad" },
  ],
  Mumbai: [
    { label: "Bandra", key: "Bandra" },
    { label: "Andheri", key: "Andheri" },
  ],
};
const selectedCities = Object.keys(subLocationData).filter((city) => isChecked[city]);
    const [allBouncers, setAllBouncers] = useState([]);
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

        const handleSubArea = (e) => {
    const { name, checked } = e.target;
      setsubarea((prev)=>({...prev,[name]:checked}))
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
                    if (!hasActiveFilter(subarea)) {
                      onchecked(allBouncers);
                      return;
                    }
                
                    fetchFilteredBouncers(subarea)
                      .then((res) => {
                        const safeData = Array.isArray(res.data) ? res.data : [];
                        onchecked(safeData);
                      })
                      .catch((err) => {
                        console.error("API error:", err);
                      });
                  }, [subarea, allBouncers,onchecked,]);

return (
  <div>
    {selectedCities.length === 0 ? (
      null
    ) : (
      selectedCities.map((city) => (
        <div key={city}>
            <h1>{city}</h1>
          {subLocationData[city]?.map(({ label, key }) => (
            <label key={key} style={{ display: "block" }}>
              <input type="checkbox" name={key} checked={subarea[key]} onChange={handleSubArea} />
              {label}
            </label>
          ))}
        </div>
      ))
    )}
  </div>
);
};

export default SubLocation;
