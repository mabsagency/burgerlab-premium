import { motion } from 'framer-motion'
import { useState } from 'react'

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">CONTACTEZ-NOUS</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            NOUS SOMMES <span className="text-red-600">À VOTRE ÉCOUTE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {[
            {
              icon: '📍',
              title: 'Adresse',
              content: '123 Rue de la Gastronomie\n75001 Paris, France',
            },
            {
              icon: '📞',
              title: 'Téléphone',
              content: '+33 (0) 1 23 45 67 89\nLun-Dim: 12h-23h',
            },
            {
              icon: '✉️',
              title: 'Email',
              content: 'contact@burgerlab.fr\nReponse en 24h',
            },
          ].map((info, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-4xl mb-4">{info.icon}</p>
              <h3 className="font-bold text-lg text-gray-900 mb-3">{info.title}</h3>
              <p className="text-gray-600 whitespace-pre-line text-sm leading-relaxed">{info.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {submitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center font-bold">
              ✓ Message envoyé avec succès!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
            />
            <textarea
              name="message"
              placeholder="Votre message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 resize-none"
            />
            <motion.button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ENVOYER LE MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </div>

    </section>
  )
}
