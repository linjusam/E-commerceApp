import React from 'react';
import { Link } from 'react-router-dom';
import './productcard.css';
import Footer from './Footer';

const ProductCard = ({ product }) => {
  return (

 
    <div className="card product">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
      </div>
  
    </div>
  
 
  );
<Footer/>
};

export default ProductCard;
