import React from 'react'
import { motion } from 'framer-motion'
import { AwardIcon } from './Icons'

const Certificate = () => {
  return (
    <section className="section-padding bg-[#90E0EF] relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-72 h-72 bg-[#0077B6] opacity-20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-[#0A0A0A] text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Obtén tu certificado
        </motion.h2>

        <motion.p
          className="text-center text-[#0A0A0A] text-xl mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Al completar el curso, recibe tu certificado profesional digital
        </motion.p>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Certificate Demo */}
          <motion.div 
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(0,0,0,0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative Border */}
            <div className="absolute inset-0 border-8 border-[#00B4D8] rounded-3xl opacity-20"></div>
            <div className="absolute inset-2 border-4 border-[#0077B6] rounded-3xl opacity-20"></div>

            {/* Certificate Content */}
            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-full mx-auto mb-6 flex items-center justify-center text-white shadow-lg"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <AwardIcon />
              </motion.div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-title font-bold text-[#0077B6] mb-4">
                Certificado de Finalización
              </h3>

              <div className="w-32 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] mx-auto mb-6 rounded-full"></div>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-[#0A0A0A] mb-8 font-body">
                Curso de Fotografía y Filmmaker
              </p>

              {/* Student Name (Example) */}
              <div className="mb-8">
                <p className="text-lg text-[#0A0A0A] mb-2">Este certificado se otorga a:</p>
                <p className="text-3xl md:text-4xl font-title font-bold text-[#0077B6] mb-2">
                  Tu Nombre Aquí
                </p>
                <div className="w-64 h-0.5 bg-[#0077B6] mx-auto"></div>
              </div>

              {/* Description */}
              <p className="text-[#0A0A0A] mb-8 max-w-2xl mx-auto">
                Por haber completado exitosamente el programa de fotografía y filmación profesional,
                demostrando competencia en técnicas de captura, composición, iluminación y edición.
              </p>

              {/* Details Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#90E0EF] to-white p-6 rounded-xl border border-[#00B4D8] border-opacity-30">
                  <p className="text-sm text-[#0A0A0A] mb-2">Fecha</p>
                  <p className="text-lg font-semibold text-[#0077B6]">Octubre 2025</p>
                </div>
                <div className="bg-gradient-to-br from-[#90E0EF] to-white p-6 rounded-xl border border-[#00B4D8] border-opacity-30">
                  <p className="text-sm text-[#0A0A0A] mb-2">Duración</p>
                  <p className="text-lg font-semibold text-[#0077B6]">5 Semanas</p>
                </div>
                <div className="bg-gradient-to-br from-[#90E0EF] to-white p-6 rounded-xl border border-[#00B4D8] border-opacity-30">
                  <p className="text-sm text-[#0A0A0A] mb-2">ID Certificado</p>
                  <p className="text-lg font-semibold text-[#0077B6]">FOTO-2025-001</p>
                </div>
              </div>

              {/* Signature Area */}
              <div className="flex justify-center items-end space-x-12 pt-8 border-t border-[#0077B6]/20">
                <div className="text-center">
                  <div className="w-48 h-0.5 bg-[#0077B6] mb-2"></div>
                  <p className="text-sm text-[#0A0A0A]">Instructor del Curso</p>
                </div>
                <div className="text-center">
                  <div className="w-48 h-0.5 bg-[#0077B6] mb-2"></div>
                  <p className="text-sm text-[#0A0A0A]">Fecha de emisión</p>
                </div>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#00B4D8] rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[#0077B6] rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-[#0077B6] rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#00B4D8] rounded-br-3xl"></div>
          </motion.div>

          {/* Benefits below certificate */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { icon: "✓", title: "Formato Digital", desc: "Descarga y comparte fácilmente" },
              { icon: "🔗", title: "URL Verificable", desc: "Con código QR de verificación" },
              { icon: "📱", title: "Optimizado", desc: "Para LinkedIn y redes sociales" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white backdrop-blur-md rounded-2xl p-6 text-center border border-[#0077B6] border-opacity-30 transition-colors duration-300"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#00B4D8",
                  boxShadow: "0 10px 30px rgba(0,119,182,0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-[#0077B6] font-title font-semibold mb-2">{item.title}</h4>
                <p className="text-[#0A0A0A] text-sm font-body">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificate
