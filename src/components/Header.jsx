import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const { user, signInWithGoogle, logout, loading } = useAuth();

  const handleLogin = async () => {
    if (loading) return;
    
    try {
      const result = await signInWithGoogle();
      if (result.success) {
        console.log('Login successful');
      } else {
        console.error('Login failed:', result.error);
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setShowUserMenu(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

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

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Live Pooja', path: '/live-pooja' },
    { name: 'Healing', path: '/healing' },
    { name: 'Deeksha', path: '/deeksha' },
    { name: 'Pithru Dharpanam', path: '/pithru-dharpanam' },
    { name: 'Annadanam', path: '/annadanam' },
    { name: 'Aashirvadam', path: '/aashirvadam' },
    { name: 'Poojas', path: '/poojas' },
    { name: 'Products', path: '/products' },
    { name: 'Donations', path: '/donations' },
    { name: 'Astrology', path: '/astrology' }
  ];

  return (
    <>
      <header className="bg-gradient-to-r from-stone-50 via-neutral-50 to-stone-100 shadow-md sticky top-0 z-50 border-b border-stone-200">
        <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between min-h-14 sm:min-h-16 py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
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

            {/* Desktop Navigation - flows with the logo row */}
            <div className="hidden md:flex items-center flex-wrap flex-1 justify-center mx-4 gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group relative px-3 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap rounded-md ${
                    location.pathname === item.path
                      ? 'text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text font-semibold'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-stone-50'
                  }`}
                >
                  <span>{item.name}</span>
                  {location.pathname === item.path && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Login and Mobile Menu Button */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              {/* Login Button */}
              {user ? (
                <div className="relative">
                  {/* Desktop User Dropdown */}
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="hidden md:flex mx-2 items-center space-x-2 px-3 py-2 bg-white border border-gray-200 rounded-full hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm max-w-24 truncate">
                      {user.displayName?.split(' ')[0] || 'User'}
                    </span>
                    <svg className="w-4 h-4 text-gray-500 transition-transform duration-200" style={{ transform: showUserMenu ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Mobile User Avatar (clickable - redirects to profile) */}
                  <Link 
                    to="/profile" 
                    className="md:hidden mx-2 flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  </Link>
                  
                  {showUserMenu && (
                    <div className="hidden md:block absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                            <User className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-white truncate">{user.displayName || 'User'}</div>
                            <div className="text-orange-100 text-sm truncate">{user.email}</div>
                          </div>
                        </div>
                      </div>
                      <div className="py-2">
                        <Link
                          to="/profile"
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <User className="h-4 w-4 mr-3 text-gray-400" />
                          <span className="font-medium">My Profile</span>
                        </Link>
                        <div className="border-t border-gray-100 mt-2 pt-2">
                          <button
                            onClick={handleLogout}
                            className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                          >
                            <svg className="h-4 w-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <span className="font-medium">Sign Out</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="hidden md:flex mx-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium text-sm rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mobile-menu-button md:hidden p-2 rounded-md text-gray-600 hover:text-stone-700 hover:bg-stone-100 transition-colors duration-200 cursor-pointer"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden fade-in-backdrop" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="mobile-sidebar flex flex-col h-full w-72 bg-white shadow-2xl ml-auto slide-in-right">
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
                  {user ? (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                            <User className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-white truncate">{user.displayName}</div>
                            <div className="text-orange-100 text-sm truncate">{user.email}</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Link
                          to="/profile"
                          onClick={() => setIsMenuOpen(false)}
                          className="w-full px-4 py-3 bg-white border border-orange-200 text-orange-600 font-medium rounded-lg hover:bg-orange-50 transition-all duration-300 flex items-center justify-center cursor-pointer"
                        >
                          <User className="h-4 w-4 mr-2" />
                          View Profile
                        </Link>
                        <button 
                          onClick={() => {
                            handleLogout();
                            setIsMenuOpen(false);
                          }}
                          className="w-full px-4 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-all duration-300 flex items-center justify-center cursor-pointer"
                        >
                          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Sign Out
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={() => {
                        handleLogin();
                        setIsMenuOpen(false);
                      }}
                      disabled={loading}
                      className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {loading ? 'Logging in...' : 'Login'}
                    </button>
                  )}
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