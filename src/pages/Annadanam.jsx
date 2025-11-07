import React from 'react';

const Annadanam = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient-orange">Annadanam</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The sacred act of feeding the hungry - the highest form of donation and service to humanity
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Sacred Food Service
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Annadanam is considered the highest form of dana (donation). By providing food to the 
                hungry, we serve the divine and accumulate the greatest merit. Join us in this noble cause.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 my-6">
                <p className="text-orange-800 font-medium">
                  "अन्नदानात्परो दानं न भूतो न भविष्यति"
                </p>
                <p className="text-orange-600 text-sm mt-1">
                  "There is no donation greater than Annadanam, nor has there ever been, nor will there ever be"
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🍽️</span>
                  Daily free meals for the needy
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">🙏</span>
                  Festival food distribution
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">👨‍👩‍👧‍👦</span>
                  Community kitchen services
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">💝</span>
                  Sponsor a meal program
                </li>
              </ul>
            </div>
            <div className="mt-8 space-x-4">
              <button className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                Donate for Annadanam
              </button>
              <button className="bg-white border-2 border-green-500 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 cursor-pointer">
                Volunteer
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Annadanam Programs</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">Daily Annadanam</h4>
                <p className="text-gray-600">Free meals served every day</p>
                <p className="text-sm text-green-600 font-medium">12:00 PM - 2:00 PM</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-gray-900">Festival Feeding</h4>
                <p className="text-gray-600">Special meals during festivals</p>
                <p className="text-sm text-yellow-600 font-medium">All major festivals</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900">Sponsor a Meal</h4>
                <p className="text-gray-600">Fund meals for specific occasions</p>
                <p className="text-sm text-orange-600 font-medium">From ₹500 onwards</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900">Bulk Food Donation</h4>
                <p className="text-gray-600">Contribute rice, dal, vegetables</p>
                <p className="text-sm text-red-600 font-medium">Contact for details</p>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-green-50 to-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-green-600">50,000+</p>
                  <p className="text-sm text-gray-600">Meals Served</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-yellow-600">1,000+</p>
                  <p className="text-sm text-gray-600">Families Helped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Annadanam;