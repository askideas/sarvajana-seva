import React, { useState } from 'react';
import Logo from '../assets/logo.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    preferredContact: 'email'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    alert(`Thank you ${formData.name}! Your message has been sent. We'll respond within 24 hours.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'general',
      message: '',
      preferredContact: 'email'
    });
  };

  const contactInfo = [
    {
      type: 'Phone',
      value: '+91 98765 43210',
      icon: '📱',
      description: 'Call us for immediate assistance'
    },
    {
      type: 'Email',
      value: 'info@sarvajanaseva.com',
      icon: '📧',
      description: 'Send us your queries anytime'
    },
    {
      type: 'WhatsApp',
      value: '+91 98765 43210',
      icon: '💬',
      description: 'Quick messages and updates'
    },
    {
      type: 'Address',
      value: 'Sacred Temple Complex, Spiritual Lane, Divine City - 123456',
      icon: '📍',
      description: 'Visit our temple premises'
    }
  ];

  const subjects = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'pooja', label: 'Pooja Booking' },
    { value: 'astrology', label: 'Astrology Consultation' },
    { value: 'donation', label: 'Donation Related' },
    { value: 'feedback', label: 'Feedback & Suggestions' },
    { value: 'support', label: 'Technical Support' }
  ];

  const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 5:00 PM' },
    { day: 'Festival Days', time: '6:00 AM - 10:00 PM' }
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
                  e.target.parentElement.innerHTML = '<div class="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center"><span class="text-white font-bold text-3xl">📞</span></div>';
                }}
              />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Us</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              We're here to guide you on your spiritual journey. Reach out to us for 
              pooja bookings, astrological consultations, or any spiritual guidance you need.
            </p>
            <div className="bg-white/70 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg text-orange-800 font-medium mb-2">
                सर्वत्र सुखिनः सन्तु सर्वे सन्तु निरामयाः
              </p>
              <p className="text-sm text-gray-600 italic">
                "May all be happy everywhere, may all be free from illness"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:space-x-16">
            {/* Contact Form */}
            <div className="lg:w-2/3 mb-12 lg:mb-0">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8">
                  <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                  <p className="text-orange-100">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone & Subject Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none"
                      >
                        {subjects.map(subject => (
                          <option key={subject.value} value={subject.value}>
                            {subject.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {['email', 'phone', 'whatsapp'].map(method => (
                        <label key={method} className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={handleInputChange}
                            className="text-orange-500 focus:ring-orange-500"
                          />
                          <span className="ml-2 capitalize">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Please describe your inquiry, preferred dates for services, or any specific questions you have..."
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none resize-vertical"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Send Message 🙏
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="space-y-6">
                {/* Contact Details */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-lg">{info.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{info.type}</h4>
                          <p className="text-gray-600 text-sm break-all">{info.value}</p>
                          <p className="text-gray-500 text-xs mt-1">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{schedule.day}</span>
                        <span className="text-orange-600 font-semibold">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-white rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> Emergency spiritual guidance available 24/7 
                      for urgent matters. Call our helpline for immediate assistance.
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+919876543210"
                      className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
                    >
                      📞 Call Now
                    </a>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-400 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors duration-300"
                    >
                      💬 WhatsApp
                    </a>
                    <a
                      href="mailto:info@sarvajanaseva.com"
                      className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
                    >
                      📧 Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How do I book a pooja?',
                answer: 'You can book a pooja by contacting us via phone, WhatsApp, or this contact form. We\'ll help you choose the right ritual and schedule an auspicious time.'
              },
              {
                question: 'What information is needed for astrology consultation?',
                answer: 'Please provide your exact birth date, time, and place. The more accurate the birth time, the more precise your reading will be.'
              },
              {
                question: 'Are online consultations available?',
                answer: 'Yes! We offer video consultations for astrology readings and spiritual guidance. In-person visits are also welcome at our temple.'
              },
              {
                question: 'How long does it take to get a response?',
                answer: 'We typically respond to all inquiries within 24 hours. For urgent matters, please call our phone number directly.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept cash, bank transfers, UPI payments, and all major credit/debit cards for our services and donations.'
              },
              {
                question: 'Can I visit the temple directly?',
                answer: 'Absolutely! Our temple is open during office hours. For special ceremonies or consultations, we recommend scheduling an appointment first.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our Temple
            </h2>
            <p className="text-lg text-gray-600">
              Experience divine blessings at our sacred temple complex
            </p>
          </div>

          <div className="lg:flex lg:items-center lg:space-x-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Temple Address</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 text-xl mt-1">🏛️</span>
                    <div>
                      <p className="font-semibold text-gray-900">Sarvajana Seva Temple</p>
                      <p className="text-gray-700">Sacred Temple Complex</p>
                      <p className="text-gray-700">Spiritual Lane, Divine City</p>
                      <p className="text-gray-700">PIN: 123456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 text-xl mt-1">🚗</span>
                    <div>
                      <p className="font-semibold text-gray-900">How to Reach</p>
                      <p className="text-gray-700">• 15 minutes from City Center</p>
                      <p className="text-gray-700">• Auto/Taxi easily available</p>
                      <p className="text-gray-700">• Parking facility available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 text-xl mt-1">🕐</span>
                    <div>
                      <p className="font-semibold text-gray-900">Temple Timings</p>
                      <p className="text-gray-700">Morning: 6:00 AM - 12:00 PM</p>
                      <p className="text-gray-700">Evening: 4:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">🗺️</span>
                  </div>
                  <p className="text-gray-600 font-medium">Interactive Map</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Google Maps integration would be embedded here
                    <br />
                    showing the exact location of our temple
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;