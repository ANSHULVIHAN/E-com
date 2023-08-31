import React from 'react';
import { Link } from 'react-router-dom';
import './Round.css'; // Make sure to create a corresponding CSS file
import jpg1 from '../images/11.jpg';
import jpg2 from '../images/12.jpg';
import jpg3 from '../images/13.jpg';
import jpg4 from '../images/14.jpg';
import jpg5 from '../images/15.jpg';
import jpg6 from '../images/16.jpg';

const Round = () => {
  return (
    <div className="round-container">
      <h2 className="search">Discover one-of-a-kind items from independent creators</h2>
      <div className="product-list">
        <div className="product">
          <Link to="/ProductDetails">
            <img
              src={jpg1}
              alt="Product 1"
              className="round-image"
            />
          </Link>
          <p className="product-name">Electronics</p>
        </div>
        <div className="product">
          <Link to="/bag">
            <img
              src={jpg2}
              alt="Product 2"
              className="round-image"
            />
          </Link>
          <p className="product-name">Perfume</p>
        </div>
        <div className="product">
          <Link to="/gift">
            <img
              src={jpg3}
              alt="products"
              className="round-image"
            />
          </Link>
          <p className="product-name">GlassItems</p>
        </div>
        <div className="product">
          <Link to="/bags">
            <img
              src={jpg4}
              alt="Product 3"
              className="round-image"
            />
          </Link>
          <p className="product-name">Hangers</p>
        </div>
        <div className="product">
          <Link to="/pulses">
            <img
              src={jpg5}
              alt="Product 3"
              className="round-image"
            />
          </Link>
          <p className="product-name">Pulses</p>
        </div>
        <div className="product">
          <Link to="/Lip">
            <img
              src={jpg6}
              alt="Product 3"
              className="round-image"
            />
          </Link>
          <p className="product-name">Womens</p>
        </div>
      </div>
    </div>
  );
}

export default Round;




/*
import React from 'react';
import { Link } from 'react-router-dom';
import './Round.css'; // Make sure to create a corresponding CSS file
import jpg1 from '../images/11.jpg';
import jpg2 from '../images/12.jpg';
import jpg3 from '../images/3.jpg';
import jpg4 from '../images/4.jpg';
import jpg5 from '../images/6.jpg';
import jpg6 from '../images/8.jpg';

const Round = () => {
  return (
    <div className="round-container">
      <h2 className="search">Discover one-of-a-kind items from independent creators</h2>
      <div className="product-list">
        <div className="product">
          <Link to="/ProductDetails">
            <img
              src={jpg1}
              alt="Product 1"
              name="Electronics"
              className="round-image"
            />
          </Link>
        </div>
        <div className="product">
          <Link to="/Bag">
            <img
              src={jpg2}
              alt="Product 2"
              className="round-image"
            />
          </Link>
        </div>
        <div className="product">
          <Link to="/ProductDetails">
            <img
              src={jpg3}
              alt="Product 3"
              className="round-image"
            />
          </Link>
        </div>
        <div className="product">
          <Link to="/ProductDetails">
            <img
              src={jpg4}
              alt="Product 4"
              className="round-image"
            />
          </Link>
        </div>
        <div className="product">
          <Link to="/ProductDetails">
            <img
              src={jpg5}
              alt="Product 5"
              className="round-image"
            />
          </Link>
        </div>
        <div className="product">
          <Link to="/ProductDetails">
            <img
              src={jpg6}
              alt="Product 6"
              className="round-image"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Round;
*/