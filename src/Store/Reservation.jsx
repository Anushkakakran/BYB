import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Components/Button";
import { getGuestId } from "../utils/getGuestId";

const Reservation = () => {
  const [message, setMessage] = useState("");
  const [reserve, setReserve] = useState([]);
  const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5858";
  const BASE_URL = rawBaseUrl.replace(/\/+$/, "") + "/api";

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const token = localStorage.getItem("token");

        let res;
        if (token) {
          res = await axios.post(`${BASE_URL}/reservation/view`, {
            headers: { Authorization: `Bearer ${token}` },
          });
        } else {
          const guestId = getGuestId();
          res = await axios.post(`${BASE_URL}/reservation/view`, { guestid: guestId });
        }

        if (Array.isArray(res.data) && res.data.length > 0) {
          setReserve(res.data);
          setMessage("");
        } else {
          setReserve([]);
          setMessage("No Reserve Bouncer Available");
        }
      } catch (err) {
        console.error("Error fetching reservations:", err);
        setMessage("Failed to fetch reservations");
        setReserve([]);
      }
    };

    fetchReservations();
  }, [BASE_URL]);

  const removeFromReservation = async (reserveid) => {
    try {
      const token = localStorage.getItem("token");
      let res;

      if (token) {
        res = await axios.post(
          `${BASE_URL}/reservation/remove`,
          { cartbouncerid: reserveid },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        const guestId = getGuestId();
        res = await axios.post(`${BASE_URL}/reservation/remove`, {
          cartbouncerid: reserveid,
          guestid: guestId,
        });
      }

      alert(res.data.message || "Removed from reservation successfully");
      setReserve((prev) => prev.filter((item) => item._id !== reserveid));
    } catch (err) {
      console.error("Error removing reservation:", err);
      alert("Failed to remove from reservation");
    }
  };

  return (
    <div className="bg-gray">
      {reserve.length === 0 ? (
        <h1 className="text-white">{message}</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-5">
          <h1 className="text-black m-4 text-center">MY RESERVING BOUNCERS</h1>
          {reserve.map((item) => (
            <div key={item._id} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover rounded-md"
              />
              <h1 className="text-xl font-bold mt-2">{item.name}</h1>
              <Button
                text="REMOVE"
                onclick={() => removeFromReservation(item._id)}
              />
            </div>
          ))}
        </div>
      )}

      {reserve.length > 0 && (
        <div className="text-center mt-4">
          <Button text="BUY-NOW" />
        </div>
      )}
    </div>
  );
};

export default Reservation;
