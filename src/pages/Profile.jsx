import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, ShoppingBag, Calendar, Edit3, Phone, Mail, MapPin, CheckCircle, Settings, Bell, CreditCard, HelpCircle, LogOut } from 'lucide-react';

const Profile = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <User className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Please Login</h2>
          <p className="text-gray-600">You need to be logged in to view your profile.</p>
        </div>
      </div>
    );
  }

  const menuItems = [
    { id: 'profile', name: 'My Profile', icon: User, description: 'Personal information and settings' },
    { id: 'orders', name: 'Order History', icon: ShoppingBag, description: 'View and track your orders' },
    { id: 'bookings', name: 'Pooja Bookings', icon: Calendar, description: 'Manage your pooja bookings' },
    { id: 'settings', name: 'Account Settings', icon: Settings, description: 'Privacy and account preferences' },
    { id: 'notifications', name: 'Notifications', icon: Bell, description: 'Notification preferences' },
    { id: 'payment', name: 'Payment Methods', icon: CreditCard, description: 'Manage payment methods' },
    { id: 'help', name: 'Help & Support', icon: HelpCircle, description: 'Get help and support' },
  ];

  const renderProfileSection = () => (
    <div className="space-y-6">
      {/* Profile Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Bookings</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <CreditCard className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Spent</p>
              <p className="text-2xl font-bold text-gray-900">₹8,250</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Information */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
          <button className="flex items-center text-orange-600 hover:text-orange-700">
            <Edit3 className="h-4 w-4 mr-1" />
            Edit
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-gray-900">{user.email}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-500">Mobile Number</p>
                <p className="text-gray-900">{user.mobileNumber || 'Not provided'}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-500">Address</p>
                <p className="text-gray-900">Not provided</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-500">Member Since</p>
                <p className="text-gray-900">
                  {user.metadata?.creationTime ? 
                    new Date(user.metadata.creationTime).toLocaleDateString() : 
                    'Recently joined'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
        <div className="space-y-3">
          <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Update Profile Information</span>
              <Edit3 className="h-4 w-4 text-gray-400" />
            </div>
          </button>
          <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Notification Preferences</span>
              <Edit3 className="h-4 w-4 text-gray-400" />
            </div>
          </button>
          <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Privacy Settings</span>
              <Edit3 className="h-4 w-4 text-gray-400" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderOrdersSection = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Order History</h2>
        
        {/* Sample Orders */}
        <div className="space-y-4">
          {[
            {
              id: '#ORD001',
              date: '2024-11-05',
              items: ['Rudraksha Mala', 'Tulsi Beads'],
              status: 'Delivered',
              amount: '₹1,250',
              statusColor: 'green'
            },
            {
              id: '#ORD002', 
              date: '2024-11-01',
              items: ['Sacred Thread', 'Camphor'],
              status: 'In Transit',
              amount: '₹450',
              statusColor: 'blue'
            },
            {
              id: '#ORD003',
              date: '2024-10-28',
              items: ['Incense Sticks', 'Dhoop'],
              status: 'Processing',
              amount: '₹320',
              statusColor: 'yellow'
            }
          ].map((order) => (
            <div key={order.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{order.id}</h3>
                  <p className="text-sm text-gray-500">{new Date(order.date).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{order.amount}</p>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    order.statusColor === 'green' ? 'bg-green-100 text-green-800' :
                    order.statusColor === 'blue' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Items:</p>
                <p className="text-gray-900">{order.items.join(', ')}</p>
              </div>
              <div className="mt-4 flex space-x-3">
                <button className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                  View Details
                </button>
                <button className="text-sm text-gray-600 hover:text-gray-700 font-medium">
                  Track Order
                </button>
                {order.status === 'Delivered' && (
                  <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                    Reorder
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if no orders */}
        {false && (
          <div className="text-center py-12">
            <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
            <p className="text-gray-600">Start shopping to see your orders here.</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderBookingsSection = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Pooja Bookings</h2>
        
        {/* Sample Bookings */}
        <div className="space-y-4">
          {[
            {
              id: '#BOOK001',
              pooja: 'Ganesh Pooja',
              date: '2024-11-15',
              time: '10:00 AM',
              priest: 'Pandit Rajesh Sharma',
              status: 'Confirmed',
              amount: '₹2,500',
              statusColor: 'green'
            },
            {
              id: '#BOOK002',
              pooja: 'Satyanarayana Vratam',
              date: '2024-11-20',
              time: '6:00 PM',
              priest: 'Pandit Suresh Kumar',
              status: 'Pending',
              amount: '₹1,800',
              statusColor: 'yellow'
            }
          ].map((booking) => (
            <div key={booking.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{booking.pooja}</h3>
                  <p className="text-sm text-gray-500">{booking.id}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{booking.amount}</p>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    booking.statusColor === 'green' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Date & Time</p>
                  <p className="font-medium text-gray-900">
                    {new Date(booking.date).toLocaleDateString()} at {booking.time}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Priest</p>
                  <p className="font-medium text-gray-900">{booking.priest}</p>
                </div>
              </div>
              
              <div className="mt-4 flex space-x-3">
                <button className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                  View Details
                </button>
                <button className="text-sm text-gray-600 hover:text-gray-700 font-medium">
                  Reschedule
                </button>
                {booking.status === 'Pending' && (
                  <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if no bookings */}
        {false && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings yet</h3>
            <p className="text-gray-600">Book a pooja to see your bookings here.</p>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="p-4 border border-orange-200 rounded-xl hover:bg-orange-50 transition-colors text-left">
            <Calendar className="h-8 w-8 text-orange-600 mb-2" />
            <h4 className="font-medium text-gray-900">Book New Pooja</h4>
            <p className="text-sm text-gray-600">Schedule a new pooja ceremony</p>
          </button>
          <button className="p-4 border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors text-left">
            <Phone className="h-8 w-8 text-blue-600 mb-2" />
            <h4 className="font-medium text-gray-900">Contact Support</h4>
            <p className="text-sm text-gray-600">Get help with your bookings</p>
          </button>
        </div>
      </div>
    </div>
  );

  const renderSettingsSection = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">Email Notifications</h3>
              <p className="text-sm text-gray-600">Receive email updates about your orders</p>
            </div>
            <input type="checkbox" className="w-4 h-4 text-orange-600" defaultChecked />
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">SMS Notifications</h3>
              <p className="text-sm text-gray-600">Get SMS alerts for important updates</p>
            </div>
            <input type="checkbox" className="w-4 h-4 text-orange-600" />
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">Marketing Communications</h3>
              <p className="text-sm text-gray-600">Receive promotional offers and updates</p>
            </div>
            <input type="checkbox" className="w-4 h-4 text-orange-600" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsSection = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Notification Preferences</h2>
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-blue-400 bg-blue-50 rounded-r-lg">
            <p className="font-medium text-blue-900">Order Updates</p>
            <p className="text-sm text-blue-700">Get notified when your order status changes</p>
          </div>
          <div className="p-4 border-l-4 border-green-400 bg-green-50 rounded-r-lg">
            <p className="font-medium text-green-900">Booking Confirmations</p>
            <p className="text-sm text-green-700">Receive confirmations for pooja bookings</p>
          </div>
          <div className="p-4 border-l-4 border-orange-400 bg-orange-50 rounded-r-lg">
            <p className="font-medium text-orange-900">Special Offers</p>
            <p className="text-sm text-orange-700">Be the first to know about discounts and offers</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPaymentSection = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Methods</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CreditCard className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                  <p className="text-sm text-gray-600">Expires 12/25</p>
                </div>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Default</span>
            </div>
          </div>
          <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
            + Add New Payment Method
          </button>
        </div>
      </div>
    </div>
  );

  const renderHelpSection = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Help & Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <HelpCircle className="h-8 w-8 text-orange-600 mb-3" />
            <h3 className="font-medium text-gray-900 mb-2">FAQ</h3>
            <p className="text-sm text-gray-600">Find answers to common questions</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <Phone className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-medium text-gray-900 mb-2">Contact Support</h3>
            <p className="text-sm text-gray-600">Get help from our support team</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <Mail className="h-8 w-8 text-green-600 mb-3" />
            <h3 className="font-medium text-gray-900 mb-2">Email Us</h3>
            <p className="text-sm text-gray-600">Send us an email anytime</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <Calendar className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="font-medium text-gray-900 mb-2">Book Consultation</h3>
            <p className="text-sm text-gray-600">Schedule a consultation call</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-16 md:pt-20">
        <div className="flex min-h-screen">
          {/* Mobile Sidebar Toggle Button */}
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="fixed top-20 left-4 z-30 md:hidden bg-white p-2 rounded-lg shadow-lg border border-gray-200"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        {/* Sidebar */}
        <div className={`
          fixed md:static inset-y-0 left-0 z-20 w-72 md:w-80
          bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
          ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          flex flex-col
        `}>
          {/* User Profile Header */}
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-red-50">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-gray-900 truncate">{user.displayName || 'User'}</h2>
                <p className="text-sm text-gray-600 truncate">{user.email}</p>
                <div className="flex items-center mt-1">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-xs text-green-600 font-medium">Verified Account</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="flex-1 overflow-y-auto py-2">
            <nav className="space-y-1 px-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileSidebarOpen(false);
                  }}
                  className={`
                    w-full flex items-center p-4 text-left rounded-lg transition-all duration-200
                    ${activeTab === item.id 
                      ? 'bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 border border-orange-200 shadow-sm' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
                    }
                  `}
                >
                  <item.icon className={`h-5 w-5 mr-3 flex-shrink-0 ${
                    activeTab === item.id ? 'text-orange-600' : 'text-gray-400'
                  }`} />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5 hidden md:block">{item.description}</div>
                  </div>
                  {activeTab === item.id && (
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Logout Button */}
          <div className="p-3 border-t border-gray-200">
            <button
              onClick={logout}
              className="w-full flex items-center p-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
            >
              <LogOut className="h-5 w-5 mr-3" />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMobileSidebarOpen && (
          <div 
            className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <div className="flex-1 min-h-screen bg-gray-50">
          <div className="p-4 md:p-6 lg:p-8">
            <div className="max-w-6xl">
              {activeTab === 'profile' && renderProfileSection()}
              {activeTab === 'orders' && renderOrdersSection()}
              {activeTab === 'bookings' && renderBookingsSection()}
              {activeTab === 'settings' && renderSettingsSection()}
              {activeTab === 'notifications' && renderNotificationsSection()}
              {activeTab === 'payment' && renderPaymentSection()}
              {activeTab === 'help' && renderHelpSection()}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;