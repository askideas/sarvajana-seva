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
import LivePooja from './pages/LivePooja';
import Healing from './pages/Healing';
import Deeksha from './pages/Deeksha';
import PithruDharpanam from './pages/PithruDharpanam';
import Annadanam from './pages/Annadanam';
import Aashirvadam from './pages/Aashirvadam';
import { AuthProvider } from './contexts/AuthContext';
import { LoadingProvider, useLoading } from './contexts/LoadingContext';
import MobileNumberModal from './components/MobileNumberModal';
import Loader from './components/Loader';

const AppContent = () => {
  const { isLoading } = useLoading();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/live-pooja" element={<LivePooja />} />
        <Route path="/healing" element={<Healing />} />
        <Route path="/deeksha" element={<Deeksha />} />
        <Route path="/pithru-dharpanam" element={<PithruDharpanam />} />
        <Route path="/annadanam" element={<Annadanam />} />
        <Route path="/aashirvadam" element={<Aashirvadam />} />
        <Route path="/poojas" element={<Poojas />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/astrology" element={<Astrology />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <LoadingProvider>
          <AppContent />
          <MobileNumberModal />
        </LoadingProvider>
      </Router>
    </AuthProvider>
  );
};

export default App;