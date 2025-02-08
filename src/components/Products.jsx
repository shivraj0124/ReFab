import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, Menu } from 'lucide-react';

// Sample product data
const products = [
  { 
    id: 1, 
    name: 'Classic Sneakers', 
    price: 79.99, 
    image: 'https://tse2.mm.bing.net/th?id=OIP.Kg54KzYiCmJ15iQ0198sIQHaE8&pid=Api&P=0&h=180', 
    rating: 4.5,
    description: 'Comfortable everyday sneakers with modern design.'
  },
  { 
    id: 2, 
    name: 'Leather Jacket', 
    price: 199.99, 
    image: 'https://tse2.mm.bing.net/th?id=OIP.Kg54KzYiCmJ15iQ0198sIQHaE8&pid=Api&P=0&h=180', 
    rating: 4.7,
    description: 'Stylish leather jacket for all seasons.'
  },
  { 
    id: 3, 
    name: 'Wireless Headphones', 
    price: 129.99, 
    image: 'https://tse2.mm.bing.net/th?id=OIP.Kg54KzYiCmJ15iQ0198sIQHaE8&pid=Api&P=0&h=180', 
    rating: 4.3,
    description: 'High-quality noise-canceling wireless headphones.'
  }
];

// Product Card Component
const ProductCard = ({ product, onAddToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 relative hover:shadow-xl transition-shadow">
      <button 
        onClick={() => setIsFavorite(!isFavorite)} 
        className={`absolute top-2 right-2 ${isFavorite ? 'text-red-500' : 'text-gray-300'}`}
      >
        <Heart size={24} fill={isFavorite ? 'currentColor' : 'none'} />
      </button>
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="flex items-center mt-2">
          <Star size={20} className="text-yellow-400 mr-1" />
          <span>{product.rating}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold">₹{product.price.toFixed(2)}</span>
          <button 
            onClick={() => onAddToCart(product)} 
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            <ShoppingCart size={20} className="inline-block mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? {...item, quantity: item.quantity + 1} 
          : item
      ));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-700 to-blue-200 ">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">E-Commerce Store</h1>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-800 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-800 hover:text-blue-500">Products</a>
            <a href="#" className="text-gray-800 hover:text-blue-500">About</a>
          </div>
          <div className="flex items-center">
            <button className="relative mr-4">
              <ShoppingCart size={24} />
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalCartItems}
                </span>
              )}
            </button>
            <button 
              className="md:hidden" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
       
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white">
            <a href="#" className="block p-2 hover:bg-gray-100">Home</a>
            <a href="#" className="block p-2 hover:bg-gray-100">Products</a>
            <a href="#" className="block p-2 hover:bg-gray-100">About</a>
          </div>
        )}
      </nav> */}

      
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
            />
          ))}
        </div>
      </div>

      
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h3 className="font-bold">Cart Summary</h3>
              <p>{totalCartItems} items | Total: ₹{totalCartPrice.toFixed(2)}</p>
            </div>
            <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;