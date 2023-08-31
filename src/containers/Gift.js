import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addItemToCart } from '../store/cartSlice';
//import './Clothes.css';

const Gift = () => {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const selectedCategory = 'gift'; // Set your desired category here

  useEffect(() => {
    fetch(`http://localhost:5000/api/products?category=${selectedCategory}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [selectedCategory]);

  const isItemInCart = (itemId) => {
    return cartItems.some(item => item._id === itemId);
  };

  const addToCart = (product) => {
    if (!isItemInCart(product._id)) {
      dispatch(addItemToCart(product)); // Dispatch the action to add the product to the cart
    }
  };

  return (
    <div className="col-md-19 mb-1">
      <h1 className='searchs'>Glasses Items</h1>
      <div className='row'>
        {products.map(product => (
          <div className='col-md-3 product-card' key={product._id}>
            <Card className='product-card__'>
              <Card.Img className='product-card__image' variant='top' src={product.img} />
              <Card.Body>
              <Card.Title className='product-card__price'>{product.title}</Card.Title>
                <Card.Text className='product-card__price'>desc: {product.desc}</Card.Text>
                <Card.Text className='product-card__price'>price: ${product.price}</Card.Text>
                <Card.Text className='product-card__price'>color: {product.color}</Card.Text>
                <Card.Text className='product-card__price'>stock: {product.stock}</Card.Text>
                <Button
                  className='product-card__button'
                  variant='primary'
                  onClick={() => addToCart(product)}
                  disabled={isItemInCart(product._id)}
                >
                  {isItemInCart(product._id) ? 'Item Added' : 'Add Item'}
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gift;




/*import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addItemToCart } from '../store1/cartSlice';
import './bag.css';

const Gift = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://dummyjson.com/products/29')
      .then(response => response.json())
      .then(data => {
        setSelectedProduct(data);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, []);

  const isItemInCart = (itemId) => {
    return cartItems.some(item => item.id === itemId);
  };

  const addToCart = (product) => {
    if (!isItemInCart(product.id)) {
      dispatch(addItemToCart(product)); // Dispatch the action to add the product to the cart
    }
  };

  return (
    <div className="col-md-7 mb-9">
      <h1 className='search'>Product of Glasses</h1>
      {selectedProduct && (
        <div className='row'>
          <div className='col-md-5'>
            <Card style={{ width: '100%' }}>
              <Card.Img variant='top' src={selectedProduct.thumbnail} />
              <Card.Body>
                <Card.Title>{selectedProduct.title}</Card.Title>
                <Card.Text>Description: {selectedProduct.description}</Card.Text>
                <Card.Text>Price: {selectedProduct.price}</Card.Text>
                <Button variant='primary' onClick={() => addToCart(selectedProduct)} disabled={isItemInCart(selectedProduct.id)}>
                  {isItemInCart(selectedProduct.id) ? 'Item Added' : 'Add Item'}
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-6'>
            {selectedProduct.images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} style={{ width: '100%', marginBottom: '10px' }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gift;
*/