import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';

import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Product from './containers/Product';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Cart from './components/Cart';


import './App.css';
import Round from './containers/Round';
import ProductDetails from './containers/ProductDetails';
import Bag from './containers/Bag1';
import Gift from './containers/Gift';
import Bags from './containers/Bags';
import Pulses from './containers/Pulses';
import Lip from './containers/Lips';
import Payment from './containers/Payment';
import User from './containers/User';
import Forget from './components/Forgets';
import Change from './components/Changes';
import Productc from './components/Productc';
import Clothes from './compo/Clothes';
import Pay from './components/Pay';
import Success from './components/Success';
import Men from './compo/Men';
import Kid from './compo/Kid';
import Bicycle from './compo/Bicycle';
import Cars from './compo/Cars';
import Doll from './compo/Doll';
import Paint from './compo/Paint';
import Murti from './compo/Murti';
import Glass from './compo/Glass';
import Purses from './compo/Purses';
import Bag2 from './compo/Bag';
import Rings from './compo/Rings';
import Mug from './compo/Mug';
import Pen from './compo/Pen';
import Watch from './compo/Watch';
import Wcloth from './compo/Wcloth';
import Wdeco from './compo/Wdeco';
import Weding from './compo/Weding';
import Bad from './compo/Bad';
import Almira from './compo/Almira';
import Furniture from './compo/Furniture';
import Pulses1 from './compo/Pulses';
import Drinks from './compo/Drinks';
import Namkeen from './compo/Namkeen';


function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
   
   
       
      <div className="App">
    
        <Header />

        <Routes>

          <Route path="/about" element={<About />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kid" element={<Kid />} />
          <Route path="/bicycle" element={<Bicycle />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/doll" element={<Doll />} />
          <Route path="/paint" element={<Paint />} />
          <Route path="/murti" element={<Murti />} />
          <Route path="/glass" element={<Glass />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/bag2" element={<Bag2 />} />
          <Route path="/purses" element={<Purses />} />
          <Route path="/mug" element={<Mug />} />
          <Route path="/pen" element={<Pen />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/wcloth" element={<Wcloth />} />
          <Route path="/Wdeco" element={<Wdeco />} />
          <Route path="/weding" element={<Weding />} />
          <Route path="/bad" element={<Bad />} />
          <Route path="/almira" element={<Almira />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/namkeen" element={<Namkeen />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/pulses" element={<Pulses1 />} />




          <Route path="/pay" element={<Pay />} />
          <Route path="/success" element={<Success />} />
          <Route path="/user" element={<User />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/change" element={<Change />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product" element={<Productc />} />
         
          <Route path="/signup" element={user ? <Navigate to="/login" /> : <SignUp />} />
          <Route path="/login" element={user ? <Navigate to="/product" /> : <Login />} />
          <Route path="/cart" element={<Cart />} />
       
          <Route path="/" element={<Round />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/Bag" element={<Bag />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/bags" element={<Bags />} />
          <Route path="/pulses" element={<Pulses />} />
          <Route path="/lip" element={<Lip />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
  
  );
}

export default App;










