import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import './aboutUs.css';
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className='contentsize'>
      <h2>About Us</h2>
      <p>We are a leading e-commerce platform providing the best products at the best prices.</p>
    </div>
    <Footer/>
    </div>
  );
};

export default AboutUs;
