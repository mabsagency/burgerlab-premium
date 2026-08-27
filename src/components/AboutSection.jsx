import { motion } from 'framer-motion'

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">TÉMOIGNAGES</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              ILS <span className="text-red-600">PARLENT</span> DE NOUS
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: 'Thomas L.',
                quote: 'Une expérience incroyable ! Les burgers sont tout simplement les meilleurs que j\'ai jamais goûtés. Je le recommande à 100% !',
                rating: 5,
                avatar: '👨‍🦱',
              },
              {
                name: 'Sophie M.',
                quote: 'Ingrédients frais, cuisson parfaite et service au top. Je recommande à 100% !',
                rating: 5,
                avatar: '👩‍🦱',
              },
              {
                name: 'Julien D.',
                quote: 'Une explosion de saveurs à chaque bouchée. On sent la passion dans chaque détail !',
                rating: 5,
                avatar: '👨‍🦲',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Quote marks */}
                <p className="text-3xl text-red-600 mb-4">❝</p>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-red-600">★</span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { icon: '🔥', label: 'GRILLÉS À LA FLAMME' },
            { icon: '🌿', label: 'INGRÉDIENTS 100% FRAIS' },
            { icon: '⭐', label: 'QUALITÉ PREMIUM' },
            { icon: '❤️', label: 'FAIT AVEC PASSION' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ y: -4 }}
            >
              <p className="text-4xl mb-3">{feature.icon}</p>
              <p className="font-bold text-sm text-gray-900 uppercase tracking-wider">{feature.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
