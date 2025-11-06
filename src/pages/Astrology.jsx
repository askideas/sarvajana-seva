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
      <section className="bg-gradient-to-br from-orange-100 via-red-50 to-yellow-100 py-20 relative overflow-hidden">
        {/* Animated Rangoli Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 animate-spin" style={{animationDuration: '20s'}}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#f97316" strokeWidth="2"/>
              <circle cx="50" cy="50" r="30" fill="none" stroke="#dc2626" strokeWidth="2"/>
              <circle cx="50" cy="50" r="20" fill="none" stroke="#f59e0b" strokeWidth="2"/>
              <circle cx="50" cy="50" r="10" fill="none" stroke="#ea580c" strokeWidth="2"/>
              {[...Array(8)].map((_, i) => (
                <line key={i} x1="50" y1="10" x2="50" y2="20" stroke="#f97316" strokeWidth="2" transform={`rotate(${i * 45} 50 50)`}/>
              ))}
            </svg>
          </div>
          <div className="absolute bottom-20 right-20 w-24 h-24 animate-pulse">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,10 90,90 10,90" fill="none" stroke="#dc2626" strokeWidth="2"/>
              <polygon points="50,25 75,75 25,75" fill="none" stroke="#f97316" strokeWidth="2"/>
              <circle cx="50" cy="60" r="8" fill="#f59e0b"/>
            </svg>
          </div>
          <div className="absolute top-1/2 right-10 w-20 h-20 animate-bounce" style={{animationDuration: '3s'}}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M50,10 L60,30 L80,30 L65,45 L70,65 L50,55 L30,65 L35,45 L20,30 L40,30 Z" fill="none" stroke="#ea580c" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Decorative Rangoli around logo */}
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-8 animate-spin" style={{animationDuration: '15s'}}>
                <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#f97316" strokeWidth="1"/>
                  {[...Array(12)].map((_, i) => (
                    <circle key={i} cx="100" cy="20" r="3" fill="#dc2626" transform={`rotate(${i * 30} 100 100)`}/>
                  ))}
                  {[...Array(8)].map((_, i) => (
                    <line key={i} x1="100" y1="30" x2="100" y2="40" stroke="#f59e0b" strokeWidth="2" transform={`rotate(${i * 45} 100 100)`}/>
                  ))}
                </svg>
              </div>
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-xl border-3 border-orange-300 relative z-10">
                <img 
                  src={Logo}
                  alt="Sarvajana Seva Om Logo" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center"><span class="text-white font-bold text-3xl">✨</span></div>';
                  }}
                />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Vedic <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Astrology</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover your life's purpose and navigate challenges through ancient Vedic wisdom. 
              Get authentic astrological guidance from experienced Jyotish practitioners.
            </p>
            <div className="bg-white/70 rounded-2xl p-6 max-w-2xl mx-auto border border-orange-200">
              <p className="text-lg text-orange-800 font-medium mb-2">
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
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Floating Rangoli Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-1/4 w-40 h-40 animate-float">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <g className="animate-spin" style={{transformOrigin: '50% 50%', animationDuration: '25s'}}>
                <circle cx="50" cy="50" r="45" fill="none" stroke="#f97316" strokeWidth="1"/>
                <circle cx="50" cy="50" r="35" fill="none" stroke="#dc2626" strokeWidth="1"/>
                <circle cx="50" cy="50" r="25" fill="none" stroke="#f59e0b" strokeWidth="1"/>
                {[...Array(16)].map((_, i) => (
                  <line key={i} x1="50" y1="5" x2="50" y2="15" stroke="#ea580c" strokeWidth="1" transform={`rotate(${i * 22.5} 50 50)`}/>
                ))}
              </g>
            </svg>
          </div>
          <div className="absolute bottom-32 right-1/4 w-32 h-32 animate-float" style={{animationDelay: '2s'}}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <g className="animate-pulse">
                <polygon points="50,10 70,30 90,50 70,70 50,90 30,70 10,50 30,30" fill="none" stroke="#f97316" strokeWidth="1"/>
                <polygon points="50,20 65,35 80,50 65,65 50,80 35,65 20,50 35,35" fill="none" stroke="#dc2626" strokeWidth="1"/>
                <circle cx="50" cy="50" r="10" fill="none" stroke="#f59e0b" strokeWidth="1"/>
              </g>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-100 overflow-hidden group"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 relative overflow-hidden">
                  {/* Small rangoli decoration */}
                  <div className="absolute top-2 right-2 w-8 h-8 opacity-30 group-hover:animate-spin">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#ffffff" strokeWidth="4"/>
                      <circle cx="50" cy="50" r="20" fill="#ffffff"/>
                    </svg>
                  </div>
                  
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{service.icon}</span>
                      <h3 className="text-xl font-bold leading-tight">{service.title}</h3>
                    </div>
                    <span className="text-2xl font-bold">{service.price}</span>
                  </div>
                  <div className="text-sm text-orange-100">
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
                          <span className="text-green-500 mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <Link
                    to="/contact"
                    className="w-full block text-center bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Book Consultation ✨
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(5deg); }
            66% { transform: translateY(-5px) rotate(-5deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Large Rangoli Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-96 h-96 animate-spin" style={{animationDuration: '60s'}}>
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g>
                {/* Outer decorative circle */}
                <circle cx="100" cy="100" r="95" fill="none" stroke="#f97316" strokeWidth="2"/>
                <circle cx="100" cy="100" r="80" fill="none" stroke="#dc2626" strokeWidth="2"/>
                <circle cx="100" cy="100" r="65" fill="none" stroke="#f59e0b" strokeWidth="2"/>
                <circle cx="100" cy="100" r="50" fill="none" stroke="#ea580c" strokeWidth="2"/>
                
                {/* Lotus petals */}
                {[...Array(8)].map((_, i) => (
                  <g key={i} transform={`rotate(${i * 45} 100 100)`}>
                    <path d="M100,20 Q120,40 100,60 Q80,40 100,20" fill="none" stroke="#f97316" strokeWidth="1"/>
                    <path d="M100,30 Q110,40 100,50 Q90,40 100,30" fill="none" stroke="#dc2626" strokeWidth="1"/>
                  </g>
                ))}
                
                {/* Inner star pattern */}
                {[...Array(12)].map((_, i) => (
                  <line key={i} x1="100" y1="50" x2="100" y2="65" stroke="#f59e0b" strokeWidth="2" transform={`rotate(${i * 30} 100 100)`}/>
                ))}
                
                {/* Center Om */}
                <circle cx="100" cy="100" r="15" fill="none" stroke="#ea580c" strokeWidth="2"/>
                <text x="100" y="105" textAnchor="middle" className="text-xs" fill="#ea580c">ॐ</text>
              </g>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
              >
                {/* Small animated rangoli corner */}
                <div className="absolute top-2 right-2 w-6 h-6 opacity-40 group-hover:animate-spin">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f97316" strokeWidth="8"/>
                    <circle cx="50" cy="50" r="20" fill="#dc2626"/>
                  </svg>
                </div>
                
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{specialization.icon}</div>
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
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Animated rangoli elements */}
        <div className="absolute top-10 left-10 w-20 h-20 animate-pulse opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 85,35 85,65 50,95 15,65 15,35" fill="none" stroke="#f97316" strokeWidth="3"/>
            <circle cx="50" cy="50" r="15" fill="#dc2626"/>
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 w-16 h-16 animate-bounce opacity-20" style={{animationDuration: '4s'}}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50,10 L70,40 L100,40 L78,60 L88,90 L50,75 L12,90 L22,60 L0,40 L30,40 Z" fill="none" stroke="#ea580c" strokeWidth="3"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
              >
                {/* Decorative corner element */}
                <div className="absolute -top-2 -right-2 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform rotate-45">
                    <rect x="20" y="20" width="60" height="60" fill="none" stroke="#f97316" strokeWidth="4"/>
                    <circle cx="50" cy="50" r="15" fill="#dc2626"/>
                  </svg>
                </div>

                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed text-center">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-orange-100 pt-4 text-center">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-orange-600">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background rangoli pattern */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-80 h-80">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g className="animate-spin" style={{animationDuration: '40s'}}>
                {/* Mandala-style rangoli */}
                <circle cx="100" cy="100" r="90" fill="none" stroke="#f97316" strokeWidth="1"/>
                <circle cx="100" cy="100" r="70" fill="none" stroke="#dc2626" strokeWidth="1"/>
                <circle cx="100" cy="100" r="50" fill="none" stroke="#f59e0b" strokeWidth="1"/>
                <circle cx="100" cy="100" r="30" fill="none" stroke="#ea580c" strokeWidth="1"/>
                
                {/* Radiating lines */}
                {[...Array(24)].map((_, i) => (
                  <line key={i} x1="100" y1="10" x2="100" y2="30" stroke="#f97316" strokeWidth="1" transform={`rotate(${i * 15} 100 100)`}/>
                ))}
                
                {/* Decorative dots */}
                {[...Array(16)].map((_, i) => (
                  <circle key={i} cx="100" cy="40" r="2" fill="#dc2626" transform={`rotate(${i * 22.5} 100 100)`}/>
                ))}
              </g>
            </svg>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-8 border border-orange-200 relative overflow-hidden">
            {/* Corner rangoli decorations */}
            <div className="absolute top-4 left-4 w-12 h-12 opacity-20 animate-pulse">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#ea580c" strokeWidth="4"/>
                <polygon points="50,20 70,40 50,60 30,40" fill="#f97316"/>
              </svg>
            </div>
            <div className="absolute bottom-4 right-4 w-12 h-12 opacity-20 animate-pulse" style={{animationDelay: '1s'}}>
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon points="50,10 90,90 10,90" fill="none" stroke="#dc2626" strokeWidth="4"/>
                <circle cx="50" cy="65" r="10" fill="#f59e0b"/>
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center relative z-10">
              Important Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
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
            <div className="mt-6 text-center relative z-10">
              <p className="text-sm text-orange-700 font-medium">
                🔮 Remember: Astrology is a guiding tool. Your free will and actions shape your destiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white relative overflow-hidden">
        {/* Animated rangoli background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-32 h-32 animate-spin" style={{animationDuration: '30s'}}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#ffffff" strokeWidth="2"/>
              <circle cx="50" cy="50" r="30" fill="none" stroke="#ffffff" strokeWidth="2"/>
              {[...Array(12)].map((_, i) => (
                <line key={i} x1="50" y1="5" x2="50" y2="20" stroke="#ffffff" strokeWidth="2" transform={`rotate(${i * 30} 50 50)`}/>
              ))}
            </svg>
          </div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 animate-pulse">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="#ffffff" strokeWidth="2"/>
              <circle cx="50" cy="50" r="15" fill="#ffffff"/>
            </svg>
          </div>
          <div className="absolute top-1/2 left-10 w-20 h-20 animate-bounce" style={{animationDuration: '4s'}}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M50,10 L70,30 L90,30 L75,45 L80,65 L60,55 L40,65 L45,45 L30,30 L50,30 Z" fill="none" stroke="#ffffff" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Unlock Your Cosmic Potential
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Get personalized astrological guidance that illuminates your path 
            and empowers you to make informed decisions for a fulfilling life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Your Reading Today
            </Link>
            <Link
              to="/poojas"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
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