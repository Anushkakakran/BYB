import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const [message,setMessage]= useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/login', { email, password });
      setMessage(response.data.message || 'Login successful');
      
      // Optional: store token if available
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
    } catch (error) {
      const errMsg = error.response?.data?.message || 'Login failed';
      setMessage(errMsg);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl  text-darkBlue font-bold mb-6">Login</h2>
      <form onSubmit={handleLogin} className="w-full max-w-sm p-6 border rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm  text-darkBlue font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Email'
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm  text-darkBlue font-semibold mb-2">Password</label>
          <input
            type="password"
            className="w-full p-3 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='password'
          />
        </div>
        <button
          type="submit"
          className="w-full bg-royalBlue hover:bg-accent text-white font-semibold py-3 rounded-md transition duration-300"
        >
          Login
        </button>
      </form>
      {message && (
  <p className={`mt-4 text-sm font-medium ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
    {message}
  </p>
)}
      <p className="mt-4">
        Don't have an account? <Link to="/register" className="text-royalBlue hover:underline">Register</Link>
      </p>
    </div>
  );
}

export default Login;
