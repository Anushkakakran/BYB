import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Use relative path to leverage Vite proxy during development
  const API_LOGIN_PATH = "/api/auth/login";
  const API_GOOGLE_PATH = "/api/auth/google";
  const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5858';
  const BASE_URL = rawBaseUrl.replace(/\/+$/, '') + '/api';


const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      API_LOGIN_PATH,
      { email, password },
      { withCredentials: true }
    );

    setMessage(response.data.message || "Login successful");

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.username);
      localStorage.setItem("userid",response.data.user.id);

      const oldGuestId = localStorage.getItem("guestId");
      if (oldGuestId) {
        await axios.post(
          `${BASE_URL}/reservation/merge`,
          { guestId: oldGuestId }, 
          { headers: { Authorization: `Bearer ${response.data.token}` } }
        );
        localStorage.removeItem("guestId");
      }
    }

    navigate("/");
  } catch (error) {
    const errMsg = error.response?.data?.message || "Login failed";
    setMessage(errMsg);

    if (error.response?.status === 404) {
      navigate("/sign-up");
    }
  }
};


  // This will start Google OAuth flow by opening backend OAuth endpoint
  const handleGoogleLogin = () => {
    window.open(API_GOOGLE_PATH, "_self");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl text-darkBlue font-bold mb-6">Login</h2>

      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm p-6 border rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-sm text-darkBlue font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full p-3 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-darkBlue font-semibold mb-2">
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

        <button
          type="submit"
          className="w-full bg-black hover:bg-gray text-white font-semibold py-3 rounded-md transition duration-300"
        >
          Login
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full mt-3 hover:bg-red-700 text-black font-semibold py-3 rounded-md transition duration-300 flex items-center justify-center space-x-2 border border-gray"
        >
          <FcGoogle className="text-xl" />
          <span>Sign in with Google</span>
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-sm font-medium ${
            message.includes("success") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

      <p className="mt-4">
        Don't have an account?{" "}
        <Link to="/sign-up" className="text-red hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
