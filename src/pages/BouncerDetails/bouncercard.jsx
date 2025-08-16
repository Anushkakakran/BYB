import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';

const BouncerCard = ({ bouncer }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
        <Link to="">
          <Button text="Buy Now" />
        </Link>
        <Link to="">
          <Button text="Add To Booking" />
        </Link>
      </div>
    </div>
  </div>
);

export default BouncerCard;
