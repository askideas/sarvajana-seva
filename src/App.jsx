import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Poojas from './pages/Poojas';
import Donations from './pages/Donations';
import Astrology from './pages/Astrology';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import { AuthProvider } from './contexts/AuthContext';
import MobileNumberModal from './components/MobileNumberModal';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/poojas" element={<Poojas />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/astrology" element={<Astrology />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Layout>
        <MobileNumberModal />
        </Router>
    </AuthProvider>
  );
};

export default App;