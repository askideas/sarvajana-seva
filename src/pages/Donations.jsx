import React, { useState } from 'react';
import Logo from '../assets/logo.png';

const Donations = () => {
  
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCause, setSelectedCause] = useState('general');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');

  const predefinedAmounts = ['₹501', '₹1,001', '₹2,100', '₹5,100', '₹11,000', '₹21,000'];

  const donationCauses = [
    {
      id: 'general',
      title: 'General Seva Fund',
      description: 'Support our daily temple operations, priest welfare, and community services',
      icon: '🙏',
      urgency: 'ongoing'
    },
    {
      id: 'temple',
      title: 'Temple Maintenance',
      description: 'Help maintain and beautify our sacred temple premises for future generations',
      icon: '🏛️',
      urgency: 'high'
    },
    {
      id: 'festivals',
      title: 'Festival Celebrations',
      description: 'Sponsor grand festival celebrations that bring joy to the entire community',
      icon: '🎊',
      urgency: 'seasonal'
    },
    {
      id: 'education',
      title: 'Vedic Education',
      description: 'Support Sanskrit learning, spiritual education, and cultural preservation programs',
      icon: '📚',
      urgency: 'ongoing'
    },
    {
      id: 'food',
      title: 'Annadanam (Free Meals)',
      description: 'Provide nutritious prasadam meals to devotees and those in need',
      icon: '🍽️',
      urgency: 'daily'
    },
    {
      id: 'charity',
      title: 'Charitable Services',
      description: 'Support healthcare, elder care, and assistance for underprivileged families',
      icon: '❤️',
      urgency: 'critical'
    }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount('');
  };

  const handleDonate = () => {
    const amount = selectedAmount || `₹${customAmount}`;
    if (!amount || amount === '₹') {
      alert('Please select or enter a donation amount');
      return;
    }
    if (!donorName || !donorEmail) {
      alert('Please fill in your contact details');
      return;
    }
    alert(`Thank you ${donorName}! Your donation of ${amount} for ${donationCauses.find(c => c.id === selectedCause)?.title} is being processed.`);
  };

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
                  e.target.parentElement.innerHTML = '<div class="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center"><span class="text-white font-bold text-3xl">🙏</span></div>';
                }}
              />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Sacred <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Donations</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Your generous contribution helps us continue our sacred mission of serving 
              humanity and preserving ancient spiritual traditions.
            </p>
            <div className="bg-white/70 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg text-orange-800 font-medium mb-2">
                दानं परमं तप: | दानं परमं सत्यम्
              </p>
              <p className="text-sm text-gray-600 italic">
                "Charity is the highest austerity. Charity is the highest truth."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Causes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Seva
            </h2>
            <p className="text-lg text-gray-600">
              Select a cause that resonates with your heart and supports our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {donationCauses.map((cause) => (
              <div
                key={cause.id}
                onClick={() => setSelectedCause(cause.id)}
                className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                  selectedCause === cause.id
                    ? 'border-orange-500 bg-orange-50 shadow-lg'
                    : 'border-gray-200 hover:border-orange-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{cause.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {cause.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {cause.description}
                  </p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    cause.urgency === 'critical' ? 'bg-red-100 text-red-800' :
                    cause.urgency === 'high' ? 'bg-orange-100 text-orange-800' :
                    cause.urgency === 'seasonal' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {cause.urgency === 'critical' ? 'Urgent Need' :
                     cause.urgency === 'high' ? 'High Priority' :
                     cause.urgency === 'seasonal' ? 'Seasonal' :
                     cause.urgency === 'daily' ? 'Daily Need' : 'Ongoing'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8">
              <h2 className="text-3xl font-bold mb-4">Make Your Donation</h2>
              <p className="text-orange-100">
                Your contribution for: <strong>
                  {donationCauses.find(c => c.id === selectedCause)?.title}
                </strong>
              </p>
            </div>

            <div className="p-8 space-y-8">
              {/* Amount Selection */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Donation Amount</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-4 rounded-xl border-2 font-semibold transition-all duration-300 ${
                        selectedAmount === amount
                          ? 'border-orange-500 bg-orange-50 text-orange-700'
                          : 'border-gray-200 hover:border-orange-300 text-gray-700'
                      }`}
                    >
                      {amount}
                    </button>
                  ))}
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-700 font-medium">Custom Amount:</span>
                  <div className="flex items-center">
                    <span className="text-2xl text-gray-600 mr-2">₹</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="Enter amount"
                      className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none text-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Donor Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits of Your Donation</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="text-orange-500 mr-3">✨</span>
                    Earn spiritual merit and divine blessings
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-orange-500 mr-3">📜</span>
                    Receive donation certificate for tax benefits
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-orange-500 mr-3">🪔</span>
                    Special prayers conducted in your name
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-orange-500 mr-3">📧</span>
                    Regular updates on how your contribution helps
                  </li>
                </ul>
              </div>

              {/* Donate Button */}
              <div className="text-center">
                <button
                  onClick={handleDonate}
                  className="px-12 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Donate {selectedAmount || (customAmount ? `₹${customAmount}` : '')} 🙏
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  Your transaction is secure and encrypted. You will receive a confirmation email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Impact in Action
            </h2>
            <p className="text-lg text-gray-600">
              See how your generous donations transform lives and strengthen our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-2xl">5000+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Meals Served</h3>
              <p className="text-gray-600 leading-relaxed">
                Through our Annadanam program, we've provided over 5,000 nutritious 
                meals to devotees and those in need this year.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-2xl">200+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Students Educated</h3>
              <p className="text-gray-600 leading-relaxed">
                Our Vedic education program has reached over 200 students, 
                preserving Sanskrit knowledge and spiritual wisdom.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-2xl">50+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Festivals Celebrated</h3>
              <p className="text-gray-600 leading-relaxed">
                With your support, we've organized over 50 beautiful festival 
                celebrations bringing joy to thousands of devotees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Every Contribution Creates Sacred Impact
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join our community of generous souls who are helping preserve ancient 
            wisdom and serve humanity with devotion and compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Donating Today
            </button>
            <a
              href="mailto:donations@sarvajanaseva.com"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Have Questions?
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donations;