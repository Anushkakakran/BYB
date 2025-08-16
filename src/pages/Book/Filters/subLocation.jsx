import React from 'react';

const SubLocation = ({ isChecked ={ },IsChecked={},Onchecked={}}) => {
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
              <input type="checkbox" name={key} checked={IsChecked[key]} onChange={Onchecked} />
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
