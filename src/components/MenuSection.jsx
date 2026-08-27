import { motion } from 'framer-motion'
import { useCart } from '../contexts/CartContext'
import { useState } from 'react'
import classicBurger from '../../assets/b1.webp'
import spicyBurger from '../../assets/b2.jpg'
import champetreBurger from '../../assets/b3.jpg'
import veggieBurger from '../../assets/b4.webp'

export const MenuSection = () => {
  const { addToCart } = useCart()
  const [addedItems, setAddedItems] = useState({})

  const menuItems = [
    {
      id: 1,
      name: 'LE CLASSIC HOUSE',
      description: 'Boeuf Black Angus, cheddar fondant, salade, tomate, oignons rouges, sauce maison.',
      price: 14.90,
      image: classicBurger,
      isImage: true,
      rating: 5,
    },
    {
      id: 2,
      name: 'LE SPICY LOVER',
      description: 'Poulet croustillant, cheddar, oignons, tomate séchée, sauce épicée, laitue croquante.',
      price: 13.90,
      image: spicyBurger,
      isImage: true,
      rating: 5,
    },
    {
      id: 3,
      name: 'LE CHAMPÊTRE',
      description: 'Boeuf à griller, fromage de chèvre, moutarde, tomate séchée, sauce moutarde-ail.',
      price: 15.90,
      image: champetreBurger,
      isImage: true,
      rating: 5,
    },
    {
      id: 4,
      name: 'LE VÉGÉ GOURMAND',
      description: 'Galette de légumes rôtis, cheddar, houmous, tomate, roquette, sauce vegan à l\'ail noir.',
      price: 12.90,
      image: veggieBurger,
      isImage: true,
      rating: 5,
    },
  ]

  const handleAddToCart = (item) => {
    addToCart(item)
    setAddedItems(prev => ({ ...prev, [item.id]: true }))
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }))
    }, 1500)
  }

  return (
    <section id="menu" className="relative py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">NOTRE SÉLECTION</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
            NOS <span className="text-red-600">BURGERS</span> STARS
          </h2>
          <p className="text-gray-600 mt-4">VOR TOUT LE MENU →</p>
        </motion.div>

        {/* Burgers Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image container */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                {item.isImage ? (
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <motion.div
                    className="text-6xl"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.image}
                  </motion.div>
                )}
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-lg font-black text-white uppercase tracking-wide">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-red-600">★</span>
                  ))}
                </div>

                {/* Footer - Price and Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <span className="text-2xl font-black text-red-600">
                    {item.price.toFixed(2)}€
                  </span>
                  <motion.button
                    onClick={() => handleAddToCart(item)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      addedItems[item.id]
                        ? 'bg-green-500 text-white'
                        : 'bg-red-600 hover:bg-red-700 text-white'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {addedItems[item.id] ? '✓' : '+'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
