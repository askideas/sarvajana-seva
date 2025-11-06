import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from '../assets/logo.png';

const Home = () => {
  const { translate } = useLanguage();
  const services = [
    {
      title: translate('poojas'),
      description: translate('authenticVedicRitualsDesc'),
      icon: '🪔',
      link: '/poojas'
    },
    {
      title: translate('donations'),
      description: translate('donate'),
      icon: '🙏',
      link: '/donations'
    },
    {
      title: translate('astrology'),
      description: translate('divineGuidanceDesc'),
      icon: '✨',
      link: '/astrology'
    },
    {
      title: translate('spiritualConsultations'),
      description: translate('spiritualConsultationsDesc'),
      icon: '🕉️',
      link: '/contact'
    }
  ];

  const testimonials = [
    {
      name: translate('testimonialAuthor1'),
      text: translate('testimonial1'),
      location: translate('testimonialLocation1')
    },
    {
      name: translate('testimonialAuthor2'),
      text: translate('testimonial2'),
      location: translate('testimonialLocation2')
    },
    {
      name: translate('testimonialAuthor3'),
      text: translate('testimonial3'),
      location: translate('testimonialLocation3')
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-red-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            {/* Om Symbol Logo */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-orange-200 hover:border-orange-400 transition-all duration-300 float-animation">
                <img 
                  src={Logo}
                  alt="Sarvajana Seva Om Logo" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to Om symbol if image fails to load
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl"><span class="text-white font-bold text-4xl om-glow">ॐ</span></div>';
                  }}
                />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Sarvajana Seva
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
              {translate('universalService')}
            </p>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {translate('embracePath')} {translate('joinCommunity')}
            </p>

            {/* Sanskrit Sloka */}
            <div className="mb-12 p-6 bg-white/70 rounded-2xl shadow-lg max-w-xl mx-auto">
              <p className="text-lg text-orange-800 font-medium mb-2">
                {translate('sarvesukhino')}
              </p>
              <p className="text-sm text-gray-600 italic">
                "{translate('sarvesukinoTranslation')}"
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/poojas"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {translate('explorePoojas')} 🪔
              </Link>
              <Link
                to="/donations"
                className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full border-2 border-orange-500 hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {translate('makeDonation')} 🙏
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20 text-orange-400">🪔</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20 text-red-400">🕉️</div>
        <div className="absolute top-1/2 left-5 text-4xl opacity-15 text-yellow-500">✨</div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {translate('featuredServices')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {translate('experienceTheDivine')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-100"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:space-x-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {translate('ourMission')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {translate('missionDesc')}
              </p>
              <p className="text-gray-600 mb-8">
                {translate('experienceTheDivine')}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                {translate('learnMore')}
                <span className="ml-2">→</span>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-3xl">🪔</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {translate('sacredTradition')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    "{translate('sacredTraditionDesc')}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {translate('testimonials')}
            </h2>
            <p className="text-lg text-gray-600">
              {translate('connectWithDivine')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl shadow-lg border border-orange-100"
              >
                <div className="text-center">
                  <div className="text-2xl mb-4">🙏</div>
                  <p className="text-gray-700 italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-orange-200 pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            {translate('beginYourJourney')}
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            {translate('connectWithDivine')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {translate('getInTouch')}
            </Link>
            <Link
              to="/poojas"
              className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-orange-100 transition-all duration-300 transform hover:scale-105"
            >
              {translate('poojaBooking')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;