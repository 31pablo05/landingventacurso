import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A0A] text-white py-16 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, #0077B6 0%, transparent 50%), radial-gradient(circle at 70% 50%, #00B4D8 0%, transparent 50%)"
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* Course Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-title font-bold text-[#00B4D8] mb-3 sm:mb-4">
              Curso de Fotografía
            </h3>
            <p className="text-[#F5F5F5] font-body mb-3 sm:mb-4 text-sm sm:text-base">
              Aprende a capturar imágenes increíbles con cámaras y celulares. Transforma tu contenido visual con técnicas profesionales.
            </p>
            <div className="flex items-center space-x-2 text-[#00B4D8]">
              <span className="text-xl sm:text-2xl">📸</span>
              <span className="font-body text-sm sm:text-base">Tu viaje fotográfico comienza aquí</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl font-title font-bold mb-3 sm:mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 sm:space-y-3 font-body">
              {[
                { name: "Sobre el curso", href: "#about" },
                { name: "Programa", href: "#modules" },
                { name: "Certificado", href: "#certificate" },
                { name: "Inscripción", href: "#cta" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href} 
                    className="text-[#F5F5F5] hover:text-[#00B4D8] transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            className="sm:col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg sm:text-xl font-title font-bold mb-3 sm:mb-4">Síguenos</h3>
            <p className="text-[#F5F5F5] font-body mb-4 sm:mb-6 text-sm sm:text-base">
              Mantente actualizado con tips y contenido exclusivo
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { Icon: FaInstagram, href: "#", color: "hover:text-[#00B4D8]" },
                { Icon: FaTwitter, href: "#", color: "hover:text-[#00B4D8]" },
                { Icon: FaLinkedin, href: "#", color: "hover:text-[#00B4D8]" },
                { Icon: FaYoutube, href: "#", color: "hover:text-[#00B4D8]" }
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className={`text-[#F5F5F5] ${color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          {/* Developer Credit */}
          <motion.div 
            className="text-center mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-base sm:text-lg font-body mb-3 text-[#F5F5F5]">
              Desarrollado con ❤️ por
            </p>
            <motion.a
              href="https://devcraftpablo.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-white font-bold text-base sm:text-lg md:text-xl shadow-lg transition-colors duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 180, 216, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Pablo Proboste</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                →
              </motion.span>
            </motion.a>
            <p className="text-xs sm:text-sm text-[#F5F5F5] mt-2 sm:mt-3 font-body">
              Front End Developer & Creative Designer
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="text-center text-gray-400 text-xs sm:text-sm font-body px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p>
              © {currentYear} Curso de Fotografía y Filmmaker. Todos los derechos reservados.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#0077B6] opacity-20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 50, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#00B4D8] opacity-20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </footer>
  )
}

export default Footer
