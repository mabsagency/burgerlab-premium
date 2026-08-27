import { motion } from 'framer-motion'

export const BurgerNavigation = ({ scrollToSection }) => {
  const navItems = [
    { id: 'hero', label: 'ACCUEIL' },
    { id: 'menu', label: 'MENU' },
    { id: 'about', label: 'À PROPOS' },
    { id: 'offres', label: 'MES OFFRES' },
    { id: 'contact', label: 'CONTACT' },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Circulaire */}
        <motion.div
          className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/images/burgernav.svg" alt="BurgerLab" className="w-12 h-12" />
        </motion.div>

        {/* Navigation Burger Horizontal */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-8">
          <div className="relative inline-flex items-center">
            {/* Bun decoration */}
            <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-orange-400 to-orange-300 rounded-t-full opacity-40"></div>
            <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-orange-400 to-orange-300 rounded-b-full opacity-40"></div>

            {/* Navigation items container */}
            <div className="flex items-center gap-1 px-6 py-3 bg-orange-50 rounded-full">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-xs font-bold text-gray-800 uppercase tracking-widest hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(220, 20, 60, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Bouton Réserver */}
        <motion.button
          onClick={() => scrollToSection('contact')}
          className="ml-auto flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(220, 20, 60, 0.4)' }}
          whileTap={{ scale: 0.95 }}
        >
          <span>📅</span>
          <span>RÉSERVER</span>
        </motion.button>
      </div>
    </motion.nav>
  )
}
