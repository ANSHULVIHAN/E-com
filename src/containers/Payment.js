import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './payment.css';

const Payment = () => {
  const cartItems = useSelector(state => state.cart);

  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelection = paymentMethod => {
    setSelectedPayment(paymentMethod);
  };

  const totalValue = cartItems.reduce((total, cartItem) => {
    const productPrice = cartItem.product.price;
    const quantity = cartItem.quantity;
    return total + productPrice * quantity;
  }, 0);

  const isCashOnDeliverySelected = selectedPayment === 'Cash on Delivery';

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <div className="payment-products">
        <h2>Selected Products</h2>
        <ul>
          {cartItems.map(cartItem => (
            <li key={cartItem.product._id}>
              {cartItem.product.title} - ${cartItem.product.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total Value: ${totalValue.toFixed(2)}</p>
      </div>
      <div className="payment-options">
      <Button variant="outline-primary" onClick={() => handlePaymentSelection('Cash on Delivery')}>
          Cash on Delivery
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('Paytm')}>
          Paytm
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('DebitCard')}>
         DebitCard
        </Button>
      
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('GooglePay')}>
          GooglePay
        </Button>
      </div>
      <div className="selected-payment">
        {selectedPayment && <p>Selected Payment: {selectedPayment}</p>}
      </div>
      <div className="payment-actions">
        <Link to="/cart">
          <Button variant="outline-secondary">Back to Cart</Button>
        </Link>
        {isCashOnDeliverySelected ? (
          <Link to="/user">
            <Button variant="primary">Proceed to Pay</Button>
          </Link>
        ) : (
          <Link to="/pay">
            <Button variant="primary">Proceed to Pay</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Payment;



/*import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; // Use useHistory instead of useNavigate
import Button from 'react-bootstrap/Button';
import StripeCheckout from 'react-stripe-checkout';
import './payment.css';
import { userRequest } from '../../src/requestMethods'; // Import userRequest from the correct file

const KEY = process.env.REACT_APP_STRIPE;

const Payment = () => {
  const cartItems = useSelector(state => state.cart);

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [stripeToken, setStripeToken] = useState(null);

  const handlePaymentSelection = paymentMethod => {
    setSelectedPayment(paymentMethod);
  };

  const onToken = token => {
    setStripeToken(token);
  };

  const totalValue = cartItems.reduce((total, cartItem) => {
    const productPrice = cartItem.product.price;
    const quantity = cartItem.quantity;
    return total + productPrice * quantity;
  }, 0);

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <div className="payment-products">
        <h2>Selected Products</h2>
        <ul>
          {cartItems.map(cartItem => (
            <li key={cartItem.product._id}>
              {cartItem.product.title} - ${cartItem.product.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total Value: ${totalValue.toFixed(2)}</p>
      </div>
      <div className="payment-options">
      <h2>Select Payment Method</h2>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('Cash on Delivery')}>
          Cash on Delivery
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('Paytm')}>
          Paytm
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('DebitCard')}>
         DebitCard
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('CreditCard')}>
          CreditCard
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('EMI Options')}>
       Eni Options
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('GooglePay')}>
          GooglePay
        </Button>
      </div>
      <div className="selected-payment">
        {selectedPayment && <p>Selected Payment: {selectedPayment}</p>}
      </div>
      <div className="payment-actions">
        <Link to="/cart">
          <Button variant="outline-secondary">Back to Cart</Button>
        </Link>
        {selectedPayment ? (
          <Link to="/user">
            <Button variant="primary">Proceed to Pay</Button>
          </Link>
        ) : (
          <StripeCheckout
            name="ShopH"
            billingAddress
            shippingAddress
            description={`Your total is $${totalValue.toFixed(2)}`}
            amount={totalValue * 100} // Stripe takes amount in cents, so multiply by 100
            token={onToken}
            stripeKey={KEY}
          >
            <Button>Proceed to Pay</Button>
          </StripeCheckout>
        )}
      </div>
    </div>
  );
};

export default Payment;


/*
const Payment = () => {
  const cartItems = useSelector(state => state.cart);

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [stripeToken, setStripeToken] = useState(null);

  const handlePaymentSelection = paymentMethod => {
    setSelectedPayment(paymentMethod);
  };

  const onToken = token => {
    setStripeToken(token);
  };

  const totalValue = cartItems.reduce((total, cartItem) => {
    const productPrice = cartItem.product.price;
    const quantity = cartItem.quantity;
    return total + productPrice * quantity;
  }, 0);

  const isCashOnDeliverySelected = selectedPayment === 'Cash on Delivery';
  //const history = useHistory(); // Use useHistory
  const navigate = useNavigate();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: totalValue * 100,
        });
        navigate.push("/Success", {
          stripeData: res.data,
          products: cartItems,
        });
      } catch (error) {
        console.error(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, totalValue, cartItems, navigate]);
  return (
    <div className="payment-container">
       <h1>Payment</h1>
      <div className="payment-products">
        <h2>Selected Products</h2>
        <ul>
          {cartItems.map(cartItem => (
            <li key={cartItem.product._id}>
              {cartItem.product.title} - ${cartItem.product.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total Value: ${totalValue.toFixed(2)}</p>
      </div>
      <div className="payment-options">
      <h2>Select Payment Method</h2>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('Cash on Delivery')}>
          Cash on Delivery
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('Paytm')}>
          Paytm
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('DebitCard')}>
         DebitCard
        </Button>
      
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('GooglePay')}>
          GooglePay
        </Button>
      </div>
      <div className="selected-payment">
        {selectedPayment && <p>Selected Payment: {selectedPayment}</p>}
      </div>

      <div className="payment-actions">
        <Link to="/cart">
          <Button variant="outline-secondary">Back to Cart</Button>
        </Link>
        {isCashOnDeliverySelected ? (
          <Link to="/user">
            <Button variant="primary">Proceed to Pay</Button>
          </Link>
        ) : (
          <StripeCheckout
            name="ShopH"
            billingAddress
            shippingAddress
            description={`Your total is $${totalValue.toFixed(2)}`}
            amount={totalValue * 100} // Stripe takes amount in cents, so multiply by 100
            token={onToken}
            stripeKey={KEY}
          >
            <Button>Proceed to Pay</Button>
          </StripeCheckout>
        )}
      </div>
    </div>
  );
};

export default Payment;


/*

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './payment.css';
import React, { useState } from 'react';

import StripeCheckout from 'react-stripe-checkout';

const KEY=process.env.REACT_APP_STRIPE;



  const [stripeToken,setStripeToken]=useState(null)
  const onToken=(token)=>{
setStripeToken(token);

  };
  console.log(stripeToken);




const Payment = () => {
  const cartItems = useSelector(state => state.cart);

  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelection = paymentMethod => {
    setSelectedPayment(paymentMethod);
  };

  const totalValue = cartItems.reduce((total, cartItem) => {
    const productPrice = cartItem.product.price;
    const quantity = cartItem.quantity;
    return total + productPrice * quantity;
  }, 0);

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <div className="payment-products">
        <h2>Selected Products</h2>
        <ul>
          {cartItems.map(cartItem => (
            <li key={cartItem.product._id}>
              {cartItem.product.title} - ${cartItem.product.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total Value: ${totalValue.toFixed(2)}</p>
      </div>
      <div className="payment-options">
        <h2>Select Payment Method</h2>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('Cash on Delivery')}>
          Cash on Delivery
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('Paytm')}>
          Paytm
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('DebitCard')}>
          DebitCard
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('CreditCard')}>
          CreditCard
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('EMI Options')}>
          EMI Options
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('GooglePay')}>
          GooglePay
        </Button>
      </div>
      <div className="selected-payment">
        {selectedPayment && <p>Selected Payment: {selectedPayment}</p>}
      </div>
      <div className="payment-actions">
        <Link to="/cart">
          <Button variant="outline-secondary">Back to Cart</Button>
        </Link>
        {selectedPayment ? (
          <Link to="/user">
            <Button variant="primary">Proceed to Pay</Button>
          </Link>
        ) : (
          <Button variant="primary" disabled>
            <StripeCheckout name='ShopH'
billingAddress
shippingAddress
description={`Your total is ` }
amount={` `}
token={onToken}
stripeKey={KEY}

>
<Button>Checkout Now</Button>
</StripeCheckout>
            Proceed to Pay
          </Button>
        )}
      </div>
    </div>
  );
};

export default Payment;

/*import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './payment.css';

const Payment = () => {
  const cartItems = useSelector(state => state.cart);
  
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelection = paymentMethod => {
    setSelectedPayment(paymentMethod);
  };

  const totalValue = cartItems.reduce((total, cartItem) => {
    const productPrice = cartItem.product.price;
    const quantity = cartItem.quantity;
    return total + productPrice * quantity;
  }, 0);

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <div className="payment-products">
        
        
        <h2>Selected Products</h2>
        <ul>
          {cartItems.map(cartItem => (
            <li key={cartItem.product._id}>
              {cartItem.product.title} - ${cartItem.product.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total Value: ${totalValue.toFixed(2)}</p>
      </div>
      <div className="payment-options">
      <h2>Select Payment Method</h2>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('Cash on Delivery')}>
          Cash on Delivery
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('Paytm')}>
          Paytm
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('DebitCard')}>
         DebitCard
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('CreditCard')}>
          CreditCard
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('EMI Options')}>
       Eni Options
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('GooglePay')}>
          GooglePay
        </Button>
      </div>
      <div className="selected-payment">
        {selectedPayment && <p>Selected Payment: {selectedPayment}</p>}
      </div>
      <div className="payment-actions">
        <Link to="/cart">
          <Button variant="outline-secondary">Back to Cart</Button>
        </Link>
        <Link to="/user">
          <Button variant="primary">Proceed to Pay</Button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;






/*import React, { useState } from 'react'; // Import useState
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './payment.css'; // You can create a CSS file for styling

const Payment = () => {
  const products = useSelector(state => state.cart);

  const [selectedPayment, setSelectedPayment] = useState(null); // State for selected payment option

  // Calculate total quantity and value of products in the cart
  //const totalQuantity = products.length;
  //const totalValue = products.reduce((total, product) => total + product.price, 0);

  const totalQuantity = products.reduce((total, product) => total + 1, 0);
  const totalValue = products.reduce((total, product) => total + product.price, 0);

  const handlePaymentSelection = paymentMethod => {
    setSelectedPayment(paymentMethod);
  };

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <div className="payment-products">
        <h2>Selected Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.title} - ${product.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Value: ${totalValue.toFixed(2)}</p>
      </div>
      <div className="payment-options">
        <h2>Select Payment Method</h2>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('Cash on Delivery')}>
          Cash on Delivery
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('Paytm')}>
          Paytm
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('DebitCard')}>
         DebitCard
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('CreditCard')}>
          CreditCard
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('EMI Options')}>
       Eni Options
        </Button>
        <Button variant="outline-primary" onClick={() => handlePaymentSelection('GooglePay')}>
          GooglePay
        </Button>
      </div>
      <div className="selected-payment">
        {selectedPayment && <p>Selected Payment: {selectedPayment}</p>}
      </div>
      <div className="payment-actions">
        <Link to="/cart">
          <Button variant="outline-secondary">Back to Cart</Button>
        </Link>
        <Link to="/user">
        <Button variant="primary">Proceed to Pay</Button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;






/*import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './payment.css'; // You can create a CSS file for styling

const Payment = () => {
  const products = useSelector(state => state.cart);

  // Calculate total quantity and value of products in the cart
  const totalQuantity = products.length;
  const totalValue = products.reduce((total, product) => total + product.price, 0);

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <div className="payment-products">
        <h2>Selected Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.title} - ${product.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Value: ${totalValue.toFixed(2)}</p>
      </div>
      <div className="payment-options">
        <h2>Select Payment Method</h2>
        <Button variant="outline-primary">Cash on Delivery</Button>
        <Button variant="outline-primary">Paytm</Button>
        <Button variant="outline-primary">Debit Card</Button>
        <Button variant="outline-primary">GooglePay</Button>
        <Button variant="outline-primary">Emi Options Available</Button>
        <Button variant="outline-primary">CreditCard</Button>
      </div>
      <div className="payment-actions">
        <Link to="/cart">
          <Button variant="outline-secondary">Back to Cart</Button>
        </Link>
        <Button variant="primary">Proceed to Pay</Button>
      </div>
    </div>
  );
};

export default Payment;



*/