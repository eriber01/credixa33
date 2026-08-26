// ============================================================
// CREDIXA33 — CONFIGURACIÓN CENTRALIZADA DEL SITIO
// Edita este archivo para ajustar datos sin tocar los componentes
// ============================================================

export const SITE = {
  name: "Credixa33",
  tagline: "Soluciones Financieras a tu alcance | Préstamos personales en España",
  description:
    "Credixa33 ofrece préstamos personales rápidos y confiables en España. Soluciones Financieras a tu alcance. Aprobación en 24 horas, montos flexibles y condiciones transparentes. Solicita hoy mismo.",
  url: "https://credixa33.com",
  locale: "es-ES",

  // ── Contacto ────────────────────────────────────────────────
  whatsapp: {
    number: "447446964025",
    display: "+44 7446 964025",
    defaultMessage:
      "Hola, estoy interesado en solicitar un préstamo personal con Credixa33. ¿Pueden orientarme?",
  },
  email: "credixacreditos@gmail.com",

  // ── Horarios de atención (España) ───────────────────────────
  hours: {
    weekdays: "Lunes a Viernes: 12:00 PM – 9:00 PM",
  },

  // ── Ubicación / Dirección ───────────────────────────────────
  address: "Gran Vía, 32, 28013 Madrid, España",
  coverage: "Gran Vía, 32, 28013 Madrid, España",

  // ── Préstamos ───────────────────────────────────────────────
  loan: {
    min: 1_000,     // €
    max: 100_000,   // €
    currency: "€",
    currencyCode: "EUR",
    paymentFrequency: "Semanal",

    // Montos de ejemplo para el simulador
    sampleAmounts: [1_000, 5_000, 10_000, 25_000, 50_000, 100_000],

    // Plazos disponibles (en semanas)
    terms: {
      semanal: [4, 8, 12, 24, 36, 52, 78, 104],
    },

    // Tasa de interés mensual de referencia (solo visual / estimada)
    monthlyRate: 0.08, // 8%
  },

  // ── SEO / Open Graph ────────────────────────────────────────
  seo: {
    title: "Credixa33 | Préstamos Personales Rápidos en España",
    description:
      "Préstamos personales rápidos en España con pagos semanales. Aprobación en 24h, montos desde 1.000€ hasta 100.000€. ¡Solicita ahora!",
    ogImage: "/og-image.jpg",
    keywords:
      "préstamos personales españa, crédito rápido españa, préstamos en madrid, crédito personal españa, pagos semanales",
  },

  // ── Navegación ──────────────────────────────────────────────
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "¿Cómo Funciona?", href: "#como-funciona" },
    { label: "Calculadora", href: "#calculadora" },
    { label: "Requisitos", href: "#requisitos" },
    { label: "Contacto", href: "#contacto" },
  ],

  // ── Requisitos para préstamo ────────────────────────────────
  requirements: [
    {
      icon: "id-card",
      text: "DNI de ambos lados (vigente)",
      required: true,
    },
    {
      icon: "banknote",
      text: "Justificante de ingresos (nómina, autónomo o pensión)",
      required: true,
    },
  ],

  // ── Testimonios ─────────────────────────────────────────────
  testimonials: [
    {
      name: "Alejandro Morales",
      location: "Madrid",
      rating: 5,
      text: "Me sorprende con la rapidez con la que aprueban el préstamo, sin muchos contratiempos y también con gran eficacia.",
      initials: "AM",
    },
    {
      name: "Lucía Fernández",
      location: "Barcelona",
      rating: 5,
      text: "Personal bien eficaz y capacitado. Me desembolsaron en menos de 24 horas mi préstamo.",
      initials: "LF",
    },
    {
      name: "Javier Serrano",
      location: "Valencia",
      rating: 5,
      text: "He recibido oferta de préstamos personales sin muchas molestias y realmente aprecio la rapidez del servicio.",
      initials: "JS",
    },
  ],
};

export type SiteConfig = typeof SITE;
