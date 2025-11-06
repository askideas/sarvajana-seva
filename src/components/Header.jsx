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
    { name: 'Products', path: '/products' },
    { name: 'Donations', path: '/donations' },
    { name: 'Astrology', path: '/astrology' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="bg-gradient-to-r from-stone-50 via-neutral-50 to-stone-100 shadow-md sticky top-0 z-50 border-b border-stone-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-md border-2 border-stone-200 hover:border-stone-300 transition-colors duration-300">
              <img 
                src={Logo}
                alt="Sarvajana Seva Om Logo" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Fallback to Om symbol if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-12 h-12 bg-gradient-to-br from-stone-400 to-amber-500 rounded-full flex items-center justify-center"><span class="text-white font-bold text-lg">ॐ</span></div>';
                }}
              />
            </div>
            <div className="text-xl font-bold">
              <span className="text-stone-700">Sarvajana</span>{' '}
              <span className="text-amber-600">Seva</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`group relative px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text font-semibold'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                <span>{item.name}</span>
                {location.pathname === item.path && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-stone-700 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-300"
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
            <div className="px-3 pt-3 pb-4 space-y-2 bg-gradient-to-br from-white to-stone-50 rounded-xl shadow-lg mt-3 border border-stone-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text bg-gradient-to-r from-orange-50 to-red-50 font-semibold border border-orange-200'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  <span>{item.name}</span>
                  {location.pathname === item.path && (
                    <span className="ml-auto w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></span>
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