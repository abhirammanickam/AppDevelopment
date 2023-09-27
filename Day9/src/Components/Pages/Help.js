import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Assets/Help.css'; 

function Help() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="help-title mt-3">Help Center</h2>
        <div className="help-content">
          <h3>Common Questions</h3>
          <ul>
            <li>
              <strong>How do I add a new product?</strong>
              <p>To add a new product, go to the 'Add Product' section and fill in the required information.</p>
            </li>
            <li>
              <strong>How can I update the product quantity?</strong>
              <p>You can update the product quantity by navigating to the 'Edit Product' section and modifying the quantity field.</p>
            </li>
            <li>
              <strong>Where can I find my order history?</strong>
              <p>Your order history is available in the 'Order History' section under your account.</p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Help;
