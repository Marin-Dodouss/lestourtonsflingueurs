import React, { useState } from 'react';
import { ShoppingCart, Clock, MapPin, ChefHat, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-stone-50">
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        
        {/* Hero Section - Reduced height */}
        <div className="relative h-[40vh] bg-cover bg-center" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80")'
        }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-4">Les Tourtons Flingueurs</h1>
              <p className="text-xl mb-6">Saveurs authentiques de Lyon • Click & Collect</p>
              <a href="#menu" className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                Commander maintenant
              </a>
            </div>
          </div>
        </div>

        {/* Info Cards - Increased size and adjusted positioning */}
        <div className="container mx-auto px-4 -mt-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard 
              icon={<Clock className="w-8 h-8" />}
              title="Horaires"
              description="Mar-Sam: 11h30-14h30, 18h30-22h"
            />
            <InfoCard 
              icon={<MapPin className="w-8 h-8" />}
              title="Adresse"
              description="Place Bellecour, 69002 Lyon"
            />
            <InfoCard 
              icon={<Phone className="w-8 h-8" />}
              title="Contact"
              description="04 72 XX XX XX"
            />
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <section id="menu" className="mb-12">
            <div className="flex items-center gap-2 mb-8">
              <ChefHat className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold">Notre Menu</h2>
            </div>
            <Menu />
          </section>
        </main>

        {/* Cart Sidebar */}
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

        {/* Footer */}
        <footer className="bg-stone-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© 2024 Les Tourtons Flingueurs • Tous droits réservés</p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

function InfoCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="text-yellow-500">{icon}</div>
        <div>
          <h3 className="font-semibold text-xl mb-1">{title}</h3>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;