import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [disable,setdisable] = useState(false);
  const [OTP, setOtp] = useState("");

    const validformdata = ()=>{
    if(!email|| !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      alert("invalid email");
      return false
    }
    if(!password || password.length<6){
      alert("invalid password length / password should be at least of  6 character");
      return false
    }
    return true
  }

  const handleRegister = async (e) => {
    e.preventDefault();
 if(!validformdata()) return;
    try {
      // Use relative path for API call to leverage Vite proxy
      const response = await axios.post(
        "/api/auth/register",
        { username, email, password },
        { withCredentials: true }
      );
      setMessage(response.data.message || "Registration successful");
    } catch (error) {
      const errmsg = error.response?.data.message || "Registration failed";
      setMessage(errmsg);
    }
    
  };

  const handleGetOtp = async() => {
         setdisable(true);
         try {
                 const res = await axios.post(`${BASE_URL}/forgetpassword/checkUser`,{email});
             alert(res.data.message);
         } catch (error) {
                alert(error);
         }
  };

   const handleVerifyOtp = async() => {
    setdisable(true)
            try{ const res = await axios.post(`${BASE_URL}/forgetpassword/checkOtp`,{email,OTP});
             alert(res.data.message);
  }catch(error){
    alert(error);
  }
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h2 className="text-3xl text-black font-bold mb-6">
        Sign Up As Customer
      </h2>

      <form
        onSubmit={handleRegister}
        className="w-full max-w-sm p-6 border rounded-lg shadow-lg bg-white"
      >
        <div className="mb-4">
          <label className="block text-sm text-black font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
          />
        </div>

        <div className="mb-4">
        <label className="block text-sm text-black font-semibold mb-2">
            Email
          </label>
           <div className="flex flex-col sm:flex-row items-center gap-3 mb-5">
            <input
            type="email"
            placeholder="Enter your email"
            disabled = {disable}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border border-gray px-4 py-3 text-sm rounded-lg transition"
          />
          <Button
            text="Get OTP"
            onclick={handleGetOtp}
         className = "w-40 px-6 py-3 text-base rounded-md "
          />
        </div>

        {/* OTP + Verify */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-5">
          <input
            type="text"
            placeholder="Enter OTP"
            disabled={disable}
            value={OTP}
            onChange={(e) => setOtp(e.target.value)}
            className="flex-1 border border-gray px-4 py-3 text-sm rounded-lg transition"
          />
          <Button
            text="Verify OTP"
            onclick={handleVerifyOtp}
             className = "w-40 px-6 py-3 text-base rounded-md "
          />
        </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm text-black font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full p-3 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

        <Button
          text="Sign Up"
          className = "w-full px-6 py-3 text-base rounded-md "
        >
        </Button>

        <button
          type="button"
          onClick={() => window.open("/api/auth/google", "_self")}
          className="w-full mt-3 bg-red-600 hover:bg-red-700 text-black font-semibold py-3 rounded-md transition duration-300"
        >
          Sign up with Google
        </button>
      </form>

      <p className="mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-red hover:underline">
          Login
        </Link>
      </p>

      {message && (
        <p
          className={`mt-4 text-sm font-medium ${
            message.toLowerCase().includes("success")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default Register;
