import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00B4D8] to-transparent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#0077B6] to-transparent opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-[#0077B6] mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre el curso
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-[#0A0A0A] leading-relaxed font-body mb-6">
            Aprende a crear contenido visual que <strong className="text-[#0077B6]">realmente conecte</strong> con tu audiencia. 
            Este curso te enseña a capturar, editar y mejorar fotos y videos para redes sociales usando 
            <strong className="text-[#00B4D8]"> cámaras profesionales y celulares</strong>.
          </p>
          <p className="text-lg md:text-xl text-[#0A0A0A] leading-relaxed font-body">
            Perfecto para emprendedores, creadores de contenido, fotógrafos amateur y cualquier persona 
            que quiera destacar en el mundo digital con técnicas profesionales de fotografía y filmación.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { number: "500+", label: "Estudiantes" },
            { number: "4.9/5", label: "Calificación" },
            { number: "20+", label: "Horas de contenido" },
            { number: "100%", label: "Online" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#90E0EF] to-white p-6 rounded-xl shadow-lg border border-[#00B4D8] border-opacity-20"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,180,216,0.2)",
                borderColor: "#00B4D8"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#0077B6] mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-[#0A0A0A] font-body">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
