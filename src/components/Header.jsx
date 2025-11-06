import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close sidebar when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.mobile-sidebar') && !e.target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Initialize Google Translate
  useEffect(() => {
    const initGoogleTranslate = () => {
      // Check if Google Translate loaded successfully after 3 seconds
      setTimeout(() => {
        const googleTranslateElement = document.getElementById('google_translate_element');
        const manualSelect = document.getElementById('manual-translate-select');
        
        if (googleTranslateElement && !googleTranslateElement.querySelector('.goog-te-combo') && manualSelect) {
          // Google Translate failed to load, show manual selector
          manualSelect.style.display = 'block';
          console.log('Using manual language selector as fallback');
        }
      }, 3000);
    };

    initGoogleTranslate();
  }, []);

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
    <>
      <header className="bg-gradient-to-r from-stone-50 via-neutral-50 to-stone-100 shadow-md sticky top-0 z-50 border-b border-stone-200">
        <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md border-2 border-stone-200 hover:border-stone-300 transition-colors duration-300">
                <img 
                  src={Logo}
                  alt="Sarvajana Seva Om Logo" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to Om symbol if image fails to load
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-stone-400 to-amber-500 rounded-full flex items-center justify-center"><span class="text-white font-bold text-sm sm:text-lg">ॐ</span></div>';
                  }}
                />
              </div>
              <div className="text-lg sm:text-xl font-bold">
                <span className="text-stone-700">Sarvajana</span>{' '}
                <span className="text-amber-600">Seva</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
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
              
              {/* Login Button */}
              <button className="mx-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium text-sm rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                Login
              </button>

              {/* Language Selector */}
              <div className="ml-2 flex items-center">
                <div id="google_translate_element" className="google-translate-container"></div>
                <select 
                  onChange={(e) => {
                    const lang = e.target.value;
                    if (lang && lang !== 'en') {
                      const currentUrl = encodeURIComponent(window.location.href);
                      window.open(`https://translate.google.com/translate?sl=en&tl=${lang}&u=${currentUrl}`, '_blank');
                    }
                  }}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white hover:border-orange-400 focus:border-orange-500 focus:outline-none"
                  style={{ display: 'none' }}
                  id="manual-translate-select"
                >
                  <option value="en">🌐 English</option>
                  <option value="hi">हिंदी Hindi</option>
                  <option value="te">తెలుగు Telugu</option>
                  <option value="ta">தமிழ் Tamil</option>
                  <option value="kn">ಕನ್ನಡ Kannada</option>
                  <option value="ml">മലയാളം Malayalam</option>
                  <option value="mr">मराठी Marathi</option>
                  <option value="gu">ગુજરાતી Gujarati</option>
                  <option value="bn">বাংলা Bengali</option>
                </select>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-button md:hidden p-2 rounded-md text-gray-600 hover:text-stone-700 hover:bg-stone-100 transition-colors duration-200"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="mobile-sidebar flex flex-col h-full w-72 bg-white shadow-2xl">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-red-50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden shadow-md border-2 border-orange-200">
                  <img 
                    src={Logo}
                    alt="Sarvajana Seva Om Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-lg font-bold">
                  <span className="text-stone-700">Sarvajana</span>{' '}
                  <span className="text-amber-600">Seva</span>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1.5 rounded-md text-gray-600 hover:text-stone-700 hover:bg-stone-100"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-gray-100 animate-fade-in pb-4">
              {/* Navigation Links */}
              <div className="py-4">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center px-4 py-3 text-base font-medium transition-all duration-300 border-l-4 animate-slide-in-right ${
                      location.pathname === item.path
                        ? 'text-orange-600 bg-gradient-to-r from-orange-50 to-red-50 border-orange-500 font-semibold'
                        : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50 border-transparent hover:border-orange-200'
                    }`}
                    style={{ 
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <span>{item.name}</span>
                    {location.pathname === item.path && (
                      <span className="ml-auto w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></span>
                    )}
                  </Link>
                ))}

                {/* Mobile Login Button */}
                <div className="px-4 py-2 mt-4">
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                  >
                    Login
                  </button>
                </div>

                {/* Mobile Language Selector */}
                <div className="px-4 py-2 mt-4 border-t border-gray-200 pt-4">
                  <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <span className="mr-2">🌐</span>
                    Language
                  </div>
                  <div id="google_translate_element_mobile"></div>
                  <select 
                    onChange={(e) => {
                      const lang = e.target.value;
                      if (lang && lang !== 'en') {
                        const currentUrl = encodeURIComponent(window.location.href);
                        window.open(`https://translate.google.com/translate?sl=en&tl=${lang}&u=${currentUrl}`, '_blank');
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
                  >
                    <option value="en">🌐 Choose Language</option>
                    <option value="hi">हिंदी Hindi</option>
                    <option value="te">తెలుగు Telugu</option>
                    <option value="ta">தமிழ் Tamil</option>
                    <option value="kn">ಕನ್ನಡ Kannada</option>
                    <option value="ml">മലയാളം Malayalam</option>
                    <option value="mr">मराठी Marathi</option>
                    <option value="gu">ગુજરાતી Gujarati</option>
                    <option value="bn">বাংলা Bengali</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;