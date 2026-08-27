import { motion } from 'framer-motion'

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 pt-32 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-orange-500">⭐</span>
            <span>N°1 DES BURGERS GOURMET</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-5xl md:text-6xl font-black leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-gray-900">DES BURGERS</span>
            <br />
            <span className="text-red-600">D'EXCEPTION</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Des ingrédients premium, sélectionnés avec passion pour une expérience gastronomique incomparable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl">
              📦 DÉCOUVRIR LE MENU
            </button>
            <button className="border-2 border-gray-400 hover:border-red-600 text-gray-700 hover:text-red-600 font-bold py-4 px-8 rounded-lg transition-all">
              📅 RÉSERVER UNE TABLE
            </button>
          </motion.div>

          {/* Features grid */}
          <motion.div
            className="grid grid-cols-2 gap-4 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔥</span>
              <div>
                <p className="font-bold text-sm text-gray-900">GRILLÉS À LA FLAMME</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🌿</span>
              <div>
                <p className="font-bold text-sm text-gray-900">INGRÉDIENTS 100% FRAIS</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">⭐</span>
              <div>
                <p className="font-bold text-sm text-gray-900">QUALITÉ PREMIUM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">❤️</span>
              <div>
                <p className="font-bold text-sm text-gray-900">FAIT AVEC PASSION</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Burger Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Decorative circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-br from-orange-200 to-red-100 rounded-full opacity-30 blur-2xl"></div>
          </div>

          {/* Burger showcase */}
          <div className="relative flex items-center justify-center">
            <motion.img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80"
              alt="Premium burger"
              className="w-full max-w-md h-auto drop-shadow-2xl rounded-3xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Info badge */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-xs text-gray-600">🔍 DÉCOUVREZ NOTRE BURGER EN 3D</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
