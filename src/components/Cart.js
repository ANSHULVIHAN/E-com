//import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, updateCartItemQuantity } from '../store/cartSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './cart.css';

const Cart = () => {

  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  const totalValue = cartItems.reduce((total, cartItem) => {
    if (cartItem.product) {
      const productPrice = cartItem.product.price;
      const quantity = cartItem.quantity;
      return total + productPrice * quantity;
    }
    return total;
  }, 0);

  /*const totalValue = cartItems.reduce((total, cartItem) => {
    if (cartItem.product) {
      const productPrice = cartItem.product.price;
      const quantity = cartItem.quantity;
      return total + productPrice * quantity;
    }
    return total;
  }, 0);*/

  // Adding shipping charge
  const shippingCharge = 1.5;
  const totalAmountWithShipping = totalValue + shippingCharge;

  return (
    <div className="cart-container">
      <h1 className='searchs'>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <div className="cart-item" key={cartItem.product._id}>
            <Card>
              <Card.Img variant="top" src={cartItem.product.img} alt={cartItem.product.title} />
              <Card.Body>
                <Card.Title>{cartItem.product.title}</Card.Title>
                <Card.Text>{cartItem.product.description}</Card.Text>
                <Card.Text className="cart-price">${cartItem.product.price}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="cart-actions">
                  <Button variant="danger" onClick={() => removeToCart(cartItem.product._id)}>
                    Remove
                  </Button>
                  <div className="quantity-input">
                    <label>Quantity:</label>
                    <input
                      type="number"
                      min="0"
                      value={cartItem.quantity}
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value, 10);
                        dispatch(updateCartItemQuantity({ productId: cartItem.product._id, quantity: newQuantity }));
                      }}
                    />
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h4 className='search'>Pay To Total Amount: ${totalAmountWithShipping.toFixed(2)}</h4>
        <p className="search">Shipping Charge: ${shippingCharge.toFixed(2)}</p>
        <div className="cart-buttons">
          <Link to="/payment">

          <Button variant="primary">Proceed to Checkout</Button>

         </Link>
          <Link to="/product">
            <Button  className='primary' variant="secondary">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;



/*            */

