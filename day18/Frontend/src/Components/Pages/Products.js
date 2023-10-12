import React from 'react';
import Header from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import '../Assets/Product.css';

const ProductPage = () => {
 const product = {
    id: 1,
    name: 'Sample Product',
    price: 19.99,
    description: 'This is a sample product description.',
    imageUrl: 'sample-product-image.jpg',
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
