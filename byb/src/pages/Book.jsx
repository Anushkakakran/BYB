import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../Components/Button';

const Book = () => {
  const [bouncers, setBouncers] = useState([]);
   const [allBouncers, setAllBouncers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5858/api/accounts/')
      .then((res) => {
        setBouncers(res.data);
          setAllBouncers(res.data);
      })
      .catch((err) => {
        console.error('API error:', err);
      });
  }, []);

    const [IsChecked,setIsChecked] = useState({
       medium: false,
       lean : false,
       heavy : false,
       below_175:false,
      Range_175_180 :false,
        Range_180_185  :false,
       above_185:false,
       below_25:false,
       Range_25_30:false,
       Range_30_35:false,
       above_35:false,
       filters_type:0
});
 
const onchecked = (event, filter_Type)=>{
    const { name, checked } = event.target;
  setIsChecked((prev) => ({
    ...prev,
    [name]: checked,
    filters_type: filter_Type
  }));
};

useEffect(() => {

      const hasActiveFilter = Object.values(IsChecked).some((val) => val === true);

    if (!hasActiveFilter) {
      setBouncers(allBouncers);
      return;
    }
  const sendData = async () => {
    try {
      const response = await axios.post('http://localhost:5858/api/filter/newfilter', IsChecked);
      console.log('Server response:', response.data);
       setBouncers(response.data);
    } catch (error) {
      console.error('Error posting data:', error.message);
    }
  };
  sendData();
}, [IsChecked,allBouncers]);

  return (
<>
<div className="flex min-h-screen bg-gray-50">
  {/* Sidebar */}
  <aside className="w-64 bg-white p-6 border-r border-gray-200 sticky top-0 h-screen overflow-auto">
    <h2 className="text-xl font-semibold mb-4">Filters</h2>
    
    <div>
      <h3 className="text-lg font-medium mb-3">Height</h3>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          name="below_175"
          checked={IsChecked.below_175}
          onChange={(e) => onchecked(e, 0)}
          className="mr-2"
        />
        Below 175
      </label>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          name="Range_175_180"
          checked={IsChecked.Range_175_180}
          onChange={(e)=>onchecked(e,0)}
          className="mr-2"
        />
        175-180
      </label>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          name="Range_180_185"
          checked={IsChecked.Range_180_185}
          onChange={(e)=>onchecked(e,0)}
          className="mr-2"
        />
        180-185
      </label>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          name="above_185"
          checked={IsChecked.above_185}
          onChange={(e)=>onchecked(e,0)}
          className="mr-2"
        />
        Above 185
      </label>
    </div>

    <div>
      <h3 className="text-lg font-medium mb-3">Categories</h3>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          name="medium"
          checked={IsChecked.medium}
          onChange={(e)=>onchecked(e,1)}
          className="mr-2"
        />
        Medium
      </label>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          name="lean"
          checked={IsChecked.lean}
          onChange={(e)=>onchecked(e,1)}
          className="mr-2"
        />
        Lean
      </label>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          name="heavy"
          checked={IsChecked.heavy}
          onChange={(e)=>onchecked(e,1)}
          className="mr-2"
        />
        Heavy
      </label>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-medium mb-3">Age</h3>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          name="below_25"
          checked={IsChecked.below_25}
          onChange={(e)=>onchecked(e,0)}
          className="mr-2"
        />
        Below 25
      </label>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          name="Range_25_30"
          checked={IsChecked.Range_25_30}
          onChange={(e)=>onchecked(e,0)}
          className="mr-2"
        />
        25-35
      </label>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          name="Range_30_35"
          checked={IsChecked.Range_30_35}
          onChange={(e)=>onchecked(e,0)}
          className="mr-2"
        />
        30_35
      </label>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          name="above_35"
          checked={IsChecked.above_35}
          onChange={(e)=>onchecked(e,0)}
          className="mr-2"
        />
        Above 35
      </label>
    </div>
  </aside>

  {/* Main Content */}
  <main className="flex-1 p-6">
    <h1 className="text-4xl font-extrabold text-center mb-12 text-black">Book a Bouncer</h1>

    {bouncers.length === 0 ? (
      <p className="text-center text-gray-600 text-lg">No bouncers available at the moment.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bouncers.map((bouncer) => (
          <div
            key={bouncer._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={bouncer.Profile_Image__c}
              alt={bouncer.Name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-black">
                {bouncer.Salutation} {bouncer.FirstName} {bouncer.LastName}
              </h2>
              <p className="text-gray-600 mt-1">Age: {bouncer.Age__c}</p>
              <p className="text-gray-600">Phone: {bouncer.Phone}</p>
              <div className="mt-4">
                <Link to={`/book-bouncer/${bouncer._id}`} state={bouncer}>
                  <Button text="View Details" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </main>
</div>
    </>
  );
};

export default Book;
