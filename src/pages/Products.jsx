import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Sacred Rudraksha Mala',
      category: 'Spiritual Accessories',
      price: '₹1,500',
      originalPrice: '₹2,000',
      image: '/images/products/rudraksha-mala.jpg',
      description: 'Authentic 108 bead Rudraksha mala for meditation and spiritual practices',
      features: ['108 Natural Rudraksha Beads', 'Blessed by Priests', 'With Certificate', 'Free Pooja Guide'],
      inStock: true,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      name: 'Brass Puja Thali Set',
      category: 'Puja Items',
      price: '₹2,800',
      originalPrice: '₹3,500',
      image: '/images/products/puja-thali.jpg',
      description: 'Complete brass puja thali set with all essential items for home worship',
      features: ['Pure Brass Material', '12 Piece Set', 'Traditional Design', 'Anti-Tarnish Finish'],
      inStock: true,
      rating: 4.9,
      reviews: 203
    },
    {
      id: 3,
      name: 'Gomati Chakra Set',
      category: 'Sacred Items',
      price: '₹800',
      originalPrice: '₹1,200',
      image: '/images/products/gomati-chakra.jpg',
      description: 'Natural Gomati Chakras for protection and positive energy',
      features: ['11 Natural Pieces', 'Energized & Blessed', 'With Instructions', 'Gift Packaging'],
      inStock: true,
      rating: 4.7,
      reviews: 89
    },
    {
      id: 4,
      name: 'Silver Om Pendant',
      category: 'Jewelry',
      price: '₹3,200',
      originalPrice: '₹4,000',
      image: '/images/products/om-pendant.jpg',
      description: 'Pure silver Om pendant for daily wear and spiritual protection',
      features: ['92.5% Pure Silver', 'Handcrafted Design', 'Adjustable Chain', 'Certificate Included'],
      inStock: true,
      rating: 4.9,
      reviews: 142
    },
    {
      id: 5,
      name: 'Sandalwood Incense Sticks',
      category: 'Aromatics',
      price: '₹450',
      originalPrice: '₹600',
      image: '/images/products/incense-sticks.jpg',
      description: 'Premium sandalwood incense sticks for puja and meditation',
      features: ['100% Natural Sandalwood', '50 Sticks Pack', 'Long Burning', 'Pure Fragrance'],
      inStock: true,
      rating: 4.6,
      reviews: 278
    },
    {
      id: 6,
      name: 'Crystal Shiva Linga',
      category: 'Crystals',
      price: '₹2,100',
      originalPrice: '₹2,800',
      image: '/images/products/crystal-linga.jpg',
      description: 'Natural crystal Shiva Linga for home temple and spiritual practices',
      features: ['Natural Crystal', 'Hand Polished', 'Energized', 'With Base Stand'],
      inStock: false,
      rating: 4.8,
      reviews: 67
    },
    {
      id: 7,
      name: 'Tulsi Plant in Decorative Pot',
      category: 'Sacred Plants',
      price: '₹650',
      originalPrice: '₹850',
      image: '/images/products/tulsi-plant.jpg',
      description: 'Sacred Tulsi plant in beautiful decorative pot for home worship',
      features: ['Live Tulsi Plant', 'Decorative Ceramic Pot', 'Care Instructions', 'Blessing Included'],
      inStock: true,
      rating: 4.5,
      reviews: 94
    },
    {
      id: 8,
      name: 'Spiritual Books Set',
      category: 'Books',
      price: '₹1,200',
      originalPrice: '₹1,600',
      image: '/images/products/spiritual-books.jpg',
      description: 'Collection of essential spiritual books for knowledge and guidance',
      features: ['5 Sacred Books', 'Hindi & English', 'Premium Binding', 'Gift Box Packaging'],
      inStock: true,
      rating: 4.7,
      reviews: 156
    },
    {
      id: 9,
      name: 'Copper Kalash Set',
      category: 'Puja Items',
      price: '₹1,800',
      originalPrice: '₹2,400',
      image: '/images/products/copper-kalash.jpg',
      description: 'Pure copper kalash with coconut and mango leaves for auspicious ceremonies',
      features: ['100% Pure Copper', 'Traditional Design', 'Complete Set', 'Ritual Ready'],
      inStock: true,
      rating: 4.8,
      reviews: 112
    }
  ];

  const categories = ['All Products', 'Puja Items', 'Spiritual Accessories', 'Jewelry', 'Aromatics', 'Crystals', 'Sacred Plants', 'Books'];

  const [selectedCategory, setSelectedCategory] = React.useState('All Products');

  const filteredProducts = selectedCategory === 'All Products' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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
                  e.target.parentElement.innerHTML = '<div class="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center"><span class="text-white font-bold text-3xl">🛍️</span></div>';
                }}
              />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Spiritual <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Products</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover our collection of authentic spiritual products, blessed items, and sacred accessories 
              to enhance your spiritual journey and daily worship.
            </p>
            <div className="bg-white/70 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg text-orange-800 font-medium mb-2">
                सत्यं शिवं सुन्दरम्
              </p>
              <p className="text-sm text-gray-600 italic">
                "Truth, Consciousness, Beauty" - The essence of divine products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory}
            </h2>
            <p className="text-gray-600">
              Authentic spiritual products blessed for your divine journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-100 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-64 bg-gradient-to-br from-orange-100 to-red-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback gradient with product icon
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center"><span class="text-6xl text-orange-600">🕉️</span></div>';
                    }}
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-bold text-lg bg-red-500 px-4 py-2 rounded-full">Out of Stock</span>
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Sale
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-orange-600 font-medium">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and Buy Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <Link
                      to={`/products/${product.id}`}
                      className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        product.inStock
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? 'Buy Now 🛒' : 'Out of Stock'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Spiritual Products
            </h2>
            <p className="text-lg text-gray-600">
              Every item is carefully selected, blessed, and prepared with devotion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Blessed & Energized</h3>
              <p className="text-gray-600 leading-relaxed">
                All our products are blessed by experienced priests and energized with sacred mantras 
                for maximum spiritual benefit.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentic Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We source only genuine, high-quality materials and follow traditional methods 
                to ensure authenticity and effectiveness.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Secure packaging and careful handling ensure your sacred items reach you 
                in perfect condition with positive energy intact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Sacred Shopping Journey
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Explore our complete collection of spiritual products and bring divine energy 
            into your daily life and worship practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Need Guidance? Contact Us
            </Link>
            <a
              href="#products"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Browse All Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;