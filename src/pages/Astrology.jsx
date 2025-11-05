import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Astrology = () => {
  const [selectedService, setSelectedService] = useState('consultation');

  const services = [
    {
      id: 'consultation',
      title: 'Personal Horoscope Reading',
      duration: '60-90 minutes',
      price: '₹2,100',
      description: 'Comprehensive analysis of your birth chart with guidance for life decisions',
      includes: ['Detailed birth chart analysis', 'Planetary positions & effects', 'Career guidance', 'Relationship compatibility', 'Health insights', 'Remedial suggestions'],
      icon: '🌟'
    },
    {
      id: 'matchmaking',
      title: 'Marriage Compatibility',
      duration: '45-60 minutes',
      price: '₹1,500',
      description: 'Detailed compatibility analysis for prospective couples using traditional methods',
      includes: ['Guna matching (36 points)', 'Mangal dosha analysis', 'Planetary compatibility', 'Auspicious timing', 'Remedial measures', 'Detailed report'],
      icon: '💑'
    },
    {
      id: 'yearly',
      title: 'Annual Predictions',
      duration: '45-60 minutes',
      price: '₹1,800',
      description: 'Comprehensive yearly forecast based on planetary transits and dashas',
      includes: ['Monthly predictions', 'Important dates & events', 'Career opportunities', 'Health warnings', 'Financial outlook', 'Remedial guidance'],
      icon: '📅'
    },
    {
      id: 'career',
      title: 'Career & Business Guidance',
      duration: '45-60 minutes',
      price: '₹1,700',
      description: 'Professional guidance for career choices and business decisions',
      includes: ['Career suitability analysis', 'Business timing', 'Partnership compatibility', 'Investment guidance', 'Job change timing', 'Success strategies'],
      icon: '💼'
    },
    {
      id: 'remedies',
      title: 'Planetary Remedies',
      duration: '30-45 minutes',
      price: '₹1,200',
      description: 'Personalized remedial measures to harmonize planetary influences',
      includes: ['Gemstone recommendations', 'Mantra suggestions', 'Pooja prescriptions', 'Yantra guidance', 'Charity recommendations', 'Lifestyle changes'],
      icon: '💎'
    },
    {
      id: 'muhurat',
      title: 'Auspicious Timing (Muhurat)',
      duration: '30 minutes',
      price: '₹800',
      description: 'Find the most auspicious time for important events and ceremonies',
      includes: ['Wedding ceremonies', 'House warming', 'Business inauguration', 'Travel timing', 'Investment decisions', 'Medical procedures'],
      icon: '⏰'
    }
  ];

  const currentService = services.find(s => s.id === selectedService) || services[0];

  const specializations = [
    {
      title: 'Vedic Astrology',
      description: 'Traditional Indian astrology based on ancient texts and calculation methods',
      icon: '📚'
    },
    {
      title: 'Palmistry (Hasta Rekha)',
      description: 'Hand reading to understand personality traits and life patterns',
      icon: '✋'
    },
    {
      title: 'Numerology',
      description: 'Analysis of numbers and their influence on your life path',
      icon: '🔢'
    },
    {
      title: 'Vastu Shastra',
      description: 'Ancient architectural science for harmonious living spaces',
      icon: '🏠'
    },
    {
      title: 'Gemology',
      description: 'Precious stone recommendations for planetary healing and enhancement',
      icon: '💍'
    },
    {
      title: 'Prashna (Horary)',
      description: 'Immediate answers to specific questions using horary techniques',
      icon: '❓'
    }
  ];

  const testimonials = [
    {
      name: 'Mrs. Sunita Agarwal',
      text: 'The marriage compatibility analysis was incredibly accurate. We followed all the suggested remedies and have a blessed marriage.',
      service: 'Marriage Compatibility',
      rating: 5
    },
    {
      name: 'Mr. Rajesh Kumar',
      text: 'The career guidance helped me make the right business decisions. My company has grown exponentially since following the advice.',
      service: 'Career Guidance',
      rating: 5
    },
    {
      name: 'Dr. Priya Sharma',
      text: 'The annual predictions were spot-on. The remedies suggested really helped during challenging planetary periods.',
      service: 'Annual Predictions',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-xl border-3 border-purple-300 mb-8">
              <img 
                src={Logo}
                alt="Sarvajana Seva Om Logo" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Fallback to Om symbol if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center"><span class="text-white font-bold text-3xl">✨</span></div>';
                }}
              />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Vedic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Astrology</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover your life's purpose and navigate challenges through ancient Vedic wisdom. 
              Get authentic astrological guidance from experienced Jyotish practitioners.
            </p>
            <div className="bg-white/70 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg text-purple-800 font-medium mb-2">
                ज्योतिषं वेदचक्षुस्तु यस्य नास्ति स अन्धकः
              </p>
              <p className="text-sm text-gray-600 italic">
                "Astrology is the eye of the Vedas; one without it is blind"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-12 bg-white sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedService === service.id
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                }`}
              >
                <span className="text-lg">{service.icon}</span>
                <span className="hidden sm:inline">{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Service Detail */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:space-x-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">{currentService.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{currentService.title}</h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span>⏰ {currentService.duration}</span>
                      <span className="text-2xl font-bold text-purple-600">{currentService.price}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {currentService.description}
                </p>

                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">What's Included:</h3>
                  <ul className="space-y-2">
                    {currentService.includes.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-purple-500 mr-3 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="w-full block text-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Book Consultation Now ✨
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Astrology Expert</h3>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">🔮</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dr. Meera Devi</h4>
                      <p className="text-purple-600 text-sm font-medium">Vedic Astrology Consultant</p>
                      <p className="text-gray-600 text-sm">20+ years experience in Jyotish Shastra</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p>• Certified from Bharatiya Vidya Bhavan</p>
                    <p>• Specializes in marriage compatibility & career guidance</p>
                    <p>• Expert in remedial astrology & gemstone therapy</p>
                    <p>• Fluent in Hindi, English, and Sanskrit</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Consultation Process</h3>
                  <div className="space-y-3">
                    {[
                      { step: '1', text: 'Provide birth details (date, time, place)' },
                      { step: '2', text: 'Schedule consultation appointment' },
                      { step: '3', text: 'Detailed chart analysis session' },
                      { step: '4', text: 'Receive written report & remedies' }
                    ].map((item) => (
                      <div key={item.step} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{item.step}</span>
                        </div>
                        <span className="text-gray-700 text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Specializations
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive astrological services rooted in ancient wisdom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((specialization, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl border border-purple-100 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{specialization.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {specialization.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {specialization.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Experiences
            </h2>
            <p className="text-lg text-gray-600">
              See how astrological guidance has transformed lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100"
              >
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed text-center">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-purple-100 pt-4 text-center">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-purple-600">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl p-8 border border-purple-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Important Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">For Accurate Readings:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Exact birth time is crucial (preferably from birth certificate)</li>
                  <li>• Birth place with correct spelling and location</li>
                  <li>• Specific questions or areas of concern</li>
                  <li>• Current challenges you're facing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Consultation Guidelines:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Sessions are conducted via video call or in-person</li>
                  <li>• Recording of session can be provided</li>
                  <li>• Follow-up questions within 7 days included</li>
                  <li>• Written report delivered within 2-3 days</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-purple-700 font-medium">
                🔮 Remember: Astrology is a guiding tool. Your free will and actions shape your destiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Unlock Your Cosmic Potential
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Get personalized astrological guidance that illuminates your path 
            and empowers you to make informed decisions for a fulfilling life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Your Reading Today
            </Link>
            <Link
              to="/poojas"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Remedial Poojas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Astrology;