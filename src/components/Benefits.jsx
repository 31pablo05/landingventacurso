import React from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from './Icons'

const benefits = [
  {
    title: "Aprende a destacar tu contenido en redes",
    description: "Crea publicaciones que generen más engagement y alcance orgánico."
  },
  {
    title: "Saca fotos atractivas con cámaras y celulares",
    description: "Domina ambos equipos y aprovecha al máximo sus capacidades."
  },
  {
    title: "Mejora tu marca personal con imágenes de calidad",
    description: "Construye una presencia visual profesional y coherente."
  },
  {
    title: "Publica contenido que conecte con tu audiencia",
    description: "Crea una conexión emocional a través de imágenes impactantes."
  },
  {
    title: "Aprende técnicas de filmación profesional",
    description: "Crea videos de calidad cinematográfica con cualquier equipo."
  },
  {
    title: "Domina la edición y post-producción",
    description: "Lleva tus fotos y videos al siguiente nivel con técnicas profesionales."
  }
]

const Benefits = () => {
  return (
    <section className="section-padding bg-[#F5F5F5] relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 30% 50%, #0077B6 0%, transparent 50%), radial-gradient(circle at 70% 50%, #00B4D8 0%, transparent 50%)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-[#0077B6] text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Qué vas a lograr
        </motion.h2>

        <motion.p
          className="text-center text-[#0A0A0A] text-lg mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Resultados reales y tangibles desde el primer módulo
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4 group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-lg"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                <CheckIcon />
              </motion.div>
              <motion.div
                className="flex-1 bg-white p-6 rounded-2xl shadow-md border border-[#00B4D8] border-opacity-20 transition-colors duration-300"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0,180,216,0.2)",
                  borderColor: "#00B4D8"
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-title font-semibold text-[#0077B6] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#0A0A0A] font-body">
                  {benefit.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Extra Motivation */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div 
            className="inline-block bg-gradient-to-r from-[#0077B6] to-[#00B4D8] p-8 rounded-3xl shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white font-body text-xl md:text-2xl font-semibold mb-2">
              🎯 El 95% de nuestros estudiantes
            </p>
            <p className="text-white font-body text-lg">
              mejoran su contenido visual en las primeras 2 semanas
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits
