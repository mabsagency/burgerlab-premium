import React, { createContext, useState, useCallback } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = useCallback((item) => {
    setCartItems(prev => {
      const existing = prev.find(x => x.id === item.id)
      if (existing) {
        return prev.map(x =>
          x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((itemId) => {
    setCartItems(prev => prev.filter(x => x.id !== itemId))
  }, [])

  const updateQuantity = useCallback((itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
    } else {
      setCartItems(prev =>
        prev.map(x =>
          x.id === itemId ? { ...x, quantity } : x
        )
      )
    }
  }, [removeFromCart])

  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      total
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
