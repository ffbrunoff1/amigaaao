import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChefHat, Clock, MapPin, Star, ArrowRight, Phone } from 'lucide-react'

export default function Hero() {
  const features = [
    { icon: ChefHat, text: 'Comida Brasileira Autêntica' },
    { icon: Clock, text: 'Preparado na Hora' },
    { icon: Star, text: 'Ingredientes Selecionados' },
    { icon: MapPin, text: 'Padre Lebret 801' }
  ]

  const FeatureCard = motion.div
  const ActionButton = motion(Link)
  const PhoneButton = motion.a

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600"></div>
      
      <div className="absolute inset-0 bg-black/20"></div>
      
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ 
          background: [
            'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
      />

      <div className="relative z-10 container-custom section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Bem-vindo ao
            <span className="block text-6xl md:text-8xl mt-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Amigaaao
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Descubra os sabores autênticos da culinária brasileira em um ambiente acolhedor. 
            Cada prato é preparado com carinho e ingredientes selecionados para proporcionar 
            uma experiência gastronômica única.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <ActionButton
              to="/cardapio"
              className="group bg-white text-primary-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all duration-300 flex items-center space-x-3 hover:scale-105 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Ver Cardápio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </ActionButton>

            <PhoneButton
              href="tel:5544991040774"
              className="group bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center space-x-3 hover:scale-105 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Ligar Agora</span>
            </PhoneButton>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <FeatureCard
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <IconComponent className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <p className="text-white font-medium text-sm leading-tight">{feature.text}</p>
                </FeatureCard>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}