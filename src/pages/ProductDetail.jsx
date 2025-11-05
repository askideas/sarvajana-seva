import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Sample product data (in real app, this would come from API/database)
  const products = {
    1: {
      id: 1,
      name: 'Sacred Rudraksha Mala',
      category: 'Spiritual Accessories',
      price: '₹1,500',
      originalPrice: '₹2,000',
      image: '/images/products/rudraksha-mala.jpg',
      gallery: [
        '/images/products/rudraksha-mala-1.jpg',
        '/images/products/rudraksha-mala-2.jpg',
        '/images/products/rudraksha-mala-3.jpg'
      ],
      description: 'Authentic 108 bead Rudraksha mala for meditation and spiritual practices. Each bead is carefully selected and blessed by experienced priests.',
      features: [
        '108 Natural Rudraksha Beads',
        'Blessed by Priests with Sacred Mantras',
        'Authentic Certificate Included',
        'Free Meditation & Pooja Guide',
        'Cotton Storage Pouch Included',
        'Lifetime Authenticity Guarantee'
      ],
      benefits: [
        'Enhances concentration during meditation',
        'Reduces stress and anxiety',
        'Promotes spiritual growth',
        'Protects from negative energies',
        'Balances chakras and energy flow'
      ],
      specifications: {
        'Bead Count': '108 + 1 Guru Bead',
        'Bead Size': '6-7mm diameter',
        'Material': '100% Natural Rudraksha',
        'Thread': 'Sacred Red Thread',
        'Origin': 'Nepal Himalayas',
        'Certification': 'Gemological Certificate'
      },
      inStock: true,
      rating: 4.8,
      reviews: 156,
      shipping: 'Free shipping across India',
      warranty: '1 Year Replacement Guarantee'
    },
    2: {
      id: 2,
      name: 'Brass Puja Thali Set',
      category: 'Puja Items',
      price: '₹2,800',
      originalPrice: '₹3,500',
      image: '/images/products/puja-thali.jpg',
      gallery: [
        '/images/products/puja-thali-1.jpg',
        '/images/products/puja-thali-2.jpg',
        '/images/products/puja-thali-3.jpg'
      ],
      description: 'Complete brass puja thali set with all essential items for home worship. Traditional design with modern durability.',
      features: [
        'Pure Brass Material (No mixing)',
        'Complete 12 Piece Set',
        'Traditional Engraved Design',
        'Anti-Tarnish Finish',
        'Perfect Size for Home Mandir',
        'Easy to Clean and Maintain'
      ],
      benefits: [
        'Complete puja setup in one thali',
        'Brass material enhances spiritual vibrations',
        'Durable and long-lasting',
        'Perfect for daily worship',
        'Suitable for all Hindu festivals'
      ],
      specifications: {
        'Material': '100% Pure Brass',
        'Thali Diameter': '12 inches',
        'Set Includes': '12 Essential Items',
        'Weight': '1.5 kg (approx)',
        'Finish': 'Golden Polish',
        'Care': 'Lemon juice cleaning'
      },
      inStock: true,
      rating: 4.9,
      reviews: 203,
      shipping: 'Free shipping across India',
      warranty: '2 Years Anti-Tarnish Guarantee'
    }
  };

  const product = products[id];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link
            to="/products"
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-orange-600">Products</Link>
            <span>/</span>
            <span className="text-orange-600">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl overflow-hidden mb-6">
                <img
                  src={product.gallery ? product.gallery[selectedImage] : product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center"><span class="text-8xl text-orange-600">🕉️</span></div>';
                  }}
                />
              </div>

              {/* Image Gallery */}
              {product.gallery && (
                <div className="flex space-x-4">
                  {product.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index ? 'border-orange-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center"><span class="text-2xl text-orange-600">🕉️</span></div>';
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-orange-600">{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
                    <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-bold">
                      Save {Math.round((1 - parseInt(product.price.slice(1).replace(',', '')) / parseInt(product.originalPrice.slice(1).replace(',', ''))) * 100)}%
                    </span>
                  </>
                )}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">{product.description}</p>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity and Buy */}
              <div className="border border-gray-200 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 text-gray-600 hover:text-orange-600"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 text-gray-600 hover:text-orange-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Total Price</div>
                    <div className="text-2xl font-bold text-orange-600">
                      ₹{(parseInt(product.price.slice(1).replace(',', '')) * quantity).toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                    Buy Now 🛒
                  </button>
                  <button className="flex-1 border-2 border-orange-500 text-orange-500 py-3 px-6 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                    Add to Cart
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm text-green-600 font-medium">✓ {product.shipping}</p>
                  <p className="text-sm text-gray-600">✓ {product.warranty}</p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl mb-1">🔒</div>
                  <div className="text-xs font-medium text-green-700">Safe & Secure</div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-1">🚚</div>
                  <div className="text-xs font-medium text-blue-700">Fast Delivery</div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl mb-1">✨</div>
                  <div className="text-xs font-medium text-purple-700">Blessed Items</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Benefits */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">🌟</span>
                Spiritual Benefits
              </h3>
              <ul className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-orange-500 mr-2 mt-1">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">📋</span>
                Specifications
              </h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600 font-medium">{key}:</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Care Instructions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">💫</span>
                Care & Usage
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">•</span>
                  Handle with clean hands and pure intentions
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">•</span>
                  Keep in clean, sacred space when not in use
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">•</span>
                  Regular prayers enhance the spiritual energy
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">•</span>
                  Avoid exposure to negative environments
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">•</span>
                  Clean gently with natural methods only
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden shadow-xl border-3 border-white mb-6">
            <img 
              src={Logo}
              alt="Sarvajana Seva Om Logo" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-20 h-20 bg-white rounded-full flex items-center justify-center"><span class="text-orange-600 font-bold text-2xl">🕉️</span></div>';
              }}
            />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Our spiritual consultants are here to guide you in selecting the most suitable items 
            for your spiritual journey and practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Our Experts
            </Link>
            <Link
              to="/products"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              Browse More Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;