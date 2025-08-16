import React from 'react'

function Location({isChecked,Onchecked}) {
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
            checked={isChecked[key]}
            onChange={Onchecked}
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
