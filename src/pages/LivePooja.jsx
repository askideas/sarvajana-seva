import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const LivePooja = () => {
  const { user } = useAuth();
  const [isLive, setIsLive] = useState(true);
  const [viewers, setViewers] = useState(247);
  const [prayerRequest, setPrayerRequest] = useState('');
  const [donation, setDonation] = useState('');
  const [showPrayerModal, setShowPrayerModal] = useState(false);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [liveComments, setLiveComments] = useState([
    { id: 1, user: 'Devotee1', message: 'Om Namah Shivaya 🙏', time: '2 min ago' },
    { id: 2, user: 'Priya', message: 'Beautiful darshan, feeling blessed', time: '1 min ago' },
    { id: 3, user: 'Rajesh', message: 'Har Har Mahadev! 🕉️', time: 'Just now' }
  ]);
  
  // YouTube Live Stream ID (replace with your actual live stream ID)
  const youtubeStreamId = 'jfKfPfyJRdk'; // Example stream ID

  // Simulate live viewer count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Live Status Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-gray-400'}`}></div>
                <span className="font-semibold text-gray-900">
                  {isLive ? 'LIVE NOW' : 'OFFLINE'}
                </span>
              </div>
              <div className="text-gray-600">
                👁️ {viewers.toLocaleString()} viewers
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Morning Aarti • Temple Live Stream
            </div>
          </div>
        </div>

        {/* Main Live Stream Section */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mb-12">
          {/* Live Video Player */}
          <div className="xl:col-span-3">
            <div className="bg-black rounded-lg overflow-hidden shadow-xl">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeStreamId}?autoplay=1&mute=0&controls=0&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3`}
                  title="Live Pooja Stream"
                  className="w-full h-full pointer-events-none"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                {!isLive && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">🕉️</div>
                      <h3 className="text-xl font-semibold mb-2">Stream Offline</h3>
                      <p>Next live session starts at 6:00 AM IST</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Video Controls & Actions */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button
                  onClick={() => setShowPrayerModal(true)}
                  className="flex flex-col items-center p-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-2xl mb-2">🙏</span>
                  <span className="text-sm font-medium">Prayer Request</span>
                </button>
                
                <button
                  onClick={() => setShowDonationModal(true)}
                  className="flex flex-col items-center p-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-2xl mb-2">💰</span>
                  <span className="text-sm font-medium">Donate</span>
                </button>
                
                <button className="flex flex-col items-center p-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 cursor-pointer">
                  <span className="text-2xl mb-2">📤</span>
                  <span className="text-sm font-medium">Share</span>
                </button>
                
                <button className="flex flex-col items-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer">
                  <span className="text-2xl mb-2">🔔</span>
                  <span className="text-sm font-medium">Notify Me</span>
                </button>
              </div>
            </div>
          </div>

          {/* Live Chat & Sidebar */}
          <div className="xl:col-span-1">
            <div className="bg-white rounded-lg shadow-xl p-6 h-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Comments</h3>
              
              {/* Comments Feed */}
              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {liveComments.map((comment) => (
                  <div key={comment.id} className="border-b border-gray-100 pb-2">
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-sm text-gray-900">{comment.user}</span>
                      <span className="text-xs text-gray-500">{comment.time}</span>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">{comment.message}</p>
                  </div>
                ))}
              </div>

              {/* Comment Input */}
              {user ? (
                <div className="border-t pt-4">
                  <textarea
                    placeholder="Share your devotional thoughts..."
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    rows="2"
                  ></textarea>
                  <button className="w-full mt-2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 cursor-pointer">
                    Send Comment
                  </button>
                </div>
              ) : (
                <div className="border-t pt-4 text-center">
                  <p className="text-gray-600 text-sm mb-2">Login to join the conversation</p>
                  <button className="text-orange-600 hover:text-orange-700 font-medium cursor-pointer">
                    Sign In
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Schedule & Information Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Live Schedule</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-3 rounded-r-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">Morning Aarti</h4>
                    <p className="text-gray-600">Daily at 6:00 AM IST</p>
                  </div>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Live Now</span>
                </div>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900">Evening Aarti</h4>
                <p className="text-gray-600">Daily at 7:00 PM IST</p>
                <p className="text-sm text-gray-500">Starts in 8 hours</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-gray-900">Special Pooja</h4>
                <p className="text-gray-600">Saturdays at 10:00 AM IST</p>
                <p className="text-sm text-gray-500">Next: Tomorrow</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">Festival Celebration</h4>
                <p className="text-gray-600">Special occasions</p>
                <p className="text-sm text-gray-500">Check calendar</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Live Features</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📹</span>
                <div>
                  <h4 className="font-semibold text-gray-900">HD Live Streaming</h4>
                  <p className="text-gray-600 text-sm">Crystal clear video quality with multiple camera angles</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🎵</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Sacred Audio</h4>
                  <p className="text-gray-600 text-sm">High-quality audio with clear mantras and chants</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">�</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Live Chat</h4>
                  <p className="text-gray-600 text-sm">Connect with fellow devotees during the stream</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">�</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Prayer Requests</h4>
                  <p className="text-gray-600 text-sm">Submit your prayers to be included in the pooja</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prayer Request Modal */}
        {showPrayerModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Submit Prayer Request</h3>
              <textarea
                value={prayerRequest}
                onChange={(e) => setPrayerRequest(e.target.value)}
                placeholder="Share your prayer request with our priests..."
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                rows="4"
              ></textarea>
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={() => {
                    setPrayerRequest('');
                    setShowPrayerModal(false);
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Handle prayer submission
                    alert('Prayer request submitted successfully!');
                    setPrayerRequest('');
                    setShowPrayerModal(false);
                  }}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Donation Modal */}
        {showDonationModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Make a Donation</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <button onClick={() => setDonation('101')} className="p-3 border border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors cursor-pointer">
                    ₹101
                  </button>
                  <button onClick={() => setDonation('501')} className="p-3 border border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors cursor-pointer">
                    ₹501
                  </button>
                  <button onClick={() => setDonation('1001')} className="p-3 border border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors cursor-pointer">
                    ₹1001
                  </button>
                </div>
                <input
                  type="number"
                  value={donation}
                  onChange={(e) => setDonation(e.target.value)}
                  placeholder="Enter custom amount"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => {
                    setDonation('');
                    setShowDonationModal(false);
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Handle donation
                    alert(`Donation of ₹${donation} submitted successfully!`);
                    setDonation('');
                    setShowDonationModal(false);
                  }}
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-4 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all cursor-pointer"
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LivePooja;