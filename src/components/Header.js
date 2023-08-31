
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../store/productSlice';
import './Header.css';
import { useMediaQuery } from 'react-responsive';
import Header2 from './Header2';
import ProductCard from './Productc'; // Import the ProductCard component

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faShoppingCart, faSignOutAlt, faSignInAlt, faUserPlus, } from '@fortawesome/free-solid-svg-icons';
import Round from '../containers/Round';
import { addItemToCart } from '../store/cartSlice'; // Import the addItemToCart action
import Footer from '../containers/Footer';

const Header = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(state => state.products.data) || []; // Handle productsData being undefined
  const searchQuery = useSelector(state => state.products.searchQuery);
  const auth = localStorage.getItem('user');
  const cartProducts = useSelector(state => state.cart);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
    handleFilter(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  const handleSearch = (query) => {
    const filteredProducts = productsData.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

 

  const handleFilter = (query) => {
    const filteredProducts = productsData.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) &&
      (!minPrice || product.price >= parseFloat(minPrice)) &&
      (!maxPrice || product.price <= parseFloat(maxPrice))
    );
    setSearchResults(filteredProducts);
  };

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  };

  // Rendering logic for productCards
  const productsToRender = searchResults.length > 0 ? searchResults : productsData;
  const productCards = productsToRender.map(product => (
    <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
  ));

  return (
    <>
      <header className="header">
        <div className="lookj-a">
          <Link className='loo' to="/product">BuyH</Link>
        </div>

        <div>
       
            
        <div className="header-search">
          <form className="search-form" onSubmit={handleSearchSubmit}>
        
         
            
            <input
              className="search-inpu"
              type="text"
              placeholder="Search products"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          
       
        </form>
      </div>
      </div>
        

        {isMobile ? (
          <div className="header__menu-toggle" onClick={handleMenuToggle}>
         
         <FontAwesomeIcon className='header-nav' icon={faBars} />
          </div>
        ) : (
          <nav className="header__nav header__nav--desktop">
            <ul className="header__menu">
              <li>
                <Link className='search-icon' to="/cart">
                  <FontAwesomeIcon className='search-icon' icon={faShoppingCart} />
                  ({cartProducts.length})
                </Link>
              </li>
              {auth ? (
                <li>
                  <Link onClick={logout} to="/signup">
                    <FontAwesomeIcon className='search-icon' icon={faSignOutAlt} />
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/signup">
                      <FontAwesomeIcon className='search-icon' icon={faUserPlus} />
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <FontAwesomeIcon className='search-icon' icon={faSignInAlt} />
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        )}

        {isMobile && isMenuOpen && (
          <nav className="header__nav header__nav--mobile header__nav--open">
            <ul className="header__menu">
              <li>
                <Link to="/cart">
                  <FontAwesomeIcon className='search-icon' icon={faShoppingCart} />
                 ({cartProducts.length})
                </Link>
              </li>
              {auth ? (
                <li>
                  <Link onClick={logout} to="/signup">
                    <FontAwesomeIcon className='search-icon' icon={faSignOutAlt} />
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/signup">
                      <FontAwesomeIcon className='search-icon' icon={faUserPlus} />
                   Signup
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <FontAwesomeIcon className='search-icon' icon={faSignInAlt} />
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        )}
      </header>
    
      <Header2 />
      <Round/>
     
      <div className="row">
        {productCards}
        
      </div>
      
    </>
  );
};

export default Header;



/*
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../store/productSlice';
import './Header.css';
import { useMediaQuery } from 'react-responsive';
import Header2 from './Header2';
import ProductCard from './Productc'; // Import the ProductCard component

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faShoppingCart, faSignOutAlt, faSignInAlt, faUserPlus, } from '@fortawesome/free-solid-svg-icons';
import Round from '../containers/Round';
import { addItemToCart } from '../store/cartSlice'; // Import the addItemToCart action

const Header = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(state => state.products.data) || []; // Handle productsData being undefined
  const searchQuery = useSelector(state => state.products.searchQuery);
  const auth = localStorage.getItem('user');
  const cartProducts = useSelector(state => state.cart);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
    handleFilter(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  const handleSearch = (query) => {
    const filteredProducts = productsData.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

 

  const handleFilter = (query) => {
    const filteredProducts = productsData.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) &&
      (!minPrice || product.price >= parseFloat(minPrice)) &&
      (!maxPrice || product.price <= parseFloat(maxPrice))
    );
    setSearchResults(filteredProducts);
  };

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  };

  // Rendering logic for productCards
  const productsToRender = searchResults.length > 0 ? searchResults : productsData;
  const productCards = productsToRender.map(product => (
    <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
  ));

  return (
    <>
      <header className="header">
        <div className="lookj-a">
          <Link className='loo' to="/product">BuyH</Link>
        </div>

        <div>
       
        <div className="header-search">
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <div>
            <input
              className="search-input"
              type="text"
              placeholder="Search products"
              value={searchQuery}
              onChange={handleSearchChange}
             
            />
           
    
             </div>
         
         
          </form>
       
        </div>
        </div>
        

        {isMobile ? (
          <div className="header__menu-toggle" onClick={handleMenuToggle}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        ) : (
          <nav className="header__nav header__nav--desktop">
            <ul className="header__menu">
              <li>
                <Link className='search-icon' to="/cart">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  ({cartProducts.length})
                </Link>
              </li>
              {auth ? (
                <li>
                  <Link onClick={logout} to="/signup">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/signup">
                      <FontAwesomeIcon icon={faUserPlus} />
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <FontAwesomeIcon icon={faSignInAlt} />
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        )}

        {isMobile && isMenuOpen && (
          <nav className="header__nav header__nav--mobile header__nav--open">
            <ul className="header__menu">
              <li>
                <Link to="/cart">
                  <FontAwesomeIcon icon={faShoppingCart} />
                 ({cartProducts.length})
                </Link>
              </li>
              {auth ? (
                <li>
                  <Link onClick={logout} to="/signup">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/signup">
                      <FontAwesomeIcon icon={faUserPlus} />
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <FontAwesomeIcon icon={faSignInAlt} />
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        )}
      </header>
    
      <Header2 />
      <Round/>
     
      <div className="row">
        {productCards}
      </div>
    </>
  );
};

export default Header;



   /* <div className="filter-form">
          <form onSubmit={handleFilterSubmit}>
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <button type="submit">
              <FontAwesomeIcon icon={faFilter} />
            </button>
          </form>
        </div>*/