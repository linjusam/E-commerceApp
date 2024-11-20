import React from 'react';
import ProductCard from './ProductCard';
import Footer from './Footer';

const ProductCardList = ({ products }) => {
  return (
 <>
    <div className="container mt-4 product-card-list">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default ProductCardList;
