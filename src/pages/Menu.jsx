import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Clock, DollarSign, ImageIcon, Filter } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const menuData = {
    categories: [
      {
        categoryName: 'Entradas',
        items: [
          {
            itemName: 'Fritas',
            description: 'Porção de batata palito frita, bem sequinha e crocante.',
            price: 25.90,
            image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/Fritas_1756232975859.png',
            rating: 4.8,
            prepTime: '10-15 min'
          },
          {
            itemName: 'Dadinho de Tapioca',
            description: 'Servido com geleia de pimenta especial, feita aqui.',
            price: 29.90,
            image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/Dadinho_de_tapioca_1756232975860.png',
            rating: 4.9,
            prepTime: '15-20 min'
          }
        ]
      }
    ]
  }

  const allCategories = ['all', ...menuData.categories.map(cat => cat.categoryName)]
  
  const filteredItems = selectedCategory === 'all' 
    ? menuData.categories.flatMap(cat => 
        cat.items.map(item => ({ ...item, category: cat.categoryName }))
      )
    : menuData.categories
        .filter(cat => cat.categoryName === selectedCategory)
        .flatMap(cat => cat.items.map(item => ({ ...item, category: cat.categoryName })))

  const CategoryButton = motion.button
  const MenuCard = motion.div
  const BackButton = motion(Link)

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <BackButton
            to="/"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8 font-semibold transition-colors duration-300"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar ao Início</span>
          </BackButton>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Nosso
            <span className="text-gradient block mt-2">Cardápio</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore nossa seleção especial de pratos brasileiros autênticos, 
            preparados com ingredientes frescos e muito amor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center space-x-2 text-gray-600 mb-4 w-full justify-center">
            <Filter className="w-5 h-5" />
            <span className="font-semibold">Filtrar por categoria:</span>
          </div>
          
          {allCategories.map((category, index) => (
            <CategoryButton
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'Todos os Pratos' : category}
            </CategoryButton>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <MenuCard
              key={`${item.itemName}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card overflow-hidden group"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 overflow-hidden">
                {item.image ? (
                  <motion.img
                    src={item.image}
                    alt={item.itemName}
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
                  <h3 className="text-xl font-bold text-gray-900 font-serif">{item.itemName}</h3>
                  <div className="text-xl font-bold text-primary-600">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.prepTime}</span>
                  </div>
                  
                  <motion.a
                    href={`tel:5544991040774`}
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Pedir Agora
                  </motion.a>
                </div>
              </div>
            </MenuCard>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">Nenhum prato encontrado nesta categoria.</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
              Pronto para fazer seu pedido?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco e faça seu pedido agora mesmo!
            </p>
            <motion.a
              href="tel:5544991040774"
              className="btn-primary inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Ligar Agora</span>
              <DollarSign className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}