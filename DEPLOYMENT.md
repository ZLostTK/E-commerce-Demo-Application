# 🚀 Guía de Deployment - Plataforma E-Commerce

Esta guía te ayudará a configurar y desplegar tu plataforma de e-commerce completa en Vercel, Netlify y Railway.

## 📋 Prerrequisitos

- Cuenta en [GitHub](https://github.com)
- Cuenta en [Vercel](https://vercel.com)
- Cuenta en [Netlify](https://netlify.com)
- Cuenta en [Railway](https://railway.app) o [Render](https://render.com)
- Cuenta en [MongoDB Atlas](https://mongodb.com/atlas)
- Cuenta en [Stripe](https://stripe.com) (opcional)

## 🔧 Configuración de GitHub Secrets

### Secrets para Vercel

```bash
VERCEL_TOKEN=tu_token_de_vercel
VERCEL_ORG_ID=tu_org_id_de_vercel
VERCEL_PROJECT_ID=tu_project_id_de_vercel
```

### Secrets para Netlify

```bash
NETLIFY_AUTH_TOKEN=tu_token_de_netlify
NETLIFY_SITE_ID=tu_site_id_de_netlify
```

### Secrets para Railway

```bash
RAILWAY_TOKEN=tu_token_de_railway
RAILWAY_SERVICE_NAME=tu_service_name_de_railway
```

### Secrets para Notificaciones

```bash
DISCORD_WEBHOOK=tu_webhook_de_discord
```

## 🌐 Configuración de Dominios

### Vercel

1. Ve a tu dashboard de Vercel
2. Importa tu repositorio de GitHub
3. Configura las variables de entorno:
   - `VITE_API_URL`: URL de tu backend
   - `VITE_STRIPE_PUBLIC_KEY`: Tu clave pública de Stripe
   - `VITE_GOOGLE_ANALYTICS_ID`: Tu ID de Google Analytics

### Netlify

1. Ve a tu dashboard de Netlify
2. Conecta tu repositorio de GitHub
3. Configura las variables de entorno en el dashboard
4. Configura el dominio personalizado si es necesario

### Railway (Backend)

1. Ve a tu dashboard de Railway
2. Crea un nuevo proyecto
3. Conecta tu repositorio de GitHub
4. Configura las variables de entorno:
   - `NODE_ENV`: production
   - `PORT`: 3000
   - `MONGODB_URI`: Tu URI de MongoDB Atlas
   - `JWT_SECRET`: Una clave secreta para JWT
   - `STRIPE_SECRET_KEY`: Tu clave secreta de Stripe
   - `CORS_ORIGIN`: https://ecommerce-demo-app.vercel.app,https://ecommerce-demo-app.netlify.app

## 🔄 Workflows de GitHub Actions

### CI/CD Pipeline (`ci-cd.yml`)

- Se ejecuta en push a `main` y `develop`
- Construye y prueba el frontend y backend
- Despliega automáticamente a Vercel, Netlify y Railway
- Incluye notificaciones de estado

### Security Scan (`security.yml`)

- Se ejecuta semanalmente y en PRs
- Escaneo de vulnerabilidades con npm audit
- Análisis de código con CodeQL
- Detección de secretos con TruffleHog
- Escaneo de seguridad con OWASP ZAP

### Performance Testing (`performance.yml`)

- Se ejecuta semanalmente
- Pruebas de rendimiento con Lighthouse
- Análisis de tamaño de bundle
- Pruebas de carga con Artillery

### Release Management (`release.yml`)

- Se ejecuta al crear tags
- Crea releases automáticos en GitHub
- Genera changelog automáticamente
- Notifica en Discord

## 📊 Monitoreo y Analytics

### Lighthouse CI

- Configurado para ejecutarse automáticamente
- Reportes de rendimiento, accesibilidad, mejores prácticas y SEO
- Umbrales configurados para alertas

### Bundle Analysis

- Análisis automático del tamaño del bundle
- Reportes disponibles en los artifacts de GitHub Actions

## 🔒 Seguridad

### Headers de Seguridad

- Configurados en Vercel y Netlify
- Protección contra XSS, clickjacking y otros ataques
- Política de referrer estricta

### Variables de Entorno

- Todas las claves sensibles están en variables de entorno
- Diferentes configuraciones para desarrollo, staging y producción

## 🚀 Comandos de Deployment

### Despliegue Manual

```bash
# Frontend
npm run build
# Subir dist/ a Vercel o Netlify

# Backend
cd backend
npm start
# Subir a Railway o Render
```

### Crear un Release

```bash
git tag v1.0.0
git push origin v1.0.0
```

## 📝 Notas Importantes

1. **Variables de Entorno**: Nunca commits claves secretas al repositorio
2. **CORS**: Configura correctamente los orígenes permitidos
3. **MongoDB**: Usa MongoDB Atlas para producción
4. **Stripe**: Usa claves de test para desarrollo
5. **Dominios**: Actualiza las URLs en los archivos de configuración

## 🆘 Troubleshooting

### Error de Build

- Verifica que todas las dependencias estén instaladas
- Revisa los logs de GitHub Actions
- Asegúrate de que las variables de entorno estén configuradas

### Error de CORS

- Verifica la configuración de CORS en el backend
- Asegúrate de que las URLs estén correctamente configuradas

### Error de Database

- Verifica la conexión a MongoDB Atlas
- Asegúrate de que la IP esté en la whitelist

## 📞 Soporte

Si tienes problemas con el deployment:

1. Revisa los logs de GitHub Actions
2. Verifica la configuración de las variables de entorno
3. Consulta la documentación de las plataformas
4. Crea un issue en el repositorio

---

**¡Feliz deployment! 🎉**
