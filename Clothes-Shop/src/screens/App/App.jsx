import { NavBar, Header, Footer } from 'components';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, About, Products, Wishlist } from '../index';

import './App.css';

const App = () => (
  <Router>
    <NavBar />
    <Header />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/products" component={Products} />
    <Route path="/wishlist" component={Wishlist} />
    <Footer />
  </Router>
);

export default App;
