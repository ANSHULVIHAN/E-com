import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const KEY = 'pk_test_51NfZO8SDEs2nJJG0kfF1XITPHroDnGSUkJFDomH1NEcneZ3OJ6C7rXQsg2AjY7QpOrSfiz1mQqgiIXYT62bUO1h200uvvsYeOI'
const userRequest = axios.create({
  baseURL: 'http://localhost:5000/api/', // Replace with your API base URL
  // Other configurations if needed
});

function Pay() {
  const cartItems = useSelector(state => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const value = cartItems.reduce((total, cartItem) => {
      const productPrice = cartItem.product.price;
      const quantity = cartItem.quantity;
      return total + productPrice * quantity;
    }, 0);
    setTotalValue(value);
  }, [cartItems]);

  const onToken = token => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        if (stripeToken) {
          const res = await userRequest.post("/checkout/payment", {
            tokenId: stripeToken.id,
            amount: totalValue * 100, // Stripe takes amount in cents
          });
          Navigate.push("/success",{data:res.data});
          console.log(res.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, totalValue]);

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
      <div className="payment-actions">
        <Link to="/cart">
          <Button variant="outline-secondary">Back to Cart</Button>
        </Link>
        <StripeCheckout
          name="ShopH"
          billingAddress
          shippingAddress
          description={`Your total is $${totalValue.toFixed(2)}`}
          amount={totalValue * 100} // Stripe takes amount in cents, so multiply by 100
          token={onToken}
          stripeKey={KEY}
        >
          <Button variant="primary">Proceed to Pay (${totalValue.toFixed(2)})</Button>
        </StripeCheckout>
      </div>
    </div>
  );
}

export default Pay;




/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const KEY = 'pk_test_51NfZO8SDEs2nJJG0kfF1XITPHroDnGSUkJFDomH1NEcneZ3OJ6C7rXQsg2AjY7QpOrSfiz1mQqgiIXYT62bUO1h200uvvsYeOI';

function Pay() {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        if (stripeToken) {
          const res = await axios.post("http://localhost:5000/api/checkout/payment", {
            tokenId: stripeToken.id,
            amount: 2000
          });
          console.log(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();  // Call the function here
  }, [stripeToken]);



  const handlePayment = () => {
    // In a real implementation, you would send payment data to a payment gateway
    // and handle the payment process accordingly
    console.log('Processing payment...');
  };

  return (
    <div className="payment-form">
      <h2>Payment Form</h2>
      <StripeCheckout 
        name="Buy-H"
        billingAddress
        shippingAddress
        description='yout total is 20'
        //description={`Your total is $${totalValue.toFixed(2)}`}
        amount={2000}
        token={onToken}  // Fix the prop name here
        stripeKey={KEY}
      />
     
    
    </div>
  );
}

export default Pay;
*/