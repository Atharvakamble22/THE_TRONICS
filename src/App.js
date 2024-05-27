import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import HomePage from './HomePage';
import ContactUsPage from './ContactUsPage';
import CategoryDetailPage from './CategoryDetailPage';
import SellOnWebsitePage from './SellOnWebsitePage';
import AboutUs from './AboutUs';
import AccountPage from './AccountPage';
import Cart from './Cart';
import OrderForm from './OrderForm';
import Login from './Login';
import Signup from './Signup';
import ProductCardPage from './ProductCardPage';

const App = () => (
  <Router>
    <UserProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryDetailPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/sell" element={<SellOnWebsitePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/my-orders" element={<Cart />} />
        <Route path="/order/:categoryName/:productName" element={<OrderForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product" element={<ProductCardPage />} />
      </Routes>
    </UserProvider>
  </Router>
);

export default App;
