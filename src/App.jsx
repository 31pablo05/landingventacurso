import React from 'react'

// Icons components (simple SVG icons)
const CameraIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 15.2c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9zm0-8.4c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"/>
    <path d="M20 6h-2.7l-1.2-2h-8.2l-1.2 2h-2.7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2z"/>
  </svg>
)

const LightIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
)

const EditIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
  </svg>
)

const PaletteIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3c-4.97 0-9 4.03-9 9 0 4.97 4.03 9 9 9 4.97 0 9-4.03 9-9 0-4.97-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
    <circle cx="7.5" cy="14.5" r="1.5"/>
    <circle cx="10" cy="12" r="1.5"/>
    <circle cx="14" cy="12" r="1.5"/>
    <circle cx="16.5" cy="14.5" r="1.5"/>
  </svg>
)

const CheckIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
)

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
  </svg>
)

const ComputerIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>
  </svg>
)

const StarIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
)

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FF6B6B] via-[#FFD93D] to-[#F9C5BD] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 max-w-6xl mx-auto section-padding text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-title font-bold text-white mb-6 leading-tight">
              Curso de Fotografía para 
              <span className="block text-[#FFD93D]">Redes Sociales</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-body font-light">
              Aprendé a sacar fotos que vendan 📸
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="btn-primary text-lg px-8 py-4">
                Inscribite ahora
              </button>
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm">
                Consultá por tu lugar
              </button>
            </div>
            <div className="animate-slide-up">
              <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CameraIcon />
                </div>
                <p className="text-white font-body">
                  Transformá tu contenido visual con técnicas profesionales
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#FFD93D] bg-opacity-20 rounded-full animate-pulse delay-300"></div>
      </section>

      {/* Sobre el curso */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-title font-bold text-[#2E2E2E] mb-8">
            Sobre el curso
          </h2>
          <p className="text-lg md:text-xl text-[#6B6B6B] leading-relaxed font-body">
            Aprendé a crear contenido visual que <strong className="text-[#FF6B6B]">realmente conecte</strong> con tu audiencia. 
            Este curso te enseña a sacar, editar y mejorar fotos para redes sociales usando 
            <strong className="text-[#FF6B6B]"> solo tu celular</strong>. Perfecto para emprendedores, creadores de contenido 
            y cualquier persona que quiera destacar en el mundo digital sin necesidad de equipos costosos.
          </p>
        </div>
      </section>

      {/* Programa / Módulos */}
      <section className="section-padding bg-[#FFF8F3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-title font-bold text-[#2E2E2E] text-center mb-16">
            Programa del curso
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center animate-slide-up">
              <div className="w-16 h-16 bg-[#FF6B6B] rounded-full mx-auto mb-6 flex items-center justify-center text-white">
                <CameraIcon />
              </div>
              <h3 className="text-xl font-title font-semibold text-[#2E2E2E] mb-4">
                Fotografía con celular
              </h3>
              <p className="text-[#6B6B6B] font-body">
                Dominá tu smartphone y descubrí todas sus funciones para fotos profesionales.
              </p>
            </div>

            <div className="card text-center animate-slide-up delay-100">
              <div className="w-16 h-16 bg-[#FFD93D] rounded-full mx-auto mb-6 flex items-center justify-center text-[#2E2E2E]">
                <LightIcon />
              </div>
              <h3 className="text-xl font-title font-semibold text-[#2E2E2E] mb-4">
                Iluminación y composición
              </h3>
              <p className="text-[#6B6B6B] font-body">
                Aprendé las reglas de oro de la composición y cómo usar la luz natural.
              </p>
            </div>

            <div className="card text-center animate-slide-up delay-200">
              <div className="w-16 h-16 bg-[#5F9EA0] rounded-full mx-auto mb-6 flex items-center justify-center text-white">
                <EditIcon />
              </div>
              <h3 className="text-xl font-title font-semibold text-[#2E2E2E] mb-4">
                Edición con apps gratuitas
              </h3>
              <p className="text-[#6B6B6B] font-body">
                Dominá las mejores apps gratuitas para editar como un profesional.
              </p>
            </div>

            <div className="card text-center animate-slide-up delay-300">
              <div className="w-16 h-16 bg-[#F9C5BD] rounded-full mx-auto mb-6 flex items-center justify-center text-[#2E2E2E]">
                <PaletteIcon />
              </div>
              <h3 className="text-xl font-title font-semibold text-[#2E2E2E] mb-4">
                Cómo crear tu estilo visual
              </h3>
              <p className="text-[#6B6B6B] font-body">
                Desarrollá una identidad visual única que represente tu marca personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detalles del curso */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-title font-bold text-[#2E2E2E] text-center mb-16">
            Detalles del curso
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-20 h-20 bg-[#FF6B6B] rounded-full mx-auto mb-6 flex items-center justify-center text-white">
                <ClockIcon />
              </div>
              <h3 className="text-2xl font-title font-semibold text-[#2E2E2E] mb-2">5 semanas</h3>
              <p className="text-[#6B6B6B] font-body">Duración completa del programa</p>
            </div>

            <div className="text-center animate-slide-up delay-100">
              <div className="w-20 h-20 bg-[#FFD93D] rounded-full mx-auto mb-6 flex items-center justify-center text-[#2E2E2E]">
                <ComputerIcon />
              </div>
              <h3 className="text-2xl font-title font-semibold text-[#2E2E2E] mb-2">Online y flexible</h3>
              <p className="text-[#6B6B6B] font-body">Aprendé a tu ritmo desde casa</p>
            </div>

            <div className="text-center animate-slide-up delay-200">
              <div className="w-20 h-20 bg-[#5F9EA0] rounded-full mx-auto mb-6 flex items-center justify-center text-white">
                <StarIcon />
              </div>
              <h3 className="text-2xl font-title font-semibold text-[#2E2E2E] mb-2">Fotos que vendan</h3>
              <p className="text-[#6B6B6B] font-body">Resultado garantizado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section-padding bg-gradient-to-r from-[#FFF8F3] to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-title font-bold text-[#2E2E2E] text-center mb-16">
            Qué vas a lograr
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 animate-slide-up">
              <div className="w-8 h-8 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                <CheckIcon />
              </div>
              <div>
                <h3 className="text-xl font-title font-semibold text-[#2E2E2E] mb-2">
                  Aprendé a destacar tu contenido en redes
                </h3>
                <p className="text-[#6B6B6B] font-body">
                  Creá publicaciones que generen más engagement y alcance orgánico.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-slide-up delay-100">
              <div className="w-8 h-8 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                <CheckIcon />
              </div>
              <div>
                <h3 className="text-xl font-title font-semibold text-[#2E2E2E] mb-2">
                  Sacá fotos atractivas solo con tu celular
                </h3>
                <p className="text-[#6B6B6B] font-body">
                  No necesitás equipos costosos, tu smartphone es suficiente.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-slide-up delay-200">
              <div className="w-8 h-8 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                <CheckIcon />
              </div>
              <div>
                <h3 className="text-xl font-title font-semibold text-[#2E2E2E] mb-2">
                  Mejorá tu marca personal con imágenes de calidad
                </h3>
                <p className="text-[#6B6B6B] font-body">
                  Construí una presencia visual profesional y coherente.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-slide-up delay-300">
              <div className="w-8 h-8 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                <CheckIcon />
              </div>
              <div>
                <h3 className="text-xl font-title font-semibold text-[#2E2E2E] mb-2">
                  Publicá contenido que conecte con tu audiencia
                </h3>
                <p className="text-[#6B6B6B] font-body">
                  Creá una conexión emocional a través de imágenes impactantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D]">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-title font-bold text-white mb-8">
            ¿Listo para mejorar tus fotos y tu presencia en redes?
          </h2>
          <p className="text-xl text-white mb-12 font-body">
            No dejes pasar esta oportunidad de transformar tu contenido visual y destacar en redes sociales.
          </p>
          <button className="bg-white text-[#FF6B6B] hover:bg-gray-100 font-semibold py-4 px-12 rounded-full text-xl shadow-lg transition-all duration-300 transform hover:scale-105">
            Consultá ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E2E2E] text-white py-12">
        <div className="max-w-6xl mx-auto text-center px-6">
          <p className="text-lg font-body mb-6">
            Demo creada por <span className="text-[#FF6B6B] font-semibold">DevCraft Pablo</span>
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-[#FF6B6B] transition-colors duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.965 1.404-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-12.014C24.007 5.36 18.641.001 12.017.001z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-[#FF6B6B] transition-colors duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-[#FF6B6B] transition-colors duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-[#FF6B6B] transition-colors duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455c-1.165 1.441-2.669 2.625-4.232 2.625-2.395 0-4.334-1.939-4.334-4.334 0-2.395 1.939-4.334 4.334-4.334.772 0 1.497.201 2.127.555l1.455-1.456c-1.025-.694-2.252-1.099-3.582-1.099-3.531 0-6.334 2.803-6.334 6.334 0 .602.088 1.186.25 1.743-.97.19-1.884.622-2.642 1.282.02-.124.043-.248.065-.372.088-.496.207-.971.356-1.421.443-1.337 1.242-2.532 2.398-3.426-.739.198-1.427.565-2.017 1.074C2.62 7.86 2 9.721 2 11.79c0 4.909 3.978 8.886 8.886 8.886 1.2 0 2.34-.238 3.389-.669-.693-.897-1.086-2.011-1.086-3.217 0-.625.11-1.221.314-1.754zm9.791-5.691c-.314-.894-.927-1.664-1.727-2.179-.8-.515-1.727-.771-2.677-.771-2.298 0-4.167 1.869-4.167 4.167 0 .625.138 1.217.386 1.754.939-.693 2.101-1.1 3.364-1.1 2.298 0 4.167 1.869 4.167 4.167 0 .347-.043.684-.119 1.009.771-.515 1.386-1.286 1.727-2.179.314-.894.314-1.869 0-2.763-.314-.894-.927-1.664-1.727-2.179-.8-.515-1.727-.771-2.677-.771z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App