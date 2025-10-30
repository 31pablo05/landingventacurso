import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { CameraIcon, PlayIcon } from './Icons'

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6] via-[#0A0A0A] to-[#00B4D8] opacity-30"></div>
      
      {/* Floating Shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-[#00B4D8] bg-opacity-20 rounded-full"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-[#0077B6] bg-opacity-20 rounded-full"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div 
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#90E0EF] bg-opacity-10 rounded-full"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto section-padding text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-title font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fotografía & Filmmaking
            <motion.span 
              className="block text-[#90E0EF] mt-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              para Crear Contenido de Calidad
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#90E0EF] mb-6 sm:mb-8 font-body font-light px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Aprendé a capturar imágenes increíbles con cámaras y celulares 📸
          </motion.p>

          {/* Video Section */}
          <motion.div
            className="mb-8 sm:mb-12 max-w-3xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group">
              <video
                ref={videoRef}
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
                onEnded={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/video/cursofotografia.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              
              {/* Play Button Overlay */}
              {!isPlaying && (
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center cursor-pointer"
                  onClick={handleVideoPlay}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="bg-white rounded-full p-6 shadow-lg"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <PlayIcon />
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8 sm:mb-12 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.button 
              className="w-full sm:w-auto bg-[#0077B6] hover:bg-[#00B4D8] text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl transition-colors duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,180,216,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Inscríbete ahora
            </motion.button>
            <motion.button 
              className="w-full sm:w-auto bg-transparent hover:bg-[#00B4D8] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 backdrop-blur-sm border-2 border-[#00B4D8]"
              whileHover={{ scale: 1.05, backgroundColor: "#00B4D8" }}
              whileTap={{ scale: 0.95 }}
            >
              Consulta por tu lugar
            </motion.button>
          </motion.div>

          <motion.div
            className="px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.div 
              className="bg-[#0077B6] bg-opacity-20 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-md mx-auto border border-[#00B4D8] border-opacity-50"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(0, 119, 182, 0.3)",
                borderColor: "#00B4D8"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-20 h-20 sm:w-24 sm:h-24 bg-[#00B4D8] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <CameraIcon />
              </motion.div>
              <p className="text-white font-body text-base sm:text-lg">
                Transforma tu contenido visual con técnicas profesionales
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-[#00B4D8] rounded-full flex justify-center">
          <motion.div
            className="w-2 h-2 bg-[#00B4D8] rounded-full mt-2"
            animate={{
              y: [0, 16, 0],
              opacity: [1, 0, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
