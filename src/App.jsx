import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Poojas from './pages/Poojas';
import Donations from './pages/Donations';
import Astrology from './pages/Astrology';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/poojas" element={<Poojas />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/astrology" element={<Astrology />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;