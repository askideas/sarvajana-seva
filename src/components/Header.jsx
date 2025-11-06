import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from '../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileLanguageAccordionOpen, setIsMobileLanguageAccordionOpen] = useState(false);
  const location = useLocation();
  const { translate, changeLanguage, getCurrentLanguage, availableLanguages } = useLanguage();

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
      if (isLanguageDropdownOpen && !e.target.closest('.language-dropdown') && !e.target.closest('.language-button')) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
    } else if (isLanguageDropdownOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isLanguageDropdownOpen]);

  const handleLanguageSelect = (langCode) => {
    changeLanguage(langCode);
    setIsLanguageDropdownOpen(false);
    setIsMobileLanguageAccordionOpen(false);
  };

  const navigation = [
    { name: translate('home'), path: '/' },
    { name: translate('about'), path: '/about' },
    { name: translate('poojas'), path: '/poojas' },
    { name: translate('products'), path: '/products' },
    { name: translate('donations'), path: '/donations' },
    { name: translate('astrology'), path: '/astrology' },
    { name: translate('contact'), path: '/contact' }
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
              {translate('login')}
            </button>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="language-button flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors duration-300"
              >
                <span className="mr-1">🌐</span>
                <span>{getCurrentLanguage().nativeName}</span>
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language Dropdown Menu */}
              {isLanguageDropdownOpen && (
                <div className="language-dropdown absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    {availableLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors ${
                          getCurrentLanguage().code === lang.code 
                            ? 'bg-orange-100 text-orange-600 font-semibold' 
                            : 'text-gray-700'
                        }`}
                      >
                        <span className="flex items-center">
                          <span className="w-8 text-center">{lang.code === 'en' ? '🇺🇸' : lang.code === 'te' ? '🇮🇳' : lang.code === 'ta' ? '🇮🇳' : lang.code === 'kn' ? '🇮🇳' : '🇮🇳'}</span>
                          <span className="ml-2">{lang.nativeName}</span>
                          {getCurrentLanguage().code === lang.code && (
                            <span className="ml-auto">✓</span>
                          )}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-button md:hidden p-1.5 sm:p-2 rounded-md text-gray-600 hover:text-stone-700 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-300"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
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
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}></div>
          
          {/* Sidebar */}
          <div className="mobile-sidebar fixed top-0 right-0 h-full w-64 sm:w-72 bg-gradient-to-b from-white to-stone-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col">
            {/* Sidebar Header - Fixed */}
            <div className="flex items-center justify-between p-4 border-b border-stone-200 flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden shadow-md border-2 border-stone-200">
                  <img 
                    src={Logo}
                    alt="Sarvajana Seva Om Logo" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-8 h-8 bg-gradient-to-br from-stone-400 to-amber-500 rounded-full flex items-center justify-center"><span class="text-white font-bold text-sm">ॐ</span></div>';
                    }}
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
                  {translate('login')}
                </button>
              </div>

              {/* Mobile Language Selection Accordion */}
              <div className="px-4 py-2">
                <div className="border-t border-gray-200 pt-4">
                  <button
                    onClick={() => setIsMobileLanguageAccordionOpen(!isMobileLanguageAccordionOpen)}
                    className="w-full flex items-center justify-between text-left text-sm font-semibold text-gray-700 mb-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="flex items-center">
                      <span className="mr-2">🌐</span>
                      {translate('language')}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMobileLanguageAccordionOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isMobileLanguageAccordionOpen 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="space-y-2 pb-2">
                        {availableLanguages.map((lang, index) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              handleLanguageSelect(lang.code);
                              setIsMenuOpen(false);
                            }}
                            className={`w-full flex items-center p-3 text-sm rounded-lg transition-all duration-300 transform hover:scale-105 ${
                              getCurrentLanguage().code === lang.code 
                                ? 'bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 font-semibold border-2 border-orange-300 shadow-md' 
                                : 'bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-200 hover:border-orange-200'
                            }`}
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <span className="text-lg mr-3">{lang.code === 'en' ? '🇺🇸' : '🇮🇳'}</span>
                            <div className="flex-1 text-left">
                              <div className="font-medium">{lang.nativeName}</div>
                              <div className="text-xs opacity-70">{lang.name}</div>
                            </div>
                            {getCurrentLanguage().code === lang.code && (
                              <span className="text-orange-600 font-bold">✓</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* End of Scrollable Content Area */}
            </div>
          </div>
        </div>
      )}


    </>
  );
};

export default Header;