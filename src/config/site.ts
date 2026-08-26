// ============================================================
// CREDIXA33 — CONFIGURACIÓN CENTRALIZADA DEL SITIO
// Edita este archivo para ajustar datos sin tocar los componentes
// ============================================================

export const SITE = {
  name: "Credixa33",
  tagline: "Préstamos personales rápidos y confiables en República Dominicana",
  description:
    "Credixa33 ofrece préstamos personales rápidos y confiables en República Dominicana. Aprobación en 24 horas, montos flexibles, pago semanal, quincenal o mensual. Solicita hoy mismo.",
  url: "https://credixa33.com",
  locale: "es-DO",

  // ── Contacto ────────────────────────────────────────────────
  whatsapp: {
    number: "18094339691",
    display: "+1 (809) 433-9691",
    defaultMessage:
      "Hola, estoy interesado en solicitar un prestamo personal con Credixa33. Pueden orientarme?",
  },
  email: "info@credixa33.com",

  // ── Horarios de atención (RD) ───────────────────────────────
  hours: {
    weekdays: "Lunes a Viernes: 8:00 AM – 6:00 PM",
    saturday: "Sábados: 9:00 AM – 1:00 PM",
    sunday: "Domingos: Cerrado",
  },

  // ── Ubicación / Cobertura ───────────────────────────────────
  coverage: "Santo Domingo, Santiago y todo el territorio nacional de RD",

  // ── Préstamos ───────────────────────────────────────────────
  loan: {
    min: 5_000,    // RD$
    max: 200_000,  // RD$
    currency: "RD$",
    currencyCode: "DOP",

    // Montos de ejemplo para el simulador
    sampleAmounts: [5_000, 10_000, 15_000, 25_000, 50_000, 100_000],

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
    title: "Credixa33 | Préstamos Personales Rápidos en República Dominicana",
    description:
      "Préstamos personales rápidos en RD. Aprobación en 24h, montos desde RD$5,000 hasta RD$200,000. Empleados, emprendedores y pensionados son bienvenidos. ¡Solicita ahora!",
    ogImage: "/og-image.jpg",
    keywords:
      "préstamos personales dominicana, crédito rápido RD, préstamos en Santo Domingo, crédito personal República Dominicana, préstamos rápidos online RD",
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
      text: "Cédula de Identidad Dominicana vigente",
      required: true,
    },
    {
      icon: "banknote",
      text: "Ingresos demostrables (empleo, negocio o pensión)",
      required: true,
    },
    {
      icon: "university",
      text: "Cuenta bancaria dominicana activa para depósito",
      required: true,
    },
    {
      icon: "phone",
      text: "Número de teléfono / WhatsApp activo",
      required: true,
    },
    {
      icon: "user-check",
      text: "Mayor de 18 años residente en República Dominicana",
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
      location: "Santo Domingo Norte",
      rating: 5,
      text: "Solicité el préstamo un lunes en la mañana y el martes ya tenía el dinero en mi cuenta. Un servicio increíblemente rápido y sin complicaciones.",
      initials: "MG",
    },
    {
      name: "Carlos Ramírez",
      location: "Santiago de los Caballeros",
      rating: 5,
      text: "Como emprendedor, necesitaba capital de trabajo urgente. Credixa33 me aprobó el crédito en pocas horas. Las cuotas son cómodas y el proceso fue transparente.",
      initials: "CR",
    },
    {
      name: "Ana Peña",
      location: "San Cristóbal",
      rating: 5,
      text: "Soy pensionada y pensé que sería difícil calificar, pero me trataron excelente. Me explicaron todo claramente y resolví mi emergencia a tiempo.",
      initials: "AP",
    },
  ],
};

export type SiteConfig = typeof SITE;
