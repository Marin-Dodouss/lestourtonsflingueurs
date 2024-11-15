import React from 'react';
import { ShoppingCart, Menu as MenuIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick }) => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <MenuIcon className="h-6 w-6 text-yellow-500 mr-2" />
            <span className="font-bold text-xl">Les Tourtons Flingueurs</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#menu" className="hover:text-yellow-500">Menu</a>
            <button
              onClick={onCartClick}
              className="relative p-2"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;