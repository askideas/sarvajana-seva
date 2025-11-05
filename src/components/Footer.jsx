import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-900 via-red-800 to-orange-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg border-2 border-yellow-400">
                <img 
                  src={Logo}
                  alt="Sarvajana Seva Om Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to Om symbol if image fails to load
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"><span class="text-white font-bold text-lg">ॐ</span></div>';
                  }}
                />
              </div>
              <div className="text-xl font-bold">
                <span className="text-yellow-300">Sarvajana</span>{' '}
                <span className="text-orange-300">Seva</span>
              </div>
            </div>
            <p className="text-orange-200 mb-4 max-w-md">
              Dedicated to serving humanity through spiritual guidance, devotional services, 
              and connecting souls with divine blessings. Join us in our mission of universal service.
            </p>
            <div className="text-sm text-orange-300">
              <p className="mb-1">🕉️ श्री गुरुभ्यो नमः</p>
              <p>सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/poojas" className="text-orange-200 hover:text-yellow-300 transition-colors">
                  Poojas & Rituals
                </Link>
              </li>
              <li>
                <Link to="/donations" className="text-orange-200 hover:text-yellow-300 transition-colors">
                  Donations
                </Link>
              </li>
              <li>
                <Link to="/astrology" className="text-orange-200 hover:text-yellow-300 transition-colors">
                  Astrology Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-orange-200 hover:text-yellow-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Connect With Us</h3>
            <div className="space-y-2 text-orange-200">
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                info@sarvajanaseva.com
              </p>
              <p className="flex items-center">
                <span className="mr-2">📱</span>
                +91 98765 43210
              </p>
              <p className="flex items-center">
                <span className="mr-2">🏛️</span>
                Sacred Temple Complex
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-orange-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-orange-200 text-sm">
              © {new Date().getFullYear()} Sarvajana Seva. All rights reserved. | Made with devotion 🙏
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-orange-200 hover:text-yellow-300 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-orange-200 hover:text-yellow-300 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;