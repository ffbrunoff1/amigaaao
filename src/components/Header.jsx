import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, UtensilsCrossed, Calendar, Home } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Início', href: '/', icon: Home },
    { name: 'Cardápio', href: '/cardapio', icon: UtensilsCrossed },
    { name: 'Reservas', href: '/reservas', icon: Calendar },
  ]

  const LogoComponent = motion.div
  const NavItem = motion(Link)
  const MobileNavItem = motion(Link)
  const PhoneButton = motion.a
  const MenuButton = motion.button

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <LogoComponent
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-gradient-to-r from-primary-500 to-secondary-500' : 'bg-white'
            }`}>
              <UtensilsCrossed className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-primary-600'
              }`} />
            </div>
            <span className={`text-2xl font-bold font-serif transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
            }`}>
              Amigaaao
            </span>
          </LogoComponent>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => {
              const IconComponent = item.icon
              return (
                <NavItem
                  key={item.name}
                  to={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    location.pathname === item.href
                      ? isScrolled 
                        ? 'text-primary-600 bg-primary-50' 
                        : 'text-white bg-white/20 backdrop-blur-sm'
                      : isScrolled
                        ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                        : 'text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.name}</span>
                </NavItem>
              )
            })}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <PhoneButton
              href="tel:5544991040774"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600'
                  : 'bg-white text-primary-600 hover:bg-primary-50'
              } hover:shadow-lg hover:scale-105 active:scale-95`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span>(54) 4999-1040774</span>
            </PhoneButton>
          </div>

          <MenuButton
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </MenuButton>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="py-4 space-y-2">
              {navigation.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <MobileNavItem
                    key={item.name}
                    to={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex items-center space-x-3 px-6 py-3 font-medium transition-colors duration-300 ${
                      location.pathname === item.href
                        ? 'text-primary-600 bg-primary-50 border-r-4 border-primary-500'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.name}</span>
                  </MobileNavItem>
                )
              })}
              <div className="px-6 pt-4 border-t border-gray-100">
                <PhoneButton
                  href="tel:5544991040774"
                  className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-4 h-4" />
                  <span>(54) 4999-1040774</span>
                </PhoneButton>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}