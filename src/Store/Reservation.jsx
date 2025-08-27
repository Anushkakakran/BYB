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
  <div className="bg-bgDark min-h-screen py-8 px-4 sm:px-6 lg:px-12">
  {reserve.length === 0 ? (
    <h1 className="text-white text-center text-xl sm:text-2xl font-semibold">
      {message}
    </h1>
  ) : (
    <>
      <h1 className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center">
        MY RESERVED BOUNCERS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reserve.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-56 sm:h-64 md:h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-1 justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-black mt-2 text-center">
                {item.name}
              </h2>
              <div className="mt-4 flex justify-center">
                <Button
                  text="REMOVE"
                  onclick={() => removeFromReservation(item._id)}
                  className="w-32 px-4 py-2 text-sm sm:text-base rounded-md bg-red hover:bg-black text-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )}

  {reserve.length > 0 && (
    <div className="flex justify-center mt-8">
      <Button
        text="BUY NOW"
        className="w-56 px-6 py-3 text-base sm:text-lg rounded-md bg-green hover:bg-bgDark text-white"
      />
    </div>
  )}
</div>

  );
};

export default Reservation;
