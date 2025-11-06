import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from '../assets/logo.png';

const Poojas = () => {
  const { translate } = useLanguage();

  const poojas = [
    {
      id: 1,
      name: 'Ganesh Chaturthi Pooja',
      category: 'festivals',
      duration: '2-3 hours',
      participants: '1-50',
      price: '₹2,100',
      description: 'Complete Ganesh Chaturthi celebration with traditional rituals, mantras, and prasadam.',
      benefits: ['Removes obstacles', 'New beginnings', 'Success in endeavors'],
      includes: ['Ganapati idol setup', 'Modak prasadam', 'Aarti materials', 'Sacred decorations']
    },
    {
      id: 2,
      name: 'Lakshmi Pooja',
      category: 'prosperity',
      duration: '1.5-2 hours',
      participants: '1-25',
      price: '₹1,500',
      description: 'Invoke blessings of Goddess Lakshmi for prosperity, wealth, and abundance.',
      benefits: ['Financial prosperity', 'Business success', 'Material abundance'],
      includes: ['Silver coins', 'Lotus flowers', 'Gold items', 'Sacred yantra']
    },
    {
      id: 3,
      name: 'Rudrabhishek',
      category: 'personal',
      duration: '1-1.5 hours',
      participants: '1-15',
      price: '₹1,100',
      description: 'Sacred abhishek of Lord Shiva with milk, honey, and holy water.',
      benefits: ['Inner peace', 'Spiritual growth', 'Karma cleansing'],
      includes: ['Shiva linga', 'Abhishek materials', 'Bilva leaves', 'Sacred ash']
    },
    {
      id: 4,
      name: 'Navagraha Pooja',
      category: 'personal',
      duration: '2-2.5 hours',
      participants: '1-20',
      price: '₹2,500',
      description: 'Pacify planetary influences and harmonize cosmic energies.',
      benefits: ['Planetary harmony', 'Reduced obstacles', 'Positive energy'],
      includes: ['Nine gemstones', 'Colored flowers', 'Specific mantras', 'Yantra energization']
    },
    {
      id: 5,
      name: 'Saraswati Pooja',
      category: 'festivals',
      duration: '1.5-2 hours',
      participants: '1-30',
      price: '₹1,300',
      description: 'Worship Goddess Saraswati for knowledge, wisdom, and artistic abilities.',
      benefits: ['Enhanced learning', 'Creative inspiration', 'Academic success'],
      includes: ['Books blessing', 'White flowers', 'Musical instruments', 'Learning materials']
    },
    {
      id: 6,
      name: 'Mahamrityunjaya Jaap',
      category: 'health',
      duration: '2-3 hours',
      participants: '1-10',
      price: '₹3,100',
      description: 'Powerful healing mantra recitation for health and longevity.',
      benefits: ['Health improvement', 'Disease healing', 'Longevity'],
      includes: ['108 recitations', 'Healing herbs', 'Medicinal oils', 'Health yantra']
    },
    {
      id: 7,
      name: 'Durga Pooja',
      category: 'festivals',
      duration: '3-4 hours',
      participants: '1-75',
      price: '₹3,500',
      description: 'Grand celebration honoring Divine Mother with elaborate rituals.',
      benefits: ['Divine protection', 'Inner strength', 'Victory over challenges'],
      includes: ['Durga kalash', 'Red flowers', 'Weapons worship', 'Kumkum tilak']
    },
    {
      id: 8,
      name: 'Vishnu Sahasranama Parayana',
      category: 'personal',
      duration: '1.5-2 hours',
      participants: '1-25',
      price: '₹1,800',
      description: 'Chanting of 1000 names of Lord Vishnu for spiritual elevation.',
      benefits: ['Spiritual merit', 'Mental peace', 'Divine grace'],
      includes: ['Sacred book', 'Tulsi garland', 'Conch shell', 'Vishnu idol']
    }
  ];



  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-100 via-red-50 to-yellow-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-xl border-3 border-orange-300 mb-8">
              <img 
                src={Logo}
                alt="Sarvajana Seva Om Logo" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Fallback to Om symbol if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center"><span class="text-white font-bold text-3xl">🪔</span></div>';
                }}
              />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {translate('sacredRituals')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">{translate('poojas')}</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Experience the divine through authentic Vedic rituals performed by experienced priests
              with traditional procedures and sacred materials.
            </p>
            <div className="bg-white/70 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg text-orange-800 font-medium mb-2">
                यज्ञो दानं तपश्चैव पावनानि मनीषिणाम्
              </p>
              <p className="text-sm text-gray-600 italic">
                "Sacrifice, charity and austerity are the purifiers of the wise"
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Poojas Grid */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {translate('poojaServices')}
            </h2>
            <p className="text-gray-600">
              Each pooja is performed with complete devotion and authentic Vedic procedures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poojas.map((pooja) => (
              <div
                key={pooja.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-100 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold leading-tight">{pooja.name}</h3>
                    <span className="text-2xl font-bold">{pooja.price}</span>
                  </div>
                  <div className="flex justify-between text-sm text-orange-100">
                    <span>⏰ {pooja.duration}</span>
                    <span>👥 {pooja.participants}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {pooja.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Spiritual Benefits:</h4>
                    <ul className="space-y-1">
                      {pooja.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="text-orange-500 mr-2">✨</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Includes */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {pooja.includes.map((item, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Link
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                    >
                      Book Now
                    </Link>
                    <button className="px-4 py-3 border-2 border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors duration-300">
                      ℹ️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Pooja Services
            </h2>
            <p className="text-lg text-gray-600">
              Authentic rituals performed with complete devotion and traditional procedures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentic Procedures</h3>
              <p className="text-gray-600 leading-relaxed">
                All rituals follow traditional Vedic procedures passed down through generations 
                of learned priests and spiritual masters.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Experienced Priests</h3>
              <p className="text-gray-600 leading-relaxed">
                Our certified priests have decades of experience in performing sacred rituals 
                with proper pronunciation and devotional spirit.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sacred Materials</h3>
              <p className="text-gray-600 leading-relaxed">
                We use only pure, consecrated materials including organic flowers, 
                ghee, sacred waters, and authentic yantras for maximum spiritual benefit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to Book a Pooja
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to arrange your sacred ritual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Pooja',
                description: 'Select the ritual that resonates with your spiritual needs'
              },
              {
                step: '2', 
                title: 'Contact Us',
                description: 'Reach out via phone, email, or our contact form'
              },
              {
                step: '3',
                title: 'Schedule & Prepare',
                description: 'We\'ll help you choose an auspicious time and prepare materials'
              },
              {
                step: '4',
                title: 'Sacred Ceremony',
                description: 'Experience the divine through our authentic ritual service'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Your Pooja Today
              <span className="ml-2">🪔</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Poojas;