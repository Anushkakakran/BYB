import React from 'react';

const FilterSidebar = ({ IsChecked, onchecked }) => (
  <aside className="w-64 bg-white p-6 border-r border-gray-200 sticky top-0 h-screen overflow-auto">
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
          <input type="checkbox" name={key} checked={IsChecked[key]} onChange={onchecked} className="mr-2" />
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
          <input type="checkbox" name={key} checked={IsChecked[key]} onChange={onchecked} className="mr-2" />
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
          <input type="checkbox" name={key} checked={IsChecked[key]} onChange={onchecked} className="mr-2" />
          {label}
        </label>
      ))}
    </div>
  </aside>
);

export default FilterSidebar;
