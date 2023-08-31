// Header2.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const categories = [
  {
    title: 'Clothing & Shoes',
    subcategories: [
      { title: "Women's", path: '/clothes/' },
      { title: "Men's", path: '/Men/' },
      { title: 'Kids', path: '/Kid/' },
      // Add more subcategories
    ],
  },
  {
    title: 'Toys & Entertainment',
    subcategories: [
      { title: "Bicycle", path: '/Bicycle/' },
      { title: "Cars", path: '/Cars/' },
      { title: 'Doll', path: '/Doll' },
    ],
  },
  {
    title: 'Art & Collectibles',
    subcategories: [
      { title: "painting's", path: '/Paint/' },
      { title: "Murti's", path: '/Murti/' },
      { title: "GlassArt's", path: '/Glass/' },
    ],
  },
  {
    title: 'Jewellery & Accessories',
    subcategories: [
      { title: "Purses", path: '/Bag2/' },
      { title: "Bags", path: '/Purses/' },
      { title: 'Rings', path: '/Rings/' },
    ],
  },
  {
    title: 'Gifts',
    subcategories: [
      { title: "Mugs", path: '/Mug/' },
      { title: "Pens", path: '/Pen/' },
      { title: 'Watches', path: '/Watch/' },
    ],
  },
  {
    title: 'Wedding & Party',
    subcategories: [
      { title: "WedingGifts", path: '/Weding/' },
      { title: "WedingCloth ", path: '/Wcloth/' },
      { title: 'WedingDeco', path: '/Wdeco/' },
    ],
  },
  {
    title: 'Home & Living',
    subcategories: [
      { title: "Bad", path: '/Bad/' },
      { title: "Almira", path: '/Almira/' },
      { title: 'kids Furniture', path: '/Furniture/' },
    ],
  },
  {
    title: 'Grocery',
    subcategories: [
      { title: "Namkeens", path: '/Namkeen/' },
      { title: "Drink", path: '/Drinks/' },
      { title: 'Pulses', path: '/Pulses/' },
    ],
  },

];

const Header2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCategory = (categoryTitle) => {
    setOpenCategory(openCategory === categoryTitle ? null : categoryTitle);
  };

  return (
    <header className="header1">
      <nav className="header-nav-1">
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
      <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="close-icon" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <ul className="mobile-nav-links">
          {categories.map(category => (
            <li key={category.title}>
              <div onClick={() => toggleCategory(category.title)}>
                <Link to={category.path}>
                  {category.title}
                  {category.subcategories.length > 0 && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`arrow-icon ${openCategory === category.title ? 'open' : ''}`}
                    />
                  )}
                </Link>
              </div>
              {openCategory === category.title && (
                <ul className="subcategories">
                  {category.subcategories.map(subcategory => (
                    <li key={subcategory.title}>
                      <Link to={subcategory.path}>{subcategory.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Display desktop menu items directly */}
      <div className="desktop-menu">
        <ul className="desktop-nav-links">
          {categories.map(category => (
            <li className="menu-item" key={category.title}>
              <div className="category-header" onClick={() => toggleCategory(category.title)}>
                {category.title}
                {category.subcategories.length > 0 && (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`arrow-icon ${openCategory === category.title ? 'open' : ''}`}
                  />
                )}
              </div>
              {openCategory === category.title && (
                <ul className="subcategories">
                  {category.subcategories.map(subcategory => (
                    <li key={subcategory.title}>
                      <Link to={subcategory.path}>{subcategory.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header2;







/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header1">
      <nav className="header-nav-1">
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
      <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="close-icon" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <ul className="mobile-nav-links">
          <li><Link to="/ clothes">Clothing & Shoes</Link></li>
          <li><Link to="/">Toys & Entertainment</Link></li>
          <li><Link to="/">Art & Collectibles</Link></li>
          <li><Link to="/">Gifts</Link></li>
          <li><Link to="/">Food & Drinks</Link></li>
          <li><Link to="/">Grocery</Link></li>
          <li><Link to="/">Jewellery & Accessories</Link></li>
          <li><Link to="/">Home & Living</Link></li>
          <li><Link to="/">Wedding & Party</Link></li>
          <li><Link to="/">Craft</Link></li>
        </ul>
      </div>
    
      <div className="desktop-menu">
        <ul className="desktop-nav-links">
          <li><Link to="/clothes">Clothing & Shoes</Link></li>
          <li><Link to="/">Toys & Entertainment</Link></li>
          <li><Link to="/">Art & Collectibles</Link></li>
          <li><Link to="/">Gifts</Link></li>
          <li><Link to="/">Food & Drinks</Link></li>
          <li><Link to="/">Grocery</Link></li>
          <li><Link to="/">Jewellery & Accessories</Link></li>
          <li><Link to="/">Home & Living</Link></li>
          <li><Link to="/">Wedding & Party</Link></li>
          <li><Link to="/">Craft</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header2;

/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header1">
      <nav className="header-nav">
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
      <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="close-icon" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Jeans</Link></li>
          <li><Link to="/">Sarees</Link></li>
          <li><Link to="/">Caps</Link></li>
          <li><Link to="/">Kurtas</Link></li>
          <li><Link to="/">Food</Link></li>
          <li><Link to="/">Grocery</Link></li>
          <li><Link to="/">Jewellery & Accessories</Link></li>
          <li><Link to="/">Home & Living</Link></li>
          <li><Link to="/">Wedding & Party</Link></li>
          <li><Link to="/">Craft</Link></li>
        </ul>
      </div>
     
      <div className="desktop-menu">
        <ul className="nav-links">
          <li><Link to="/">Jeans</Link></li>
          <li><Link to="/">Sarees</Link></li>
          <li><Link to="/">Caps</Link></li>
          <li><Link to="/">Kurtas</Link></li>
          <li><Link to="/">Food</Link></li>
          <li><Link to="/">Grocery</Link></li>
          <li><Link to="/">Jewellery & Accessories</Link></li>
          <li><Link to="/">Home & Living</Link></li>
          <li><Link to="/">Wedding & Party</Link></li>
          <li><Link to="/">Craft</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header2;


/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header1">
      <nav className="header-nav">
     
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
      <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
        
          <div className="close-icon" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Jeans</Link></li>
          <li><Link to="/">Sarees</Link></li>
          <li><Link to="/">Caps</Link></li>
          <li><Link to="/">Kurtas</Link></li>
          <li><Link to="/">Food</Link></li>
          <li><Link to="/">Grocery</Link></li>
          <li><Link to="/">Jewellery & Accessories</Link></li>
          <li><Link to="/">Home & Living</Link></li>
          <li><Link to="/">Wedding & Party</Link></li>
          <li><Link to="/">Craft</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header2;
*/