import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../Components/Button';

const Book = () => {
  const [bouncers, setBouncers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5858/api/accounts/')
      .then((res) => {
        setBouncers(res.data);
      })
      .catch((err) => {
        console.error('API error:', err);
      });
  }, []);

  return (
    <div className="mt-28 px-4 sm:px-8 md:px-16 lg:px-24 pb-24">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-black">Book a Bouncer</h1>

      {bouncers.length === 0 ? (
        <p className="text-center text-gray text-lg">No bouncers available at the moment.</p>
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
                <h2 className="text-xl font-bold text-black">{bouncer.Salutation} {bouncer.FirstName} {bouncer.LastName}</h2>
                <p className="text-gray mt-1">Age: {bouncer.Age__c}</p>
                <p className="text-gray">Phone: {bouncer.Phone}</p>

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
    </div>
  );
};

export default Book;
