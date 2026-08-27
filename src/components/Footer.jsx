import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black">
              <span className="text-red-600">BURGER</span>LAB
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Des burgers d'exception avec des ingrédients 100% frais et une passion pour la gastronomie.
            </p>
            <div className="flex gap-4 pt-4">
              {[
                { icon: '📱', label: 'Facebook' },
                { icon: '📷', label: 'Instagram' },
                { icon: '🐦', label: 'Twitter' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-all text-lg"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4">MENU</h4>
            <ul className="space-y-3">
              {['Accueil', 'Notre Menu', 'À Propos', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4">SERVICES</h4>
            <ul className="space-y-3">
              {['Réservation', 'Livraison', 'Commande En Ligne', 'Catering'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4">CONTACT</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">
                <span className="text-red-600">📍</span> 123 Rue de la Gastronomie, 75001 Paris
              </li>
              <li className="text-gray-400 text-sm">
                <span className="text-red-600">📞</span> +33 (0) 1 23 45 67 89
              </li>
              <li className="text-gray-400 text-sm">
                <span className="text-red-600">✉️</span> contact@burgerlab.fr
              </li>
              <li className="text-gray-400 text-sm">
                <span className="text-red-600">🕐</span> Lun-Dim: 12h-23h
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom section */}
        <motion.div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 BurgerLab. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
              Politique de Confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
              Conditions d'Utilisation
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
              Mentions Légales
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 opacity-10 text-gray-600 text-9xl font-black">
        🍔
      </div>
    </footer>
  )
}
