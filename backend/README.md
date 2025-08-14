# 🚀 E-commerce Backend API

Backend completo para plataforma de e-commerce construido con Node.js, Express y MongoDB.

## 🏗️ Arquitectura

```
backend/
├── src/
│   ├── app.js                 # Configuración principal de Express
│   ├── server.js              # Servidor HTTP
│   ├── config/
│   │   └── database.js        # Configuración de MongoDB
│   ├── controllers/
│   │   ├── authController.js  # Controlador de autenticación
│   │   └── productController.js # Controlador de productos
│   ├── middleware/
│   │   ├── auth.js           # Middleware de autenticación
│   │   ├── errorHandler.js   # Manejo de errores
│   │   └── notFoundHandler.js # 404 handler
│   ├── models/
│   │   ├── User.js           # Modelo de usuario
│   │   ├── Product.js        # Modelo de producto
│   │   ├── Category.js       # Modelo de categoría
│   │   └── Order.js          # Modelo de orden
│   ├── routes/
│   │   ├── index.js          # Rutas principales
│   │   ├── auth.js           # Rutas de autenticación
│   │   ├── products.js       # Rutas de productos
│   │   ├── categories.js     # Rutas de categorías
│   │   ├── orders.js         # Rutas de órdenes
│   │   └── users.js          # Rutas de usuarios
│   └── utils/
│       ├── logger.js         # Sistema de logging
│       ├── asyncHandler.js   # Wrapper para async/await
│       └── seedData.js       # Datos de ejemplo
├── package.json
├── railway.json              # Configuración Railway
├── render.yaml               # Configuración Render
└── env.example               # Variables de entorno
```

## 🚀 Instalación

### Prerrequisitos

- Node.js 18+
- MongoDB (local o Atlas)
- npm o pnpm

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

```bash
cp env.example .env
```

Edita el archivo `.env` con tus configuraciones:

```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=tu-super-secreto-jwt
CORS_ORIGIN=http://localhost:5173
```

### 3. Poblar base de datos (opcional)

```bash
npm run seed
```

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

## 📋 Scripts Disponibles

- `npm start` - Iniciar servidor en producción
- `npm run dev` - Servidor de desarrollo con nodemon
- `npm test` - Ejecutar tests
- `npm run lint` - Linting del código
- `npm run seed` - Poblar base de datos con datos de ejemplo

## 🔐 Autenticación

### Endpoints de Autenticación

- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Login de usuario
- `GET /api/auth/me` - Obtener perfil actual
- `PUT /api/auth/updatedetails` - Actualizar detalles
- `PUT /api/auth/updatepassword` - Cambiar contraseña
- `POST /api/auth/logout` - Cerrar sesión

### Uso de JWT

```bash
# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"user123"}'

# Usar token en requests
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🛍️ API de Productos

### Endpoints Públicos

- `GET /api/products` - Listar productos (con filtros y paginación)
- `GET /api/products/:id` - Obtener producto específico
- `GET /api/products/featured` - Productos destacados
- `GET /api/products/category/:categoryId` - Productos por categoría

### Endpoints Protegidos (Admin)

- `POST /api/products` - Crear producto
- `PUT /api/products/:id` - Actualizar producto
- `DELETE /api/products/:id` - Eliminar producto

### Filtros y Búsqueda

```bash
# Búsqueda por texto
GET /api/products?search=headphones

# Filtro por categoría
GET /api/products?category=electronics

# Filtro por precio
GET /api/products?minPrice=100&maxPrice=500

# Ordenamiento
GET /api/products?sort=price&order=desc

# Paginación
GET /api/products?page=1&limit=10
```

## 📦 API de Órdenes

### Endpoints de Usuario

- `GET /api/orders` - Mis órdenes
- `GET /api/orders/:id` - Detalle de orden
- `POST /api/orders` - Crear orden
- `PUT /api/orders/:id/pay` - Marcar como pagada

### Endpoints de Admin

- `GET /api/orders/admin/all` - Todas las órdenes
- `PUT /api/orders/:id/deliver` - Marcar como entregada

## 🔧 Configuración de Seguridad

### Middleware Implementado

- **Helmet** - Headers de seguridad
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - Límite de requests
- **JWT Authentication** - Autenticación por tokens
- **Input Validation** - Validación de datos

### Variables de Seguridad

```env
JWT_SECRET=tu-super-secreto-jwt
CORS_ORIGIN=http://localhost:5173
RATE_LIMIT_MAX_REQUESTS=100
```

## 📊 Logging

El sistema utiliza Winston para logging estructurado:

```javascript
const logger = require("./utils/logger");

logger.info("Información general");
logger.error("Error crítico");
logger.warn("Advertencia");
```

Los logs se guardan en:

- `logs/combined.log` - Todos los logs
- `logs/error.log` - Solo errores

## 🧪 Testing

### Ejecutar tests

```bash
npm test
npm run test:watch
```

### Estructura de tests

```
tests/
├── auth.test.js
├── products.test.js
├── orders.test.js
└── integration.test.js
```

## 🚀 Deployment

### Railway

```bash
# Configurar variables de entorno en Railway dashboard
# Conectar repositorio de GitHub
# Deploy automático en push a main
```

### Render

```bash
# Usar render.yaml para configuración
# Variables de entorno en dashboard
# Auto-deploy desde GitHub
```

### Variables de Producción

```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
JWT_SECRET=production-secret
CORS_ORIGIN=https://tu-app.vercel.app
```

## 📝 Credenciales de Prueba

Después de ejecutar `npm run seed`:

### Admin

- Email: `admin@example.com`
- Password: `admin123`

### Usuario

- Email: `user@example.com`
- Password: `user123`

## 🔗 Documentación de API

### Swagger/OpenAPI

La documentación completa está disponible en:

- Desarrollo: `http://localhost:3000/api/docs`
- Producción: `https://tu-api.railway.app/api/docs`

### Postman Collection

Importa la colección de Postman desde:
`docs/postman-collection.json`

## 🐛 Troubleshooting

### Error de Conexión a MongoDB

```bash
# Verificar que MongoDB esté corriendo
mongod --version
mongo --eval "db.version()"
```

### Error de CORS

```bash
# Verificar CORS_ORIGIN en .env
CORS_ORIGIN=http://localhost:5173,http://localhost:3000
```

### Error de JWT

```bash
# Verificar JWT_SECRET en .env
JWT_SECRET=tu-super-secreto-jwt
```

## 📞 Soporte

- 📧 Email: anxerdev@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/ZLostTK/E-commerce-Demo-Application/issues)
- 📖 Documentación: [Wiki](https://github.com/ZLostTK/E-commerce-Demo-Application/wiki)

---

**¡Backend listo para producción! 🚀**
