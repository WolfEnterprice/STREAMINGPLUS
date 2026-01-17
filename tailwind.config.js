/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta profesional según especificaciones
        dark: {
          base: '#0B0F14',      // Fondo principal (70%)
          section: '#1A1F2B',   // Secciones y tarjetas
        },
        light: {
          primary: '#F5F7FA',   // Texto principal
          secondary: '#9AA4B2', // Texto secundario/detalles
        },
        action: {
          DEFAULT: '#00E676',   // Verde neón (CTA)
          hover: '#00C853',     // Hover de botones
        },
        tech: {
          DEFAULT: '#2F80ED',   // Azul tecnológico (enlaces, íconos)
        },
      },
    },
  },
  plugins: [],
};