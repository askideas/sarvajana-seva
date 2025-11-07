import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../assets/logo.png';

const Healing = () => {
  const { user } = useAuth();
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewers, setViewers] = useState(156);
  const audioRef = useRef(null);
  const [audioError, setAudioError] = useState(false);
  const [liveComments, setLiveComments] = useState([
    { id: 1, user: 'Seeker1', message: 'Feeling the healing energy 🌿', time: '3 min ago' },
    { id: 2, user: 'Meditation_Soul', message: 'Beautiful vibrations for healing', time: '2 min ago' },
    { id: 3, user: 'Wellness_Path', message: 'Om Namah Shivaya 🕉️', time: '1 min ago' },
    { id: 4, user: 'Healing_Heart', message: 'Thank you for this sacred space', time: 'Just now' }
  ]);

  // Audio URL
  const audioUrl = "https://ik.imagekit.io/w2zypckrv/Heiling/heiling-audio-trim.wav?updatedAt=1762521492992";

  // Simulate live viewer count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handlePlay = () => {
        setIsPlaying(true);
      };

      const handlePause = () => {
        setIsPlaying(false);
      };

      const handleError = () => {
        setAudioError(true);
        console.error('Audio failed to load');
      };

      const handleCanPlay = () => {
        setAudioError(false);
        // Auto-play when ready
        audio.play().catch(e => {
          console.log('Auto-play prevented by browser:', e);
        });
      };

      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('error', handleError);
      audio.addEventListener('canplay', handleCanPlay);

      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      {/* Background Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
      >
        <source src={audioUrl} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Healing Status Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                <span className="font-semibold text-gray-900">
                  {isPlaying ? 'HEALING LIVE' : 'HEALING READY'}
                </span>
              </div>
              <div className="text-gray-600">
                👁️ {viewers.toLocaleString()} listeners
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Spiritual Healing • Sacred Sounds Live
            </div>
          </div>
        </div>

        {/* Main Healing Section */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mb-12">
          {/* Healing Audio Visualization Area */}
          <div className="xl:col-span-3">
            <div className="bg-black rounded-lg overflow-hidden shadow-xl">
              <div className="relative aspect-video flex items-center justify-center">
                {/* Logo - Static */}
                <div className="relative">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-orange-400 shadow-2xl">
                    <img 
                      src={Logo}
                      alt="Sarvajana Seva Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Audio Wave Visualization Background */}
                {isPlaying && (
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Floating Particles */}
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full opacity-30"
                        style={{
                          width: `${3 + Math.random() * 6}px`,
                          height: `${3 + Math.random() * 6}px`,
                          background: `linear-gradient(45deg, ${['#f97316', '#ef4444', '#f59e0b', '#fb923c'][Math.floor(Math.random() * 4)]}, transparent)`,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      ></div>
                    ))}
                    
                    {/* Center Glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                        className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full pulse-glow opacity-60"
                      ></div>
                    </div>
                    
                    {/* Radial Energy Waves */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full border-2"
                          style={{
                            width: `${80 + i * 40}px`,
                            height: `${80 + i * 40}px`,
                            borderColor: i % 2 === 0 
                              ? 'rgba(249, 115, 22, 0.6)' 
                              : 'rgba(239, 68, 68, 0.6)',
                            animation: `enhancedPing ${3 + i * 0.3}s ease-out infinite`,
                            animationDelay: `${i * 0.3}s`
                          }}
                        ></div>
                      ))}
                      
                      {/* Outer waves with different timing */}
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={`outer-${i}`}
                          className="absolute rounded-full border"
                          style={{
                            width: `${280 + i * 60}px`,
                            height: `${280 + i * 60}px`,
                            borderColor: 'rgba(251, 146, 60, 0.4)',
                            borderWidth: '2px',
                            animation: `enhancedPing ${4.5 + i * 0.5}s ease-out infinite`,
                            animationDelay: `${1 + i * 0.6}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}

                {!isPlaying && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">🕉️</div>
                      <h3 className="text-xl font-semibold mb-2">Healing Ready</h3>
                      <p>Sacred healing sounds will begin automatically</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Audio Controls & Actions */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button
                  onClick={() => {
                    const audio = audioRef.current;
                    if (audio) {
                      if (isPlaying) {
                        audio.pause();
                      } else {
                        audio.play().catch(e => console.error('Play failed:', e));
                      }
                    }
                  }}
                  className={`flex flex-col items-center p-4 text-white rounded-lg transition-all duration-300 cursor-pointer ${
                    isPlaying 
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600' 
                      : 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <svg className="w-6 h-6 mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 4a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1zM13 4a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">Pause Healing</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6 mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">Start Healing</span>
                    </>
                  )}
                </button>
                
                <button className="flex flex-col items-center p-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 cursor-pointer">
                  <span className="text-2xl mb-2">🧘‍♀️</span>
                  <span className="text-sm font-medium">Meditation</span>
                </button>
                
                <button className="flex flex-col items-center p-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 cursor-pointer">
                  <span className="text-2xl mb-2">📤</span>
                  <span className="text-sm font-medium">Share</span>
                </button>
                
                <button className="flex flex-col items-center p-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 cursor-pointer">
                  <span className="text-2xl mb-2">🔔</span>
                  <span className="text-sm font-medium">Notify Me</span>
                </button>
              </div>
            </div>
          </div>

          {/* Live Chat & Comments Sidebar */}
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
                    placeholder="Share your healing experience..."
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    rows="2"
                  ></textarea>
                  <button className="w-full mt-2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 cursor-pointer">
                    Send Comment
                  </button>
                </div>
              ) : (
                <div className="border-t pt-4 text-center">
                  <p className="text-gray-600 text-sm mb-2">Login to share your healing journey</p>
                  <button className="text-orange-600 hover:text-orange-700 font-medium cursor-pointer">
                    Sign In
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healing;