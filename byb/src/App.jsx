import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Register from './Components/Register'; 
import Login from './Components/Login';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Book from './Book';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Book-Bouncer' element={<Book/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
       <Route path="/register" element={<Register />} /> 
       <Route path= "/login" element={<Login/>}/>
       <Route path='/contact' element= {<ContactUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
