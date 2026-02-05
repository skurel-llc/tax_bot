/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          50: '#f6f8fa',
          100: '#e9edf2',
          200: '#d4dce6',
          300: '#b2c1d2',
          400: '#8a9fb9',
          500: '#33455D', // Primary brand color
          600: '#2d3e53',
          700: '#253347',
          800: '#1d293c',
          900: '#162033',
        },
        // Secondary/Turquoise
        secondary: {
          50: '#f0fdfb',
          100: '#ccfbf3',
          200: '#99f6e8',
          300: '#5eeadc',
          400: '#4ECDC4', // Secondary brand color
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Accent/Coral Red
        accent: {
          50: '#fff2f2',
          100: '#ffe3e3',
          200: '#ffc9c9',
          300: '#ffa1a1',
          400: '#ff7b7b',
          500: '#FF6B6B', // Accent brand color
          600: '#f05252',
          700: '#c53030',
          800: '#9b2c2c',
          900: '#742a2a',
        },
        // Success Green
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Warning Orange
        warning: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Custom colors from your CSS variables
        custom: {
          'background-light': '#f6f7f7',
          'text-primary': '#121417', // From HTML, not CSS variable
          'text-secondary': '#66717f', // From HTML, not CSS variable
          'border-light': '#ebedef',
          'dark-bg': '#1c2126',
          'dark-border': '#252a30',
        },
        // Backgrounds - keep these for backward compatibility
        background: {
          light: '#f6f7f7',
          dark: '#16191c',
          card: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.1' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1' }],
        'display-lg': ['3rem', { lineHeight: '1.2' }],
        'display-md': ['2.25rem', { lineHeight: '1.3' }],
        'display-sm': ['1.875rem', { lineHeight: '1.4' }],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'hard': '0 16px 48px rgba(0, 0, 0, 0.16)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #33455D 0%, #4ECDC4 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #4ECDC4 0%, #FF6B6B 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1d293c 0%, #33455D 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}