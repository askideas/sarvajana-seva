import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Poojas', path: '/poojas' },
    { name: 'Donations', path: '/donations' },
    { name: 'Astrology', path: '/astrology' },
    { name: 'Contact', path: '/contact' }
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
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-orange-700 bg-orange-200/50'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-100/30'
                }`}
              >
                {item.name}
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-orange-700 bg-orange-200/50'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-100/30'
                  }`}
                >
                  {item.name}
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