import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../slices/cartSlice';
import Navbar from '../components/Navbar';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector(state => state.products.items.find(p => p.id === Number(id)));
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Navbar />
      {product ? (
        <div className="product-detail">
          <img src={product.image}
           className="product-image"
            alt={product.title}
             />
             <div className="product-info">
          <h3>{product.title}</h3>

          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
      
    </div>
  );
};

export default ProductDetail;
