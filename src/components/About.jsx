import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Award, Clock, Users, ChefHat, Sparkles } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Paixão pela Culinária',
      description: 'Cada prato é preparado com amor e dedicação, respeitando as tradições da culinária brasileira.'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Utilizamos apenas ingredientes selecionados e de alta qualidade para garantir o melhor sabor.'
    },
    {
      icon: Clock,
      title: 'Tradição e Inovação',
      description: 'Combinamos receitas tradicionais com técnicas modernas para criar experiências únicas.'
    },
    {
      icon: Users,
      title: 'Ambiente Familiar',
      description: 'Um espaço acolhedor onde cada cliente é tratado como parte da nossa família.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Clientes Satisfeitos' },
    { number: '2+', label: 'Pratos Especiais' },
    { number: '100%', label: 'Ingredientes Frescos' },
    { number: '1', label: 'Localização Privilegiada' }
  ]

  const ValueCard = motion.div
  const StatCard = motion.div

  return (
    <section id="sobre" className="section-padding gradient-bg">
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
            <ChefHat className="w-5 h-5" />
            <span className="font-semibold">Nossa História</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Tradição e Sabor em
            <span className="text-gradient block mt-2">Cada Prato</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O Amigaaao nasceu da paixão pela autêntica culinária brasileira. Nosso compromisso é 
            oferecer pratos que despertam memórias afetivas e criam novos momentos especiais, 
            sempre com ingredientes frescos e muito carinho no preparo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-20 blur-lg"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-serif">Nossa Missão</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Proporcionar uma experiência gastronômica autêntica, onde cada cliente sinta 
                  o calor e o aconchego da verdadeira hospitalidade brasileira. Queremos ser 
                  mais que um restaurante - somos um ponto de encontro para momentos especiais.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700">Ingredientes selecionados diariamente</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                    <span className="text-gray-700">Preparo artesanal e cuidadoso</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <span className="text-gray-700">Ambiente acolhedor e familiar</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </StatCard>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 font-serif">
            Nossos Valores
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <ValueCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 text-center group"
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 font-serif">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </ValueCard>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}