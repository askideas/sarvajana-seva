import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const MobileNumberModal = () => {
  const { showMobileModal, setShowMobileModal, saveNewUserData } = useAuth();
  const [mobileNumber, setMobileNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validate mobile number
    if (!mobileNumber.trim()) {
      setError('Please enter your mobile number');
      return;
    }
    
    if (mobileNumber.length < 10) {
      setError('Please enter a valid mobile number');
      return;
    }
    
    setLoading(true);
    
    try {
      const result = await saveNewUserData(mobileNumber);
      if (!result.success) {
        setError(result.error || 'Failed to save user data');
      }
    } catch (error) {
      setError('Failed to save user data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setShowMobileModal(false);
      setMobileNumber('');
      setError('');
    }
  };

  if (!showMobileModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">
              Complete Your Profile
            </h3>
            <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              <span className="text-white text-sm">📱</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🙏</span>
            </div>
            <p className="text-gray-600">
              Welcome to Sarvajana Seva! To complete your registration, please provide your mobile number.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                  +91
                </span>
                <input
                  type="tel"
                  id="mobile"
                  value={mobileNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, ''); // Only numbers
                    if (value.length <= 10) {
                      setMobileNumber(value);
                      setError('');
                    }
                  }}
                  placeholder="Enter your 10-digit mobile number"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
                  disabled={loading}
                  maxLength={10}
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {error}
                </p>
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                disabled={loading}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading || !mobileNumber.trim() || mobileNumber.length < 10}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Saving...
                  </>
                ) : (
                  'Continue'
                )}
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Your mobile number will be used for service notifications and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNumberModal;