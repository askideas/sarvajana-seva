import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Astrology = () => {

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



      {/* Astrology Services Grid */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Astrology Services
            </h2>
            <p className="text-gray-600">
              Comprehensive Vedic astrology consultations for guidance and spiritual insight
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{service.icon}</span>
                      <h3 className="text-xl font-bold leading-tight">{service.title}</h3>
                    </div>
                    <span className="text-2xl font-bold">{service.price}</span>
                  </div>
                  <div className="text-sm text-purple-100">
                    <span>⏰ {service.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* What's Included */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.includes.map((item, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="text-purple-500 mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <Link
                    to="/contact"
                    className="w-full block text-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
                  >
                    Book Consultation ✨
                  </Link>
                </div>
              </div>
            ))}
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