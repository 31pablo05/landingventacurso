import React from 'react'
import { motion } from 'framer-motion'
import { CameraIcon, LightIcon, EditIcon, PaletteIcon } from './Icons'

const modules = [
  {
    icon: CameraIcon,
    title: "Fotografía Profesional",
    description: "Domina tu cámara y smartphone. Descubre todas las funciones para fotos profesionales.",
    color: "bg-[#0077B6]",
    textColor: "text-white"
  },
  {
    icon: LightIcon,
    title: "Iluminación y Composición",
    description: "Aprende las reglas de oro de la composición y cómo usar la luz natural y artificial.",
    color: "bg-[#00B4D8]",
    textColor: "text-white"
  },
  {
    icon: EditIcon,
    title: "Edición Profesional",
    description: "Domina las mejores apps y software para editar como un profesional.",
    color: "bg-[#0077B6]",
    textColor: "text-white"
  },
  {
    icon: PaletteIcon,
    title: "Tu Estilo Visual",
    description: "Desarrolla una identidad visual única que represente tu marca personal.",
    color: "bg-[#00B4D8]",
    textColor: "text-white"
  }
]

const Modules = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 bg-[#00B4D8] opacity-5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-[#0077B6] text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Programa del curso
        </motion.h2>

        <motion.p
          className="text-center text-[#0A0A0A] text-lg mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          4 módulos diseñados para llevarte de principiante a profesional
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon
            return (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="card text-center h-full relative overflow-hidden"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover Effect Background */}
                  <motion.div
                    className={`absolute inset-0 ${module.color} opacity-0 group-hover:opacity-5`}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon Container */}
                  <motion.div 
                    className={`w-20 h-20 ${module.color} rounded-2xl mx-auto mb-6 flex items-center justify-center ${module.textColor} shadow-lg relative z-10`}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon />
                  </motion.div>

                  {/* Module Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-title font-semibold text-[#0077B6] mb-4 relative z-10">
                    {module.title}
                  </h3>
                  <p className="text-[#0A0A0A] font-body relative z-10">
                    {module.description}
                  </p>

                  {/* Progress indicator on hover */}
                  <motion.div
                    className="mt-6 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-block bg-gradient-to-r from-[#0077B6] to-[#00B4D8] p-1 rounded-2xl">
            <div className="bg-white px-8 py-4 rounded-2xl">
              <p className="text-[#0A0A0A] font-body text-lg">
                ✨ <strong>Bonus:</strong> Material descargable + Acceso a comunidad privada
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Modules
