import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] relative overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 bg-[#90E0EF] opacity-20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-96 h-96 bg-[#90E0EF] opacity-20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 50, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-white mb-6 leading-tight"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.3)",
                "0 0 40px rgba(255,255,255,0.5)",
                "0 0 20px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ¿Listo para transformar tu contenido visual?
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-12 font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            No dejes pasar esta oportunidad de destacar en redes sociales y dominar la fotografía profesional
          </motion.p>

          {/* Main CTA Button */}
          <motion.button 
            className="bg-white text-[#0077B6] hover:bg-[#F5F5F5] font-bold py-6 px-12 rounded-full text-xl shadow-2xl mb-8 inline-flex items-center space-x-3 transition-colors duration-300"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span>Inscríbete ahora</span>
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
          </motion.button>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl">✓</span>
              <span className="font-body">Acceso inmediato</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl">✓</span>
              <span className="font-body">Soporte personalizado</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl">✓</span>
              <span className="font-body">Certificado incluido</span>
            </motion.div>
          </motion.div>

          {/* Urgency Element */}
          <motion.div
            className="mt-12 inline-block bg-white bg-opacity-20 backdrop-blur-md rounded-2xl px-8 py-4 border border-white border-opacity-30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(255,255,255,0.2)",
                "0 0 40px rgba(255,255,255,0.4)",
                "0 0 20px rgba(255,255,255,0.2)"
              ]
            }}
          >
            <p className="text-white font-body text-lg">
              🔥 <strong>Últimos cupos disponibles</strong> - Próxima camada en {new Date().toLocaleDateString('es-ES', { month: 'long' })}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 text-6xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        📸
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-10 text-6xl"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🎥
      </motion.div>
    </section>
  )
}

export default CTA
