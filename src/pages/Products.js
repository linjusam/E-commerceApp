import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../slices/productsSlice';
import ProductCardList from '../components/ProductCardList';
import Navbar from '../components/Navbar';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  useEffect(() => {
  
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      dispatch(setProducts(data));
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <ProductCardList products={products} />
    </div>
  );
};

export default Products;
