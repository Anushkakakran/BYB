import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

// ✅ Base URL from environment
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/auth/google/user`, {
          credentials: "include",
        });
        const data = await res.json();
        if (data.user) {
          setUser(data.user);
          navigate("/");
        }
      } catch (err) {
        console.log("Not logged in");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      setMessage(response.data.message || "Login successful");

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
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

        {/* Google OAuth Button */}
        <button
          type="button"
          onClick={() =>
            window.open(`${API_BASE_URL}/api/auth/google`, "_self")
          }
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
