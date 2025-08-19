// Dawn Color Palette - Inblaj Creative Theme
export const dawnColors = {
  // Night Phase
  night: {
    primary: "#0F172A", // Navy/Midnight Blue
    secondary: "#1E293B", // Slate 800
    accent: "#334155", // Slate 700
    text: "#F8FAFC", // Slate 50
    muted: "#64748B", // Slate 500
  },

  // Pre-Dawn Phase
  preDawn: {
    primary: "#4C1D95", // Purple 800
    secondary: "#5B21B6", // Violet 800
    accent: "#7C3AED", // Violet 600
    text: "#F3E8FF", // Violet 50
    muted: "#A78BFA", // Violet 400
  },

  // Sunrise Phase
  sunrise: {
    primary: "#FB923C", // Orange 400
    secondary: "#F97316", // Orange 500
    accent: "#EA580C", // Orange 600
    text: "#FFF7ED", // Orange 50
    muted: "#FDBA74", // Orange 300
  },

  // Golden Hour Phase
  golden: {
    primary: "#FACC15", // Yellow 400
    secondary: "#EAB308", // Yellow 500
    accent: "#CA8A04", // Yellow 600
    text: "#FFFBEB", // Amber 50
    muted: "#FDE047", // Yellow 300
  },

  // Daylight Phase
  daylight: {
    primary: "#F9FAFB", // Gray 50
    secondary: "#F3F4F6", // Gray 100
    accent: "#E5E7EB", // Gray 200
    text: "#111827", // Gray 900
    muted: "#6B7280", // Gray 500
  },
}

// Theme utilities
export const getThemeColors = (phase = "night") => {
  return dawnColors[phase] || dawnColors.night
}

// CSS Custom Properties Generator
export const generateCSSVariables = (phase) => {
  const colors = getThemeColors(phase)
  return {
    "--color-primary": colors.primary,
    "--color-secondary": colors.secondary,
    "--color-accent": colors.accent,
    "--color-text": colors.text,
    "--color-muted": colors.muted,
  }
}

// Animation phases configuration
export const dawnPhases = {
  night: {
    duration: 2000,
    background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
    opacity: 1,
  },
  preDawn: {
    duration: 3000,
    background: "linear-gradient(135deg, #0F172A 0%, #4C1D95 50%, #1E293B 100%)",
    opacity: 0.9,
  },
  sunrise: {
    duration: 4000,
    background: "linear-gradient(135deg, #4C1D95 0%, #FB923C 30%, #F97316 70%, #FACC15 100%)",
    opacity: 0.8,
  },
  golden: {
    duration: 3000,
    background: "linear-gradient(135deg, #FB923C 0%, #FACC15 50%, #FDE047 100%)",
    opacity: 0.6,
  },
  daylight: {
    duration: 2000,
    background: "linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)",
    opacity: 0.1,
  },
}

// Typography scale
export const typography = {
  fontFamily: {
    heading: "var(--font-space-grotesk)",
    body: "var(--font-dm-sans)",
    mono: "var(--font-mono)",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.625",
  },
}

// Spacing scale
export const spacing = {
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "6rem",
}

// Animation presets
export const animations = {
  fadeIn: "fadeIn 0.6s ease-out forwards",
  slideUp: "slideUp 0.8s ease-out forwards",
  glow: "glow 2s ease-in-out infinite alternate",
  shimmer: "shimmer 3s ease-in-out infinite",
  float: "float 6s ease-in-out infinite",
  dawn: "dawn 13s ease-in-out forwards",
}

// Breakpoints
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}
