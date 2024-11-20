
import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../assets/banner9.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

import './banner.css';

const Banner = () => {
  const bannerStyle = {
    height: '350px',
    objectFit: 'cover',
  };

  const captionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0)', /* Semi-transparent dark background */
    padding: '10px',
   // borderRadius: '5px',
   // color: 'black', /* Ensures the text color is white */
    
  };

  return (
    <div className='banner'>
    <Carousel >
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" style={bannerStyle} />
        <Carousel.Caption style={captionStyle}>
          <h3>Under ₹399</h3>
          <p>Kurtas & Sarees</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" style={bannerStyle} />
        <Carousel.Caption style={captionStyle}>
          <h3>Starting ₹99</h3>
          <p>Home, Kitchen & Outdoor.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" style={bannerStyle} />
        <Carousel.Caption style={captionStyle}>
          <h3> Starting ₹299 </h3>
          <p>Men's Fashion.Happy shopping</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Banner;
