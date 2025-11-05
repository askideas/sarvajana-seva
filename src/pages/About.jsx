import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const About = () => {
  const values = [
    {
      title: 'Dharma',
      description: 'Living in accordance with cosmic law and righteousness',
      icon: '⚖️'
    },
    {
      title: 'Ahimsa',
      description: 'Non-violence in thought, word, and action',
      icon: '🕊️'
    },
    {
      title: 'Seva',
      description: 'Selfless service to humanity and all living beings',
      icon: '🙏'
    },
    {
      title: 'Moksha',
      description: 'Liberation through spiritual realization and devotion',
      icon: '✨'
    }
  ];

  const team = [
    {
      name: 'Pandit Raj Kumar Sharma',
      role: 'Chief Priest & Spiritual Guide',
      experience: '25+ years in Vedic traditions',
      specialization: 'Sanskrit, Pooja Rituals, Spiritual Counseling'
    },
    {
      name: 'Dr. Meera Devi',
      role: 'Astrology Consultant',
      experience: '20+ years in Jyotish Shastra',
      specialization: 'Vedic Astrology, Gemology, Vastu Shastra'
    },
    {
      name: 'Acharya Vikash Pandey',
      role: 'Ritual Specialist',
      experience: '15+ years in Temple Services',
      specialization: 'Havans, Abhishek, Festival Celebrations'
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
                  e.target.parentElement.innerHTML = '<div class="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center"><span class="text-white font-bold text-3xl">🕉️</span></div>';
                }}
              />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Sarvajana Seva</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A sacred mission dedicated to preserving ancient Vedic wisdom while serving 
              humanity through authentic spiritual practices and divine guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:space-x-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Sacred Mission</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Sarvajana Seva was founded with the divine vision of making authentic Hindu 
                  spiritual practices accessible to all sincere seekers, regardless of their 
                  background or location. We believe that the ancient wisdom of our rishis 
                  and the power of devotional service can transform lives and communities.
                </p>
                <p>
                  Our organization is built upon the timeless principle of "Vasudhaiva Kutumbakam" - 
                  the world is one family. Through traditional poojas, spiritual counseling, 
                  astrological guidance, and charitable activities, we strive to create a 
                  harmonious society rooted in dharmic values.
                </p>
                <p>
                  Every ritual we perform, every service we offer, and every donation we facilitate 
                  is done with the intention of spreading divine grace and positive energy 
                  throughout the world. We are not just preserving tradition; we are living it.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-xl border border-orange-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl">🪔</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-700 text-center leading-relaxed mb-6">
                  "To create a world where spiritual wisdom guides daily life, where 
                  compassionate service heals suffering, and where divine consciousness 
                  awakens in every heart."
                </p>
                <div className="text-center">
                  <p className="text-orange-700 font-semibold text-lg">
                    लोकाः समस्ताः सुखिनो भवन्तु
                  </p>
                  <p className="text-sm text-gray-600 italic mt-2">
                    "May all worlds be happy and free"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Rooted in eternal dharmic principles that guide our every action and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              A timeline of devotion, service, and spiritual growth
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/3 mb-8 lg:mb-0">
                <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-orange-800 mb-2">2015</h3>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Foundation</h4>
                  <p className="text-gray-700">
                    Sarvajana Seva was established by a group of dedicated spiritual 
                    practitioners with a vision to serve humanity through authentic 
                    Hindu traditions.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/3 mb-8 lg:mb-0">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-orange-800 mb-2">2018</h3>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Temple Establishment</h4>
                  <p className="text-gray-700">
                    Opened our first temple complex, providing a sacred space for 
                    community worship, festivals, and spiritual education programs.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-br from-red-100 to-orange-100 p-6 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-orange-800 mb-2">2023</h3>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Digital Expansion</h4>
                  <p className="text-gray-700">
                    Launched our digital platform to connect with devotees worldwide 
                    and make our services accessible to the global Hindu community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Spiritual Guides
            </h2>
            <p className="text-lg text-gray-600">
              Experienced practitioners dedicated to preserving and sharing sacred knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100 text-center"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-2xl">🙏</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-3">
                  {member.experience}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Specialization:</strong> {member.specialization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Sacred Community
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Become part of our mission to spread divine consciousness and serve humanity 
            through authentic spiritual practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Connect With Us
            </Link>
            <Link
              to="/donations"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;