import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar, Footer, Blog, Store, SingleProduct, ShoppingCart, PageError, ArticlePage } from 'components';
import { HomePage, AboutPage, Contact } from '../index';
import ScrollToTop from '../../components/Helpers/ScrollToTop/index.jsx';

import './App.css';

const App = () => (
  <>
    <Router>
      <NavBar />
      <ScrollToTop />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path={'/blog'} component={Blog} />
      <Route path={'/store'} component={Store} />
      <Route path={'/singleProduct'} component={SingleProduct} />
      <Route path={'/contacts'} component={Contact} />
      <Route path={'/shoppingCart'} component={ShoppingCart} />
      <Route path={'/pageError'} component={PageError} />
      <Route path={'/article'} component={ArticlePage} />
      <Footer />
    </Router>
  </>
);

export default App;
