import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Implement checkout logic here
    alert('Commande confirmée ! Vous recevrez un SMS pour le retrait.');
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Cart sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-96 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold">Votre commande</h2>
            <button onClick={onClose} className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 mt-8">Votre panier est vide</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-yellow-500 font-medium">{item.price.toFixed(2)}€</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-2 text-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total</span>
              <span className="font-bold">{total.toFixed(2)}€</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
              className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-400 transition-colors"
            >
              Commander
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;