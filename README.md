# 🛒 Complete E-Commerce Platform

Una plataforma de e-commerce completa y moderna construida con React, TypeScript, Node.js y Express. Incluye funcionalidades avanzadas como carrito de compras, autenticación, panel de administración y integración con pasarelas de pago.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-18-339933?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-5.1.0-000000?style=for-the-badge&logo=express)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-06B6D4?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite)

## ✨ Características

### 🛍️ Frontend (React + TypeScript)

- **Interfaz moderna** con Tailwind CSS y componentes reutilizables
- **Navegación fluida** con React Router DOM
- **Estado global** con Context API para el carrito de compras
- **Responsive design** optimizado para móviles y desktop
- **Páginas dinámicas** para productos, carrito, checkout y administración

### 🔧 Backend (Node.js + Express)

- **API RESTful** con Express.js
- **Base de datos** MongoDB con Mongoose
- **Autenticación JWT** segura
- **CORS configurado** para múltiples orígenes
- **Middleware de seguridad** implementado

### 🚀 Funcionalidades Principales

- 📱 **Catálogo de productos** con filtros y búsqueda
- 🛒 **Carrito de compras** persistente
- 👤 **Sistema de usuarios** con registro y login
- 💳 **Proceso de checkout** integrado
- 🔐 **Panel de administración** para gestión de productos
- 📊 **Dashboard** con estadísticas de ventas
- 🔔 **Notificaciones** en tiempo real

## 🏗️ Arquitectura del Proyecto

```
Complete E-Commerce Platform/
├── 📁 src/                    # Frontend React
│   ├── 📁 components/         # Componentes reutilizables
│   ├── 📁 pages/             # Páginas de la aplicación
│   ├── 📁 context/           # Context API para estado global
│   ├── 📁 data/              # Datos estáticos y tipos
│   └── 📁 types/             # Definiciones de TypeScript
├── 📁 backend/               # API Node.js
│   ├── 📄 server.js          # Servidor Express
│   └── 📄 package.json       # Dependencias del backend
├── 📁 .github/workflows/     # CI/CD con GitHub Actions
├── 📄 vercel.json           # Configuración Vercel
├── 📄 netlify.toml          # Configuración Netlify
└── 📄 package.json          # Dependencias del frontend
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+
- npm o pnpm
- MongoDB (local o Atlas)

### 1. Clonar el Repositorio

```bash
git clone https://github.com/ZLostTK/E-commerce-Demo-Application.git
cd E-commerce-Demo-Application
```

### 2. Instalar Dependencias Frontend

```bash
npm install
# o
pnpm install
```

### 3. Instalar Dependencias Backend

```bash
cd backend
npm install
cd ..
```

### 4. Configurar Variables de Entorno

#### Frontend (.env)

```env
VITE_API_URL=http://localhost:3000
VITE_STRIPE_PUBLIC_KEY=pk_test_tu_clave_publica
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

#### Backend (.env)

```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=tu_super_secreto_jwt
STRIPE_SECRET_KEY=sk_test_tu_clave_secreta
CORS_ORIGIN=http://localhost:5173
```

### 5. Ejecutar en Desarrollo

#### Terminal 1 - Backend

```bash
cd backend
npm run dev
```

#### Terminal 2 - Frontend

```bash
npm run dev
```

La aplicación estará disponible en:

- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## 🛠️ Scripts Disponibles

### Frontend

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Linting con ESLint
```

### Backend

```bash
npm start            # Iniciar servidor
npm run dev          # Servidor con nodemon
```

## 🌐 Deployment

### Plataformas Soportadas

- **Frontend**: Vercel, Netlify
- **Backend**: Railway, Render, Heroku
- **Base de Datos**: MongoDB Atlas

### CI/CD Automático

El proyecto incluye workflows de GitHub Actions para:

- ✅ Build y testing automático
- 🔒 Escaneo de seguridad
- 📊 Pruebas de rendimiento
- 🚀 Deployment automático
- 🏷️ Gestión de releases

Consulta [DEPLOYMENT.md](./DEPLOYMENT.md) para instrucciones detalladas.

## 📱 Páginas y Funcionalidades

### 🏠 Página Principal

- Catálogo de productos destacados
- Navegación intuitiva
- Diseño responsive

### 🛍️ Catálogo de Productos

- Grid de productos con filtros
- Búsqueda en tiempo real
- Paginación optimizada

### 📦 Detalle de Producto

- Imágenes con zoom
- Descripción completa
- Selector de cantidad
- Botón de agregar al carrito

### 🛒 Carrito de Compras

- Lista de productos seleccionados
- Cálculo automático de totales
- Opción de modificar cantidades
- Persistencia de datos

### 💳 Checkout

- Formulario de datos personales
- Integración con pasarelas de pago
- Validación de campos
- Confirmación de pedido

### 👤 Panel de Usuario

- Historial de pedidos
- Datos personales
- Gestión de direcciones

### 🔐 Panel de Administración

- Gestión de productos (CRUD)
- Dashboard de ventas
- Gestión de usuarios
- Estadísticas en tiempo real

## 🎨 Tecnologías Utilizadas

### Frontend

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework CSS
- **React Router DOM** - Enrutamiento
- **Lucide React** - Iconos
- **Context API** - Estado global

### Backend

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticación
- **CORS** - Cross-origin resource sharing

### Herramientas de Desarrollo

- **ESLint** - Linting de código
- **PostCSS** - Procesamiento CSS
- **Autoprefixer** - Prefijos CSS automáticos

## 🔒 Seguridad

- ✅ Autenticación JWT segura
- ✅ Validación de datos en frontend y backend
- ✅ Headers de seguridad configurados
- ✅ CORS configurado correctamente
- ✅ Variables de entorno para datos sensibles
- ✅ Escaneo automático de vulnerabilidades

## 📊 Performance

- ⚡ Build optimizado con Vite
- 🎯 Code splitting automático
- 🖼️ Optimización de imágenes
- 📦 Bundle analysis incluido
- 🚀 Lighthouse CI configurado
- 📈 Métricas de rendimiento automáticas

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Contribución

- Usa TypeScript para todo el código nuevo
- Sigue las convenciones de ESLint
- Añade tests para nuevas funcionalidades
- Documenta cambios importantes

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- [React](https://reactjs.org/) - Biblioteca de UI
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Express](https://expressjs.com/) - Framework web
- [MongoDB](https://mongodb.com/) - Base de datos

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda:

- 📧 Email: anxerdev@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/ZLostTK/E-commerce-Demo-Application/issues)
- 📖 Documentación: [Wiki del proyecto](https://github.com/ZLostTK/E-commerce-Demo-Application/wiki)

---

<div align="center">

**⭐ Si este proyecto te ayuda, ¡dale una estrella! ⭐**

[![GitHub stars](https://img.shields.io/github/stars/ZLostTK/E-commerce-Demo-Application?style=social)](https://github.com/ZLostTK/E-commerce-Demo-Application/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ZLostTK/E-commerce-Demo-Application?style=social)](https://github.com/ZLostTK/E-commerce-Demo-Application/network)
[![GitHub issues](https://img.shields.io/github/issues/ZLostTK/E-commerce-Demo-Application)](https://github.com/ZLostTK/E-commerce-Demo-Application/issues)

</div>
