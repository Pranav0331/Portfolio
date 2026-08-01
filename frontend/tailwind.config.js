/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        nova: {
          bg: '#fafafa',
          'bg-dark': '#09090b',
          fg: '#18181b',
          'fg-dark': '#fafafa',
          muted: '#71717a',
          'muted-dark': '#a1a1aa',
          border: '#e4e4e7',
          'border-dark': '#27272a',
          surface: '#f4f4f5',
          'surface-dark': '#18181b',
          accent: '#2563eb',
          'accent-hover': '#1d4ed8',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03)',
        nav: '0 1px 0 rgba(0, 0, 0, 0.05)',
        glow: '0 0 40px rgba(37, 99, 235, 0.18), 0 0 80px rgba(59, 130, 246, 0.1)',
        'glow-sm': '0 0 24px rgba(37, 99, 235, 0.15)',
      },
      letterSpacing: {
        tight: '-0.025em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.15', transform: 'scale(1)' },
          '50%': { opacity: '0.25', transform: 'scale(1.04)' },
        },
        'orb-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.08)' },
          '66%': { transform: 'translate(-30px, 25px) scale(0.92)' },
        },
        'grid-shift': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'orb-drift': 'orb-drift 22s ease-in-out infinite',
        'orb-drift-slow': 'orb-drift 30s ease-in-out infinite reverse',
        'grid-shift': 'grid-shift 20s linear infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
};
