import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Animated Logo */}
        <div className="mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center animate-pulse">
            <span className="text-3xl text-white font-bold">ॐ</span>
          </div>
        </div>
        
        {/* Loading Spinner */}
        <div className="relative">
          <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            <span className="text-orange-600">Sarvajana</span>{' '}
            <span className="text-red-500">Seva</span>
          </h2>
          <p className="text-gray-600 text-sm">Loading your spiritual journey...</p>
        </div>
        
        {/* Progress Dots */}
        <div className="flex space-x-1 mt-4">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;