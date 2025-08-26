import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Clock, DollarSign, ImageIcon } from 'lucide-react'

export default function Services() {
  const menuItems = [
    {
      id: 1,
      name: 'Fritas',
      description: 'Porção de batata palito frita, bem sequinha e crocante.',
      price: 25.90,
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/Fritas_1756232975859.png',
      category: 'Entradas',
      rating: 4.8,
      prepTime: '10-15 min'
    },
    {
      id: 2,
      name: 'Dadinho de Tapioca',
      description: 'Servido com geleia de pimenta especial, feita aqui.',
      price: 29.90,
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/Dadinho_de_tapioca_1756232975860.png',
      category: 'Entradas',
      rating: 4.9,
      prepTime: '15-20 min'
    }
  ]

  const features = [
    {
      title: 'Ingredientes Frescos',
      description: 'Selecionamos diariamente os melhores ingredientes para garantir qualidade e sabor únicos.',
      icon: '🥬'
    },
    {
      title: 'Preparo Artesanal',
      description: 'Cada prato é preparado com técnicas tradicionais e muito carinho por nossa equipe.',
      icon: '👨‍🍳'
    },
    {
      title: 'Ambiente Acolhedor',
      description: 'Um espaço pensado para proporcionar momentos especiais em família e com amigos.',
      icon: '🏠'
    },
    {
      title: 'Tradição Brasileira',
      description: 'Resgatamos os sabores autênticos da culinária brasileira em cada receita especial.',
      icon: '🇧🇷'
    }
  ]

  const MenuCard = motion.div
  const FeatureCard = motion.div
  const ActionButton = motion(Link)

  return (
    <section id="cardapio" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full mb-6"
          >
            <Star className="w-5 h-5" />
            <span className="font-semibold">Nossos Pratos</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Sabores que
            <span className="text-gradient block mt-2">Conquistam</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra nossa seleção especial de pratos brasileiros, preparados com ingredientes 
            frescos e muito amor. Cada receita carrega a tradição e o sabor autêntico da nossa culinária.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {menuItems.map((item, index) => (
            <MenuCard
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card overflow-hidden group"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 overflow-hidden">
                {item.image ? (
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.1 }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex flex-col items-center justify-center">
                    <ImageIcon className="w-16 h-16 text-gray-400 mb-2" />
                    <span className="text-gray-500 font-medium">Foto não disponível</span>
                  </div>
                )}
                
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">{item.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 font-serif">{item.name}</h3>
                  <div className="text-2xl font-bold text-primary-600">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.prepTime}</span>
                  </div>
                  
                  <motion.button
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Pedir Agora</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </MenuCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <ActionButton
            to="/cardapio"
            className="btn-primary inline-flex items-center space-x-3 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Ver Cardápio Completo</span>
            <ArrowRight className="w-5 h-5" />
          </ActionButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 font-serif">
            Por que Escolher o Amigaaao?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
                whileHover={{ y: -5 }}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-serif">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </FeatureCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}