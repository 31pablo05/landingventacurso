# Landing Page - Curso de Fotografía y Filmmaker 📸🎥

Una landing page moderna y atractiva para un curso de fotografía y filmación, con animaciones profesionales y diseño responsive.

## ✨ Características Principales

### 🎨 Diseño Moderno y Profesional
- Interfaz visual atractiva con gradientes vibrantes
- Animaciones suaves usando Framer Motion
- Efectos hover y transiciones profesionales
- Diseño completamente responsive

### 📦 Componentes Modularizados
El proyecto está organizado en componentes reutilizables:

- **Hero**: Sección principal con video integrado y CTA
- **About**: Descripción del curso con estadísticas
- **Modules**: 4 módulos del programa con efectos hover
- **CourseDetails**: Información detallada y plan de estudios
- **Certificate**: Demo del certificado digital del curso
- **Benefits**: Beneficios y resultados esperados
- **CTA**: Llamada a la acción final
- **Footer**: Footer con créditos y enlaces sociales
- **Icons**: Componentes SVG reutilizables

### 🎬 Video Integrado
- Video de presentación de 14 segundos ubicado en el Hero
- Control de reproducción personalizado
- Overlay con botón de play animado

### 🏆 Certificado Demo
- Visualización completa del certificado del curso
- Diseño profesional con bordes decorativos
- Información de verificación y validación

### 🎯 Animaciones Profesionales
- Fade in/out suaves
- Slide animations (up, left, right)
- Hover effects en cards y botones
- Floating elements animados
- Pulse effects en elementos decorativos
- Scroll indicators animados

### 📱 Totalmente Responsive
- Optimizado para móviles, tablets y desktop
- Grid adaptativo
- Imágenes y videos responsive

## 🚀 Tecnologías Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool y dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Librería de animaciones
- **React Icons**: Iconos para redes sociales

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── Hero.jsx          # Sección hero con video
│   ├── About.jsx         # Sobre el curso
│   ├── Modules.jsx       # Módulos del programa
│   ├── CourseDetails.jsx # Detalles y plan de estudios
│   ├── Certificate.jsx   # Demo del certificado
│   ├── Benefits.jsx      # Beneficios del curso
│   ├── CTA.jsx          # Call to action
│   ├── Footer.jsx       # Footer con enlaces
│   └── Icons.jsx        # Iconos SVG reutilizables
├── App.jsx              # Componente principal
├── main.jsx             # Entry point
└── index.css            # Estilos globales y animaciones
public/
└── video/
    └── cursofotografia.mp4  # Video promocional
```

## 🎨 Paleta de Colores

- **Primary Red**: `#FF6B6B`
- **Secondary Yellow**: `#FFD93D`
- **Accent Pink**: `#F9C5BD`
- **Teal**: `#5F9EA0`
- **Dark Gray**: `#2E2E2E`
- **Light Gray**: `#6B6B6B`
- **Background**: `#FFF8F3`

## 🛠️ Instalación y Uso

### Prerrequisitos
- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📝 Características de Cada Sección

### 1. Hero Section
- Video promocional integrado
- Título principal con gradiente
- Botones CTA con animaciones
- Elementos flotantes decorativos
- Scroll indicator animado

### 2. About Section
- Descripción detallada del curso
- Estadísticas en cards (estudiantes, calificación, horas, etc.)
- Efectos hover en las estadísticas

### 3. Modules Section
- 4 módulos con iconos personalizados
- Cards con efectos hover y transformaciones
- Información de bonus incluido
- Animaciones escalonadas

### 4. Course Details Section
- Duración, modalidad y tipo de contenido
- Plan de estudios semanal
- Cards interactivas con animaciones
- Información de certificado incluido

### 5. Certificate Section
- Demo completo del certificado
- Diseño profesional con bordes decorativos
- Detalles de verificación
- Beneficios del certificado digital

### 6. Benefits Section
- 6 beneficios principales
- Icons animados con checkmarks
- Cards con hover effects
- Estadística de satisfacción

### 7. CTA Section
- Llamada a la acción principal
- Elementos flotantes (emojis)
- Trust indicators
- Elemento de urgencia

### 8. Footer
- Información del curso
- Enlaces rápidos
- Redes sociales con hover effects
- **Crédito al desarrollador: Pablo Proboste**
- **Enlace a portfolio: https://devcraftpablo.online/**

## 🎭 Animaciones Implementadas

### CSS Animations
- `fadeIn`: Aparición suave
- `slideUp`: Deslizamiento desde abajo
- `slideInLeft`: Entrada desde la izquierda
- `slideInRight`: Entrada desde la derecha
- `scaleIn`: Escala desde el centro
- `float`: Efecto flotante continuo
- `pulse-slow`: Pulsación suave
- `rotate`: Rotación continua
- `shimmer`: Efecto de brillo

### Framer Motion Animations
- Fade in/out con viewport detection
- Scale transformations
- Rotate animations
- Hover effects personalizados
- Stagger animations para listas
- Background animations

## 🎯 Optimizaciones

- Lazy loading de componentes
- Animaciones con viewport detection (solo cuando son visibles)
- CSS moderno con gradientes y efectos
- Componentes modularizados para fácil mantenimiento
- Código limpio y bien organizado

## 👨‍💻 Desarrollador

**Pablo Proboste**
- Portfolio: [devcraftpablo.online](https://devcraftpablo.online/)
- Full Stack Developer & Creative Designer

---

## 📄 Licencia

Este proyecto fue desarrollado como demo para portfolio.

## 🤝 Contribuciones

Si deseas mejorar el proyecto, siéntete libre de hacer un fork y enviar pull requests.

---

**Desarrollado con ❤️ por Pablo Proboste**
