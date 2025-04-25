import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message,setmessage] = useState('');

  const handleRegister = async(e) => {
    e.preventDefault();
     try {
      const response = await axios.post('/api/auth/register',{
        username,
        email,
        password
      });
      setmessage(response.data.message || 'Registration Sucessful');

     } catch (error) {
      const errmsg = error.response?.data.message || 'Registration failed';
      setmessage(errmsg);
     }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl  text-darkBlue font-bold mb-6">Register</h2>
      <form onSubmit={handleRegister} className="w-full max-w-sm p-6 border rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm  text-darkBlue  font-semibold mb-2">Username</label>
          <input
            type="text"
            className="w-full p-3 border rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder='Username'
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-darkBlue font-semibold mb-2">Email</label>
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
          Register
        </button>
      </form>
      <p className="mt-4">
        Already have an account? <Link to="/login" className="text-royalBlue hover:underline">Login</Link>
      </p>
      {message && (
  <p className={`mt-4 text-sm font-medium ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
    {message}
  </p>
)}
    </div>
  );
}

export default Register;
