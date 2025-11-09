# 🍽️ FoodSpot - Descubre Sabores

Una Progressive Web App (PWA) móvil para descubrir los mejores lugares de comida cerca de ti, con recomendaciones auténticas de personas reales.

## ✨ Características

- 📱 **Diseño Mobile-First**: Optimizado exclusivamente para dispositivos móviles
- 🗺️ **Geolocalización**: Encuentra lugares cerca de tu ubicación actual
- ⭐ **Sistema de Valoraciones**: Puntuaciones y comentarios de la comunidad
- 📋 **Menús Digitales**: Visualiza los menús de cada restaurante
- 💾 **PWA**: Instalable como app nativa en tu teléfono
- 🎨 **UI Moderna**: Interfaz intuitiva con animaciones suaves
- 🌙 **Modo Oscuro**: Soporte automático para tema claro/oscuro

## 🎨 Paleta de Colores (Psicología del Color)

Colores cálidos diseñados para estimular el apetito y crear una experiencia alegre:

- **Primario**: Naranja Energético (#FF6B35) - Estimula el apetito
- **Secundario**: Amarillo Dorado (#FFD93D) - Alegría y optimismo
- **Acento**: Rojo Vibrante (#FF4757) - Pasión por la comida
- **Fondo**: Blanco Puro (#FFFFFF) - Limpieza y frescura
- **Texto**: Azul Oscuro Suave (#2C3E50) - Legibilidad sin ser agresivo

## 🚀 Inicio Rápido

Instala las dependencias:

```bash
npm install
```

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador móvil o usa las herramientas de desarrollador en modo móvil.

## 📱 Instalación como PWA

1. Abre la app en tu navegador móvil
2. Toca el menú del navegador
3. Selecciona "Agregar a pantalla de inicio"
4. ¡Listo! Ahora tienes FoodSpot como app nativa

## 🛠️ Tecnologías

- **Next.js 14.2.33** - Framework React
- **React 18** - Biblioteca UI
- **Lucide React** - Iconos
- **CSS Modules** - Estilos
- **Inter Font** - Tipografía

## 📂 Estructura del Proyecto

```
fooddiscovery/
├── app/
│   ├── components/
│   │   └── Logo.js          # Componente del logo
│   ├── globals.css          # Estilos globales
│   ├── layout.js            # Layout principal
│   ├── page.js              # Página principal (Dashboard)
│   └── page.module.css      # Estilos del dashboard
├── public/
│   └── manifest.json        # Configuración PWA
└── package.json
```

## 🎯 Próximas Funcionalidades

- [ ] Integración con API de mapas
- [ ] Sistema de autenticación
- [ ] Subida de fotos de platos
- [ ] Sistema de reservas
- [ ] Notificaciones push
- [ ] Modo offline

## 📄 Licencia

Este proyecto es de código abierto.
