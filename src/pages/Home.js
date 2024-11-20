import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Offers from '../components/Offers';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Offers />
      <Footer/>
    </div>
  );
};

export default Home;
