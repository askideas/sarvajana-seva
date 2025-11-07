import React from 'react';

const Aashirvadam = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Divine <span className="text-gradient-orange">Aashirvadam</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Receive sacred blessings and divine grace from enlightened masters and deities
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Sacred Blessings
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Aashirvadam represents the divine blessings that flow from the realized masters 
                and sacred spaces. Receive personalized blessings for various aspects of life.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-6">
                <p className="text-purple-800 font-medium">
                  "आशीर्वादात् सर्वसिद्धिः"
                </p>
                <p className="text-purple-600 text-sm mt-1">
                  "All accomplishments come through blessings"
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🙏</span>
                  Personal blessing ceremonies
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">💝</span>
                  Marriage and relationship blessings
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">👶</span>
                  Child blessing and naming ceremonies
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💼</span>
                  Career and business blessings
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">🏠</span>
                  Home and property blessings
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🌟</span>
                  Special occasion blessings
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                Request Blessing
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Blessing Services</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">Personal Aashirvadam</h4>
                <p className="text-gray-600">Individual blessing consultation</p>
                <p className="text-sm text-purple-600 font-medium">Duration: 30 minutes</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-gray-900">Family Blessings</h4>
                <p className="text-gray-600">Complete family blessing ceremony</p>
                <p className="text-sm text-pink-600 font-medium">Duration: 1 hour</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900">Special Events</h4>
                <p className="text-gray-600">Blessings for marriages, births, ventures</p>
                <p className="text-sm text-blue-600 font-medium">Customized timing</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">Remote Blessings</h4>
                <p className="text-gray-600">Distance blessings via spiritual connection</p>
                <p className="text-sm text-green-600 font-medium">Available globally</p>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Blessing Categories</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-purple-600">• Health & Wellness</div>
                <div className="text-pink-600">• Prosperity & Wealth</div>
                <div className="text-blue-600">• Education & Knowledge</div>
                <div className="text-green-600">• Protection & Safety</div>
                <div className="text-orange-600">• Spiritual Growth</div>
                <div className="text-red-600">• Peace & Harmony</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aashirvadam;