import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Heart, UtensilsCrossed } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Início', href: '/' },
    { name: 'Cardápio', href: '/cardapio' },
    { name: 'Reservas', href: '/reservas' },
    { name: 'Contato', href: '#contato' }
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: '(54) 4999-1040774',
      href: 'tel:5544991040774'
    },
    {
      icon: Mail,
      text: 'ffbrunoff@yahoo.com.br',
      href: 'mailto:ffbrunoff@yahoo.com.br'
    },
    {
      icon: MapPin,
      text: 'Padre Lebret 801, G05 Bloco 03',
      href: 'https://maps.google.com/?q=Padre+Lebret+801'
    },
    {
      icon: Clock,
      text: 'Seg-Dom: 11h às 23h',
      href: null
    }
  ]

  const FooterSection = motion.div
  const FooterLink = motion.a

  return (
    <footer className="bg-gray-900 text-white pb-20">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSection
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold font-serif">Amigaaao</span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Descubra os sabores autênticos da culinária brasileira em um ambiente acolhedor. 
              Cada prato é preparado com carinho e ingredientes selecionados para proporcionar 
              uma experiência gastronômica única.
            </p>

            <div className="flex items-center space-x-2 text-primary-400">
              <Heart className="w-5 h-5 fill-current" />
              <span className="font-medium">Feito com amor desde sempre</span>
            </div>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 font-serif">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <FooterLink
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-400 transition-colors duration-300"></span>
                    {link.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 font-serif">Contato</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <li key={index}>
                    {info.href ? (
                      <FooterLink
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : '_self'}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-start space-x-3 group"
                        whileHover={{ x: 5 }}
                      >
                        <IconComponent className="w-5 h-5 mt-0.5 group-hover:text-primary-400 transition-colors duration-300" />
                        <span>{info.text}</span>
                      </FooterLink>
                    ) : (
                      <div className="text-gray-300 flex items-start space-x-3">
                        <IconComponent className="w-5 h-5 mt-0.5" />
                        <span>{info.text}</span>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </FooterSection>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2024 Amigaaao. Todos os direitos reservados.</p>
            </div>
            
            <div className="text-gray-400 text-center md:text-right">
              <p>
                Criado com <em className="text-primary-400 font-medium">
                  <a 
                    href="https://papum.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-300 transition-colors duration-300"
                  >
                    Papum
                  </a>
                </em>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}