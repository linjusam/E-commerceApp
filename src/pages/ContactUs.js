import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import './contactUs.css';
const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5 contentsize">
        <h2>Contact Us</h2>
        <p>Email: contact@ecommerce.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 E-commerce St, Shopping City, Shopland</p>
      </div>
  <Footer/>
    </div>
  );
};

export default ContactUs;
