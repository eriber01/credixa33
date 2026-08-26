// ============================================================
// CREDIXA33 — CONFIGURACIÓN CENTRALIZADA DEL SITIO
// Edita este archivo para ajustar datos sin tocar los componentes
// ============================================================

export const SITE = {
  name: "Credixa33",
  tagline: "Préstamos personales rápidos y confiables en España",
  description:
    "Credixa33 ofrece préstamos personales rápidos y confiables en España. Aprobación en 24 horas, montos flexibles, pago semanal, quincenal o mensual. Solicita hoy mismo.",
  url: "https://credixa33.com",
  locale: "es-ES",

  // ── Contacto ────────────────────────────────────────────────
  whatsapp: {
    number: "34600000000",
    display: "+34 600 000 000",
    defaultMessage:
      "Hola, estoy interesado en solicitar un préstamo personal con Credixa33. ¿Pueden orientarme?",
  },
  email: "info@credixa33.com",

  // ── Horarios de atención (España) ───────────────────────────
  hours: {
    weekdays: "Lunes a Viernes: 8:00 AM – 6:00 PM",
    saturday: "Sábados: 9:00 AM – 1:00 PM",
    sunday: "Domingos: Cerrado",
  },

  // ── Ubicación / Cobertura ───────────────────────────────────
  coverage: "Madrid, Barcelona y todo el territorio nacional en España",

  // ── Préstamos ───────────────────────────────────────────────
  loan: {
    min: 500,     // €
    max: 20_000,  // €
    currency: "€",
    currencyCode: "EUR",

    // Montos de ejemplo para el simulador
    sampleAmounts: [500, 1_000, 2_000, 5_000, 10_000, 20_000],

    // Plazos disponibles (semanas / quincenas / meses)
    paymentFrequencies: [
      { value: "semanal", label: "Semanal" },
      { value: "quincenal", label: "Quincenal" },
      { value: "mensual", label: "Mensual" },
    ],

    // Plazos de ejemplo por frecuencia
    terms: {
      semanal: [4, 8, 12, 16, 24],
      quincenal: [2, 4, 6, 8, 12],
      mensual: [1, 2, 3, 6, 12],
    },

    // Tasa de interés mensual de referencia (solo visual / estimada)
    monthlyRate: 0.08, // 8%
  },

  // ── SEO / Open Graph ────────────────────────────────────────
  seo: {
    title: "Credixa33 | Préstamos Personales Rápidos en España",
    description:
      "Préstamos personales rápidos en España. Aprobación en 24h, montos desde 500€ hasta 20.000€. Empleados, autónomos y pensionistas son bienvenidos. ¡Solicita ahora!",
    ogImage: "/og-image.jpg",
    keywords:
      "préstamos personales españa, crédito rápido españa, préstamos en madrid, crédito personal españa, préstamos rápidos online españa",
  },

  // ── Navegación ──────────────────────────────────────────────
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "¿Cómo Funciona?", href: "#como-funciona" },
    { label: "Requisitos", href: "#requisitos" },
    { label: "Calculadora", href: "#calculadora" },
    { label: "Contacto", href: "#contacto" },
  ],

  // ── Requisitos para préstamo ────────────────────────────────
  requirements: [
    {
      icon: "id-card",
      text: "DNI o NIE español vigente",
      required: true,
    },
    {
      icon: "banknote",
      text: "Ingresos demostrables (nómina, autónomo o pensión)",
      required: true,
    },
    {
      icon: "university",
      text: "Cuenta bancaria con IBAN español activa para depósito",
      required: true,
    },
    {
      icon: "phone",
      text: "Número de teléfono / WhatsApp activo",
      required: true,
    },
    {
      icon: "user-check",
      text: "Mayor de 18 años residente en España",
      required: true,
    },
    {
      icon: "file-text",
      text: "Referencias personales o laborales (según monto)",
      required: false,
    },
  ],

  // ── Testimonios ─────────────────────────────────────────────
  testimonials: [
    {
      name: "María González",
      location: "Madrid",
      rating: 5,
      text: "Solicité el préstamo un lunes en la mañana y el martes ya tenía el dinero en mi cuenta. Un servicio increíblemente rápido y sin complicaciones.",
      initials: "MG",
    },
    {
      name: "Carlos Ramírez",
      location: "Barcelona",
      rating: 5,
      text: "Como autónomo, necesitaba capital de trabajo urgente. Credixa33 me aprobó el crédito en pocas horas. Las cuotas son cómodas y el proceso fue transparente.",
      initials: "CR",
    },
    {
      name: "Ana Peña",
      location: "Valencia",
      rating: 5,
      text: "Soy pensionista y pensé que sería difícil calificar, pero me trataron excelente. Me explicaron todo claramente y resolví mi emergencia a tiempo.",
      initials: "AP",
    },
  ],
};

export type SiteConfig = typeof SITE;
