import React from 'react';

const Healing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Spiritual <span className="text-gradient-orange">Healing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ancient healing practices to restore balance and harmony in your mind, body, and soul
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Traditional Healing Methods
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Our spiritual healing services combine ancient Vedic practices with modern understanding 
                to provide holistic wellness for your complete well-being.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🌿</span>
                  Energy healing and chakra balancing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💎</span>
                  Crystal therapy and gemstone healing
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🕉️</span>
                  Mantra chanting and sound healing
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">🙏</span>
                  Reiki and pranic healing
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🔮</span>
                  Aura cleansing and protection
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                Book Healing Session
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Healing Services</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">Personal Healing Session</h4>
                <p className="text-gray-600">One-on-one spiritual healing consultation</p>
                <p className="text-sm text-green-600 font-medium">Duration: 60 minutes</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900">Group Healing Circle</h4>
                <p className="text-gray-600">Community healing with shared energy</p>
                <p className="text-sm text-blue-600 font-medium">Every Sunday at 5:00 PM</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">Distant Healing</h4>
                <p className="text-gray-600">Remote healing sessions via spiritual connection</p>
                <p className="text-sm text-purple-600 font-medium">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healing;