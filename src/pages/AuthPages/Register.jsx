import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// ✅ API base URL from environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/register`,
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true, // Optional: if you're setting cookies
        }
      );
      setMessage(response.data.message || "Registration successful");
    } catch (error) {
      const errmsg = error.response?.data.message || "Registration failed";
      setMessage(errmsg);
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

        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-md transition duration-300"
        >
          Sign Up
        </button>

        <button
          type="button"
          onClick={() =>
            window.open(`${API_BASE_URL}/api/auth/google`, "_self")
          }
          className="w-full mt-3 bg-red-600 hover:bg-red-700 text-black font-semibold py-3 rounded-md transition duration-300"
        >
          Sign up with Google
        </button>
      </form>

      <p className="mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-red-600 hover:underline">
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
