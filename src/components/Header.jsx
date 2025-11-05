import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '📖' },
    { name: 'Poojas', path: '/poojas', icon: '🪔' },
    { name: 'Products', path: '/products', icon: '🛍️' },
    { name: 'Donations', path: '/donations', icon: '🙏' },
    { name: 'Astrology', path: '/astrology', icon: '✨' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ];

  return (
    <header className="bg-gradient-to-r from-orange-100 via-red-50 to-yellow-50 shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-orange-200 hover:border-orange-400 transition-colors duration-300">
              <img 
                src={Logo}
                alt="Sarvajana Seva Om Logo" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Fallback to Om symbol if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center"><span class="text-white font-bold text-lg">ॐ</span></div>';
                }}
              />
            </div>
            <div className="text-xl font-bold text-orange-800">
              <span className="text-red-600">Sarvajana</span>{' '}
              <span className="text-orange-600">Seva</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`group relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                  location.pathname === item.path
                    ? 'text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg transform scale-105'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-white hover:shadow-md transform hover:scale-105'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.name}</span>
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-100/30 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-3 pt-3 pb-4 space-y-2 bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-2xl mt-3 border border-orange-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg transform scale-105'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-white hover:shadow-md transform hover:scale-105'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                  {location.pathname === item.path && (
                    <span className="ml-auto text-orange-200">●</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;