import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addItemToCart } from '../store/cartSlice';
import { setSearchQuery } from '../store/productSlice';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector(state => state.cart);
  const searchQuery = useSelector(state => state.products.searchQuery); // Retrieve searchQuery from Redux store
  const dispatch = useDispatch();
  const selectedCategory = 'mobile'; // Set your desired category here

 



  useEffect(() => {
    fetchProducts(); // Fetch products on initial render
  }, []);

  const fetchProducts = () => {
    // Fetch products using your API endpoint or static data
    fetch(`http://localhost:5000/api/products?category=${selectedCategory}`) // Update the URL and category as needed
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  const isItemInCart = (itemId) => {
    return cartItems.some(item => item._id === itemId);
  };

  const addToCart = (product) => {
    if (!isItemInCart(product._id)) {
      dispatch(addItemToCart(product));
    }
  };

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="col-md-19 mb-1">
      <h1 className='searchs'>Deals In Mobile</h1>
  
      <div className='row'>
        {filteredProducts.map(product => (
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

export default ProductDetails;




  /*  <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={handleSearchChange}
      />*/









/*import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './productdetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../store1/cartSlice';
import { fetchProductsSuccess, fetchProductsFailure ,setSearchQuery} from '../store1/productSlice'; // Adjust the import path for your fetchProductsSuccess and fetchProductsFailure actions

// ... (other imports)

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.products)) {
          setProducts(data.products);
          dispatch(fetchProductsSuccess(data.products));
        } else {
          console.error('API response does not contain an array of products:', data);
          dispatch(fetchProductsFailure());
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        dispatch(fetchProductsFailure());
      });
  }, [dispatch]);

  const isItemInCart = (itemId) => {
    return cartItems.some(item => item.id === itemId);
  };

  const addToCart = (product) => {
    if (!isItemInCart(product.id)) {
      dispatch(addItemToCart(product));
    }
  };

  return (
    <div className='container'>
      <h1 className='search'>Products of Electronics</h1>
      <div className='row'>
        {products.map(product => (
          <div className="col-md-4 mb-9" key={product.id}>
            <Card style={{ width: '18rem', height: '100%' }}>
              <Card.Img variant='top' src={product.thumbnail} alt={product.title} />
            
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Title>{product.price}$</Card.Title>
                <Card.Text>{product.rating}*</Card.Text>
                <Card.Text>{product.stocks}</Card.Text>
                <Card.Title>{product.brand}</Card.Title>
                <Card.Text>{product.category}</Card.Text>
                <Button variant='primary' onClick={() => addToCart(product)} disabled={isItemInCart(product.id)}>
                  {isItemInCart(product.id) ? 'Item Added' : 'Add Item'}
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;





/*import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './productdetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../store1/cartSlice';
import { fetchProductsSuccess, fetchProductsFailure } from '../store1/productSlice'; // Adjust the import path for your fetchProductsSuccess and fetchProductsFailure actions

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.products)) {
          setProducts(data.products);
          dispatch(fetchProductsSuccess(data.products)); // Dispatch the action to update the Redux store
        } else {
          console.error('API response does not contain an array of products:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        dispatch(fetchProductsFailure()); // Dispatch the action to indicate fetch failure
      });
  }, [dispatch]);

  const isItemInCart = (itemId) => {
    return cartItems.some(item => item.id === itemId);
  };

  const addToCart = (product) => {
    if (!isItemInCart(product.id)) {
      dispatch(addItemToCart(product));
    }
  };

  return (
    <div className='container'>
      <h1>Product</h1>
      <div className='row'>
        {products.map(product => (
          <div className='col-md-4' key={product.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src={product.thumbnail} alt={product.title} />
            
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Title>{product.price}$</Card.Title>
                <Card.Text>{product.rating}*</Card.Text>
                <Card.Text>{product.stocks}</Card.Text>
                <Card.Title>{product.brand}</Card.Title>
                <Card.Text>{product.category}</Card.Text>
                <Button variant='primary' onClick={() => addToCart(product)} disabled={isItemInCart(product.id)}>
                  {isItemInCart(product.id) ? 'Item Added' : 'Add Item'}
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;

*/





/*
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './productdetail.css';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from '../store1/cartSlice';
//import { getProducts } from '../store1/productSlice';

const ProductDetails = () => {
const [products, setProducts] = useState([]);
const dispatch=useDispatch();
//const {data:products}=useSelector(state=>state.products)

  useEffect(() => {
//dispatch(getProducts());

   fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('API response does not contain an array of products:', data);
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

const addToCart=(products)=>{

dispatch(addItemToCart(products))
}

return (
    <div className='container'>
      <h1>Product</h1>
      <div className='row'>
        {products.map(product => (
          <div className='col-md-4' key={product.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src={product.thumbnail} alt={product.title} />
            
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Title>{product.price}$</Card.Title>
                <Card.Text>{product.rating}*</Card.Text>
                <Card.Text>{product.stocks}</Card.Text>
                <Card.Title>{product.brand}</Card.Title>
                <Card.Text>{product.category}</Card.Text>
                <Button variant='primary' onClick={()=>addToCart(products)}>addItem</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;


*/



