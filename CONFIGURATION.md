# 🔧 Configuración de Variables de Entorno

Este documento explica cómo configurar todas las variables de entorno para el proyecto completo de E-Commerce.

## 📁 Estructura de Archivos

```
Complete E-Commerce Platform/
├── backend/
│   ├── .env                    # Variables del backend
│   └── env.example            # Ejemplo de variables del backend
├── .env                       # Variables del frontend
└── env.example               # Ejemplo de variables del frontend
```

## 🚀 Backend (.env)

Crea un archivo `.env` en la carpeta `backend/` con las siguientes variables:

```bash
# Server Configuration
NODE_ENV=development
PORT=3000

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/ecommerce

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=30d

# CORS Configuration
CORS_ORIGIN=http://localhost:5173,http://localhost:3000

# Logging
LOG_LEVEL=info

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Stripe Configuration (Optional)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Pexels API Configuration (Optional)
PEXELS_API_KEY=your_pexels_api_key_here

# File Upload (Optional)
UPLOAD_PATH=uploads
MAX_FILE_SIZE=5242880

# Security
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 🎨 Frontend (.env)

Crea un archivo `.env` en la carpeta raíz del proyecto con las siguientes variables:

```bash
# API Configuration
VITE_API_URL=http://localhost:3000/api

# App Configuration
VITE_APP_NAME=Anon E-Commerce
VITE_APP_VERSION=1.0.0

# External Services (Optional)
VITE_PEXELS_API_KEY=your_pexels_api_key_here

# Analytics (Optional)
VITE_GOOGLE_ANALYTICS_ID=your_ga_id_here

# Payment (Optional)
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key

# Social Media (Optional)
VITE_FACEBOOK_APP_ID=your_facebook_app_id
VITE_TWITTER_HANDLE=@anonecommerce

# Contact Information
VITE_CONTACT_EMAIL=info@anon.com
VITE_CONTACT_PHONE=+1 (555) 123-4567
VITE_CONTACT_ADDRESS=123 Fashion Street, New York, NY 10001

# Business Information
VITE_BUSINESS_NAME=Anon E-Commerce
VITE_FREE_SHIPPING_THRESHOLD=55
VITE_CURRENCY=USD
VITE_CURRENCY_SYMBOL=$
```

## 🔑 Servicios Opcionales

### 📧 Email (SMTP)

Para habilitar el envío de emails:

1. Configura `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
2. Usa Gmail App Password si usas Gmail

### 💳 Stripe (Pagos)

Para habilitar pagos con Stripe:

1. Configura `STRIPE_SECRET_KEY` en el backend
2. Configura `VITE_STRIPE_PUBLIC_KEY` en el frontend
3. Configura `STRIPE_WEBHOOK_SECRET` para webhooks

### 🖼️ Pexels (Imágenes)

Para obtener imágenes automáticas de Pexels:

1. Obtén una API key en [pexels.com](https://pexels.com/api/)
2. Configura `PEXELS_API_KEY` en ambos archivos

### 📊 Google Analytics

Para habilitar analytics:

1. Configura `VITE_GOOGLE_ANALYTICS_ID` con tu ID de GA

## 🏃‍♂️ Cómo Probar

### 1. Verificar Configuración del Backend

```bash
cd backend
npm run dev
```

Luego visita: `http://localhost:3000/health`

### 2. Verificar Configuración del Frontend

```bash
npm run dev
```

Luego visita: `http://localhost:5173`

### 3. Verificar API de Configuración

```bash
curl http://localhost:3000/api/config/public
```

## 🔧 Configuración Automática

El sistema detecta automáticamente qué servicios están habilitados basándose en las variables de entorno configuradas:

- ✅ **Email**: Si `SMTP_USER` está configurado
- ✅ **Stripe**: Si `STRIPE_SECRET_KEY` está configurado
- ✅ **Pexels**: Si `PEXELS_API_KEY` está configurado
- ✅ **Analytics**: Si `VITE_GOOGLE_ANALYTICS_ID` está configurado

## 🚨 Variables Críticas

**Obligatorias para funcionamiento básico:**

- `MONGODB_URI` (Backend)
- `JWT_SECRET` (Backend)
- `VITE_API_URL` (Frontend)

**Opcionales pero recomendadas:**

- `PEXELS_API_KEY` (Para imágenes reales)
- `SMTP_*` (Para emails)
- `STRIPE_*` (Para pagos)

## 🔒 Seguridad

- **Nunca** subas los archivos `.env` al repositorio
- Usa valores seguros para `JWT_SECRET` en producción
- Cambia todas las claves por defecto en producción
- Usa variables de entorno diferentes para desarrollo y producción

## 📝 Notas

- El frontend usa el prefijo `VITE_` para las variables de entorno
- El backend usa `dotenv` para cargar las variables
- Todas las configuraciones se centralizan en `src/config/` (frontend) y `src/config/` (backend)
- Los valores por defecto están definidos en los archivos de configuración
