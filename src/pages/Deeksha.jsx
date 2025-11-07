import React from 'react';

const Deeksha = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Spiritual <span className="text-gradient-orange">Deeksha</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Receive sacred initiation and spiritual guidance through traditional Deeksha ceremonies
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Sacred Initiations
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Deeksha is a sacred initiation that opens the doorway to spiritual awakening. 
                Receive blessings and guidance from enlightened masters through ancient traditions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✨</span>
                  Guru Deeksha - Spiritual master initiation
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">🔥</span>
                  Mantra Deeksha - Sacred sound initiation
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">💫</span>
                  Yantra Deeksha - Sacred geometry blessing
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🌟</span>
                  Shakti Deeksha - Divine energy transmission
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🕉️</span>
                  Oneness Deeksha - Unity consciousness awakening
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                Request Deeksha
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Deeksha Programs</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-gray-900">Beginner's Deeksha</h4>
                <p className="text-gray-600">Introduction to spiritual awakening</p>
                <p className="text-sm text-yellow-600 font-medium">Duration: 3 hours</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900">Advanced Deeksha</h4>
                <p className="text-gray-600">Deep spiritual transformation journey</p>
                <p className="text-sm text-orange-600 font-medium">Duration: Full day retreat</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900">Group Deeksha</h4>
                <p className="text-gray-600">Community blessing ceremony</p>
                <p className="text-sm text-red-600 font-medium">Every full moon</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">Online Deeksha</h4>
                <p className="text-gray-600">Virtual spiritual initiation</p>
                <p className="text-sm text-purple-600 font-medium">Available worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deeksha;