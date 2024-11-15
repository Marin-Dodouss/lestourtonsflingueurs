import React from 'react';
import { useCart } from '../context/CartContext';
import { Plus, Minus } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: 'Tourton Traditionnel',
    description: 'Pommes de terre, tomme de Savoie, herbes fraîches',
    price: 7.50,
    image: 'https://tse1.mm.bing.net/th?id=OIP.ciAgy2q4CQRsKr_vfuHEvwHaB7&pid=Api&P=0&h=180'
  },
  {
    id: 2,
    name: 'Tourton aux Cèpes',
    description: 'Cèpes frais, ail, persil, crème',
    price: 8.50,
    image: 'https://tse1.mm.bing.net/th?id=OIP.ciAgy2q4CQRsKr_vfuHEvwHaB7&pid=Api&P=0&h=180'
  },
  {
    id: 3,
    name: 'Tourton au reblochon',
    description: 'Pommes de terre, reblochon, muscade',
    price: 9.00,
    image: 'https://tse1.mm.bing.net/th?id=OIP.ciAgy2q4CQRsKr_vfuHEvwHaB7&pid=Api&P=0&h=180'
  },
  {
    id: 4,
    name: 'Tourton Sucré',
    description: 'Pommes caramélisées, sucre vanillé, cannelle',
    price: 6.50,
    image: 'https://tse1.mm.bing.net/th?id=OIP.ciAgy2q4CQRsKr_vfuHEvwHaB7&pid=Api&P=0&h=180'
  }
];

const Menu: React.FC = () => {
  const { cartItems, addToCart, updateQuantity } = useCart();

  const getItemQuantity = (itemId: number) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem?.quantity || 0;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {menuItems.map((item) => {
        const quantity = getItemQuantity(item.id);

        return (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <span className="text-lg font-bold text-yellow-500">{item.price.toFixed(2)}€</span>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              
              {quantity === 0 ? (
                <button
                  onClick={() => addToCart(item)}
                  className="w-full bg-yellow-500 text-black py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Ajouter au panier
                </button>
              ) : (
                <div className="flex items-center justify-between gap-2 bg-yellow-500 rounded-md p-1">
                  <button
                    onClick={() => updateQuantity(item.id, quantity - 1)}
                    className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-md hover:bg-yellow-300 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-semibold text-black">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-md hover:bg-yellow-300 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;