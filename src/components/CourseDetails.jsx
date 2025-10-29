import React from 'react'
import { motion } from 'framer-motion'
import { ClockIcon, ComputerIcon, StarIcon } from './Icons'

const details = [
  {
    icon: ClockIcon,
    title: "5 semanas",
    description: "Duración completa del programa",
    color: "bg-[#0077B6]"
  },
  {
    icon: ComputerIcon,
    title: "Online y flexible",
    description: "Aprende a tu ritmo desde casa",
    color: "bg-[#00B4D8]"
  },
  {
    icon: StarIcon,
    title: "Contenido premium",
    description: "Material de calidad profesional",
    color: "bg-[#0077B6]"
  }
]

const CourseDetails = () => {
  return (
    <section className="section-padding bg-[#0A0A0A] relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #0077B6 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00B4D8 0%, transparent 50%)"
        }}
        animate={{
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-white text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Detalles del curso
        </motion.h2>

        <motion.p
          className="text-center text-[#F5F5F5] text-lg mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Todo lo que necesitas saber sobre el programa
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {details.map((detail, index) => {
            const Icon = detail.icon
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, -10, 0]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className={`w-24 h-24 ${detail.color} rounded-2xl mx-auto mb-6 flex items-center justify-center text-white shadow-xl`}
                    animate={{
                      boxShadow: [
                        "0 10px 30px rgba(0,0,0,0.1)",
                        "0 20px 40px rgba(0,0,0,0.2)",
                        "0 10px 30px rgba(0,0,0,0.1)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon />
                  </motion.div>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-title font-semibold text-white mb-2">
                  {detail.title}
                </h3>
                <p className="text-[#F5F5F5] font-body text-lg">
                  {detail.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Course Plan / Curriculum Preview */}
        <motion.div
          className="bg-[#0077B6] bg-opacity-10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-[#00B4D8] border-opacity-30"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-title font-bold text-white mb-8 text-center">
            Plan de estudios
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { week: "Semana 1", topic: "Fundamentos de fotografía y equipo" },
              { week: "Semana 2", topic: "Composición e iluminación" },
              { week: "Semana 3", topic: "Técnicas avanzadas de captura" },
              { week: "Semana 4", topic: "Edición y post-producción" },
              { week: "Semana 5", topic: "Proyecto final y branding visual" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 bg-[#00B4D8] bg-opacity-10 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[#00B4D8] border-opacity-20 transition-colors duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0,180,216,0.3)",
                  borderColor: "#00B4D8"
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-title font-semibold text-white mb-1">
                    {item.week}
                  </h4>
                  <p className="text-[#F5F5F5] font-body">
                    {item.topic}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Extra Info */}
          <motion.div
            className="mt-8 text-center p-6 bg-gradient-to-r from-[#0077B6]/20 to-[#00B4D8]/20 rounded-2xl border border-[#00B4D8] border-opacity-30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-white font-body text-lg">
              💎 <strong>Incluye:</strong> Certificado digital al finalizar + Proyecto portfolio
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CourseDetails
