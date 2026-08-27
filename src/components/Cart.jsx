import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../contexts/CartContext'

export const Cart = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, total } = useCart()

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const drawerVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
  }

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Cart drawer */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-full md:w-96 bg-white border-l border-gray-200 z-40 flex flex-col shadow-2xl"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="border-b border-gray-200 p-6 bg-gradient-to-r from-red-50 to-white">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-black text-gray-900">
                  Votre Panier
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl transition-colors"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600 text-sm">
                {cartItems.length} article{cartItems.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Items list */}
            <div className="flex-1 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="flex items-center justify-center h-full text-center p-6">
                  <div>
                    <div className="text-5xl mb-4">🛒</div>
                    <p className="text-gray-600">Votre panier est vide</p>
                    <p className="text-gray-500 text-sm mt-2">Ajoutez des burgers délicieux!</p>
                  </div>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-red-300 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{item.image}</div>
                        <div className="flex-1">
                          <h4 className="text-gray-900 font-semibold mb-1">{item.name}</h4>
                          <p className="text-red-600 text-sm font-bold">
                            €{item.price.toFixed(2)} x {item.quantity}
                          </p>
                          <p className="text-gray-500 text-sm mt-1">
                            Total: €{(item.price * item.quantity).toFixed(2)}
                          </p>
                          
                          {/* Quantity controls */}
                          <div className="flex items-center gap-2 mt-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 rounded border border-gray-300 text-gray-600 hover:bg-gray-200 flex items-center justify-center text-sm transition-colors"
                            >
                              −
                            </button>
                            <span className="text-gray-900 text-sm font-semibold w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 rounded border border-gray-300 text-gray-600 hover:bg-gray-200 flex items-center justify-center text-sm transition-colors"
                            >
                              +
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto text-gray-400 hover:text-red-600 transition-colors"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4 bg-gray-50">
                {/* Total */}
                <div className="flex items-center justify-between text-lg md:text-xl">
                  <span className="text-gray-900 font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-red-600">€{total.toFixed(2)}</span>
                </div>

                {/* CTA buttons */}
                <motion.button
                  onClick={() => {
                    alert('Commande confirmée! Merci d\'avoir choisi BurgerLab 🍔')
                    clearCart()
                    setIsCartOpen(false)
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Passer la Commande
                </motion.button>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full border border-gray-300 text-gray-900 hover:bg-gray-100 font-bold py-3 rounded-lg transition-colors"
                >
                  Continuer les achats
                </button>

                <button
                  onClick={clearCart}
                  className="w-full text-gray-500 hover:text-red-600 text-sm transition-colors py-2"
                >
                  Vider le panier
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
