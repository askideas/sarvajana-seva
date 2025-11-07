import React from 'react';

const PithruDharpanam = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pithru <span className="text-gradient-orange">Dharpanam</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Honor your ancestors through sacred rituals and bring peace to departed souls
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Sacred Ancestral Services
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Pithru Dharpanam is a sacred offering to honor and appease our ancestors. 
                These rituals help in bringing peace to departed souls and removing ancestral obstacles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🕯️</span>
                  Shraadh ceremonies for departed souls
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">🙏</span>
                  Pitra paksha special rituals
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">💧</span>
                  Tarpan and water offerings
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🌾</span>
                  Pinda daan and food offerings
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">📿</span>
                  Ancestral lineage healing
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <button className="bg-gradient-to-r from-gray-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-gray-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                Book Pithru Service
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ancestral Services</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900">Annual Shraadh</h4>
                <p className="text-gray-600">Yearly ceremony for departed ancestors</p>
                <p className="text-sm text-blue-600 font-medium">On death anniversary</p>
              </div>
              <div className="border-l-4 border-gray-500 pl-4">
                <h4 className="font-semibold text-gray-900">Pitra Paksha Rituals</h4>
                <p className="text-gray-600">15-day ancestral worship period</p>
                <p className="text-sm text-gray-600 font-medium">September-October</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900">Masa Shraadh</h4>
                <p className="text-gray-600">Monthly offerings to ancestors</p>
                <p className="text-sm text-orange-600 font-medium">Every Amavasya</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">Nagbali Ceremony</h4>
                <p className="text-gray-600">Special ritual for ancestral peace</p>
                <p className="text-sm text-green-600 font-medium">By appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PithruDharpanam;