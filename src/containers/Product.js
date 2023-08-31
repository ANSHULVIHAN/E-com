
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addItemToCart } from '../store/cartSlice';
import { setSearchQuery } from '../store/productSlice';
import './Product.css';
import Footer from './Footer';

const Product = () => {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector(state => state.cart);
  const searchQuery = useSelector(state => state.products.searchQuery);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState('all'); // Initialize with 'all'

  useEffect(() => {
    fetchProducts(); // Fetch products on initial render
  }, [selectedCategory]); // Refetch products when selectedCategory changes

  const fetchProducts = () => {
    // Fetch products using your API endpoint or static data
    let url = `http://localhost:5000/api/products`;
    if (selectedCategory !== 'all') {
      url += `?category=${selectedCategory}`;
    }

    fetch(url)
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

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === 'all' || product.category === selectedCategory)
  );
/*
  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

const handleNextPage = () => {
  setCurrentPage(prevPage => prevPage + 1);
};

const handlePrevPage = () => {
  setCurrentPage(prevPage => prevPage - 1);
};*/

  return (
    <div className="col-md-19 mb-1">
      <h1 className='searchs'>Deal of the Day</h1>
     
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
                  className='add-to-cart-button'
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
    



      <Footer/>
    </div>
  );
};

export default Product;





