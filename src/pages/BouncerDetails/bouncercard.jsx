import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import axios from "axios";
import { getGuestId } from "../../utils/getGuestId.jsx";

const BouncerCard = ({ bouncer }) => {
  const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5858";
  const BASE_URL = rawBaseUrl.replace(/\/+$/, "") + "/api";
       const  token = localStorage.getItem("token");
  const AddToReservation = async (bouncerid) => {
     const guestId = getGuestId();
    console.log("Sending ID to backend:", bouncerid ,guestId ,token); 
    try {
        if(token){
          const res = await axios.post(`${BASE_URL}/reservation/add`,{ bouncerid: bouncerid }, { headers: { Authorization: `Bearer ${token}` } });
         alert(res.data.message || "Added to reservation successfully");
        }else{
             const res = await axios.post(`${BASE_URL}/reservation/add`, { bouncerid: bouncerid ,guestid: guestId,});
      alert(res.data.message || "Added to reservation successfully");
        }
    } catch (err) {
      console.error("Error adding reservation:", err);
      alert("Failed to add to reservation");
    }
  };

  return (
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
        <div className="mt-4 flex gap-2">
          <Link to={`/book-bouncer/${bouncer._id}`} state={bouncer}>
            <Button text="View Details" />
          </Link>
          <Link to="">
            <Button text="Buy Now" />
          </Link>
          <Button
            text="Add To Booking"
            onclick={() => AddToReservation(bouncer._id)}
          />
        </div>
      </div>
    </div>
  );
};

export default BouncerCard;
