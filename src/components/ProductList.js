
import React from 'react'

const ProductList = () => {
  return (
    <div>ProductList</div>
  )
}

export default ProductList





/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/actions';
import products from '../data/product'; // Import the products data file

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={cartItems.some((item) => item.id === product.id)}
            >
              {cartItems.some((item) => item.id === product.id) ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;






/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/actions';
import products from '../data/product'; // Import the products data file

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name} - ${product.price}</span>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={cartItems.some((item) => item.id === product.id)}
            >
              {cartItems.some((item) => item.id === product.id) ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
*/