/*import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, updateCartItemQuantity } from '../store/cartSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './cart.css';


const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  const totalValue = cartItems.reduce((total, cartItem) => {
    if (cartItem.product) {
      const productPrice = cartItem.product.price;
      const quantity = cartItem.quantity;
      return total + productPrice * quantity;
    }
    return total;
  }, 0);

  return (
    <div className="cart-container">
      <h1 className='searchs'>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <div className="cart-item" key={cartItem.product._id}>
            <Card>
              <Card.Img variant="top" src={cartItem.product.img} alt={cartItem.product.title} />
              <Card.Body>
                <Card.Title>{cartItem.product.title}</Card.Title>
                <Card.Text>{cartItem.product.description}</Card.Text>
                <Card.Text className="cart-price">${cartItem.product.price}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="cart-actions">
                  <Button variant="danger" onClick={() => removeToCart(cartItem.product._id)}>
                    Remove
                  </Button>
                  <div className="quantity-input">
                    <label>Quantity:</label>
                    <input
                      type="number"
                      min="0"
                      value={cartItem.quantity}
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value, 10);
                        dispatch(updateCartItemQuantity({ productId: cartItem.product._id, quantity: newQuantity }));
                      }}
                    />
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h4 className='search'>Total Amount: ${totalValue.toFixed(2)}</h4>
        <Link to="/payment">
          <Button variant="primary">Proceed to Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;



/*import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, updateCartItemQuantity } from '../store/cartSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './cart.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  const totalValue = cartItems.reduce((total, cartItem) => {
    if (cartItem.product) {
      const productPrice = cartItem.product.price;
      const quantity = cartItem.quantity;
      return total + productPrice * quantity;
    }
    return total;
  }, 0);

  return (
    <>
      <h1 className='search'>Cart</h1>
      <div className="row">
        {cartItems.map(cartItem => (
          <div className="col-lg-4 col-md-4 mb-4" key={cartItem.product._id}>
            <Card style={{ height: '100%' }}>
              <Card.Img variant="top" src={cartItem.product.img} alt={cartItem.product.title} />
              <Card.Body>
                <Card.Title>{cartItem.product.title}</Card.Title>
                <Card.Text>{cartItem.product.description}</Card.Text>
                <Card.Title>${cartItem.product.price}</Card.Title>
              </Card.Body>
              <Card.Footer style={{ background: 'teal' }}>
                <Button variant="danger" onClick={() => removeToCart(cartItem.product._id)}>
                  Remove Item
                </Button>
                <div className="quantity-input">
                  <label  className='total-value'>Quantity: </label>
                  <input
                  className='total-value'
                    type="number"
                    min="0"
                    value={cartItem.quantity}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value, 10);
                      dispatch(updateCartItemQuantity({ productId: cartItem.product._id, quantity: newQuantity }));
                    }}
                  />
                </div>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
      <div className="total-value">
        <h3>Amount To Pay: ${totalValue.toFixed(2)}</h3>
        <Link to="/payment">
          <Button variant="primary">Checkout</Button>
        </Link>
      </div>
    </>
  );
};

export default Cart;






/*import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../store/cartSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './cart.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  const totalValue = cartItems.reduce((total, cartItem) => {
    if (cartItem.product) {
      const productPrice = cartItem.product.price;
      const quantity = cartItem.quantity;
      return total + productPrice * quantity;
    }
    return total;
  }, 0);

  const cartCards = cartItems.map(cartItem => (
    <div className="col-lg-4 col-md-4 mb-4" key={cartItem.product._id}>
      <Card style={{ height: '100%' }}>
        <Card.Img variant="top" src={cartItem.product.image} alt={cartItem.product.title} />
        <Card.Body>
          <Card.Title>{cartItem.product.title}</Card.Title>
          <Card.Text>{cartItem.product.description}</Card.Text>
          <Card.Title>${cartItem.product.price}</Card.Title>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button variant="danger" onClick={() => removeToCart(cartItem.product._id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className='search-input'>Cart</h1>
      <div className="row">
        {cartCards}
      </div>
      <div className="total-value">
        <h3>Total Value: ${totalValue.toFixed(2)}</h3>
        <Link to="/payment">
          <Button variant="primary">Checkout</Button>
        </Link>
      </div>
    </>
  );
};

export default Cart;





/*import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../store/cartSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './cart.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  const totalValue = cartItems.reduce((total, cartItem) => {
    const productPrice = cartItem.product.price;
    const quantity = cartItem.quantity;
    return total + productPrice * quantity;
  }, 0);

  const cartCards = cartItems.map(cartItem => (
    <div className="col-lg-4 col-md-4 mb-4" key={cartItem.product._id}>
      <Card style={{ height: '100%' }}>
        <Card.Img variant="top" src={cartItem.product.image} alt={cartItem.product.title} />
        <Card.Body>
          <Card.Title>{cartItem.product.title}</Card.Title>
          <Card.Text>{cartItem.product.description}</Card.Text>
          <Card.Title>${cartItem.product.price}</Card.Title>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button variant="danger" onClick={() => removeToCart(cartItem.product._id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className='search-input'>Cart</h1>
      <div className="row">
        {cartCards}
      </div>
      <div className="total-value">
        <h3>Total Value: ${totalValue.toFixed(2)}</h3>
        <Link to="/payment">
          <Button variant="primary">Checkout</Button>
        </Link>
      </div>
    </>
  );
};

export default Cart;


/*
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../store/cartSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import './cart.css';


const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  // Calculate total value of products in the cart
  const totalValue = products.reduce((total, product) => total + product.price, 0);

  const cartCards = products.map(product => (
    <div className="col-lg-4 col-md-4 mb-4" key={product.id}>
      <Card style={{ height: '100%' }}>
        <Card.Img variant="top" src={product.image} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Title>${product.price}</Card.Title>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className='search-input'>Cart</h1>
      <div className="row">
        {cartCards}
      </div>
      <div className="total-value">
        <h3>Total Value: ${totalValue.toFixed(2)}</h3>
        <Link to="/payment">
          <Button variant="primary">Checkout</Button>
        </Link>
      </div>
    </>
  );
};

export default Cart;*/









/*
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../store/cartSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import './cart.css'; // Import your custom CSS file

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const cartCards = products.map(product => (
    <div className="col-lg-4 col-md-4 mb-4" key={product.id}>
      <Card style={{ height: '100%' }}>
        <Card.Img variant="top" src={product.image} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Title>${product.price}</Card.Title>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className='search-input'>Cart</h1>
      <div className="row">
        {cartCards}
      </div>
    </>
  );
};

export default Cart;






/*import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../store/cartSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const cartCards = products.map(product => (
    <div className="col-md-12 mb-4" key={product.id}>
      <Card style={{ width: '18rem', height: '100%' }}>
        <Card.Img variant="top" src={product.image} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Title>${product.price}</Card.Title>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Cart</h1>
      <div className="row">
        {cartCards}
      </div>
    </>
  );
};

export default Cart;






/*import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
//import { remove } from '../store/cartSlice';
import { removeItemFromCart } from '../store/cartSlice';
const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(removeItemFromCart(id)); // Change 'remove' to 'removeItemFromCart'
  };

  const cartCards = products.map(product => (
    <div className="col-md-12 mb-4" key={product.id}>
      <Card style={{ width: '18rem', height: '100%' }}>
        <Card.Img variant="top" src={product.image} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Title>${product.price}</Card.Title>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Cart</h1>
      <div className="row">
        {cartCards}
      </div>
    </>
  );
};

export default Cart;



*/








