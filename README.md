# Credixa33 — Landing Page

Landing page de alto impacto para **Credixa33**, negocio de préstamos personales en España. Construida con **Astro 5 + Tailwind CSS + TypeScript**.

## 🚀 Comandos

| Comando | Acción |
|---|---|
| `npm install` | Instala las dependencias |
| `npm run dev` | Inicia el servidor local en `http://localhost:4321` |
| `npm run build` | Genera el sitio estático en `./dist/` |
| `npm run preview` | Previsualiza el build de producción localmente |

## ⚙️ Configuración rápida

Edita **un solo archivo** para personalizar todos los datos del negocio:

```
src/config/site.ts
```

Datos editables:
- 📱 **Número de WhatsApp** (`SITE.whatsapp.number`)
- 📧 **Email de contacto** (`SITE.email`)
- 💰 **Montos min/max y opciones de préstamo** (`SITE.loan`)
- 🕐 **Horarios de atención** (`SITE.hours`)
- 📍 **Cobertura geográfica** (`SITE.coverage`)
- 🏷️ **Textos SEO** (`SITE.seo`)

## 🗂️ Estructura del proyecto

```
credixa33/
├── public/
│   └── favicon.svg
├── src/
│   ├── config/
│   │   └── site.ts           ← ⭐ EDITA AQUÍ los datos del negocio
│   ├── layouts/
│   │   └── Layout.astro      ← Base HTML + SEO + meta tags
│   ├── components/
│   │   ├── Header.astro      ← Navegación sticky glassmorphism
│   │   ├── Hero.astro        ← Sección principal de conversión
│   │   ├── Steps.astro       ← Proceso en 3 pasos
│   │   ├── Calculator.astro  ← Simulador de préstamo interactivo
│   │   ├── Requirements.astro← Requisitos mínimos
│   │   ├── Testimonials.astro← Testimonios de clientes
│   │   ├── ContactForm.astro ← Formulario → WhatsApp
│   │   ├── Footer.astro      ← Pie de página completo
│   │   └── WhatsAppButton.astro ← Botón flotante permanente
│   └── pages/
│       └── index.astro       ← Página principal (one-page)
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🎨 Paleta de colores

| Variable | Color | Uso |
|---|---|---|
| `brand-500` | `#FF7E20` | Botones CTA, badges, iconos |
| `brand-600` | `#E6690F` | Hover states |
| Fondo | `#FAFAFA` | Fondo base |
| Texto | `#111827` | Títulos |
| Texto body | `#4B5563` | Párrafos |

## 🌐 Despliegue recomendado

- **Vercel**: `vercel deploy`
- **Netlify**: Arrastra la carpeta `dist/` al dashboard
- **GitHub Pages**: Con la integración `@astrojs/github-pages`

## 📱 WhatsApp Integration

Todos los CTAs, el formulario y el botón flotante generan mensajes pre-armados que se envían directamente al número configurado en `site.ts`. No se requiere backend.

## ✅ Características técnicas

- ⚡ Build estático ultrarrápido (Astro 5)
- 📱 100% responsivo (mobile-first)
- ♿ Accesible (ARIA labels, roles semánticos, skip link)
- 🔍 SEO optimizado (meta tags, OG, Twitter Card, JSON-LD)
- 🎯 Zero JS innecesario (solo el mínimo para interactividad)
- 🔒 Sin dependencias de backend para el formulario
