import React from 'react';

const LivePooja = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Live <span className="text-gradient-orange">Pooja</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience divine blessings through live streaming poojas conducted by experienced priests
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Join Our Live Sacred Rituals
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Participate in authentic Vedic rituals from the comfort of your home. Our live pooja 
                sessions are conducted by qualified priests with proper mantras and procedures.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">🕉️</span>
                  Daily morning and evening aarti
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">🙏</span>
                  Special festival celebrations
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">📿</span>
                  Personalized prayer requests
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">🔔</span>
                  Interactive spiritual sessions
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                Join Live Session
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Upcoming Live Sessions</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900">Morning Aarti</h4>
                <p className="text-gray-600">Daily at 6:00 AM IST</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900">Evening Aarti</h4>
                <p className="text-gray-600">Daily at 7:00 PM IST</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-gray-900">Special Pooja</h4>
                <p className="text-gray-600">Saturdays at 10:00 AM IST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePooja;