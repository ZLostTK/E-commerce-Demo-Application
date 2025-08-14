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
# MongoDB: https://www.mongodb.com/cloud/atlas/register
MONGODB_URI=mongodb://localhost:27017/ecommerce

# JWT Configuration
# Generar JWT Secret: https://generate-secret.vercel.app/32
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=30d

# CORS Configuration
CORS_ORIGIN=http://localhost:5173,http://localhost:3000

# Logging
LOG_LEVEL=info

# Email Configuration (Optional)
# Gmail App Password: https://myaccount.google.com/apppasswords
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Stripe Configuration (Optional)
# Stripe Dashboard: https://dashboard.stripe.com/apikeys
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Pexels API Configuration (Optional)
# Pexels API: https://www.pexels.com/api/
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

# Demo Configuration
VITE_DEMO_MODE=false
VITE_FALLBACK_API=https://ecommerce-demo-backend.railway.app/api

# External Services (Optional)
# Pexels API: https://www.pexels.com/api/
VITE_PEXELS_API_KEY=your_pexels_api_key_here

# Analytics (Optional)
# Google Analytics: https://analytics.google.com/
VITE_GOOGLE_ANALYTICS_ID=your_ga_id_here

# Payment (Optional)
# Stripe Dashboard: https://dashboard.stripe.com/apikeys
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key

# Social Media (Optional)
# Facebook Developers: https://developers.facebook.com/
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

## 🎭 Modo Demo

El frontend incluye un **modo demo** que se activa automáticamente cuando:

1. **El backend no está disponible** (fallback automático)
2. **Se configura `VITE_DEMO_MODE=true`** (modo demo forzado)

### Características del Modo Demo:

- ✅ **Datos simulados realistas** con productos de ejemplo
- ✅ **Funcionalidad completa** de navegación y búsqueda
- ✅ **Indicador visual** que muestra el estado del backend
- ✅ **Fallback automático** si el backend se desconecta
- ✅ **Experiencia de usuario fluida** sin interrupciones

### Variables de Demo:

```bash
# Activar modo demo manualmente
VITE_DEMO_MODE=true

# URL de fallback para el backend
VITE_FALLBACK_API=https://ecommerce-demo-backend.railway.app/api
```

### Indicador de Demo:

El frontend muestra un indicador en la esquina superior derecha que indica:

- 🟡 **Demo Mode** - Cuando está usando datos simulados
- 🟢 **Backend Online** - Cuando el backend está disponible
- 🔴 **Backend Offline** - Cuando el backend no está disponible

## 🔑 Servicios Opcionales - URLs de Configuración

### 📧 Email (SMTP)

Para habilitar el envío de emails:

1. **Gmail App Password**: https://myaccount.google.com/apppasswords

   - Ve a tu cuenta de Google
   - Seguridad > Verificación en 2 pasos > Contraseñas de aplicación
   - Genera una nueva contraseña para la aplicación

2. Configura las variables:

   ```bash
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=tu-email@gmail.com
   SMTP_PASS=tu-app-password
   ```

### 💳 Stripe (Pagos)

Para habilitar pagos con Stripe:

1. **Stripe Dashboard**: https://dashboard.stripe.com/apikeys

   - Crea una cuenta en Stripe
   - Ve a Developers > API keys
   - Copia las claves pública y secreta

2. Configura las variables:

   ```bash
   # Backend
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...

   # Frontend
   VITE_STRIPE_PUBLIC_KEY=pk_test_...
   ```

### 🖼️ Pexels (Imágenes)

Para obtener imágenes automáticas de Pexels:

1. **Pexels API**: https://www.pexels.com/api/

   - Regístrate en Pexels
   - Ve a tu perfil > API
   - Genera tu API key

2. Configura las variables:

   ```bash
   # Backend
   PEXELS_API_KEY=tu_pexels_api_key

   # Frontend
   VITE_PEXELS_API_KEY=tu_pexels_api_key
   ```

### 📊 Google Analytics

Para habilitar analytics:

1. **Google Analytics**: https://analytics.google.com/

   - Crea una cuenta de Google Analytics
   - Crea una nueva propiedad
   - Copia el ID de medición (G-XXXXXXXXXX)

2. Configura la variable:

   ```bash
   VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```

### 📱 Facebook (Social Media)

Para integración con Facebook:

1. **Facebook Developers**: https://developers.facebook.com/

   - Crea una aplicación de Facebook
   - Obtén el App ID

2. Configura la variable:

   ```bash
   VITE_FACEBOOK_APP_ID=tu_facebook_app_id
   ```

### 🔐 JWT Secret

Para generar un JWT secret seguro:

1. **Generador de Secretos**: https://generate-secret.vercel.app/32

   - Genera un secreto de 32 caracteres
   - Úsalo como JWT_SECRET

2. Configura la variable:

   ```bash
   JWT_SECRET=tu_jwt_secret_generado
   ```

### 🗄️ MongoDB

Para base de datos en la nube:

1. **MongoDB Atlas**: https://www.mongodb.com/cloud/atlas/register

   - Crea una cuenta gratuita
   - Crea un cluster
   - Obtén la URI de conexión

2. Configura la variable:

   ```bash
   MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/ecommerce
   ```

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

### 4. Probar Modo Demo

```bash
# Activar modo demo
VITE_DEMO_MODE=true npm run dev

# O detener el backend y ver el fallback automático
```

## 🔧 Configuración Automática

El sistema detecta automáticamente qué servicios están habilitados basándose en las variables de entorno configuradas:

- ✅ **Email**: Si `SMTP_USER` está configurado
- ✅ **Stripe**: Si `STRIPE_SECRET_KEY` está configurado
- ✅ **Pexels**: Si `PEXELS_API_KEY` está configurado
- ✅ **Analytics**: Si `VITE_GOOGLE_ANALYTICS_ID` está configurado
- ✅ **Demo Mode**: Si `VITE_DEMO_MODE=true` o backend no disponible

## 🚨 Variables Críticas

**Obligatorias para funcionamiento básico:**

- `MONGODB_URI` (Backend) - https://www.mongodb.com/cloud/atlas/register
- `JWT_SECRET` (Backend) - https://generate-secret.vercel.app/32
- `VITE_API_URL` (Frontend)

**Opcionales pero recomendadas:**

- `PEXELS_API_KEY` (Para imágenes reales) - https://www.pexels.com/api/
- `SMTP_*` (Para emails) - https://myaccount.google.com/apppasswords
- `STRIPE_*` (Para pagos) - https://dashboard.stripe.com/apikeys

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
- El modo demo proporciona una experiencia completa sin backend

## 🚀 Comandos para Crear los Archivos .env

```bash
# Crear .env del backend
cp backend/env.example backend/.env

# Crear .env del frontend
cp env.example .env
```

Luego edita los archivos `.env` con tus valores reales.

## 🎭 Escenarios de Uso del Modo Demo

### 1. **Desarrollo Local**

```bash
# Sin backend - solo frontend
VITE_DEMO_MODE=true npm run dev
```

### 2. **Presentación/Demo**

```bash
# Mostrar funcionalidad sin configurar backend
VITE_DEMO_MODE=true npm run build
```

### 3. **Fallback Automático**

```bash
# El frontend detecta automáticamente si el backend está caído
npm run dev
# Si el backend no responde, cambia automáticamente a demo
```

### 4. **Testing**

```bash
# Probar la aplicación con datos consistentes
VITE_DEMO_MODE=true npm run test
```
