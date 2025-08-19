import { v4 as uuidv4 } from "uuid";   

export const getGuestId = () => {
   const token = localStorage.getItem("token");
   if (token) {
    return null;
   }
  let guestId = localStorage.getItem("guestId");
  if (!guestId) {
    guestId = uuidv4();                   
    localStorage.setItem("guestId", guestId); 
  }
  return guestId;
};
