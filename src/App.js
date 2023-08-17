import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout';
import Home from './components/home/Home';
import AboutUs from './components/aboutus/AboutUs';
import ContactUs from './components/contactus/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
