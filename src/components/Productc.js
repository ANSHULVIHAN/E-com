import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './productc.css';
import { addItemToCart } from '../store/cartSlice';

const Productc = ({ product }) => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const isProductInCart = cartItems.some(item => item.product._id === product._id);

  const [isAdded, setIsAdded] = useState(isProductInCart);

  const handleAddToCart = () => {
    if (!isAdded) {
      dispatch(addItemToCart({ product, quantity: 1 }));
      setIsAdded(true);
    }
  };

  return (
    <div className="col-md-3 mb-10">
      <Card style={{ width: '18rem', height: '100%' }}>
        <Card.Img variant="top" src={product.image} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Title>${product.price}</Card.Title>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button
            className='add-to-cart-button'
            variant={isAdded ? "success" : "danger"}
            disabled={isAdded}
            onClick={handleAddToCart}
          >
            {isAdded ? 'Item Added' : 'Add To Cart'}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Productc;

